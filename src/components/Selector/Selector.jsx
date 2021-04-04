import React, { useState } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';
import { BsPlusCircleFill } from 'react-icons/bs';

import SearchBar from '../SearchBar/SearchBar';
import ImageCard from '../ImageCard/ImageCard';
import Modal from '../Modal/Modal';

const Selector = (props) => {
  const {
    items, selectedItems, addLabel, selectItem, removeItem,
  } = props;

  const [show, setShow] = useState(false);

  return (
    <>
      <div className="w-full rounded-full flex justify-between items-center border border-customGray px-2">
        <div className="flex flex-1 h-full w-full overflow-auto rounded-full">
          <div className="flex h-full w-full items-center space-x-2 py-2">
            {selectedItems && selectedItems.length > 0 ? selectedItems.map((item) => (
              <div className="rounded-full relative px-3 py-1 bg-secondary" key={item.id}>
                <div
                  className="absolute -top-1 -right-1 text-red-600 bg-gray-200 rounded-full cursor-pointer"
                  onClick={() => removeItem(item)}
                >
                  <RiCloseCircleFill size={15} />
                </div>
                <div className="text-xs text-white">{item.name}</div>
              </div>
            )) : (
              <div className="px-3 py-1">
                Please select {addLabel}!
              </div>
            )}
          </div>
        </div>
        <div
          className="flex flex-none space-x-3 justify-between items-center px-2 py-1 rounded-full bg-white shadow-md cursor-pointer"
          onClick={() => setShow(true)}
        >
          <div className="text-gray-400 text-xs">{addLabel}</div>
          <div className="text-primary">
            <BsPlusCircleFill size={20} />
          </div>
        </div>
      </div>
      <Modal
        show={show}
        handleClose={() => setShow(false)}
      >
        <SearchBar />
        {items && items.length > 0 ? items.map((item) => (
          <>
            <ImageCard name={item.name} id={item.id} key={item.id} />
            <button onClick={() => selectItem(item)}>Add</button>
          </>
        )) : (
          <div>No {addLabel} found!</div>
        )}
      </Modal>
    </>
  );
};

export default Selector;
