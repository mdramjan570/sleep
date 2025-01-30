import React from "react";
import Card from "./ui/Card.jsx";

const BodyCard = () => {
  const list = new Array(20).fill(null);
  return (
    <div className="grid w-full gap-4 grid-cols-auto">
      {list.map((item) => {
        return <Card />;
      })}
    </div>
  );
};

export default BodyCard;
