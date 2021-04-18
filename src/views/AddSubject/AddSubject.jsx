import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import { FiArrowRight } from 'react-icons/fi';

import { getDepartments } from '../../api/department';
import { getTermsByDepartment } from '../../api/term';
import { getFaculties } from '../../api/faculty';
import { createSubject } from '../../api/subject';
import Spinner from '../../components/Spinner/Spinner';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import PageTitle from '../../components/PageTitle/PageTitle';
import Selector from '../../components/Selector/Selector';

function AddSubject() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [department, setDepartment] = useState('');
  const [term, setTerm] = useState('');
  const [faculties, setFaculties] = useState([]);
  const [selectedFaculties, setSelectedFaculties] = useState([]);

  useEffect(() => {
    getFaculties('/faculty')
      .then((facs) => {
        setFaculties(facs);
      })
      .catch((err) => toast.error(err.msg));
  }, []);

  const { data: departments, error } = useSWR('/department', getDepartments, {
    revalidateOnFocus: false,
    onError: (err) => toast.error(err.msg),
  });

  const { data: terms, error: termError } = useSWR(department ? `/term/department/${department}` : null, getTermsByDepartment, {
    revalidateOnFocus: false,
    onError: (err) => toast.error(err.msg),
  });

  const selectFaculty = (faculty) => {
    setSelectedFaculties((prevSelectedFaculties) => [...prevSelectedFaculties, faculty]);
    setFaculties((prevFaculties) => prevFaculties.filter((fac) => fac.id !== faculty.id));
  };

  const removeFaculty = (faculty) => {
    setSelectedFaculties((prevFaculties) => prevFaculties.filter((fac) => fac.id !== faculty.id));
    setFaculties((prevFaculties) => [...prevFaculties, faculty]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSubject({
        name, code, term, faculties: selectedFaculties,
      });
      toast.success('Successfully added subject');
    } catch (err) {
      toast.error(err.msg);
    }
  };

  return (
    <>{ ((!departments && !error) || (department && !error && !termError && !terms))
      ? (
        <div className="flex flex-col space-y-3 justify-center items-center h-screen">
          <div>
            <Spinner />
          </div>
          <div className="font-medium">
            Please wait...
          </div>
        </div>
      )
      : (
        <div className="flex flex-col h-full justify-center items-center space-y-3">
          <PageTitle>Add New Subject</PageTitle>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3 items-center w-11/12 sm:w-1/2 lg:w-4/12">
            <Input
              name="subjectName"
              type="text"
              value={name}
              placeholder="Subject Name"
              handleChange={(e) => setName(e.target.value)}
            />
            <Input
              name="subjectCode"
              type="text"
              value={code}
              placeholder="Subject Code"
              handleChange={(e) => setCode(e.target.value)}
            />
            <div className="flex flex-row space-x-3 items-center justify-center w-full">
              <select
                name="department"
                value={department}
                className="w-1/2"
                onChange={(e) => setDepartment(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Department
                </option>
                { departments && departments.map(((depart) => (
                  <option key={depart.id} value={depart.id}>{depart.name}</option>
                ))) }
              </select>
              <select
                name="term"
                value={term}
                className="w-1/2"
                onChange={(e) => setTerm(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Term
                </option>
                { terms && terms.map(((crrTerm) => (
                  <option key={crrTerm.id} value={crrTerm.id}>Term {crrTerm.name}</option>
                ))) }
              </select>
            </div>
            <Selector
              addLabel="Faculty"
              items={faculties}
              selectedItems={selectedFaculties}
              selectItem={selectFaculty}
              removeItem={removeFaculty}
            />
            <Button
              type="submit"
              icon={<FiArrowRight />}
            >
              Add
            </Button>
          </form>
        </div>
      )}
    </>
  );
}

export default AddSubject;
