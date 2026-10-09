import type { FC } from 'react';
import { Sparkles, Calendar, MapPin, Building, CheckCircle2, Users } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: FC = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-white/[0.06] bg-[#0b0f19]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 / EXPERIENCE &amp; LEADERSHIP</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Campus Leadership &amp; Community Ecosystems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Organizing initiatives, driving peer technology learning, and leading student community operations at GGITS.
          </p>
        </div>

        {/* Editorial Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500/40 before:via-violet-500/20 before:to-transparent before:-translate-x-1/2">
          {PORTFOLIO_DATA.experience.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } gap-8 group`}
              >
                {/* Timeline node marker */}
                <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center z-10 shadow-md shadow-indigo-500/40 group-hover:scale-110 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] pl-10 md:pl-0 ${
                    isEven ? 'md:text-left' : 'md:text-left'
                  }`}
                >
                  <div className="glass-card p-6 sm:p-7 rounded-2xl relative overflow-hidden">
                    {/* Top Meta info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                        {item.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Role & Org */}
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-indigo-200 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-indigo-400 font-medium mt-1">
                      <Building className="w-4 h-4 shrink-0 text-slate-400" />
                      <span>{item.organization}</span>
                    </div>

                    {item.ecosystem && (
                      <p className="text-xs font-mono text-slate-400 mt-1 italic">
                        {item.ecosystem}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-sm text-slate-300/90 mt-4 leading-relaxed font-light">
                      {item.description}
                    </p>

                    {/* Highlights bullet points */}
                    <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4">
                      {item.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{hl}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Location */}
                    <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </span>
                      {item.current && (
                        <span className="text-emerald-400 font-semibold">• Active Tenancy</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Engagement Footnote */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900/40 border border-white/[0.06] flex items-center gap-4">
          <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-sm">
              Ecosystem Participation
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Active participant in collegiate technology chapters including GDG on Campus, AWS Cloud Club, and regional hackathons. Focused on creating an open environment where students build practical engineering confidence together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
