import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';

import Modal from '../Modal/Modal';
import Button from '../Button/Button';

export default function DashboardContentCard(props) {
  const {
    title, onDelete, id, admin,
  } = props;

  const [deleteShow, setDeleteShow] = useState(false);

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
          <div className="font-semibold text-sm">{title || 'Title'}</div>
          <div className="truncate">Description Here.</div>
        </div>
        { admin ? (
          <div className="flex flex-col justify-between items-center space-y-1 pr-4">
            <button
              type="button"
              className="text-red-600"
              onClick={() => setDeleteShow(true)}
            >
              <RiDeleteBinLine size={20} />
            </button>
          </div>
        ) : null }
      </div>
      <Modal
        show={deleteShow}
        handleClose={() => setDeleteShow(false)}
      >
        <div className="flex flex-col space-y-3 p-3">
          <div className="flex justify-start items-center text-md font-medium">Are your sure want to delete?</div>
          <div className="flex flex-row space-x-2 justify-end">
            <Button
              rounded
              color="secondary"
              onClick={() => setDeleteShow(false)}
            >
              Cancel
            </Button>
            <Button
              rounded
              onClick={() => {
                onDelete(id);
                setDeleteShow(false);
              }}
              icon={<MdDeleteForever size={20} />}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
