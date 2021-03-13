import React, { useState } from 'react';
import Input from '../Input/Input';
import classes from './LoginPage.module.scss';
import Button from '../Button/Button';
import NavBar from '../NavBar/NavBar';

const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(email, password);
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBar styles={classes.navBarStyles} />
      <div className={classes.containerStyles}>
        <span className={classes.textStyles}>Enter Your Credentials</span>
        <form onSubmit={handleSubmit} className={classes.formStyles}>
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
            Submit `&gt;`
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
