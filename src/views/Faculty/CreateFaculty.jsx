import React, { useState } from 'react';
import useSWR from 'swr';
import { FiArrowRight } from 'react-icons/fi';
import { toast } from 'react-toastify';

import PageTitle from '../../components/PageTitle/PageTitle';
import Input from '../../components/Input/Input';
import { getDepartments } from '../../api/department';
import Spinner from '../../components/Spinner/Spinner';
import Button from '../../components/Button/Button';
import { createFaculty } from '../../api/faculty';

const CreateFaculty = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [department, setDepartment] = useState('');

  const { data: departments, error } = useSWR('/department', getDepartments, {
    onError: (err) => toast.error(err.msg),
    revalidateOnFocus: false,
  });

  const onCreateFaculty = async (e) => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '' || phoneNumber.length < 10) {
      toast.error('Invalid input');
    } else {
      try {
        await createFaculty(name, email, phoneNumber, department === '' ? null : department);
        toast.success('Created faculty successfully.');
      } catch (err) {
        toast.error(err.msg);
      }
    }
  };

  return (
    <>
      { !departments && !error ? (
        <div className="flex flex-col space-y-3 justify-center items-center h-screen">
          <div>
            <Spinner />
          </div>
          <div className="font-medium">
            Please wait...
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center space-y-3 h-full">
          <PageTitle>Create Faculty</PageTitle>
          <form
            className="flex flex-col justify-center items-center space-y-3 w-11/12 sm:w-1/2 lg:w-4/12"
            onSubmit={onCreateFaculty}
          >
            <Input
              name="name"
              type="text"
              value={name}
              placeholder="Full Name"
              handleChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              name="email"
              type="email"
              value={email}
              placeholder="Email Address"
              handleChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              name="phone"
              type="number"
              value={phoneNumber}
              placeholder="Phone Number"
              handleChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <select
              name="department"
              value={department}
              className="w-1/2"
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="" disabled>
                Select Department
              </option>
              { departments && departments.map(((depart) => (
                <option key={depart.id} value={depart.id}>{depart.name}</option>
              ))) }
            </select>
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
};

export default CreateFaculty;
