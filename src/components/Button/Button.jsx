import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    children,
    icon,
    rounded,
    type,
    color,
    onClick,
    sm,
  } = props;
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      className={classnames(
        'text-white text-xl focus:outline-none outline-none flex space-x-2 justify-between items-center',
        {
          'rounded': rounded,
          'bg-primary': !color,
          'bg-secondary': color === 'secondary',
          'py-3 px-4': !sm,
          'px-3 py-1': sm,
          'bg-red-600': color === 'red',
        },
      )}
    >
      <div className="text-sm">
        {children}
      </div>
      {icon
        ? (
          <div>
            {icon}
          </div>
        ) : null}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  icon: PropTypes.element,
  rounded: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  icon: null,
  rounded: false,
  color: null,
  onClick: undefined,
};

export default Button;
