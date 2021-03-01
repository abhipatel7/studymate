import React, { useState } from 'react';
import classes from './CreateDepartment.module.scss';
import Input from '../../Input/Input';
import NavBar from '../../NavBar/NavBar';
import Button from '../../Button/Button';
import { Select } from 'antd';
import { IoIosAddCircle } from 'react-icons/io';

const CreateDepartment = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState(null);
  const [faculty, setFaculty] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setYear(null);
    setFaculty('');
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleYearChange = (e) => setYear(e.target.value);
  const handleFacultyChange = (e) => setFaculty(e.target.value);

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
            name="academicYears"
            type="number"
            styles={classes.inputStyles}
            value={year}
            placeholder="Enter Enrollment No"
            handleChange={handleYearChange}
            required
          />
          <div className="relative">
            <Input
              name="faculty"
              type="text"
              styles={classes.inputStyles}
              value={faculty}
              placeholder="Add Faculty (optional)"
              handleChange={handleYearChange}
            />
            <Button styles={classes.addBtnStyles}>
              Faculty
              <IoIosAddCircle
                className={classes.addIconStyles}
                color="#FF8000"
                size="1rem"
              />
            </Button>
          </div>
          <Button type="submit" styles={classes.buttonStyles}>
            Add ->
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateDepartment;
