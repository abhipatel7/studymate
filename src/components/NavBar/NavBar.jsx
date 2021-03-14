import React from 'react';
import classes from './NavBar.module.scss';
import Logo from '../../assets/img/StudyMateNabBar.svg';
import AdminLogo from '../../assets/img/StudyMateAdminLogo.svg';

const NavBar = ({ styles, isAdmin, ...props }) => (
  <nav {...props} className={`${styles || classes.navbarStyles}`}>
    <img
      className={classes.imageStyles}
      src={isAdmin ? AdminLogo : Logo}
      alt="StudyMateNavBarLogo"
    />
  </nav>
);

export default NavBar;
