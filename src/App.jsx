import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
import Spinner from './components/Spinner/Spinner';
import CreateFaculty from './views/Faculty/CreateFaculty';
import PayFees from './views/PayFees/PayFees';
import Logout from './views/Logout/Logout';
import NoticeBoard from './views/NoticeBoard/NoticeBoard';
import NotFound from './components/NotFound/NotFound';
import AddSubject from './views/AddSubject/AddSubject';

import {
  adminSidebarItems, adminSidebarItemsBottom, studentSidebarItems, facultySidebarItems,
} from './constants/sidebar';
import roles from './ROLES';
import Dashboard from './views/Dashboard/Dashboard';
import * as actionTypes from './store/actions/actionTypes';

/* eslint-disable max-len */
const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.accessToken);
  const role = useSelector((state) => state.user.role);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!token) {
      // eslint-disable-next-line no-undef
      const user = localStorage.getItem('user');
      if (user) {
        dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: JSON.parse(user) });
      }
    }
    setReady(true);
  }, [dispatch, token]);

  let sidebarItems = [];
  let sidebarItemsBottom = [];
  if (token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    if (role === roles.admin) {
      sidebarItems = adminSidebarItems;
    } else if (role === roles.student) {
      sidebarItems = studentSidebarItems;
    } else if (role === roles.faculty) {
      sidebarItems = facultySidebarItems;
    }
    sidebarItemsBottom = adminSidebarItemsBottom;
  }

  return (
    <>
      { ready ? (
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-row flex-none fixed w-full h-11">
            <NavBar isAdmin />
          </div>
          <div className="flex flex-row flex-1 bg-white mt-11">
            {token
              ? (
                <div className="w-1/6 flex-none">
                  <Sidebar items={sidebarItems} bottom={sidebarItemsBottom} />
                </div>
              ) : null}
            <div className="bg-gray-100 Contetnt-wrapper flex-auto overflow-y-scroll">
              <Switch>
                <PublicRoute exact restricted path={routes.login} component={Login} />
                <PublicRoute exact restricted path={routes.adminLogin} component={AdminLoginPage} />
                <PublicRoute restricted exact path={routes.studentLogin} component={StudentLoginPage} />
                <PublicRoute restricted exact path={routes.facultyLogin} component={FacultyLoginPage} />
                <PrivateRoute requiredRole={roles.admin} exact path={routes.createStudent} component={CreateStudent} />
                <PrivateRoute requiredRole={roles.admin} exact path={routes.createDepartment} component={CreateDepartment} />
                <PrivateRoute allRole exact path={routes.dashboard} component={Dashboard} />
                <PrivateRoute requiredRole={roles.admin} exact path={routes.createFaculty} component={CreateFaculty} />
                <PrivateRoute requiredRole={roles.student} exact path={routes.payFees} component={PayFees} />
                <PrivateRoute allRole exact path={routes.logout} component={Logout} />
                <PrivateRoute allRole exact path={routes.noticeBoard} component={NoticeBoard} />
                <PrivateRoute requiredRole={roles.admin} exact component={AddSubject} path={routes.addSubject} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col space-y-3 justify-center items-center h-screen">
          <div>
            <Spinner />
          </div>
          <div className="font-medium">
            Please wait...
          </div>
        </div>
      )}
    </>
  );
};

export default App;
