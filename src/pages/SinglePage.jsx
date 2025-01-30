import React from "react";
import CommonWrapper from "../components/CommonWrapper";
import CustomerReview from "../components/CustomerReview";
import CommonHeader from "../components/CommonHeader";
import TextArea from "../components/TextArea";
import image from "../assets/images/carisoprodol.png";
import Cuppon from "../components/Cuppon";
import buy from "../assets/images/buy.png";
import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
  TableCell,
  Tab,
  Tabs,
} from "@nextui-org/react";
import AddReview from "../components/AddReview.jsx";
import CommentList from "../components/CommentList.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
const reviewLists = [
  {
    name: "Ryan Harnick",
    birth: "Jan 18, 2024",
    comment:
      " Brilliant company I was not sure to start with but I paid and got what I needed and would recommend to my friends and family. If I had the money I would be purchasing today but when I do get paid I will use this company again.",
  },
];
const medicinesList = [
  { tablet: 8, totalPrice: 20, perTablet: 87, icon: buy },
  { tablet: 10, totalPrice: 20, perTablet: 28, icon: buy },
  { tablet: 8, totalPrice: 12, perTablet: 30, icon: buy },
  { tablet: 16, totalPrice: 20, perTablet: 85, icon: buy },
  { tablet: 10, totalPrice: 20, perTablet: 25, icon: buy },
  { tablet: 16, totalPrice: 20, perTablet: 85, icon: buy },
];
const SinglePage = () => {
  return (
    <CommonWrapper CommonWrapper>
      <Breadcrumbs Class="border-b-[3px] border-[#002039] pb-4" />

      <div className="mt-2">
        <CommonHeader>Zolpidem (Ambien) 10 mg</CommonHeader>

        <div className="flex items-center gap-2">
          <CustomerReview color={"text-yellow-300"} />
          <p>( 6 customer reviews)</p>
        </div>
        <p>
          Zolpidem (Ambien) 10 mg Zolpidem is sold under popular brand names
          Ambien and Stilnox and is recommended for the short term treatment of
          insomnia. Often referred to by its most popular brand name Ambien,
          zolpidem provides fast, undisturbed sleep for up to 8 hours for people
          suffering from sleep related disorders.
        </p>
        <div className="flex flex-col items-center justify-between w-full gap-4 py-5 md:flex-row">
          <div className="relative flex items-center justify-center w-full md:w-1/2 ring-1 ring-[#eee]">
            <img className="object-scale-down py-16" src={image} alt="image" />

            <div className="absolute flex items-center justify-between md:gap-10 px-4 py-1.5  rounded-md bg-white   text-black border border-dashed border-[#002039]  font-bold  top-3/4   slide-out-to-left-1/2">
              <Cuppon />
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <div className="flex flex-col w-full py-2">
              <Tabs
                variant="bordered"
                classNames={{ wrapper: "bg-red-500" }}
                color="primary"
                fullWidth
                size="lg"
                radius="sm"
                aria-label="Options"
              >
                <Tab
                  aria-label="Disabled Options"
                  disabledKeys={["music"]}
                  key="music"
                  title="SELECT STRENGTH"
                ></Tab>
                <Tab key="music" title="7.5 mg"></Tab>
                <Tab key="videos" title="10 mg"></Tab>
              </Tabs>
            </div>
            <Table
              isStriped
              isHeaderSticky
              classNames={{
                th: "bg-[#184971] text-white  text-sm font-medium",
              }}
              radius="none"
              aria-label="Example static collection table"
            >
              <TableHeader>
                <TableColumn>Tablets</TableColumn>
                <TableColumn>Total Price</TableColumn>
                <TableColumn>Per Tablet </TableColumn>
                <TableColumn>Add to Cart</TableColumn>
              </TableHeader>
              <TableBody>
                {medicinesList.map((tablet) => {
                  return (
                    <TableRow key="1">
                      <TableCell>{tablet.tablet}</TableCell>
                      <TableCell>{tablet.totalPrice}</TableCell>
                      <TableCell>{tablet.perTablet}</TableCell>
                      <TableCell>
                        <img className="h-6 " src={tablet.icon} alt="logo" />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className=" bg-[#002039] rounded-t-sm border border-[#002039] px-4 py-2 text-white w-max mb-1.5">
          Description
        </div>
        <TextArea Class="bg-[#f9f9f9] p-4 ring-1 ring-[#eee]" />
        <div className=" bg-[#002039] rounded-t-sm border border-[#002039] px-4 py-2 text-white w-max mt-8 mb-1.5">
          Reviews
        </div>
        <div className="bg-[#f9f9f9] px-4 border border-[#eee] py-5">
          {reviewLists.map((comment, index) => {
            return <CommentList comment={comment} key={index} />;
          })}
          <AddReview Class="" />
        </div>
      </div>
    </CommonWrapper>
  );
};

export default SinglePage;
