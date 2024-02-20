import React, { useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const changeClass = () => {
    if (window.scrollY >= 180) {
      setScroll(true)
    }
    else {
      setScroll(false)
    }
  };

  window.addEventListener("scroll", changeClass);

  return (
    <div className="navbar">
      <div className={"navbar bg-black " + (scroll ? "opacity-100" : "h-24 opacity-0")}>
      </div>
      <div className={"z-[1] font-poppins sticky flex flex-row container mx-auto px-12 text-center items-center text-lg font-semibold " +
        "justify-between transform duration-300 ease overflow-hidden " + (scroll ? "h-16" : "h-24")}>
          <div className="flex flex-row justify-start items-center text-white h-full">
            <img src={Logo} alt="logo kominfo" className={"m-2 transform duration-300 ease " + (scroll ? "w-8" : "w-0 mr-[-4px]")}/>
            <p className="transform">Adya Sena</p> 
          </div>
          <div className="flex gap-6 text-base">
            <button className="py-2 px-6 rounded-full transform duration-300 ease text-white hover:text-green">
                Home
            </button>
            <button className="py-2 px-6 rounded-full transform duration-300 ease text-white hover:text-red">
                About
            </button>
            <button className="py-2 px-6 rounded-full transform duration-300 ease text-white hover:text-blue">
                Skills
            </button>
            <button className="py-2 px-6 rounded-full transform duration-300 ease text-white hover:text-pink">
                Works
            </button>
            <button className={"border-2 py-2 px-6 rounded-full transform duration-300 ease "
              + (scroll ? "bg-white text-black border-white hover:bg-white hover:text-black" : "text-white border-white hover:bg-white hover:text-black")}>
                Contact
            </button>
          </div>
      </div>
    </div>
  )
};

export default Navbar;