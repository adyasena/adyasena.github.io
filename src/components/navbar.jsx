import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import portfolioData from "../data/portfolio.json";

const Navbar = ({ activeSection = "home" }) => {
  const [scroll, setScroll] = useState(false);
  const { profile } = portfolioData;

  useEffect(() => {
    const changeClass = () => {
      if (window.scrollY >= 40) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", changeClass, { passive: true });
    return () => window.removeEventListener("scroll", changeClass);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div
        className={`absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-md transition-all duration-300 ${
          scroll ? "opacity-100 border-b border-white/10" : "opacity-0"
        }`}
      ></div>
      <div
        className={`relative z-10 font-poppins container mx-auto px-6 md:px-12 flex flex-row justify-between items-center transition-all duration-300 ${
          scroll ? "h-16" : "h-24"
        }`}
      >
        {/* Brand / Logo */}
        <div 
          onClick={() => scrollToSection("home")}
          className="flex flex-row justify-start items-center text-white h-full cursor-pointer group gap-2.5"
        >
          <img
            src={Logo}
            alt="logo"
            className="w-7 h-7 md:w-8 md:h-8 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <p className="font-semibold text-base sm:text-lg tracking-wide group-hover:text-white/80 transition-colors">
            {profile.brandName}
          </p>
        </div>

        {/* Navigation Items */}
        <nav className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 text-xs sm:text-sm md:text-base font-medium">
          <button 
            onClick={() => scrollToSection("home")}
            className={`py-1.5 px-2.5 sm:px-3 md:px-4 rounded-full transition-all duration-300 hover:bg-white/5 ${
              activeSection === "home" ? "text-white font-bold" : "text-white/70 hover:text-white"
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("about")}
            className={`py-1.5 px-2.5 sm:px-3 md:px-4 rounded-full transition-all duration-300 hover:bg-white/5 ${
              activeSection === "about" ? "text-green font-semibold" : "text-white/70 hover:text-green"
            }`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("experience")}
            className={`py-1.5 px-2.5 sm:px-3 md:px-4 rounded-full transition-all duration-300 hover:bg-white/5 ${
              activeSection === "experience" ? "text-red font-semibold" : "text-white/70 hover:text-red"
            }`}
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection("skills")}
            className={`py-1.5 px-2.5 sm:px-3 md:px-4 rounded-full transition-all duration-300 hover:bg-white/5 ${
              activeSection === "skills" ? "text-blue font-semibold" : "text-white/70 hover:text-blue"
            }`}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection("works")}
            className={`py-1.5 px-2.5 sm:px-3 md:px-4 rounded-full transition-all duration-300 hover:bg-white/5 ${
              activeSection === "works" ? "text-pink font-semibold" : "text-white/70 hover:text-pink"
            }`}
          >
            Works
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`border py-1 px-3 sm:py-1.5 sm:px-4 md:px-5 rounded-full transition-all duration-300 text-xs sm:text-sm font-semibold ${
              scroll || activeSection === "contact"
                ? "bg-white text-black border-white hover:bg-white/90"
                : "text-white border-white/60 hover:border-white hover:bg-white hover:text-black"
            }`}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
