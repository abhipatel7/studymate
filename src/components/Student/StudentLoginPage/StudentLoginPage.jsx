import React from 'react';
import { useDispatch } from 'react-redux';

import LoginPage from '../../LoginPage/LoginPage';
import { userLogin } from '../../../store/actions/user';

import ROLES from '../../../ROLES';

const StudentLoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (email, password) => {
    dispatch(userLogin(email, password, ROLES.student));
  };

  return <LoginPage isAdmin={false} handleSubmit={handleSubmit} />;
};

export default StudentLoginPage;
