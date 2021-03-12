import React from 'react';
import LoginPage from '../../LoginPage/LoginPage';
import axios from 'axios';

const StudentLoginPage = () => {
  const handleSubmit = (email, password) => {
    const user = {
      email,
      password,
    };
    axios
      .post('http://localhost:3001/api/v1/student/login', user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  };

  return <LoginPage handleSubmit={handleSubmit} />;
};

export default StudentLoginPage;
