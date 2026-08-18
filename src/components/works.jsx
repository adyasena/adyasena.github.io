import React from "react";
import portfolioData from "../data/portfolio.json";

const Works = () => {
  const { works } = portfolioData;

  return (
    <section
      id="works"
      className="relative min-h-screen w-full text-[#F3F3F3] overflow-hidden py-28 md:py-36 flex items-center bg-transparent"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121212] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] mb-6">
          <span className="w-2 h-2 rounded-full bg-pink animate-pulse" />
          <span className="text-pink font-medium tracking-widest text-xs uppercase">
            {works.badge}
          </span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-inter tracking-tight leading-[1.1] mb-4">
              {works.headingPrefix}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink via-[#c47ec4] to-white">
                {works.headingHighlight}
              </span>
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-inter">
              {works.description}
            </p>
          </div>
          <a
            href={works.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121212] border border-white/15 text-sm font-semibold text-pink hover:text-white hover:bg-[#1a1a1a] hover:border-pink/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all group"
          >
            Lihat Semua di GitHub
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Liquid Glass Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between p-8 rounded-2xl md:rounded-3xl bg-[#101010]/90 border border-white/[0.12] shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] hover:border-pink/40 hover:bg-[#151515] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_-5px_rgba(168,85,158,0.25),inset_0_1px_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-pink/90 mb-4">
                  <span className="font-semibold">0{index + 1}</span>
                  <span className="uppercase tracking-wider px-3 py-1 rounded-full bg-pink/10 border border-pink/20 text-pink shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-pink transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs text-white/50 mb-3 font-medium">
                  {project.company}
                </div>
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Glass Project Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="py-1 px-2.5 rounded-full text-xs font-medium bg-[#1a1a1a] border border-white/10 text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Glass Project Links */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-white bg-pink/20 border border-pink/30 hover:bg-pink/30 hover:border-pink/60 px-3.5 py-1.5 rounded-full transition-all inline-flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,158,0.25)]"
                    >
                      <span>Visit Live Website</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-white/70 hover:text-pink transition-colors inline-flex items-center gap-1.5 py-1.5"
                    >
                      <span>Explore Repository</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Subtle liquid glow accent */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-b from-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
