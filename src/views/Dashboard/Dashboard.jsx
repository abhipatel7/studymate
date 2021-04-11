import React from 'react';
import { useSelector } from 'react-redux';

import roles from '../../ROLES';
import AdminDashboard from './AdminDashboard';
/* eslint-disable arrow-body-style */
const Dashboard = () => {
  // TODO - show dashboard depending on user role
  const role = useSelector((state) => state.user.role);

  let dashboard = null;
  if (role === roles.admin) {
    dashboard = <AdminDashboard />;
  }

  return (
    dashboard
  );
};

export default Dashboard;
