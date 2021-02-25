import React, { useState } from 'react';
import Input from '../Input/Input';
import classes from './LoginPage.module.scss';
import Button from '../Button/Button';
import NavBar from '../NavBar/NavBar';

const LoginPage = () => {
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
    <div className="">
      <NavBar />
      <div className="flex items-center justify-center flex-col mt-72">
        <span className={classes.textStyles}>Enter Your Credentials</span>
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
    </div>
  );
};

export default LoginPage;
