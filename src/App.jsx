import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import axios from './axios';
import './App.css';
import AdminLoginPage from './components/Admin/AdminLoginPage/AdminLoginPage';
import CreateStudent from './components/Admin/CreateStudent/CreateStudent';
import CreateDepartment from './components/Admin/CreateDepartment/CreateDepartment';
import StudentLoginPage from './components/Student/StudentLoginPage/StudentLoginPage';
import FacultyLoginPage from './components/Faculty/FacultyLoginPage/FacultyLoginPage';

const App = () => {
  const token = useSelector((state) => state.user.accessToken);
  if (token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  }

  return (
    <Switch>
      <Route exact path="/admin/login" component={AdminLoginPage} />
      <Route exact path="/admin/create-student" component={CreateStudent} />
      <Route
        exact
        path="/admin/create-department"
        component={CreateDepartment}
      />
      <Route exact path="/student/login" component={StudentLoginPage} />
      <Route exact path="/faculty/login" component={FacultyLoginPage} />
      <Route path="*" render={() => 'Error 404 Page Not Found'} />
    </Switch>
  );
};

export default App;
