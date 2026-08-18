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
    <header className="fixed top-4 md:top-6 left-0 w-full z-50 transition-all duration-300 pointer-events-none">
      <div className="container mx-auto px-6 md:px-12">
        <div
          className={`pointer-events-auto w-full relative font-poppins rounded-full transition-all duration-300 flex flex-row justify-between items-center px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 ${
            scroll
              ? "bg-[#101010]/85 backdrop-blur-xl border border-white/[0.16] shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_-1px_1px_rgba(0,0,0,0.5)]"
              : "bg-[#121212]/65 backdrop-blur-lg border border-white/[0.12] shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.18)]"
          }`}
        >
          <div
            onClick={() => scrollToSection("home")}
            className="flex flex-row justify-start items-center text-white cursor-pointer group gap-2.5 pr-2"
          >
            <img
              src={Logo}
              alt="logo"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <p className="font-semibold text-sm sm:text-base md:text-lg tracking-wide group-hover:text-white/80 transition-colors">
              {profile.brandName}
            </p>
          </div>
          <nav className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 text-xs sm:text-sm font-semibold">
            <button
              onClick={() => scrollToSection("home")}
              className={`py-1.5 px-3 rounded-full border transition-all duration-300 ${
                activeSection === "home"
                  ? "border-white/20 bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                  : "border-transparent text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`py-1.5 px-3 rounded-full border transition-all duration-300 ${
                activeSection === "about"
                  ? "border-green/30 bg-green/10 text-green shadow-[0_0_15px_rgba(21,160,105,0.25)]"
                  : "border-transparent text-white/60 hover:text-green hover:bg-white/5"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`py-1.5 px-3 rounded-full border transition-all duration-300 ${
                activeSection === "experience"
                  ? "border-red/30 bg-red/10 text-red shadow-[0_0_15px_rgba(176,42,43,0.25)]"
                  : "border-transparent text-white/60 hover:text-red hover:bg-white/5"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`py-1.5 px-3 rounded-full border transition-all duration-300 ${
                activeSection === "skills"
                  ? "border-blue/30 bg-blue/10 text-blue shadow-[0_0_15px_rgba(62,99,187,0.25)]"
                  : "border-transparent text-white/60 hover:text-blue hover:bg-white/5"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("works")}
              className={`py-1.5 px-3 rounded-full border transition-all duration-300 ${
                activeSection === "works"
                  ? "border-pink/30 bg-pink/10 text-pink shadow-[0_0_15px_rgba(184,91,168,0.25)]"
                  : "border-transparent text-white/60 hover:text-pink hover:bg-white/5"
              }`}
            >
              Works
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`py-1.5 px-4 sm:px-5 rounded-full border transition-all duration-300 ml-1.5 ${
                activeSection === "contact"
                  ? "border-white bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.35)]"
                  : "border-white/20 bg-white/10 text-white hover:bg-white hover:text-black hover:border-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
              }`}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
