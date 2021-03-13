import React from 'react';

const Input = ({
  styles, handleChange, label, ...otherProps
}) => (
  <div>
    {label ? <label>{label}</label> : null}
    <input className={styles} onChange={handleChange} {...otherProps} />
  </div>
);

export default Input;
