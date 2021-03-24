import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import Input from '../../Input/Input';
import Button from '../../Button/Button';

const CreateStudent = () => {
  const [name, setName] = useState('');
  const [enrollmentNo, setEnrollmentNo] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [phoneNo, setPhoneNo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEnrollmentNo('');
    setEmail('');
    setDepartment('');
    setPhoneNo('');
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleEnrollmentNoChange = (e) => setEnrollmentNo(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleDepartmentChange = (e) => setDepartment(e.target.value);
  const handlePhoneNoChange = (e) => setPhoneNo(e.target.value);

  return (
    <div className="flex flex-col justify-center items-center space-y-3 h-full">
      <span className="text-2xl font-black lg:w-auto lg:text-3xl">Enter Student Details</span>
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
            <option value="" disabled selected>
              Select Department
            </option>
            <option value="automobile">Automobile Engineering</option>
            <option value="chemical">Chemical Engineering</option>
            <option value="cse">Computer Science Engineering</option>
            <option value="electrical">Electrical Engineering</option>
            <option value="ec">Electronics and Communications</option>
            <option value="it">Information Technology</option>
            <option value="mechanical">Mechanical Engineering</option>
          </select>
          <Input
            name="phoneNo"
            type="number"
            min="10"
            max="10"
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
  );
};

export default CreateStudent;
