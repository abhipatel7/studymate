import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import useSWR from 'swr';

import { getSubject } from '../../api/subject';
import DashboardContentWrapper from '../../components/DashboardContentWrapper/DashboardContentWrapper';
import PageTitle from '../../components/PageTitle/PageTitle';

import routes from '../../constants/routes';

function FacultyDashboard() {
  const id = useSelector((state) => state.user.id);

  const { data: subjects, error: subjectError } = useSWR(id ? `/subject?faculty=${id}` : null, getSubject, {
    onError: (err) => toast.error(err),
  });

  return (
    <div className="flex flex-col space-y-3 h-full w-full p-5">
      <div>
        <PageTitle>Faculty Dashboard</PageTitle>
      </div>
      <div className="flex flex-1 flex-col space-y-3">
        <DashboardContentWrapper
          title="Subjects"
          redirectTo={routes.addSubject}
          data={subjects}
          error={subjectError}
        />
      </div>
    </div>
  );
}

export default FacultyDashboard;
