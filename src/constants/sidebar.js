import { FiHome, FiLogOut } from 'react-icons/fi';
import { GiTeacher } from 'react-icons/gi';
import { FaUserGraduate, FaRegBuilding } from 'react-icons/fa';
import { BsPersonPlusFill } from 'react-icons/bs';

import routes from './routes';

/* eslint-disable react/jsx-filename-extension */
export const adminSidebarItems = [
  {
    label: 'Dashboard',
    icon: <FiHome size={25} />,
    route: routes.dashboard,
  },
  {
    label: 'Students',
    icon: <FaUserGraduate size={25} />,
    route: routes.studentLogin,
  },
  {
    label: 'Faculties',
    icon: <GiTeacher size={25} />,
    route: routes.facultyLogin,
  },
  {
    label: 'Departments',
    icon: <FaRegBuilding size={25} />,
    route: routes.department,
  },
];

export const adminSidebarItemsBottom = [
  {
    label: 'Add Student',
    icon: <BsPersonPlusFill size={25} />,
    route: routes.createStudent,
  },
  {
    label: 'Add Faculty',
    icon: <BsPersonPlusFill size={25} />,
    route: routes.createFaculty,
  },
  {
    label: 'Create Department',
    icon: <BsPersonPlusFill size={25} />,
    route: routes.createDepartment,
  },
  {
    label: 'Logout',
    icon: <FiLogOut size={25} />,
    route: '/logout',
  },
];
