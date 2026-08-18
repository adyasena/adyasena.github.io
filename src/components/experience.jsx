import React from "react";
import portfolioData from "../data/portfolio.json";

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="relative min-h-screen w-full text-[#F3F3F3] overflow-hidden py-24 sm:py-28 md:py-36 flex items-center bg-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121212] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] mb-6">
          <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
          <span className="text-red font-medium tracking-widest text-xs uppercase">
            {experience.badge}
          </span>
        </div>
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-inter tracking-tight leading-[1.1] mb-6">
            {experience.headingPrefix}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red via-[#e05657] to-white">
              {experience.headingHighlight}
            </span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed font-inter">
            {experience.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience.items.map((exp, index) => (
            <div
              key={index}
              className={`group relative p-7 rounded-2xl md:rounded-3xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                exp.isCurrent
                  ? "bg-[#141414] border border-red/40 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_-5px_rgba(176,42,43,0.3),inset_0_1px_1px_0_rgba(255,255,255,0.25)]"
                  : "bg-[#101010]/90 border border-white/[0.12] shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] hover:border-red/40 hover:bg-[#151515] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_-5px_rgba(176,42,43,0.2),inset_0_1px_1px_0_rgba(255,255,255,0.3)]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-red font-semibold">{exp.period}</span>
                  {exp.isCurrent && (
                    <span className="px-2.5 py-0.5 rounded-full bg-red/20 text-red font-medium text-[10px] tracking-wide border border-red/30 shadow-[0_0_15px_rgba(176,42,43,0.3)]">
                      CURRENT
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red transition-colors">
                  {exp.role}
                </h3>
                <div className="text-sm font-medium text-white/80 mb-1">
                  {exp.company}
                </div>
                <div className="text-xs text-white/40 mb-4 flex items-center gap-1">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {exp.location}
                </div>

                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="py-1 px-2.5 rounded-full text-[11px] font-medium bg-[#1a1a1a] border border-white/10 text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] group-hover:border-red/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-b from-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
