import React from "react";

const Footer = () => {
  return (
    <div className="flex px-[7%] text-white bg-zinc-800 py-[6%] justify-between">
      <div className="flex-col justify-between w-80 space-y-24">
        <div className="flex-col space-y-4">
          <div className="text-2xl font-bold">SUMAN BALAYAR</div>
          <div className="text-sm ">
            Mark is the three-time #1 New York Times bestselling author of The
            Subtle Art of Not Giving a F*ck, as well as other titles. His books
            have sold around 20 million copies, been translated into more than
            65 languages, and reached number one in more than a dozen countries.
            In 2023, a feature film about his life and ideas was released
            worldwide by Universal Pictures.
          </div>
          <div className="font-semibold text-md">LEARN MORE ABOUT MARK</div>
        </div>
        <div>© 2023 Infinity Squared Media LLC</div>
      </div>
      <hr className="border-red-600" />
      <div className="flex flex-col justify-between">
        <div className="flex space-x-40">
          <ul className="flex-col space-y-4 font-serif">
            <li>ARTICLES</li>
            <li>COURSES</li>
            <li>ABOUT SUMAN</li>
            <li>CONTACT</li>
          </ul>
          <ul className="flex-col space-y-4 font-serif">
            <li>BOOK</li>
            <li>NEWSLETTER</li>
            <li>SIGN UP</li>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex flex-col text-sm font-serif space-y-2">
            <li>Privacy Policy</li>
            <li>Cookies Settings</li>
            <li>Terms and Conditions</li>
          </ul>
          <div>Social Icons</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
