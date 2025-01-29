import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { MdPayment } from "react-icons/md";
import { CiBadgeDollar } from "react-icons/ci";
import { PiCarProfileThin } from "react-icons/pi";
const service = [
  { title: "100% Satisfaction ", des: "Feedback", icon: <BiSolidLike /> },
  { title: "24/7 Support", des: "Customer Care", icon: <TiMessages /> },
  { title: "Payment", des: "Secure System", icon: <MdPayment /> },
  { title: " Quality Assurance ", des: "100% Secure", icon: <CiBadgeDollar /> },
  { title: "Fast Delivery ", des: "", icon: <PiCarProfileThin /> },
];
const Service = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[2px]  text-white">
      {service.map((item) => {
        return (
          <div className="flex items-center p-2 md:flex-col bg-primary md:flex-1">
            <div className="flex items-center w-1/2 gap-1 border-r border-white md:justify-center md:w-full md:border-none">
              <span className="text-4xl font-bold">{item.icon}</span>
              <span className="text-sm font-medium md:text-xl">
                {item.title}
              </span>
            </div>

            <div className="w-1/2 pl-8 md:text-center md:w-full md:pl-4 ">
              {item.des}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
