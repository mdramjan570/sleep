import React from "react";

const Cuppon = () => {
  return (
    <>
      <div className="flex flex-col gap-1 text-sm leading-4 uppercase sm:text-lg">
        <p>
          Get <span className="italic ">10% off</span> on
        </p>
        <p>every order!</p>
      </div>
      <div className="flex flex-col gap-2 uppercase">
        <p>Apply Code</p>
        <h2 className="miw-w-[120px] px-2 text-2xl text-white bg-[#002039] rounded-md border border-dashed border-white ">
          SLEEP2025
        </h2>
      </div>
    </>
  );
};

export default Cuppon;
