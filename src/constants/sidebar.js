import { FiHome, FiLogOut } from 'react-icons/fi';
import { GiTeacher } from 'react-icons/gi';
import { FaUserGraduate } from 'react-icons/fa';


export const sidebarItems = [
  {
    label: 'Home',
    icon: <FiHome size={25} />,
    route: '/admin/login',
  },
  {
    label: 'Students',
    icon: <FaUserGraduate size={25} />,
    route: '/student/login',
  },
  {
    label: 'Faculties',
    icon: <GiTeacher size={25} />,
    route: '/faculty/login',
  },
];

export const sidebarItemsBottom = [
  {
    label: 'Logout',
    icon: <FiLogOut size={25} />,
    route: '/logout',
  },
];
