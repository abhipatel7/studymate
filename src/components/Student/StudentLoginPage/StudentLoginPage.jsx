import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { loginUser } from '../../../api/user';
import LoginPage from '../../LoginPage/LoginPage';

import ROLES from '../../../ROLES';
import * as actionTypes from '../../../store/actions/actionTypes';

const StudentLoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (email, password) => {
    try {
      const res = await loginUser(email, password, ROLES.student);
      dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: res });
    } catch (e) {
      toast.error(e.msg);
    }
  };

  return <LoginPage isAdmin={false} handleSubmit={handleSubmit} />;
};

export default StudentLoginPage;
