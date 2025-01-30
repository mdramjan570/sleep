import React from "react";
import { MdOutlineArrowRight } from "react-icons/md";
const Breadcrumbs = ({ Class }) => {
  return (
    <div className={`${Class}`}>
      <ul className="flex items-center gap-1 py-2 pl-4 text-sm font-semibold bg-[#e9ecef]  rounded-sm ">
        <li>Home</li>
        <span className="text-lg">
          <MdOutlineArrowRight />
        </span>
        <li>painkiller-tablets</li>
        <span className="text-lg">
          <MdOutlineArrowRight />
        </span>
        <li>dihydrocodeine-30-mg</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
