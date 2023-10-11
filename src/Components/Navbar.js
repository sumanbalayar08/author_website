import React, { useState,useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "@react-hook/media-query";


const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  const toggleMenu = () => {
    settoggle(!toggle);
  };


  return (
    <div className="bg-slate-200 w-full top-0 left-0">
      <div className="relative md:flex justify-between py-4 items-center px-4">
        <div>
          <span className="text-lg font-extrabold ">SUMAN BOOKS</span>
        </div>
        
          <ul className="md:flex items-center space-x-10 hidden">
            <div className="md:flex space-x-4 items-center text-md font-light">
              <li>ARTICLES</li>
              <li>BOOKS</li>
              <li>COURSES</li>
              <li>NEWSLETTER</li>
            </div>

            <div className="md:flex space-x-4 items-center">
              <span className="text-md font-light">LOG IN</span>
              <button className="px-10 py-2 border-2 border-black hover:bg-black hover:text-white font-medium rounded-full">
                SIGN UP
              </button>
            </div>
          </ul>

          <ul className={`absolute md:hidden top-[61px] w-full items-center bg-slate-200 space-y-4 justify-center transform ${toggle? "block":"hidden"}`}>
            <div className="flex flex-col items-center space-y-4">
              <li>ARTICLES</li>
              <li>BOOKS</li>
              <li>COURSES</li>
              <li>NEWSLETTER</li>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <span>LOG IN</span>
              <button className="px-3 py-2 border-2 border-black hover:bg-black hover:text-white font-medium rounded-full">
                SIGN UP
              </button>
            </div>
          </ul>

        <GiHamburgerMenu
          className="absolute cursor-pointer block md:hidden right-8 top-6 scale-110"
          onClick={toggleMenu}
        />
      </div>
      <hr className="border-black" />
    </div>
  );
};

export default Navbar;
