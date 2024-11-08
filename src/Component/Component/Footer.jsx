import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t bg-transparent text-center md:text-left container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-x-8">
        <Typography color="blue-gray" className="font-normal text-sm">
          &copy; 2024 Salah Mohamed. All Rights Reserved.
        </Typography>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <li>
            <Typography
              href="#"
              color="blue-gray"
              className="font-normal text-sm transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <Link to="contactus">Contact Us</Link>
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
