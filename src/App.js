import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AdminLoginPage from './components/Admin/AdminLoginPage/AdminLoginPage';
import LoginPage from './components/LoginPage/LoginPage';
import CreateStudent from './components/Admin/CreateStudent/CreateStudent';
import CreateDepartment from './components/Admin/CreateDepartment/CreateDepartment';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin/login" component={AdminLoginPage} />
        <Route exact path="/admin/create-student" component={CreateStudent} />
        <Route
          exact
          path="/admin/create-department"
          component={CreateDepartment}
        />
        <Route exact path="/login" component={LoginPage} />
        <Route path="*" render={() => 'Error 404 Page Not Found'} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
