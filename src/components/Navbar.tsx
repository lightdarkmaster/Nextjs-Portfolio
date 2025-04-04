import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full h-fit bg-[#D7BCA1] flex poppins-extralight gap-[10px] shadow-md fixed">
      <div className="justify-evenly w-full h-fit p-[10px] gap-[10px]">
        <ul className="flex justify-start items-center gap-[50px] text-[20px]">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">Projects</li>
          <li className="cursor-pointer hover:underline">Services</li>
          <li className="cursor-pointer hover:underline">Contacts</li>
        </ul>
      </div>
      <div className="text-right flex justify-end w-full h-fit p-[10px] gap-[20px]">
        <MdOutlineFacebook className="w-[25px] h-[25px] cursor-pointer text-white hover:text-black" />
        <FaInstagram className="w-[25px] h-[25px] cursor-pointer text-white hover:text-black" />
        <FaTiktok className="w-[25px] h-[20px] cursor-pointer text-white hover:text-black" />
        <FaGithub className="w-[23px] h-[25px] cursor-pointer text-white hover:text-black" />
      </div>
    </div>
  );
}

export default Navbar;
