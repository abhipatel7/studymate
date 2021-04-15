import React from 'react';
import { useSelector } from 'react-redux';

import roles from '../../ROLES';
import AdminDashboard from './AdminDashboard';
import FacultyDashboard from './FacultyDashboard';
import StudentDashboard from './StudentDashboard';

const Dashboard = () => {
  // TODO - show dashboard depending on user role
  const role = useSelector((state) => state.user.role);

  let dashboard = null;
  if (role === roles.admin) {
    dashboard = <AdminDashboard />;
  } else if (role === roles.student) {
    dashboard = <StudentDashboard />;
  } else if (role === roles.faculty) {
    dashboard = <FacultyDashboard />;
  }

  return (
    dashboard
  );
};

export default Dashboard;
