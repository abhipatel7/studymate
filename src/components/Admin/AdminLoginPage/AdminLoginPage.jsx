import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { loginUser } from '../../../api/user';
import LoginPage from '../../LoginPage/LoginPage';

import * as actionTypes from '../../../store/actions/actionTypes';
import ROLES from '../../../ROLES';

const AdminLoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (email, password) => {
    try {
      const res = await loginUser(email, password, ROLES.admin);
      dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: res });
    } catch (e) {
      toast.error(e.msg);
    }
  };

  return <LoginPage handleSubmit={handleSubmit} />;
};

export default AdminLoginPage;
