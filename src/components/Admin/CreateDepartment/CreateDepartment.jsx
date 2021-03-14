import React, { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { FiArrowRight } from 'react-icons/fi';

import classes from './CreateDepartment.module.scss';
import Input from '../../Input/Input';
import NavBar from '../../NavBar/NavBar';
import Button from '../../Button/Button';
import Modal from '../../Modal/Modal';
import SearchBar from '../../SearchBar/SearchBar';
import ImageCard from '../../ImageCard/ImageCard';

const CreateDepartment = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [faculty, setFaculty] = useState('');
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  const handleSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    setName('');
    setYear('');
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
              handleChange={handleFacultyChange}
            />
            <Button
              type="button"
              onClick={showModal}
              styles={classes.addBtnStyles}
            >
              Faculty
              <IoIosAddCircle
                className={classes.addIconStyles}
                color="#FF8000"
                size="1rem"
              />
            </Button>
            <Modal show={show} handleClose={hideModal}>
              <SearchBar />
              <ImageCard name="Abhi" id="1234567" />
              <ImageCard name="Anyo" id="1234567" />
              <ImageCard name="Jay" id="1234567" />
              <ImageCard name="Hiren" id="1234567" />
              <ImageCard name="Banti" id="1234567" />
            </Modal>
          </div>
          <Button type="submit" styles={classes.buttonStyles}>
            Add <FiArrowRight />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateDepartment;
