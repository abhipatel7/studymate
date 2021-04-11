import React from 'react';
import { useHistory } from 'react-router-dom';

import PageTitle from '../../components/PageTitle/PageTitle';
import DashboardContentWrapper from '../../components/DashboardContentWrapper/DashboardContentWrapper';
import routes from '../../constants/routes';

export default function AdminDashboard() {
  const history = useHistory();

  return (
    <div className="flex flex-col space-y-3 h-full w-full p-5">
      <div>
        <PageTitle>Admin Dashboard</PageTitle>
      </div>
      <div className="flex flex-1 flex-col space-y-3">
        <DashboardContentWrapper
          title="Departments"
          redirectTo={routes.createDepartment}
        />
        <DashboardContentWrapper
          title="Faculties"
          redirectTo={routes.createFaculty}
        />
        <DashboardContentWrapper
          title="Students"
          redirectTo={routes.createStudent}
        />
      </div>
    </div>
  );
}
