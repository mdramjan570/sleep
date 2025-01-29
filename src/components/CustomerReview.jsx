import React from "react";
import { FaStar } from "react-icons/fa6";

const CustomerReview = ({ color }) => {
  return (
    <div className="flex items-center text-xl text-[#ddd]  gap-1">
      <span className={`${color} cursor-pointer hover:text-yellow-300`}>
        <FaStar />
      </span>
      <span className={`${color} cursor-pointer hover:text-yellow-300`}>
        <FaStar />
      </span>
      <span className={`${color} cursor-pointer hover:text-yellow-300`}>
        <FaStar />
      </span>
      <span className={`${color} cursor-pointer hover:text-yellow-300`}>
        <FaStar />
      </span>
      <span className={`${color} cursor-pointer hover:text-yellow-300`}>
        <FaStar />
      </span>
    </div>
  );
};

export default CustomerReview;
