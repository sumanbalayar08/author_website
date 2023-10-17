import React from "react";
import { CiTwitter, CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="text-white bg-zinc-800">
      <div className="flex-1 md:flex md:justify-around md:px-[2%] md:py-[6%]">
        <div className="flex-col md:w-96 md:space-y-4">
          <div className="text-2xl font-bold items-center justify-center py-[6%] md:py-0 text-center md:text-left">
            SUMAN BALAYAR
          </div>
          <hr className="md:hidden border-slate-600 border-1" />
          <div className="text-sm pt-[6%] px-[4%] md:pt-0 md:px-0 text-center md:text-left">
            Mark is the three-time #1 New York Times bestselling author of The
            Subtle Art of Not Giving a F*ck, as well as other titles. His books
            have sold around 20 million copies, been translated into more than
            65 languages, and reached number one in more than a dozen countries.
            In 2023, a feature film about his life and ideas was released
            worldwide by Universal Pictures.
          </div>
          <div className="font-semibold text-md py-[4%] md:py-0 text-center md:text-left">
            LEARN MORE ABOUT MARK
          </div>
        </div>
        <hr className="md:hidden border-slate-600 border-1" />
        <div>
          <div className="flex space-x-20 justify-center py-[6%]">
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
          <hr className="md:hidden border-slate-600 border-1" />
          <div className="flex-col flex md:flex-row-reverse items-center justify-center space-y-8 py-[6%]">
            <div className="flex space-x-2 items-center justify-center md:-translate-y-5">
              <CiFacebook size={30} />
              <CiInstagram size={30} />
              <CiLinkedin size={30} />
              <CiTwitter size={30} />
            </div>
            <ul className="flex-col space-y-4 font-serif text-center md:text-left">
              <li>Privacy Policy</li>
              <li>Manage Cookie Settings</li>
              <li>Terms and Conditions</li>
            </ul>
            <div className="text-center md:hidden">© 2023 Infinity Squared Media LLC</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
