import React, { useEffect, useState } from "react";
import BgHome from "../assets/bg.webp";

const Home = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BgHome})`}}>
      <div className="flex flex-col h-full gap-2 container mx-auto font-inter text-white justify-center items-center">
        <div className="font-medium text-xl text-left ml-[-33rem]">
          ADYA SENA PAMUNGKAS
        </div>
        <div className="font-semibold text-9xl text-left">
          FRONTEND<br />
          DEVELOPER.
        </div>
      </div>
    </div>
  )
}

export default Home;