import React from 'react';

import Logo from '../../assets/img/StudyMateNabBar.svg';
import AdminLogo from '../../assets/img/StudyMateAdminLogo.svg';

const NavBar = (props) => {
  const { isAdmin } = props;
  return (
    <>
      <nav className="flex items-center sticky top-0 justify-center md:justify-start md:pl-3 border-b bg-white w-full">
        <img
          className="lg:ml-10 w-52"
          src={isAdmin ? AdminLogo : Logo}
          alt="StudyMateNavBarLogo"
        />
      </nav>
    </>
  );
};

export default NavBar;
