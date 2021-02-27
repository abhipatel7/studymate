import React, { useState } from 'react';
import classes from './CreateStudent.module.scss';
import Input from '../../Input/Input';
import NavBar from '../../NavBar/NavBar';
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
    <div className="flex flex-col h-screen">
      <NavBar styles={classes.navBarStyles} />
      <div className={classes.containerStyles}>
        <span className={classes.textStyles}>Enter Student Details</span>
        <form onSubmit={handleSubmit} className={classes.formStyles}>
          <Input
            name="name"
            type="text"
            styles={classes.inputStyles}
            value={name}
            placeholder="Enter Full Name"
            handleChange={handleNameChange}
            required
          />
          <Input
            name="enrollmentNo"
            type="number"
            styles={classes.inputStyles}
            value={enrollmentNo}
            placeholder="Enter Enrollment No"
            handleChange={handleEnrollmentNoChange}
            required
          />
          <Input
            name="email"
            type="email"
            styles={classes.inputStyles}
            value={email}
            placeholder="Enter Email Address"
            handleChange={handleEmailChange}
            required
          />
          <div className={`lg:flex ${classes.c} `}>
            <select
              name="department"
              type="text"
              className={classes.inputStyles}
              value={department}
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
              styles={classes.inputStyles}
              value={phoneNo}
              placeholder="Enter Phone No"
              handleChange={handlePhoneNoChange}
              required
            />
          </div>
          <Button type="submit" styles={classes.buttonStyles}>
            Add ->
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
