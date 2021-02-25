import React, { useState } from 'react';
import Input from '../../Input/Input';
import classes from './AdminLoginPage.module.scss';
import Button from '../../Button/Button';
import Logo from '../../../assets/img/StudyMateAdminLogo.svg';

const AdminLoginPage = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <img src={Logo} alt="StudyMateAdminLogo" />
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          styles={classes.inputStyles}
          value={email}
          placeholder="Email Address"
          handleChange={handleEmailChange}
          required
        />
        <Input
          name="password"
          type="password"
          styles={classes.inputStyles}
          value={password}
          placeholder="Password"
          handleChange={handlePasswordChange}
          required
        />
        <Button type="submit" styles={classes.buttonStyles}>
          Submit ->
        </Button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
