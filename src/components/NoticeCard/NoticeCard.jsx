import React from 'react';

import { MdDeleteForever } from 'react-icons/md';

function NoticeCard(props) {
  const {
    title, description, to, onDeleteNotice, admin, id,
  } = props;

  return (
    <div className="rounded-xl flex flex-col space-y-2 p-3 bg-white shadow-md">
      <div className="flex flex-row justify-between">
        <div className="text-lg font-semibold">{title}</div>
        { admin
          ? (
            <button
              type="button"
              className="text-red-600"
              onClick={() => onDeleteNotice(id)}
            >
              <MdDeleteForever size={21} />
            </button>
          ) : null }
      </div>
      <div>{description}</div>
      <div className="flex justify-end items-center">
        <div className="px-3 py-1 rounded-full bg-secondary-100 text-secondary w-auto">{to}</div>
      </div>
    </div>
  );
}

export default NoticeCard;
