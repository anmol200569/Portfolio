import type { FC } from 'react';
import { Compass, Rocket, Code, Cpu, Globe2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Exploring: FC = () => {
  const getIcon = (badge: string) => {
    switch (badge) {
      case 'Frontend':
        return <Rocket className="w-4 h-4 text-indigo-400" />;
      case 'DSA':
        return <Code className="w-4 h-4 text-violet-400" />;
      case 'Cloud':
        return <Globe2 className="w-4 h-4 text-blue-400" />;
      case 'AI & Agents':
      default:
        return <Cpu className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section className="py-20 relative border-t border-white/[0.06] bg-[#0d1220]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>06 / ACTIVE HORIZONS</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            Currently Exploring &amp; Learning
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mt-1.5 font-light">
            Topics and engineering areas I am actively investigating through coursework, side experiments, and technical deep-dives.
          </p>
        </div>

        {/* Exploring Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO_DATA.exploring.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-purple-500/30 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="p-2 rounded-lg bg-slate-800 text-slate-300">
                    {getIcon(item.badge)}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/25">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-sm sm:text-base text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 font-light leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-slate-400">
                • Continuous Investigation
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
