import React from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../../store/actions/user';
import LoginPage from '../../LoginPage/LoginPage';

const FacultyLoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (email, password) => {
    dispatch(loginUser(email, password, 'faculty'));
  };

  return <LoginPage handleSubmit={handleSubmit} />;
};

export default FacultyLoginPage;
