import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { toast } from 'react-toastify';
import useSWR from 'swr';

import PageTitle from '../../PageTitle/PageTitle';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { getDepartments } from '../../../api/department';
import Spinner from '../../Spinner/Spinner';
import { createStudent } from '../../../api/student';

const CreateStudent = () => {
  const [name, setName] = useState('');
  const [enrollmentNo, setEnrollmentNo] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const { data: departments, error } = useSWR('/department', getDepartments);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === '' || enrollmentNo.trim() === '' || email.trim() === '' || !department || phoneNo.length !== 10) {
      toast.error('Invalid input');
    } else {
      try {
        const student = await createStudent(name, email, enrollmentNo, phoneNo, department);
        toast.success(`${student.name} was registered successfully.`);
      } catch (err) {
        toast.error(err.msg);
      }
    }
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleEnrollmentNoChange = (e) => setEnrollmentNo(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleDepartmentChange = (e) => setDepartment(e.target.value);
  const handlePhoneNoChange = (e) => setPhoneNo(e.target.value);

  return (
    <>{ !departments && !error
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
        <div className="flex flex-col justify-center items-center space-y-3 h-full">
          <PageTitle>Enter Student Details</PageTitle>
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center space-y-3 w-11/12 sm:w-1/2 lg:w-4/12">
            <Input
              name="name"
              type="text"
              value={name}
              placeholder="Enter Full Name"
              handleChange={handleNameChange}
              required
            />
            <Input
              name="enrollmentNo"
              type="number"
              value={enrollmentNo}
              placeholder="Enter Enrollment No"
              handleChange={handleEnrollmentNoChange}
              required
            />
            <Input
              name="email"
              type="email"
              value={email}
              placeholder="Enter Email Address"
              handleChange={handleEmailChange}
              required
            />
            <div className="flex flex-row space-x-3 items-center justify-center w-full">
              <select
                name="department"
                value={department}
                className="w-1/2"
                onChange={handleDepartmentChange}
                required
              >
                <option value="" disabled>
                  Select Department
                </option>
                { departments.map(((depart) => (
                  <option key={depart.id} value={depart.id}>{depart.name}</option>
                ))) }
              </select>
              <Input
                name="phoneNo"
                type="number"
                value={phoneNo}
                placeholder="Enter Phone No"
                handleChange={handlePhoneNoChange}
                required
              />
            </div>
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

export default CreateStudent;
