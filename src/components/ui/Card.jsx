import React, { useState } from "react";
import medecine from "../../assets/images/ambien.png";
import {
  Button,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";

const carrtItems = [
  { key: "cat", label: "£38.99 for 30 Tablets" },
  { key: "dog", label: "£58.99 for 60 Tablets" },
  { key: "elephant", label: "£83.99 for 90 Tablets" },
  { key: "lion", label: "£106.99 for 120 Tablets" },
  { key: "tiger", label: "£125.99 for 150 Tablets" },
  { key: "giraffe", label: "£145.99 for 180 Tablets" },
  { key: "dolphin", label: "£159.99 for 200 + 10 Free Tablets" },
];
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className=" flex flex-col gap-4 p-4 ring-1 ring-[#e4e0e0]">
        <h2 className="text-lg font-bold ">Zopiclone 7.5 mg / 10 mg </h2>
        <div className="w-full ">
          <img src={medecine} alt="logo" />
        </div>
        <p className="text-justify ">
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </p>
        <div className="flex justify-center ">
          <RadioGroup
            className="flex items-center gap-8"
            orientation="horizontal"
            defaultValue="mg"
          >
            <Radio value="mg">7.5 mg</Radio>
            <Radio value="10mg">10 mg</Radio>
          </RadioGroup>
        </div>

        <div className="flex items-center w-full gap-2">
          <Select
            className="w-full"
            defaultSelectedKeys={["cat"]}
            isOpen={isOpen}
            onOpenChange={(open) => open !== isOpen && setIsOpen(open)}
          >
            {carrtItems.map((item) => (
              <SelectItem key={item.key}>{item.label}</SelectItem>
            ))}
          </Select>
        </div>

        <div className="flex justify-between gap-4 ">
          <Link to={"/product/25"}>
            <Button className=" bg-[#08233b] uppercase text-white" size="lg">
              View info
            </Button>
          </Link>
          <Button
            className="text-white bg-[#08233b] hover:bg-[#08233b]"
            size="lg"
            variant="shadow"
          >
            BUY NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
