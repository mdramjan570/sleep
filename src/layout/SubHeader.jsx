import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const SubHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Home",
    "About Us",
    "Products",
    "FAQS",
    "Testimonials",
    "Contact Us",
    "Bitcoin",
    "Blog Discount",
  ];

  return (
    <Navbar
      className="h-12 mt-[1px] md:mt-2 md:bg-primary bg-[#002039]"
      classNames={{
        wrapper: "      ",
        toggle: "",
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
    >
      <NavbarContent className="flex !justify-center text-white md:hidden   ">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden h-12 gap-0 md:flex">
        {menuItems.map((item, index) => {
          return (
            <NavbarItem
              key={index}
              className="flex items-center justify-center h-full px-4 border-r border-white lg:px-8 last:border-none"
            >
              <Link
                className="flex items-center gap-1 "
                color="secondary"
                href="#"
              >
                {item}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarMenu className=" !h-[400px] !w-full absolute top-[150px] px-4  gap-0  justify-center items-center ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            className="border-b w-full border-[#409dd2] py-3 cursor-pointer flex items-center  justify-center bg-[#3474B1] last:border-none"
            key={index}
          >
            <Link className="flex text-white ">{item}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default SubHeader;
