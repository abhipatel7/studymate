import React from 'react';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import { getSubject } from '../../api/subject';
import PageTitle from '../../components/PageTitle/PageTitle';
import DashboardContentWrapper from '../../components/DashboardContentWrapper/DashboardContentWrapper';

import routes from '../../constants/routes';

export default function StudentDashboard() {
  const termId = useSelector((state) => state.user.termId);

  const { data: subjects, error: subjectError } = useSWR(termId ? `/subject?term=${termId}` : null, getSubject, {
    onError: (err) => toast.error(err),
  });

  return (
    <div className="flex flex-col space-y-3 h-full w-full p-5">
      <div>
        <PageTitle>Student Dashboard</PageTitle>
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
