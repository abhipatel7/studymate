import React from 'react';
import classnames from 'classnames';

export default function Card(props) {
  const { children, className, title } = props;

  return (
    <div
      className={classnames(
        'rounded-md bg-white shadow-lg p-3',
        className,
      )}
    >
      { title ? <div className="font-medium text-lg">{title}</div> : null }
      {children}
    </div>
  );
}
