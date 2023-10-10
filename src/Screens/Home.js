import React from "react";
import image1 from "../images/two-phones-vertical-blue-background-opt-2.webp";
import image2 from "../images/phone-slanted-breakthrough-3.png";

const Home = () => {
  return (
    <>
      <div className="bg-slate-200">
        <div className="flex flex-col items-center justify-center py-[4%] px-[2%]">
          <div className="md:flex">
            <span className="text-8xl font-semibold text-center">
              5 Minutes That Might
              <br /> Change Your Life
            </span>
          </div>

          <div className="flex flex-row items-center justify-center h-fit">
            <div>
              <img
                className="scale-[75%]"
                src={image1}
                alt="Phone Image"
              />
            </div>
            <div className="flex flex-col space-y-6 mt-5">
              <div className="text-2xl font-extrabold">
                5921 PEOPLE HAVE SHARED
                <br /> BREAKTHROUGHS SO FAR. WILL THE
                <br /> NEXT ONE BE YOU?
              </div>
              <div className="text-black font-serif text-md">
                Receive ideas shared with millions of people each week directly
                to your inbox.
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
              <div>
                <span className="text-sm italic font-light">
                  Your information is protected and I never spam, ever. You can
                  view my privacy policy here.
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-black" />
      </div>
      <div className="bg-white space-y-8 text-black flex-col items-center justify-center my-[10%] px-[4%]">
        <div className="items-center flex justify-center text-4xl font-bold">
          Hi, I'm Suman Balayar
        </div>
        <div className="w-50 text-2xl font-sans text-center px-52">
          I am the #1 NY Times Bestselling author of The Subtle Art of Not
          Giving a F*ck and Everything Is F*cked: A Book About Hope. I write
          life advice that is science-based, pragmatic, and
          non-bullshitty—a.k.a., life advice that doesn’t suck. Some people say
          I’m an idiot. Other people say I saved their life. Read on and decide
          for yourself.
        </div>
        <div className="flex flex-row justify-center space-x-4">
          <button className="bg-gray-900 text-white rounded-full px-9 py-4">
            READ MY ARTICLES
          </button>
          <button className="bg-gray-900 text-white rounded-full px-9 py-4">
            TAKE MY COURSES
          </button>
        </div>
      </div>
      <hr className="border-black" />
      <div className="flex px-[7%] justify-center bg-orange-600">
        <div className="flex flex-col space-y-5 my-[10%]">
          <div className="font-bold text-2xl">5 MINUTES EACH WEEK THAT MIGHT CHANGE YOUR <br/>LIFE</div>
          <div className="text-lg font-serif">
            Enter your email address below to sign up for my free newsletter,
            Your Next Breakthrough. Each week, you’ll receive a few prompts and
            exercises designed to create your next breakthrough. No fluff, no
            filler, no BS. Just five minutes each week that might change your
            life.
          </div>
          <div className="relative flex">
            <input
              placeholder="Enter Email Address"
              className="rounded-full py-3 px-2 w-full border-2 border-solid border-black"
            ></input>
            <button className="py-3 px-5 rounded-full text-white bg-black hover:bg-orange-600 hover:text-black absolute top-0 right-0 translate-y-0.5">
              Sign Up
            </button>
          </div>
          <div className="text-sm italic font-light">
            Your information is protected and I never spam, ever. You can view
            my privacy policy here.
          </div>
        </div>
        <div>
          <img className=" scale-[75%]" src={image2} alt="Slanted Phone"/>
        </div>
      </div>
    </>
  );
};

export default Home;
