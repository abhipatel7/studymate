import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AdminLoginPage from './components/Admin/AdminLoginPage/AdminLoginPage';
import LoginPage from './components/LoginPage/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin/login" component={AdminLoginPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
