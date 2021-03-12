import React from 'react';

const ImageCard = (props) => (
  <div className="m-4 flex flex-row">
    <img
      className="rounded-full w-14 bg-gray-100 mr-4"
      src={`https://robohash.org/${Math.floor(Math.random() * 10)}.png`}
      alt=""
    />
    <div className="flex flex-col mt-1">
      <h1 className="text-xl">{props.name}</h1>
      <p className="flex">{props.id}</p>
    </div>
  </div>
);

export default ImageCard;
