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
import Sidebar from './components/sidebar/Sidebar';
import NavBar from './components/NavBar/NavBar';
import routes from './constants/routes';
import PrivateRoute from './hoc/route/PrivateRoute';
import PublicRoute from './hoc/route/PublicRoute';
import Login from './components/Login/Login';

import { sidebarItems, sidebarItemsBottom } from './constants/sidebar';
import roles from './ROLES';
import Dashboard from './views/Dashboard/Dashboard';

/* eslint-disable max-len */
const App = () => {
  const token = useSelector((state) => state.user.accessToken);
  if (token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row flex-none h-11">
        <NavBar isAdmin />
      </div>
      <div className="flex flex-row flex-1 bg-white">
        {token
          ? (
            <div className="w-1/6 flex-none">
              <Sidebar items={sidebarItems} bottom={sidebarItemsBottom} />
            </div>
          ) : null}
        <div className="bg-gray-100 flex-auto">
          <Switch>
            <PublicRoute exact restricted path={routes.login} component={Login} />
            <PublicRoute exact restricted path={routes.adminLogin} component={AdminLoginPage} />
            <PublicRoute restricted exact path={routes.studentLogin} component={StudentLoginPage} />
            <PublicRoute restricted exact path={routes.facultyLogin} component={FacultyLoginPage} />
            <PrivateRoute requiredRole={roles.admin} exact path={routes.createStudent} component={CreateStudent} />
            <PrivateRoute requiredRole={roles.admin} exact path={routes.createDepartment} component={CreateDepartment} />
            <PrivateRoute allRole exact path={routes.dashboard} component={Dashboard} />
            <Route path="*" render={() => 'Error 404 Page Not Found'} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
