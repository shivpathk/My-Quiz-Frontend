import React from "react";
import Typed from "react-typed";

function Banner() {
  return (
    <div className="bg-rose-300  w-full py-[90px]">
      <div className="max-w-[1240px] mx-auto text-center  font-bold  my-[120px]">
        <div className="text-[22px] md:text-3xl p-[5px] mt-4">
          Welcome to Shiv's Quiz Community
        </div>
        <div className="md:animate-bounce text-white text-[32px] md:text-[60px] p-[5px] mt-4  ">
          Learn While Playing
        </div>
        <div className="text-[25px] md:text-4xl p-[5px] text-blue-500 mt-4">
          <Typed
            strings={[
              "Create Your Own Quiz",
              "Play Quiz and Ace them",
              "Get Your Result",
              "Save Favorite Quiz",
              "Get gifts on Good Result",
            ]}
            typeSpeed={100}
            
            loop={true}
            backSpeed={50}
          />
        </div>
        <button className="transition ease-in-out delay-150  hover:-translate-y-1 
        hover:animate-pulse
        hover:scale-110 
        hover:bg-black-500 duration-300 
        bg-[black] mt-5 text-white p-3 rounded"
        type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='/auth';
      }}
        >Register Now</button>
      </div>
    </div>
  );
}

export default Banner;
