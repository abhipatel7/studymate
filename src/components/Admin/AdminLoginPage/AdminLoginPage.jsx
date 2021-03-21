import React from 'react';
import { useDispatch } from 'react-redux';

import { userLogin } from '../../../store/actions/user';
import LoginPage from '../../LoginPage/LoginPage';

import ROLES from '../../../ROLES';

const AdminLoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (email, password) => {
    dispatch(userLogin(email, password, ROLES.admin));
  };

  return <LoginPage isAdmin handleSubmit={handleSubmit} />;
};

export default AdminLoginPage;
