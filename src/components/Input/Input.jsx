import React from 'react';
import classnames from 'classnames';

const Input = (props) => {
  const {
    handleChange, label, inputClass, containerClass, ...otherProps
  } = props;

  return (
    <div
      className={classnames(
        'w-full',
        containerClass,
      )}
    >
      {label ? <label>{label}</label> : null}
      <input
        className={classnames(
          'w-full rounded px-3 py-2 border outline-none border-customGray',
          inputClass,
        )}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
