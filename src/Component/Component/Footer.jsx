import React from "react";
import { Typography } from "@material-tailwind/react";
const Footer = () => {
  return (
    <>
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t  py-5 text-center md:justify-between container mx-auto bg-transparent  ">
        <Typography color="blue-gray" className="font-normal">
          &copy; 2024 Salah Mohamed
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
