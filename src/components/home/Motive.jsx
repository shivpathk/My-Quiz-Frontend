import React from "react";
import photo from '../../images/bg1.jpg'
import gif from '../../images/naruto.gif'

function AboutUs(){
    return <div>
        <div className="hidden md:flex relative h-[100px]">
            <img 
            className="absolute h-[135px] left-0 md:animate-run "
            src={gif} 
            alt="naruto running"
            />
        </div>
        <div className="p-2 max-w-[1240px]  mx-20 my-10 md:grid grid-cols-2">
        <div className="  col-span-1 md:w-[85%]">
            <img src={photo} alt="quiz" className="inline"/>
        </div>
        <div className=" 
         col-span-1 flex flex-col justify-center text-justify">
            <h1 className="text-[#00df9A] font-bold my-2">
                What is our Motive
            </h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, repellat sint quos, optio est laborum itaque expedita tempore corrupti labore odio assu Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corporis omnis odit repudiandae suscipit, quia maxime perspiciatis sit, asperiores eius repellendus natus commodi assumenda voluptate qui inventore maiores dolore veniam quo molestiae doloribus. Distinctio id illo quidem voluptatibus repellendus. Iure velit aut rerum? Totam unde praesentium omnis nesciunt hic tempore.
            </p>
            <button className=" w-[30%] transition ease-in-out delay-150  hover:-translate-y-1 
        hover:animate-pulse
        hover:scale-110 hover:bg-black-500 duration-300 bg-[black] mt-5 text-white p-3 rounded"  
        type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='/auth';
      }}>Register Now</button>
        </div>

    </div>
    </div>
}

export default AboutUs