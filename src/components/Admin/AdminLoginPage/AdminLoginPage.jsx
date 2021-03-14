import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { FiArrowRight } from 'react-icons/fi';

import Input from '../../Input/Input';
import classes from './AdminLoginPage.module.scss';
import Button from '../../Button/Button';
import Logo from '../../../assets/img/StudyMateAdminLogo.svg';
import { loginUser } from '../../../store/actions/user';

import ROLES from '../../../ROLES';

const AdminLoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password, ROLES.admin));
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className="h-screen mx-auto flex-col flex justify-center p-3.5 lg:items-center lg:content-center">
      <img className="" src={Logo} alt="StudyMateAdminLogo" />
      <form onSubmit={handleSubmit} className="">
        <Input
          name="email"
          type="email"
          styles={classes.inputStyles}
          value={email}
          placeholder="Email Address"
          handleChange={handleEmailChange}
          required
        />
        <Input
          name="password"
          type="password"
          styles={classes.inputStyles}
          value={password}
          placeholder="Password"
          handleChange={handlePasswordChange}
          required
        />
        <Button type="submit" styles={classes.buttonStyles}>
          Submit <FiArrowRight />
        </Button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
