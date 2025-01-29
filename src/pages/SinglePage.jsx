import React from "react";
import CommonWrapper from "../components/CommonWrapper";
import CustomerReview from "../components/CustomerReview";
import CommonHeader from "../components/CommonHeader";
import Reviews from "../components/Reviews";
import TextArea from "../components/TextArea";

import image from "../assets/images/carisoprodol.png";
import Cuppon from "../components/Cuppon";
import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
  TableCell,
  Tab,
  Tabs,
  Card,
  CardBody,
} from "@nextui-org/react";

const SinglePage = () => {
  return (
    <CommonWrapper CommonWrapper>
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
      <div className="flex items-center justify-between w-full gap-4 py-5">
        <div className="relative flex items-center justify-center w-1/2 ring-1">
          <img className="object-scale-down py-20" src={image} alt="image" />

          <div className="sm:min-w-[400px] sm:absolute flex items-center justify-between md:gap-10  px-4 py-1.5  rounded-md bg-white   text-black border border-dashed border-[#002039]  font-bold  bottom-4  left-24">
            <Cuppon />
          </div>
        </div>
        <div className="w-1/2 ">
          <div className="flex flex-col w-full py-2">
            <Tabs
              variant="solid"
              color="primary"
              fullWidth
              size="lg"
              radius="sm"
              aria-label="Options"
            >
              <Tab key="photos" title="SELECT STRENGTH"></Tab>
              <Tab key="music" title="7.5 mg"></Tab>
              <Tab key="videos" title="10 mg"></Tab>
            </Tabs>
          </div>
          <Table radius="none" aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Tablets</TableColumn>
              <TableColumn>Total Price</TableColumn>
              <TableColumn>Per Tablet </TableColumn>
              <TableColumn>Add to Cart</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>28</TableCell>
                <TableCell>10</TableCell>
                <TableCell>10</TableCell>
                <TableCell>butom</TableCell>
              </TableRow>
              <TableRow key="1">
                <TableCell>28</TableCell>
                <TableCell>10</TableCell>
                <TableCell>10</TableCell>
                <TableCell>butom</TableCell>
              </TableRow>
              <TableRow key="1">
                <TableCell>28</TableCell>
                <TableCell>10</TableCell>
                <TableCell>10</TableCell>
                <TableCell>butom</TableCell>
              </TableRow>
              <TableRow key="1">
                <TableCell>28</TableCell>
                <TableCell>10</TableCell>
                <TableCell>10</TableCell>
                <TableCell>butom</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>56</TableCell>
                <TableCell>15</TableCell>
                <TableCell>15</TableCell>

                <TableCell>Paused</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>85</TableCell>
                <TableCell>85</TableCell>
                <TableCell>85</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>65</TableCell>
                <TableCell>15</TableCell>
                <TableCell>15</TableCell>
                <TableCell>Vacation</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <TextArea />
      <Reviews />
    </CommonWrapper>
  );
};

export default SinglePage;
