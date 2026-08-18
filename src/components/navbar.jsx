import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import portfolioData from "../data/portfolio.json";

const Navbar = ({ activeSection = "home" }) => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "home", label: "Home", color: "white" },
    { id: "about", label: "About", color: "green" },
    { id: "experience", label: "Experience", color: "red" },
    { id: "skills", label: "Skills", color: "blue" },
    { id: "works", label: "Works", color: "pink" },
  ];

  return (
    <header className="fixed top-3 sm:top-4 md:top-6 left-0 w-full z-50 transition-all duration-300 pointer-events-none">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div
          className={`pointer-events-auto w-full relative font-poppins rounded-full transition-all duration-300 flex flex-row justify-between items-center px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 ${
            scroll || isOpen
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
          <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 text-xs sm:text-sm font-semibold">
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
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => scrollToSection("contact")}
              className={`py-1 px-3 rounded-full border text-xs font-semibold transition-all ${
                activeSection === "contact"
                  ? "border-white bg-white text-black"
                  : "border-white/20 bg-white/10 text-white"
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-1.5 rounded-full text-white hover:bg-white/10 transition-colors focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="pointer-events-auto md:hidden mt-3 rounded-3xl bg-[#101010]/95 backdrop-blur-2xl border border-white/[0.14] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.18)] transition-all animate-fadeIn font-poppins">
            <div className="flex flex-col gap-1 text-sm font-semibold">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full py-2.5 px-4 rounded-2xl flex items-center justify-between transition-all ${
                    activeSection === link.id
                      ? link.id === "home"
                        ? "bg-white/10 text-white border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                        : link.id === "about"
                        ? "bg-green/10 text-green border border-green/30"
                        : link.id === "experience"
                        ? "bg-red/10 text-red border border-red/30"
                        : link.id === "skills"
                        ? "bg-blue/10 text-blue border border-blue/30"
                        : "bg-pink/10 text-pink border border-pink/30"
                      : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                  )}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className={`w-full py-2.5 px-4 rounded-2xl flex items-center justify-between transition-all mt-1 ${
                  activeSection === "contact"
                    ? "bg-white text-black font-bold"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black"
                }`}
              >
                <span>05 / Contact Me</span>
                <span className="text-xs font-mono">→</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
