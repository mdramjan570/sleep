import React from "react";
import { IoMdStar } from "react-icons/io";

const Star = ({ starColor }) => {
  return (
    <div className={`flex items-center  ${starColor}`}>
      <span>
        <IoMdStar />
      </span>
      <span>
        <IoMdStar />
      </span>
      <span>
        <IoMdStar />
      </span>
      <span>
        <IoMdStar />
      </span>
      <span>
        <IoMdStar />
      </span>
    </div>
  );
};

export default Star;
