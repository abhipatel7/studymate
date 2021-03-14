import React from 'react';

import { useDispatch } from 'react-redux';
import { loginUser } from '../../../store/actions/user';

import ROLES from '../../../ROLES';
import LoginPage from "../../LoginPage/LoginPage";

const AdminLoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (email, password) => {
    dispatch(loginUser(email, password, ROLES.student));
  };

  return <LoginPage isAdmin={true} handleSubmit={handleSubmit} />;
};

export default AdminLoginPage;
