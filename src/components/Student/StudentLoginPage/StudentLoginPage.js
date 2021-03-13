import React from 'react';

import LoginPage from '../../LoginPage/LoginPage';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../store/actions/user';

const StudentLoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (email, password) => {
    dispatch(loginUser(email, password, 'student'));
  };

  return <LoginPage handleSubmit={handleSubmit} />;
};

export default StudentLoginPage;
