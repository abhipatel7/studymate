import { FiHome } from 'react-icons/fi';

const sidebarItems = [
  {
    label: 'Home',
    icon: <FiHome size={25} />,
    route: '/admin/login',
  },
  {
    label: 'Student',
    icon: <FiHome size={25} />,
    route: '/student/login',
  },
  {
    label: 'Faculty',
    icon: <FiHome size={25} />,
    route: '/faculty/login',
  },
];

export default sidebarItems;
