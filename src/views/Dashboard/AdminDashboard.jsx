import React from 'react';
import useSWR from 'swr';

import { toast } from 'react-toastify';
import PageTitle from '../../components/PageTitle/PageTitle';
import DashboardContentWrapper from '../../components/DashboardContentWrapper/DashboardContentWrapper';
import routes from '../../constants/routes';
import { getDepartments, deleteDepartment } from '../../api/department';
import { deleteFaculty, getFaculties } from '../../api/faculty';
import { getStudent, deleteStudent } from '../../api/student';
import { getSubject, deleteSubject } from '../../api/subject';

export default function AdminDashboard() {
  const { data: departments, error: departmentError, mutate: departmentMutate } = useSWR('/department', getDepartments, {
    onError: () => toast.error('Could not fetch departments'),
  });

  const { data: faculties, error: facultiesError, mutate: facultiesMutation } = useSWR('/faculty', getFaculties, {
    onError: () => toast.error('Could not fetch faculties'),
  });

  const { data: students, error: studentsError, mutate: studentMutation } = useSWR('/student', getStudent, {
    onError: () => toast.error('Could not fetch students'),
  });

  const { data: subjects, error: subjectError, mutate: subjectMutation } = useSWR('/subject', getSubject, {
    onError: (err) => toast.error(err),
  });

  const onDeleteDepartment = async (id) => {
    try {
      await deleteDepartment(id);
      departmentMutate();
      toast.success('Successfully deleted department.');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onDeleteFaculty = async (id) => {
    try {
      await deleteFaculty(id);
      facultiesMutation();
      toast.success('Successfully deleted faculty.');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onDeleteStudent = async (id) => {
    try {
      await deleteStudent(id);
      studentMutation();
      toast.success('Successfully deleted student.');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onDeleteSubject = async (id) => {
    try {
      await deleteSubject(id);
      subjectMutation();
      toast.success('Successfully deleted subject.');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col space-y-3 h-full w-full p-5">
      <div>
        <PageTitle>Admin Dashboard</PageTitle>
      </div>
      <div className="flex flex-1 flex-col space-y-3">
        <DashboardContentWrapper
          admin
          title="Departments"
          data={departments}
          error={departmentError}
          onDelete={onDeleteDepartment}
          redirectTo={routes.createDepartment}
        />
        <DashboardContentWrapper
          title="Faculties"
          redirectTo={routes.createFaculty}
          data={faculties}
          error={facultiesError}
          onDelete={onDeleteFaculty}
        />
        <DashboardContentWrapper
          title="Students"
          redirectTo={routes.createStudent}
          data={students}
          error={studentsError}
          onDelete={onDeleteStudent}
        />
        <DashboardContentWrapper
          title="Subjects"
          redirectTo={routes.addSubject}
          data={subjects}
          error={subjectError}
          onDelete={onDeleteSubject}
        />
      </div>
    </div>
  );
}
