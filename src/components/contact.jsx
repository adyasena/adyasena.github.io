import React from "react";
import portfolioData from "../data/portfolio.json";

const Contact = () => {
  const { contact } = portfolioData;

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full text-[#F3F3F3] overflow-hidden pt-28 md:pt-36 pb-12 flex flex-col justify-between bg-transparent"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10 my-auto">
        {/* Section Header Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#121212] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] mb-6">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green" />
            <span className="w-2 h-2 rounded-full bg-pink" />
            <span className="w-2 h-2 rounded-full bg-red" />
            <span className="w-2 h-2 rounded-full bg-blue" />
          </div>
          <span className="text-white/80 font-medium tracking-widest text-xs uppercase">
            {contact.badge}
          </span>
        </div>

        {/* Hero Contact Text */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold font-inter tracking-tight leading-[1.05] mb-8">
            {contact.headingPrefix}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green via-blue to-pink">
              {contact.headingHighlight}
            </span>
          </h2>
          <p className="text-white/70 text-base md:text-xl leading-relaxed max-w-2xl font-inter">
            {contact.description}
          </p>
        </div>

        {/* Liquid Glass Contact Information & Action Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contact.links.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group p-6 rounded-2xl md:rounded-3xl bg-[#101010]/90 border border-white/[0.12] shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.18)] hover:border-white/30 hover:bg-[#151515] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-1.5 block"
            >
              <div className="text-xs text-white/50 uppercase tracking-wider mb-2 font-mono">
                {item.label}
              </div>
              <div className="text-base font-semibold text-white group-hover:text-white transition-colors flex items-center justify-between">
                <span>{item.value}</span>
                <svg className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Sleek Minimal Glass Footer */}
      <footer className="container mx-auto px-6 md:px-12 relative z-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <div>
          © {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="#home" className="hover:text-white transition-colors">
            Back to Top ↑
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
