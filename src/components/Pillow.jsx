import React from "react";
import { TiArrowRight } from "react-icons/ti";
import pillow from "../assets/images/sleep_home.jpg";
const list = new Array(4).fill(null);
const PillowCard = () => {
  return (
    <div className="w-full hover:shadow-2xl group">
      <div className="w-full h-[200px] overflow-hidden   ">
        <img
          className="w-full h-full transition-all duration-300 hover:scale-110"
          src={pillow}
          alt="pillow"
        />
      </div>
      <div className="z-50 flex items-center justify-center text-lg text-white capitalize transition-all bg-primary Pillowback group-hover:bg-[#604ed5]">
        <h2>see all Sleeping Pills</h2>
        <span className="py-2 text-xl font-bold">
          <TiArrowRight />
        </span>
      </div>
    </div>
  );
};
const Pillow = () => {
  return (
    <div className="grid w-full gap-4 py-4 cursor-pointer justify-items-center grid-cols-auto ">
      {list.map((item) => {
        return <PillowCard />;
      })}
    </div>
  );
};

export default Pillow;
