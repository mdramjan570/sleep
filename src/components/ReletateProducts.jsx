import React from "react";
import CommonHeader from "./CommonHeader.jsx";
import buynow from "../assets/images/buy.png";

import tabletsad from "../assets/images/tramadol.png";
import Star from "./Star.jsx";
const ReletateProducts = () => {
  const productList = new Array(3).fill(null);
  return (
    <div>
      <div Class="border-b border-[#eee] pb-2 pt-4">
        <CommonHeader>
          <h1 className="font-bold">Reletate Products</h1>
        </CommonHeader>
      </div>

      <div className="flex flex-col justify-between gap-5 py-5 sm:flex-row">
        {productList.map((item) => (
          <div className="p-4 bg-white ring-1 ring-[#eae6e6] shadow-[2px_2px_5px_2px_#ccc]  flex flex-col justify-center items-center gap-4">
            <div>
              <img src={tabletsad} alt="" />
            </div>

            <h2 className="text-lg text-[#002139] font-bold">
              Zopiclone 7.5 mg / 10 mg{" "}
            </h2>
            <Star />
            <h2 className="text-[#0e5990] text-lg font-semibold">
              From Only £ 0.77 Each
            </h2>
            <img className="cursor-pointer " src={buynow} alt="buynow" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReletateProducts;
