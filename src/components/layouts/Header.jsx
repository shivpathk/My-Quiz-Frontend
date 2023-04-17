import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import {Link} from 'react-router-dom'

function Header() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] py-[12px] mx-auto flex justify-between items-center">
        <div className="text-4xl font-bold">Shiv's Quiz</div>
        {toggle ? (
          <GiHamburgerMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block  transition ease-in-out delay-150  hover:-translate-y-1 
            hover:animate-pulse
            hover:scale-110 
            hover:bg-black-500 duration-300 "
          />
        ) : (
          <AiOutlineCloseSquare
            onClick={() => setToggle(!toggle)}
            className="text-white text-3xl md:hidden block  transition ease-in-out delay-150  hover:-translate-y-1 
            hover:animate-pulse
            hover:scale-110 
            hover:bg-black-500 duration-300 "
          />
        )}
        <ul className="hidden md:flex gap-8 text-white text-2xl">
          <li className="transition ease-in-out delay-150  hover:-translate-y-1 
        hover:animate-pulse
        hover:scale-110 
        hover:bg-black-500 duration-300 "> <Link to="/">Home</Link> </li>
          <li className="transition ease-in-out delay-150  hover:-translate-y-1 
        hover:animate-pulse
        hover:scale-110 
        hover:bg-black-500 duration-300 "> <Link to="/quizzes">Quizzes</Link> </li>
          <li className="transition ease-in-out delay-150  hover:-translate-y-1 
        hover:animate-pulse
        hover:scale-110 
        hover:bg-black-500 duration-300 "> <Link to="/yourquize">Your Quize</Link> </li>
          <li className="transition ease-in-out delay-150  hover:-translate-y-1 
        hover:animate-pulse
        hover:scale-110 
        hover:bg-black-500 duration-300 "> <Link to="/result">Result</Link> </li>
          <li className="transition ease-in-out delay-150  hover:-translate-y-1 
        hover:animate-pulse
        hover:scale-110 
        hover:bg-black-500 duration-300 "> <Link to="/login">Log In</Link> </li>
        </ul>
        {/* responsive menu */}
        <ul className= {`duration-300 md:hidden gap-8 text-white text-2xl fixed bg-black ${toggle ?"left-[-100%]": "left-[0]" } top-[95px] w-full p-1 h-screen`}>
        <li className="p-5 ml-10 transition ease-in-out delay-150  hover:-translate-y-1 
        hover:animate-pulse
        hover:scale-110 
        hover:bg-black-500 duration-300 "> <Link to="/">Home</Link> </li>
          <li className="p-5 ml-10 transition ease-in-out delay-150  hover:-translate-y-1 
        hover:animate-pulse
        hover:scale-110 
        hover:bg-black-500 duration-300 "> <Link to="/quizzes">Quizzes</Link> </li>
          <li className="p-5 ml-10 transition ease-in-out delay-150  hover:-translate-y-1 
        hover:animate-pulse
        hover:scale-110 
        hover:bg-black-500 duration-300 "> <Link to="/yourquize">Your Quize</Link> </li>
          <li className="p-5 ml-10 transition ease-in-out delay-150  hover:-translate-y-1 
        hover:animate-pulse
        hover:scale-110 
        hover:bg-black-500 duration-300 "> <Link to="/result">Result</Link> </li>
          <li className="p-5 ml-10 transition ease-in-out delay-150  hover:-translate-y-1 
        hover:animate-pulse
        hover:scale-110 
        hover:bg-black-500 duration-300 "> <Link to="/login">Log In</Link> </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
