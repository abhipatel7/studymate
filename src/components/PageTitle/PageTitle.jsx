import React from 'react';

const PageTitle = (props) => {
  const { children } = props;

  return (
    <span className="text-xl font-semibold lg:text-2xl">
      {children}
    </span>
  );
};

export default PageTitle;
