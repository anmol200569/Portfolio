import React from 'react';
import { GraduationCap, MapPin, Code2, Users2, Sparkles, Building2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-white/[0.06] bg-[#0b0f19]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Engineering software with purpose,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              fostering tech culture.
            </span>
          </h2>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            {PORTFOLIO_DATA.about.narrative.map((paragraph, index) => (
              <p key={index} className="text-slate-300/90 font-light">
                {paragraph}
              </p>
            ))}

            {/* Fast Fact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/15 text-indigo-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Education
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    B.Tech in Computer Science
                  </p>
                  <p className="text-xs text-slate-400">GGITS, Jabalpur (M.P.)</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-violet-500/15 text-violet-400 shrink-0">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Leadership
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Operations Lead
                  </p>
                  <p className="text-xs text-slate-400">Microsoft Campus Club GGITS</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/15 text-blue-400 shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Technical Stack
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    C++, JavaScript, React, APIs
                  </p>
                  <p className="text-xs text-slate-400">DSA &amp; Full-Stack Focus</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/15 text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Location
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Jabalpur, Madhya Pradesh
                  </p>
                  <p className="text-xs text-slate-400">India (IST Timezone)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual / Community Image Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-slate-900 shadow-xl group">
              <img
                src={PORTFOLIO_DATA.personal.communityImage}
                alt="Tech Workshop Session at GGITS"
                className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500 filter saturate-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-indigo-300 mb-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>On-Campus Community Action</span>
                </div>
                <p className="text-sm font-medium text-white">
                  Coordinating student developer workshops &amp; tech sessions at GGITS
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Institution: GGITS Jabalpur</span>
              <span className="text-indigo-400 font-semibold">Active Engineering Cohort</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
