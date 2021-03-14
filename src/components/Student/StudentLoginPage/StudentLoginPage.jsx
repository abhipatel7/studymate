import React from 'react';
import { useDispatch } from 'react-redux';

import LoginPage from '../../LoginPage/LoginPage';
import { loginUser } from '../../../store/actions/user';

const StudentLoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (email, password) => {
    dispatch(loginUser(email, password, 'student'));
  };

  return <LoginPage handleSubmit={handleSubmit} />;
};

export default StudentLoginPage;
