import React from 'react';
import img from "../assests/newslleter-bg-img.png";
import {GiCircle} from "react-icons/gi";

export default function Newslleter() {
    const divStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover", // You can adjust the background size as needed
        backgroundRepeat: "no-repeat", // You can adjust the background repeat behavior
        // Add any other CSS properties you want for your div here
        width: "auto", // Example width
        height: "515px", // Example height
      };
  return (
    <section className="">
        <div className="bg-center bg-local" style={divStyle}>
            <div className="container mx-auto">
                <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-3 py-10 md:py-[5.5rem] md:gap-5">
                    <div className="flex flex-col items-center md:items-start text-[#FFFFFF80]">
                        <p className="text-[26px] font-semibold font-[Syne] break-words">Newslleter</p>
                        <p className="text-lg font-normal break-words text-center">Get news about articles and <br className="md:hidden"/>updates in your inbox.</p>
                    </div>
                    <div class="grid grid-cols-1 gap-6 text-white">
                        <label class="block">
                            <input type="text" class="block w-full px-0.5 border-b-2 bg-transparent" placeholder="NAME"/>
                        </label>
                        <label class="block">
                            <input type="email" class="block w-full px-0.5 border-b-2 bg-transparent" placeholder="EMAIL"/>
                        </label>
                        <label class="block">
                            <textarea class="block w-full px-0.5 border-b-2 bg-transparent" placeholder="MESSAGE" rows="1"></textarea>
                        </label>
                    </div>
                    {/* <div className="flex flex-col items-start text-[#FFFFFF80] text-lg font-normal md:col-span-2">
                        <p className="">NAME</p>
                        <p className="">EMAIL</p>
                        <p className="">MESSAGE</p>
                    </div> */}

                    {/* <div className="relative">
                    <div className="flex justify-between items-start">
                        <p className="z-10 relative">djsandsjdsajddjnsajdnsajdsdjsddnsjdsjdnsdjsnjsnjn</p>
                        <div className="absolute top-0 right-0">
                        <GiCircle className="w-10 h-10 text-[#F07E15]" />
                        </div>
                    </div>
                    </div> */}
                </div>
                    <div className="text-white text-[55px] md:text-[135px] font-[Syne] font-extrabold leading-[37.18px] md:leading-[102.60px] tracking-wider break-words mt-4 md:mt-[1.5rem]">GET <br/>IN <br className="md:hidden"/>TOUCH</div>
                
                </div>
        </div>
    </section>
  )
}
