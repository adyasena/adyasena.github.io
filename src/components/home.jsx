import React from "react";
import portfolioData from "../data/portfolio.json";

const Home = () => {
  const { profile } = portfolioData;

  return (
    <section
      id="home"
      className="w-full h-screen relative flex items-center overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-6 md:px-12 font-inter text-white flex flex-col justify-center items-start text-left">
        <div className="w-full max-w-5xl">
          <div className="font-medium text-base sm:text-lg md:text-2xl text-white/80 tracking-wider mb-3 text-left pl-1 sm:pl-1.5 md:pl-2">
            {profile.name}
          </div>
          <h1 className="font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] text-white">
            {profile.roleLine1}
            <br />
            {profile.roleLine2}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
