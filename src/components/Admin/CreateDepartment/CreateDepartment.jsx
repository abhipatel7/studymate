import React, { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import { RiCloseCircleFill } from 'react-icons/ri';

import classes from './CreateDepartment.module.scss';

import PageTitle from '../../PageTitle/PageTitle';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import Modal from '../../Modal/Modal';
import SearchBar from '../../SearchBar/SearchBar';
import ImageCard from '../../ImageCard/ImageCard';
import Selector from "../../Selector/Selector";

const CreateDepartment = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [faculty, setFaculty] = useState('');
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setYear('');
    setFaculty('');
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleYearChange = (e) => setYear(e.target.value);
  const handleFacultyChange = (e) => setFaculty(e.target.value);

  return (
    <div className="flex flex-col h-full justify-center items-center space-y-3">
      <PageTitle>Add New Department</PageTitle>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3 items-center w-11/12 sm:w-1/2 lg:w-4/12">
        <Input
          name="name"
          type="text"
          value={name}
          placeholder="Enter Full Name"
          handleChange={handleNameChange}
          required
        />
        <Input
          name="academicYears"
          type="number"
          value={year}
          placeholder="Enter Enrollment No"
          handleChange={handleYearChange}
          required
        />
        <Selector />
        <Modal show={show} handleClose={hideModal}>
          <SearchBar />
          <ImageCard name="Abhi" id="1234567" />
          <ImageCard name="Anyo" id="1234567" />
          <ImageCard name="Jay" id="1234567" />
          <ImageCard name="Hiren" id="1234567" />
          <ImageCard name="Banti" id="1234567" />
        </Modal>
        <Button
          type="submit"
          icon={<FiArrowRight />}
          styles={classes.buttonStyles}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default CreateDepartment;
