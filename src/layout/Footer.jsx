import React from "react";
import CommonWrapper from "../components/CommonWrapper";
import { IoMdArrowDropright } from "react-icons/io";
const footerList = [
  { title: "About Us", icon: <IoMdArrowDropright /> },
  { title: "Privacy Policy", icon: <IoMdArrowDropright /> },
  { title: "Contact Us", icon: <IoMdArrowDropright /> },
  { title: "Blog", icon: <IoMdArrowDropright /> },
  { title: "Sitemap", icon: <IoMdArrowDropright /> },
  { title: "Delivery Information", icon: <IoMdArrowDropright /> },
  { title: "Terms & Conditions", icon: <IoMdArrowDropright /> },
  { title: "Returns", icon: <IoMdArrowDropright /> },
  { title: "Share with Friends", icon: <IoMdArrowDropright /> },
];
import { AiFillShopping } from "react-icons/ai";
import { SiLinktree } from "react-icons/si";
import { FaTiktok, FaInstagram } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import dmca from "../assets/images/dmca.png";
import secured from "../assets/images/secured.png";
import satisfaction from "../assets/images/satisfaction.png";
import icons_payment from "../assets/images/icons_payment.png";
const Footer = () => {
  return (
    <>
      <div className="bg-[#002139]">
        <CommonWrapper>
          <div className="flex flex-col gap-4 sm:flex-row justify-between py-4 text-[#e4e4e4]">
            <div className="w-full md:px-8 sm:w-1/4 md:w-4/12 ">
              <p className="pb-2 border-b border-primary/50">Support</p>
              <p className="pt-2 text-sm font-bold">
                Working hours : 24 hours a day
              </p>
              <p className="text-sm font-bold">
                Working days : Monday to Sunday (7 days a week)
              </p>
            </div>

            <div className="w-full sm:w-1/4 md:w-3/12">
              <p className="pb-2">Information</p>

              <div className="grid grid-cols-2 ">
                {footerList.map((list, index) => {
                  return (
                    <ul key={index} className="flex items-center">
                      <span className="text-2xl text-primary">{list.icon}</span>
                      <li className="text-xs cursor-pointer">{list.title}</li>
                    </ul>
                  );
                })}
              </div>
            </div>

            <div className="w-full space-y-2 sm:w-1/4 md:w-2/12 ">
              <div className="flex items-center">
                <img src={secured} alt="secured" />
                <p className="text-sm">Shop online with us Safely & securely</p>
              </div>
              <img className="cursor-pointer " src={dmca} alt="dmca" />
            </div>

            <div className="w-full space-y-4 sm:w-1/4 md:w-3/12">
              <img src={satisfaction} alt="satisfaction" />
              <div>
                <div className="flex items-center gap-1 pb-1">
                  <span className="text-lg ">
                    <AiFillShopping />
                  </span>
                  <h2 className="text-sm">Secure Shopping</h2>
                </div>
                <img src={icons_payment} alt="icons_payment" />
              </div>

              <div className="flex flex-wrap gap-1.5 ">
                <span className=" text-white bg-[#3d5998] p-2 rounded-md cursor-pointer">
                  <FaFacebookF />
                </span>
                <span className=" text-white bg-[#cb2027] p-2 rounded-md cursor-pointer">
                  <FaPinterest />
                </span>
                <span className=" text-white bg-[#dc472e] p-2 rounded-md cursor-pointer">
                  <TfiYoutube />
                </span>
                <span className=" text-white bg-[#b21b84] p-2 rounded-md cursor-pointer">
                  <FaInstagram />
                </span>
                <span className=" text-white bg-[#000] p-2 rounded-md cursor-pointer">
                  <FaTiktok />
                </span>
                <span className=" text-white bg-[#43e660] p-2 rounded-md cursor-pointer">
                  <SiLinktree />
                </span>
              </div>
            </div>
          </div>
        </CommonWrapper>
      </div>
      <div className="py-1 text-center text-white bg-black">
        <CommonWrapper>
          <p>2025 © Sleeping Pills. All Rights Reserved.</p>
        </CommonWrapper>
      </div>
    </>
  );
};

export default Footer;
