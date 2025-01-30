import React from "react";
import AddReview from "./AddReview";

import CommentList from "./CommentList.jsx";
const reviewLists = [
  {
    name: "Ryan Harnick",
    birth: "Jan 18, 2024",
    comment:
      " Brilliant company I was not sure to start with but I paid and got what I needed and would recommend to my friends and family. If I had the money I would be purchasing today but when I do get paid I will use this company again.",
  },
  {
    name: "Mehidi",
    birth: "Jan 18, 2024",
    comment:
      " Brilliant company I was not sure to start with but I paid and got what I needed and would recommend to my friends and family. If I had the money I would be purchasing today but when I do get paid I will use this company again.",
  },
  {
    name: "Arafat",
    birth: "Jan 01, 2024",
    comment:
      " Brilliant company I was not sure to start with but I paid and got what I needed and would recommend to my friends and family. If I had the money I would be purchasing today but when I do get paid I will use this company again.",
  },
  {
    name: "Munna",
    birth: "Jan 06, 2024",
    comment:
      " Brilliant company I was not sure to start with but I paid and got what I needed and would recommend to my friends and family. If I had the money I would be purchasing today but when I do get paid I will use this company again.",
  },
  {
    name: "Karim",
    birth: "Jan 17, 2024",
    comment:
      " Brilliant company I was not sure to start with but I paid and got what I needed and would recommend to my friends and family. If I had the money I would be purchasing today but when I do get paid I will use this company again.",
  },
  {
    name: "Rahim",
    birth: "Jan 15, 2024",
    comment:
      " Brilliant company I was not sure to start with but I paid and got what I needed and would recommend to my friends and family. If I had the money I would be purchasing today but when I do get paid I will use this company again.",
  },
];

const Reviews = () => {
  return (
    <>
      <div className="py-5">
        <h2 className=" text-lg font-bold text-[#002039] border-b border-[#d6d6d6] pb-2">
          Latest Blog Post
        </h2>
      </div>
      <div className="p-4 my-4 bg-white  shadow-[0_0px_5px_2px_rgba(0,0,0,0.3)] rounded-xl py-5">
        <h2 className="text-2xl text-[#112f46] font-bold pb-3">
          Customer Reviews
        </h2>
        <div className="flex flex-col gap-8">
          {reviewLists.map((comment, index) => {
            return <CommentList comment={comment} key={index} />;
          })}
        </div>
        <AddReview />
      </div>
    </>
  );
};

export default Reviews;
