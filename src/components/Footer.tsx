import React from 'react'

function Footer() {
  return (
    <div className="w-full h-fit bg-[#d6a97c] flex poppins-extralight shadow-md">
      <div className="w-full h-fit flex flex-col justify-center items-center p-[5px] gap-[5px]">
        <p className="text-center text-[20px] text-white">© 2025 Christian Barbosa All rights reserved.</p>
        <div className="flex justify-center items-center gap-[20px]">
          <a href="#" className="text-white hover:text-black">Privacy Policy</a>
          <a href="#" className="text-white hover:text-black">Terms of Service</a>
          <a href="#" className="text-white hover:text-black">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;