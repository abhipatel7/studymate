import React from 'react';
import { useHistory } from 'react-router-dom';

import PageTitle from '../PageTitle/PageTitle';

import routes from '../../constants/routes';

const Login = () => {
  const history = useHistory();
  return (
    <div className="h-full w-full flex flex-col justify-center items-center space-y-5">
      <PageTitle>Login As</PageTitle>
      <div className="flex flex-col justify-center items-center space-y-3 md:flex-row md:space-x-3 md:w-1/3 md:justify-evenly md:items-center">
        <button type="button" onClick={() => history.push(routes.adminLogin)}>
          <img
            className="rounded-full w-14 bg-gray-100 mr-4"
            src={`https://robohash.org/${Math.floor(Math.random() * 10)}.png`}
            alt="admin"
          />
          Admin
        </button>
        <button type="button" onClick={() => history.push(routes.studentLogin)}>
          <img
            className="rounded-full w-14 bg-gray-100 mr-4"
            src={`https://robohash.org/${Math.floor(Math.random() * 10)}.png`}
            alt="student"
          />
          Student
        </button>
        <button type="button" onClick={() => history.push(routes.facultyLogin)}>
          <img
            className="rounded-full w-14 bg-gray-100 mr-4"
            src={`https://robohash.org/${Math.floor(Math.random() * 10)}.png`}
            alt="faculty"
          />
          Faculty
        </button>
      </div>
    </div>
  );
};

export default Login;
