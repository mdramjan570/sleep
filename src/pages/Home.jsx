import React from "react";
import CommonWrapper from "../components/CommonWrapper";
import banner from "../assets/images/banner.jpg";
import pill from "../assets/images/free_pills_icon.png";
import { DiAndroid } from "react-icons/di";
import Service from "../components/ui/Service";
import Descripption from "../components/ui/Descripption";
import BodyCard from "../components/BodyCard";
import Pillow from "../components/Pillow";
import TextArea from "../components/TextArea";
import Reviews from "../components/Reviews";
import Cuppon from "../components/Cuppon";
const Home = () => {
  return (
    <>
      <CommonWrapper>
        <div className="flex flex-col items-stretch justify-between gap-4 md:flex-row">
          <div className="relative flex-1 w-full">
            <img className="w-full h-full " src={banner} alt="banner" />

            <div className=" sm:min-w-[380px] sm:absolute flex items-center justify-between md:gap-10  px-4 py-1.5  rounded-md bg-white  bottom-5 right-3 text-black border border-dashed border-[#002039]  font-bold mt-1">
              <Cuppon />
            </div>
          </div>

          <div className="  w-full md:w-1/5 bg-primary flex flex-col  items-center justify-center gap-2 text-white px-2.5 py-4 ">
            <img className="" src={pill} alt="banner" />
            <h2 className="w-full py-2 text-xl text-center uppercase border border-white border-dashed">
              Get 30 free pills
            </h2>
            <p className="text-lg font-medium ">With 1st Mobile App Order</p>
            <div className="w-full flex items-center gap-2 bg-black hover:bg-[#26CC00] border border-white p-2 cursor-pointer">
              <span className="text-2xl">
                <DiAndroid />
              </span>
              <h2 className="uppercase ">Read more</h2>
            </div>
            <p className="italic text-small ">For Android Devices Only</p>
          </div>
        </div>
      </CommonWrapper>
      <CommonWrapper>
        <Service />
        <Descripption />
        <BodyCard />
      </CommonWrapper>
      <CommonWrapper>
        <Pillow />
      </CommonWrapper>
      <CommonWrapper>
        <TextArea />
      </CommonWrapper>
      <CommonWrapper>
        <Reviews />
      </CommonWrapper>
    </>
  );
};

export default Home;
