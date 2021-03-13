import React from 'react';

const Button = ({ children, styles, ...props }) => {
  return (
    <div className="flex justify-center">
      <button className={styles} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
