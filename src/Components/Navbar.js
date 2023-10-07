import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-around bg-slate-200 py-5 items-center">
        <div>
          <span className="flex text-xl font-extrabold ">SUMAN BALAYAR</span>
        </div>

        <ul className="flex flex-row space-x-5 text-md font-light">
          <li>ARTICLES</li>
          <li>BOOKS</li>
          <li>COURSES</li>
          <li>NEWSLETTER</li>
        </ul>

        <div className="flex flex-row space-x-3 items-center">
          <span className="text-md font-light">LOG IN</span>
          <button className="px-10 py-2 border-2 border-black hover:bg-black hover:text-white font-medium rounded-full">
            SIGN UP
          </button>
        </div>
      </div>
      <hr className="border-black" />
    </div>
  );
};

export default Navbar;
