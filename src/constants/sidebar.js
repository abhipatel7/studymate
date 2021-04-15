import { FiHome, FiLogOut } from 'react-icons/fi';
import { GiTeacher } from 'react-icons/gi';
import { FaUserGraduate, FaRegBuilding } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';
import { AiOutlineNotification } from 'react-icons/ai';

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
  {
    label: 'Notice Board',
    icon: <AiOutlineNotification size={25} />,
    route: routes.noticeBoard,
  },
];

export const studentSidebarItems = [
  {
    label: 'Dashboard',
    icon: <FiHome size={25} />,
    route: routes.dashboard,
  },
  {
    label: 'Pay Fees',
    icon: <MdAttachMoney size={25} />,
    route: routes.payFees,
  },
  {
    label: 'Notice Board',
    icon: <AiOutlineNotification size={25} />,
    route: routes.noticeBoard,
  },
];

export const facultySidebarItems = [
  {
    label: 'Dashboard',
    icon: <FiHome size={25} />,
    route: routes.dashboard,
  },
  {
    label: 'Notice Board',
    icon: <AiOutlineNotification size={25} />,
    route: routes.noticeBoard,
  },
];

export const adminSidebarItemsBottom = [
  {
    label: 'Logout',
    icon: <FiLogOut size={25} />,
    route: '/logout',
  },
];
