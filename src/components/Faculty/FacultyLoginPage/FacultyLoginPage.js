import React from 'react';
import axios from 'axios';

import LoginPage from '../../LoginPage/LoginPage';

const FacultyLoginPage = () => {
  const handleSubmit = (email, password) => {
    const user = {
      email,
      password,
    };
    axios
      .post('http://localhost:3001/api/v1/faculty/login', user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  };

  return <LoginPage handleSubmit={handleSubmit} />;
};

export default FacultyLoginPage;
