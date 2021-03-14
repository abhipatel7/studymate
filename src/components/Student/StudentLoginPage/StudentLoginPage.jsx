import React from 'react';
import { useDispatch } from 'react-redux';

import LoginPage from '../../LoginPage/LoginPage';
import { loginUser } from '../../../store/actions/user';

import ROLES from '../../../ROLES';

const StudentLoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (email, password) => {
    dispatch(loginUser(email, password, ROLES.student));
  };

  return <LoginPage handleSubmit={handleSubmit} />;
};

export default StudentLoginPage;
