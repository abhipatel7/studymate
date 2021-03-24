import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import Input from '../Input/Input';
import classes from './LoginPage.module.scss';
import Button from '../Button/Button';

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
    <div className="flex flex-col h-full">
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
          <Button
            type="submit"
            icon={<FiArrowRight size={25} />}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
