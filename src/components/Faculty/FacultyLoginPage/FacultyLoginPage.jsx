import React from 'react';
import { useDispatch } from 'react-redux';

import { userLogin } from '../../../store/actions/user';
import LoginPage from '../../LoginPage/LoginPage';

import ROLES from '../../../ROLES';

const FacultyLoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (email, password) => {
    dispatch(userLogin(email, password, ROLES.faculty));
  };

  return <LoginPage isAdmin={false} handleSubmit={handleSubmit} />;
};

export default FacultyLoginPage;
