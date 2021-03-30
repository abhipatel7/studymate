import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import PageTitle from '../PageTitle/PageTitle';
import Input from '../Input/Input';
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
      <div className="flex flex-col h-full space-y-3 justify-center items-center">
        <PageTitle>Enter Your Credentials</PageTitle>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 items-center w-11/12 sm:w-1/2 lg:w-4/12">
          <Input
            name="email"
            type="email"
            value={email}
            placeholder="Email Address"
            handleChange={handleEmailChange}
            required
          />
          <Input
            name="password"
            type="password"
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
