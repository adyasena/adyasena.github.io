import React from "react";
import portfolioData from "../data/portfolio.json";

const About = () => {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      className="relative min-h-screen w-full text-[#F3F3F3] overflow-hidden py-24 sm:py-28 md:py-36 flex items-center bg-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121212] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] mb-6">
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
          <span className="text-green font-medium tracking-widest text-xs uppercase">
            {about.badge}
          </span>
        </div>

        {/* Hero Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-inter tracking-tight leading-[1.1] mb-8">
              {about.headingPrefix}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green via-[#57d89f] to-white">
                {about.headingHighlight}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-white/70 text-base md:text-lg leading-relaxed font-inter">
            <p dangerouslySetInnerHTML={{ __html: about.bioParagraph1 }} />
            <p dangerouslySetInnerHTML={{ __html: about.bioParagraph2 }} />
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all hover:scale-105 shadow-[0_10px_25px_rgba(255,255,255,0.25)]"
              >
                Lihat Portfolio
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#121212] border border-white/15 text-white font-medium text-sm hover:border-green/50 hover:text-green hover:bg-green/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>

        {/* Liquid Glass Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {about.highlights.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl md:rounded-3xl bg-[#101010]/90 border border-white/[0.12] shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] hover:border-green/40 hover:bg-[#151515] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_-5px_rgba(21,160,105,0.2),inset_0_1px_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="text-green font-mono text-sm mb-4 font-semibold opacity-90">
                {item.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                {item.desc}
              </p>
              
              {/* Subtle liquid glow accent */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-b from-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
