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

import { sidebarItems, sidebarItemsBottom } from './constants/sidebar';

const App = () => {
  const token = useSelector((state) => state.user.accessToken);
  if (token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  }

  // TODO - Remove sidebar from login screen

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row flex-none h-11">
        <NavBar isAdmin />
      </div>
      <div className="flex flex-row flex-1 bg-white">
        <div className="w-1/6 flex-none">
          <Sidebar
            items={sidebarItems}
            bottom={sidebarItemsBottom}
          />
        </div>
        <div className="bg-gray-100 flex-auto">
          <Switch>
            <Route exact path={routes.adminLogin} component={AdminLoginPage} />
            <Route exact path={routes.createStudent} component={CreateStudent} />
            <Route exact path={routes.createDepartment} component={CreateDepartment} />
            <Route exact path={routes.studentLogin} component={StudentLoginPage} />
            <Route exact path={routes.facultyLogin} component={FacultyLoginPage} />
            <Route path="*" render={() => 'Error 404 Page Not Found'} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
