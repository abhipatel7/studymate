import React from 'react';
import classes from './NavBar.module.scss';
import Logo from '../../assets/img/StudyMateNabBar.svg';

const NavBar = ({ styles, ...props }) => (
  <nav {...props} className={`${styles || classes.navbarStyles}`}>
    <img
      className={classes.imageStyles}
      src={Logo}
      alt="StudyMateNavBarLogo"
    />
  </nav>
);

export default NavBar;
