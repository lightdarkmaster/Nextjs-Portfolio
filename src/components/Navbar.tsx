import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full h-fit bg-[#d6a97c] flex poppins-extralight gap-[10px] shadow-md fixed">
      <div className="justify-evenly w-full h-fit p-[10px] gap-[10px]">
        <ul className="flex justify-start items-center gap-[50px] text-[20px] text-white">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">Projects</li>
          <li className="cursor-pointer hover:underline">Services</li>
          <li className="cursor-pointer hover:underline">Contacts</li>
        </ul>
      </div>
      <div className="text-right flex justify-end w-full h-fit p-[10px] gap-[20px]">
        <MdOutlineFacebook className="w-[25px] h-[25px] cursor-pointer text-white hover:text-black" />
        <FaInstagram className="w-[25px] h-[25px] cursor-pointer text-white hover:text-black" />
        <FaTiktok className="w-[22px] h-[22px] cursor-pointer text-white hover:text-black" />
        <FaGithub className="w-[24px] h-[24px] cursor-pointer text-white hover:text-black" />
      </div>
    </div>
  );
}

export default Navbar;
