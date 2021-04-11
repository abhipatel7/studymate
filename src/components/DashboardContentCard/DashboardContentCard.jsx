import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';

export default function DashboardContentCard(props) {
  const { title, onDelete, onEdit } = props;

  return (
    <div className="flex flex-row space-x-2 h-full w-full bg-gray-200 rounded shadow-md p-2">
      <div className="flex flex-none">
        <div className="flex flex-wrap justify-center">
          <div className="w-20 px-4">
            <img
              src={`https://picsum.photos/200?random${(Math.random() * 10)}`}
              alt="..."
              className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-2 w-full justify-between items-center">
        <div className="flex flex-col space-y-1">
          <div className="font-semibold text-sm">Title</div>
          <div className="truncate">Description Here.</div>
        </div>
        <div className="flex flex-col justify-between items-center space-y-1 pr-4">
          <button
            type="button"
            className="text-red-600"
            onClick={onDelete}
          >
            <RiDeleteBinLine size={20} />
          </button>
          <button
            type="button"
            className="text-secondary-500"
            onClick={onEdit}
          >
            <BiEdit size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
