import React from 'react';
import { Result } from 'antd';

function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="The page you visited does not exist."
    />
  );
}

export default NotFound;
