import { FiHome, FiLogOut } from 'react-icons/fi';
import { GiTeacher } from 'react-icons/gi';
import { FaUserGraduate } from 'react-icons/fa';

import routes from './routes';

/* eslint-disable react/jsx-filename-extension */
export const sidebarItems = [
  {
    label: 'Home',
    icon: <FiHome size={25} />,
    route: routes.adminLogin,
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
];

export const sidebarItemsBottom = [
  {
    label: 'Logout',
    icon: <FiLogOut size={25} />,
    route: '/logout',
  },
];
