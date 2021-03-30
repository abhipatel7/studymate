import React from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';
import { BsPlusCircleFill } from 'react-icons/bs';

const Selector = (props) => {
  console.log(props);

  return (
    <div className="w-full rounded-full flex justify-between items-center border border-customGray px-2">
      <div className="flex flex-1 h-full w-full overflow-auto rounded-full">
        <div className="flex h-full w-full items-center space-x-2 py-2">
          <div className="rounded-full relative px-3 py-1 bg-secondary">
            <div className="absolute -top-1 -right-1 text-red-600 bg-gray-200 rounded-full cursor-pointer"><RiCloseCircleFill size={15} /></div>
            <div className="text-xs text-white">Anirudh</div>
          </div>
          <div className="rounded-full relative px-3 py-1 bg-secondary">
            <div className="absolute -top-1 -right-1 text-red-600 bg-gray-200 rounded-full cursor-pointer"><RiCloseCircleFill size={15} /></div>
            <div className="text-xs text-white">Vidhi</div>
          </div>
          <div className="rounded-full relative px-3 py-1 bg-secondary">
            <div className="absolute -top-1 -right-1 text-red-600 bg-gray-200 rounded-full cursor-pointer"><RiCloseCircleFill size={15} /></div>
            <div className="text-xs text-white">Abhishek</div>
          </div>
        </div>
      </div>
      <div className="flex flex-none space-x-3 justify-between items-center px-2 py-1 rounded-full bg-white shadow-md cursor-pointer">
        <div className="text-gray-400 text-xs">Faculty</div>
        <div className="text-primary">
          <BsPlusCircleFill size={20} />
        </div>
      </div>
    </div>
  );
};

export default Selector;
