import React from 'react';
import classnames from 'classnames';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  const {
    items = [],
  } = props;

  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="flex flex-col h-full justify-between items-center">
      <div className="flex flex-col w-full space-y-4 overflow-scroll items-center p-3">
        {items.map((item) => (
          <NavLink
            to={item.route}
          >
            <div className={classnames(
              'flex w-full font-medium justify-evenly items-center text-l space-x-5 py-3 cursor-pointer px-2',
              { 'text-white rounded bg-secondary-light': location.pathname === item.route },
              { 'text-gray-500': location.pathname !== item.route },
            )}
            >
              {item.icon}
              {item.label}
            </div>
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col space-y-4 p-3 items-center">
        <div>
          Bottom
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
