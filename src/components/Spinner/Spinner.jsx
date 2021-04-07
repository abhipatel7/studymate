import React from 'react';
import { IconContext } from 'react-icons';
import { ImSpinner10 } from 'react-icons/im';

const Spinner = () => (
  <IconContext.Provider value={{ className: 'animate-spin text-secondary' }}>
    <div>
      <ImSpinner10 size={40} />
    </div>
  </IconContext.Provider>
);

export default Spinner;
