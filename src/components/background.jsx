import React, { useEffect, useRef } from "react";

const Background = () => {
  const wheelRef = useRef(null);
  const greenRef = useRef(null);
  const redRef = useRef(null);
  const blueRef = useRef(null);
  const pinkRef = useRef(null);

  useEffect(() => {
    const sectionIds = ["home", "about", "experience", "skills", "works", "contact"];
    let sectionTops = [];

    const calculateOffsets = () => {
      sectionTops = sectionIds.map((id) => {
        const el = document.getElementById(id);
        return el ? el.offsetTop : 0;
      });
    };

    calculateOffsets();
    window.addEventListener("resize", calculateOffsets, { passive: true });

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Compute scrollProgress continuously (0 to 5)
          let progress = 0;
          if (sectionTops.length > 1) {
            for (let i = 0; i < sectionTops.length - 1; i++) {
              const currentTop = sectionTops[i];
              const nextTop = sectionTops[i + 1];
              const dist = nextTop - currentTop;

              if (scrollY >= currentTop && scrollY <= nextTop) {
                progress = i + (scrollY - currentTop) / (dist || 1);
                break;
              } else if (scrollY > nextTop && i === sectionTops.length - 2) {
                progress = sectionTops.length - 1;
              }
            }
          }

          // Rotation angle: 0 for Home & About, then rotates 90 deg per section to -360 deg
          const rotationDeg = progress <= 1 ? 0 : -(progress - 1) * 90;

          // Single color weights for individual sections: 1 (About), 2 (Experience), 3 (Skills), 4 (Works)
          const getWeight = (targetProgress) => {
            const dist = Math.abs(progress - targetProgress);
            return Math.max(0, 1 - dist);
          };

          // Continuous smooth transitions for Home opening and Contact closing
          const homeFade = Math.max(0, 1 - progress); // 1.0 at Home -> smoothly fades to 0.0 at About
          const contactFade = Math.max(0, Math.min(1, progress - 4)); // 0.0 at Works -> smoothly rises to 1.0 at Contact

          const greenWeight = Math.max(getWeight(1), homeFade, contactFade);
          const redWeight = Math.max(getWeight(2), homeFade, contactFade);
          const blueWeight = Math.max(getWeight(3), homeFade, contactFade);
          const pinkWeight = Math.max(getWeight(4), homeFade, contactFade);

          // Dynamic radius:
          // At Home (homeFade = 1): 130px / 160px (distinct 4-quadrant diamond separation)
          // As you scroll to About (homeFade = 0): expands smoothly to wide orbit (280px / 360px)
          const radiusY = 280 - (280 - 130) * homeFade;
          const radiusX = 360 - (360 - 160) * homeFade;

          // Distinct size scaling: compact 170px at Home, expands to 580px when active in its section
          const getOrbSize = (weight) => {
            const baseHomeSize = 175;
            const expandedSize = 175 + weight * 380 * (1 - homeFade * 0.7);
            return `${expandedSize}px`;
          };

          // Direct DOM mutations for butter-smooth 60/120 FPS performance
          if (wheelRef.current) {
            wheelRef.current.style.transform = `translate3d(0,0,0) rotate(${rotationDeg}deg)`;
          }

          if (greenRef.current) {
            greenRef.current.style.transform = `translate3d(0, -${radiusY}px, 0) scale(${0.75 + greenWeight * 0.45})`;
            greenRef.current.style.width = getOrbSize(greenWeight);
            greenRef.current.style.height = getOrbSize(greenWeight);
            greenRef.current.style.opacity = 0.12 + greenWeight * 0.78;
          }

          if (redRef.current) {
            redRef.current.style.transform = `translate3d(${radiusX}px, 0, 0) scale(${0.75 + redWeight * 0.45})`;
            redRef.current.style.width = getOrbSize(redWeight);
            redRef.current.style.height = getOrbSize(redWeight);
            redRef.current.style.opacity = 0.12 + redWeight * 0.78;
          }

          if (blueRef.current) {
            blueRef.current.style.transform = `translate3d(0, ${radiusY}px, 0) scale(${0.75 + blueWeight * 0.45})`;
            blueRef.current.style.width = getOrbSize(blueWeight);
            blueRef.current.style.height = getOrbSize(blueWeight);
            blueRef.current.style.opacity = 0.12 + blueWeight * 0.78;
          }

          if (pinkRef.current) {
            pinkRef.current.style.transform = `translate3d(-${radiusX}px, 0, 0) scale(${0.75 + pinkWeight * 0.45})`;
            pinkRef.current.style.width = getOrbSize(pinkWeight);
            pinkRef.current.style.height = getOrbSize(pinkWeight);
            pinkRef.current.style.opacity = 0.12 + pinkWeight * 0.76;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initial run

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", calculateOffsets);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none bg-[#060606] overflow-hidden"
      aria-hidden="true"
    >
      {/* 🎡 Direct Ref Real-Time Scroll-Driven Rotating Color Wheel */}
      <div 
        ref={wheelRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform"
      >
        {/* 🟢 Green Orb (About - Top / 12 o'clock) */}
        <div
          ref={greenRef}
          className="absolute rounded-full pointer-events-none will-change-transform"
          style={{
            background: "radial-gradient(circle, rgba(21,160,105,0.95) 0%, rgba(21,160,105,0.65) 20%, rgba(21,160,105,0.35) 45%, rgba(21,160,105,0.12) 70%, rgba(21,160,105,0) 100%)",
            filter: "blur(40px)",
          }}
        />

        {/* 🔴 Red Orb (Experience - Right / 3 o'clock) */}
        <div
          ref={redRef}
          className="absolute rounded-full pointer-events-none will-change-transform"
          style={{
            background: "radial-gradient(circle, rgba(176,42,43,0.95) 0%, rgba(176,42,43,0.65) 20%, rgba(176,42,43,0.35) 45%, rgba(176,42,43,0.12) 70%, rgba(176,42,43,0) 100%)",
            filter: "blur(40px)",
          }}
        />

        {/* 🔵 Blue Orb (Skills - Bottom / 6 o'clock) */}
        <div
          ref={blueRef}
          className="absolute rounded-full pointer-events-none will-change-transform"
          style={{
            background: "radial-gradient(circle, rgba(62,99,187,0.95) 0%, rgba(62,99,187,0.65) 20%, rgba(62,99,187,0.35) 45%, rgba(62,99,187,0.12) 70%, rgba(62,99,187,0) 100%)",
            filter: "blur(40px)",
          }}
        />

        {/* 🟣 Pink Orb (Works - Left / 9 o'clock) */}
        <div
          ref={pinkRef}
          className="absolute rounded-full pointer-events-none will-change-transform"
          style={{
            background: "radial-gradient(circle, rgba(184,91,168,0.98) 0%, rgba(184,91,168,0.7) 20%, rgba(184,91,168,0.38) 45%, rgba(184,91,168,0.14) 70%, rgba(184,91,168,0) 100%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Persistent Noise Grain Texture Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
    </div>
  );
};

export default Background;
