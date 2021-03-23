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
  } = props;
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classnames(
        'text-white text-xl focus:outline-none outline-none py-3 px-4 flex space-x-2 justify-between items-center',
        {
          'rounded': rounded,
          'bg-primary': !color,
          'bg-secondary': color === 'secondary',
        },
      )}
    >
      <div>
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
};

Button.defaultProps = {
  type: 'button',
  icon: null,
  rounded: false,
  color: null,
};

export default Button;
