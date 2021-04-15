import React from 'react';
import classnames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';

const SidebarContent = (props) => {
  const { items, location } = props;
  return (
    <div className="flex flex-col w-full space-y-4 items-center p-3">
      {items.map((item) => (
        <NavLink
          to={item.route}
          className="w-full"
          key={item.route}
        >
          <div className={classnames(
            'flex w-full font-medium justify-center md:justify-start items-center rounded space-x-5 text-l py-3 cursor-pointer px-2',
            { 'text-white bg-secondary': location.pathname === item.route },
            { 'text-gray-500 hover:bg-secondary-100': location.pathname !== item.route },
          )}
          >
            <div className="md:ml-3">
              {item.icon}
            </div>
            <div className="hidden md:block truncate">
              {item.label}
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

const Sidebar = (props) => {
  const {
    items = [],
    bottom = [],
  } = props;

  const location = useLocation();

  return (
    <div className="flex flex-col h-full w-full shadow-lg justify-between items-center border-r">
      <SidebarContent
        items={items}
        location={location}
      />
      <SidebarContent
        items={bottom}
        location={location}
      />
    </div>
  );
};

export default Sidebar;
