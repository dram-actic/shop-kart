import React from 'react'
import {PiTruck} from "react-icons/pi";
import {BiLogoFacebook,BiLogoLinkedin,BiLogoTwitter,BiLogoInstagram} from "react-icons/bi";
export default function Navbar() {
  return (
    <nav className="py-2 bg-[#1A1A1A] lg:px-10">
        <div className="w-full flex text-[#626262] justify-between items-center px-4">
            <div className="flex items-center gap-2">
                <PiTruck className='text-xl'/>
                    <p className="text-xs md:text-base md:pl-3 md:pr-5 hover:cursor-pointer">Free Delivery</p>
                    <div className="inline-block min-h-[0.5em] w-[1px] self-stretch bg-gray-500 opacity-100 dark:opacity-50"></div>
                    <p className="text-xs md:text-base md:pl-5 hover:cursor-pointer">Return Policy</p>
            </div>
            <div className="flex gap-2 text-sm md:text-base items-center">
               <div className="text-xs md:text-base md:pr-7 hover:cursor-pointer">Login</div>
               <div className="hidden md:block hover:cursor-pointer">Follow US</div>
                <BiLogoFacebook className="hover:cursor-pointer"/>
                <BiLogoLinkedin className="hover:cursor-pointer"/>
                <BiLogoTwitter className="hover:cursor-pointer"/>
                <BiLogoInstagram className="hover:cursor-pointer"/>
            </div>
        </div>
    </nav>
  )
}
