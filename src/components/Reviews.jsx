import React from "react";
import AddReview from "./AddReview";
import Star from "./Star";
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
            return (
              <div className="flex items-start gap-4" key={index}>
                <div className="flex items-center justify-center min-w-16 min-h-16 bg-[#ddd] rounded-full text-3xl">
                  {comment.name.split(" ")[0].split("")[0]}
                </div>

                <div className="flex flex-col gap-2 ring-1 ring-[#eee] p-4  rounded-md">
                  <div className="flex items-center gap-1 ">
                    <Star starColor=" text-yellow-300" />

                    <div>
                      <span>
                        <b>{comment.name}</b> -{comment.birth}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#292828]">{comment.comment}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <AddReview />
      </div>
    </>
  );
};

export default Reviews;
