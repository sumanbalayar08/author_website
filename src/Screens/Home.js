import React from "react";
import image1 from "../images/two-phones-vertical-blue-background-opt-2.webp";
import image2 from "../images/phone-slanted-breakthrough-3.png";

const Home = () => {
  return (
    <>
      <div className="bg-slate-200">
        <div className="flex flex-col items-center justify-center py-[4%] px-[2%] space-y-10">
          <div className="md:flex text-center">
            <span className="text-5xl md:text-6xl lg:text-7xl font-semibold">
              5 Minutes That Might
              <br /> Change Your Life
            </span>
          </div>

          <div className="flex-1 md:flex items-center justify-center h-fit">
            <div className="flex items-center justify-center">
              <img
                className="w-2/3"
                src={image1}
                alt="Phone Image"
              />
            </div>
            <div className="flex flex-col space-y-6 mt-5">
              <div className="text-xl lg:text-2xl font-extrabold text-center md:text-left">
                5921 PEOPLE HAVE SHARED
                <br /> BREAKTHROUGHS SO FAR. WILL THE
                <br /> NEXT ONE BE YOU?
              </div>
              <div className="text-black font-serif text-md text-center md:text-left">
                Receive ideas shared with millions of people each week directly
                to your inbox.
              </div>


              <div className="flex-1 md:flex space-y-2 md:space-y-0 md:relative ">
                <input
                  placeholder="Enter Email Address"
                  className="rounded-full py-3 px-2 w-full border-black border-solid border-2"
                ></input>
                <button className="md:absolute py-3 px-2 w-full md:w-auto rounded-full bg-black text-white hover:bg-orange-600 hover:text-black cursor-pointer md:right-0 md:translate-y-0.5">
                  Sign Up
                </button>
              </div>


              <div>
                <div className="text-sm italic font-light text-center md:text-left">
                  Your information is protected and I never spam, ever. You can
                  view my privacy policy here.
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-black" />
      </div>


      <div className="bg-white space-y-8 text-black flex-col items-center justify-center py-[10%] px-[2%]">
        <div className="items-center flex justify-center text-3xl lg:text-4xl font-bold">
          Hi, I'm Suman Balayar
        </div>
        <div className="w-50 text-xl lg:text-2xl font-sans text-center px-[5%] md:px-[10%] lg:px-[20%]">
          I am the #1 NY Times Bestselling author of The Subtle Art of Not
          Giving a F*ck and Everything Is F*cked: A Book About Hope. I write
          life advice that is science-based, pragmatic, and
          non-bullshitty—a.k.a., life advice that doesn’t suck. Some people say
          I’m an idiot. Other people say I saved their life. Read on and decide
          for yourself.
        </div>
        <div className="flex flex-row justify-center space-x-4 text-sm md:text-base">
          <button className="bg-gray-900 text-white rounded-full px-4 py-3 md:px-9 md:py-4">
            READ MY ARTICLES
          </button>
          <button className="bg-gray-900 text-white rounded-full px-4 py-3 md:px-9 md:py-4">
            TAKE MY COURSES
          </button>
        </div>
      </div>
      <hr className="border-black" />


      <div className="flex flex-col-reverse md:flex-row px-[2%] py-[10%] justify-center bg-orange-600">
        <div className="flex flex-col space-y-5 ">
          <div className="font-bold text-lg text-center md:text-left">5 MINUTES EACH WEEK THAT MIGHT CHANGE YOUR <br/>LIFE</div>
          <div className="text-lg font-serif text-center md:text-left">
            Enter your email address below to sign up for my free newsletter,
            Your Next Breakthrough. Each week, you’ll receive a few prompts and
            exercises designed to create your next breakthrough. No fluff, no
            filler, no BS. Just five minutes each week that might change your
            life.
          </div>

          <div className="flex relative">
                <input
                  placeholder="Enter Email Address"
                  className="rounded-full py-3 px-2 w-full border-black border-solid border-2"
                ></input>
                <button className="py-3 px-2 mt- rounded-full bg-black text-white hover:bg-orange-600 hover:text-black absolute cursor-pointer right-0 translate-y-0.5">
                  Sign Up
                </button>
              </div>

          <div className="text-sm italic font-light text-center md:text-left">
            Your information is protected and I never spam, ever. You can view
            my privacy policy here.
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img className="w-1/3 md:w2/3" src={image2} alt="Slanted Phone"/>
        </div>
      </div>



    </>
  );
};

export default Home;
