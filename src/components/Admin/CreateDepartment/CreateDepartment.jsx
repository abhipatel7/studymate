import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { toast } from 'react-toastify';
import PageTitle from '../../PageTitle/PageTitle';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import Selector from '../../Selector/Selector';
import { createDepartment } from '../../../api/department';

const CreateDepartment = () => {
  const [name, setName] = useState('');
  const [terms, setTerms] = useState('');
  const [fees, setFees] = useState('');
  const [code, setCode] = useState('');
  const [faculties, setFaculties] = useState([]);
  const [selectedFaculties, setSelectedFaculties] = useState([]);

  // TODO - Get faculties from api
  useEffect(() => {
    setFaculties([
      {
        facultyId: 1,
        name: 'Anirudh',
      }, {
        facultyId: 2,
        name: 'Vidhi',
      }, {
        facultyId: 3,
        name: 'Abhishek',
      }, {
        facultyId: 4,
        name: 'Pranav',
      },
    ]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === '' || terms <= 0 || fees <= 0 || code.trim() === '') {
      toast.error('Invalid input.');
    } else {
      try {
        // TODO - Api call
        await createDepartment(name, code, faculties, terms, fees);
        toast.success('Department created successfully');
      } catch (err) {
        toast.error(err.msg);
      }
    }
  };

  const selectFaculty = (faculty) => {
    setSelectedFaculties((prevSelectedFaculties) => [...prevSelectedFaculties, faculty]);
    setFaculties((prevFaculties) => prevFaculties.filter((fac) => fac.id !== faculty.id));
  };

  const removeFaculty = (faculty) => {
    setSelectedFaculties((prevFaculties) => prevFaculties.filter((fac) => fac.id !== faculty.id));
    setFaculties((prevFaculties) => [...prevFaculties, faculty]);
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleTermChange = (e) => setTerms(e.target.value);
  const handleFeeChange = (e) => setFees(e.target.value);
  const handleCodeChange = (e) => setCode(e.target.value);

  return (
    <div className="flex flex-col h-full justify-center items-center space-y-3">
      <PageTitle>Add New Department</PageTitle>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3 items-center w-11/12 sm:w-1/2 lg:w-4/12">
        <Input
          name="departmentName"
          type="text"
          value={name}
          placeholder="Enter Department Name"
          handleChange={handleNameChange}
        />
        <Input
          name="academicTerms"
          type="number"
          value={terms}
          placeholder="Enter Number Of Terms"
          handleChange={handleTermChange}
        />
        <Input
          name="departmentFees"
          type="number"
          value={fees}
          placeholder="Enter Department Fees"
          handleChange={handleFeeChange}
        />
        <Input
          name="departmentCode"
          type="text"
          value={code}
          placeholder="Enter Department Code"
          handleChange={handleCodeChange}
        />
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
  );
};

export default CreateDepartment;
