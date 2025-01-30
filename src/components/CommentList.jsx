import React from "react";
import Star from "./Star.jsx";
const CommentList = ({ Class, comment }) => {
  return (
    <div className={`flex items-start gap-4 ${Class}`}>
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
};

export default CommentList;
