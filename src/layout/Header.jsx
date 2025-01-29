import { Button, Select, SelectItem } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import CommonWrapper from "../components/CommonWrapper";
import SubHeader from "./SubHeader";

const menuList = [
  { key: "cat", label: "EUR" },
  { key: "dog", label: "USD" },
  { key: "elephant", label: "GBP" },
  { key: "lion", label: "CAD" },
  { key: "tiger", label: "BTC" },
  { key: "giraffe", label: "SGD" },
];
const Header = () => {
  const [stricky, setStricky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStricky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`${
        stricky
          ? "fixed bg-white w-full shadow z-20  transition-all scroll-smooth"
          : ""
      }`}
    >
      <CommonWrapper>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-4xl font-bold uppercase ">sleeping pills</h2>
          </div>
          <div className="hidden md:block">
            <img
              src="https://www.sleepingpillsuk.com/images/head_btc.png"
              alt="logo"
            />
          </div>
          <div className="flex flex-row-reverse items-center self-end gap-2 md:flex-row">
            <Button
              className="text-white bg-[#002039] hover:bg-white hover:text-[#002039] ring-1 hover:ring-[#002039]"
              radius="none"
            >
              (0) My Cart
            </Button>

            <Select
              className="w-[100px] border-none bg-transparent "
              classNames={{
                trigger: "bg-[#057793]  ",
                innerWrapper: "text-white ",
                mainWrapper: " hover:bg-red-500",
                popoverContent:
                  "bg-[#057793] ring-1 ring-gray-400 rounded-none text-white",
              }}
              defaultSelectedKeys={["cat"]}
              selectionMode="single"
              radius="none"
            >
              {menuList.map((item) => (
                <SelectItem key={item.key}>{item.label}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <SubHeader />
      </CommonWrapper>
    </div>
  );
};

export default Header;
