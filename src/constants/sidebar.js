import { FiHome, FiLogOut } from 'react-icons/fi';
import { GiTeacher } from 'react-icons/gi';
import { FaUserGraduate, FaRegBuilding } from 'react-icons/fa';

import routes from './routes';

/* eslint-disable react/jsx-filename-extension */
export const adminSidebarItems = [
  {
    label: 'Dashboard',
    icon: <FiHome size={25} />,
    route: routes.dashboard,
  },
  {
    label: 'Add Student',
    icon: <FaUserGraduate size={25} />,
    route: routes.createStudent,
  },
  {
    label: 'Add Faculty',
    icon: <GiTeacher size={25} />,
    route: routes.createFaculty,
  },
  {
    label: 'Add Department',
    icon: <FaRegBuilding size={25} />,
    route: routes.createDepartment,
  },
];

export const adminSidebarItemsBottom = [
  {
    label: 'Logout',
    icon: <FiLogOut size={25} />,
    route: '/logout',
  },
];
