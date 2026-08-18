import React from "react";
import portfolioData from "../data/portfolio.json";

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full text-[#F3F3F3] overflow-hidden py-24 sm:py-28 md:py-36 flex items-center bg-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121212] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] mb-6">
          <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
          <span className="text-blue font-medium tracking-widest text-xs uppercase">
            {skills.badge}
          </span>
        </div>
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-inter tracking-tight leading-[1.1] mb-6">
            {skills.headingPrefix}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue via-[#688ee9] to-white">
              {skills.headingHighlight}
            </span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed font-inter">
            {skills.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.categories.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl md:rounded-3xl bg-[#101010]/90 border border-white/[0.12] shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] hover:border-blue/40 hover:bg-[#151515] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_-5px_rgba(62,99,187,0.25),inset_0_1px_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="text-blue font-mono text-sm mb-3 font-semibold">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue transition-colors">
                  {item.category}
                </h3>
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="py-1.5 px-3 rounded-full text-xs font-medium bg-[#1a1a1a] border border-white/10 text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] group-hover:border-blue/30 group-hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-b from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
