import React from "react";

const Navbar2 = () => {
  return (
    <ul className="absolute top-[60px] w-full items-center bg-slate-200 space-y-4 justify-center transition-all">
      <div className="flex flex-col items-center space-y-4">
        <li className="hover:bg-blue-500 w-fit">ARTICLES</li>
        <li >BOOKS</li>
        <li>COURSES</li>
        <li>NEWSLETTER</li>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <span>LOG IN</span>
        <button className="px-3 py-2 border-2 border-black hover:bg-black hover:text-white font-medium rounded-full">SIGN UP</button>
      </div>
    </ul>
  );
};

export default Navbar2;
