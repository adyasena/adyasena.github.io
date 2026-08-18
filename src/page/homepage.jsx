import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Home from "../components/home";
import About from "../components/about";
import Experience from "../components/experience";
import Skills from "../components/skills";
import Works from "../components/works";
import Contact from "../components/contact";
import Background from "../components/background";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "experience", "skills", "works", "contact"];
    let sectionElements = [];

    const cacheElements = () => {
      sectionElements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    };

    cacheElements();
    window.addEventListener("resize", cacheElements, { passive: true });

    let currentActive = "home";
    let ticking = false;

    const checkActive = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const checkY = scrollY + window.innerHeight * 0.4;

          for (let i = sectionElements.length - 1; i >= 0; i--) {
            const el = sectionElements[i];
            if (el && el.offsetTop <= checkY) {
              const id = sectionIds[i];
              if (id !== currentActive) {
                currentActive = id;
                setActiveSection(id);
              }
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", checkActive, { passive: true });
    checkActive();

    return () => {
      window.removeEventListener("scroll", checkActive);
      window.removeEventListener("resize", cacheElements);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-[#F3F3F3]">
      <Background />
      <Navbar activeSection={activeSection} />
      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Works />
        <Contact />
      </main>
    </div>
  );
};

export default Homepage;
