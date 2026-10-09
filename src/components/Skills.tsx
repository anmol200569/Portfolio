import type { FC } from 'react';
import { Sparkles, Terminal, Layout, Server, Cloud, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      case 1:
        return <Layout className="w-5 h-5 text-violet-400" />;
      case 2:
        return <Server className="w-5 h-5 text-blue-400" />;
      case 3:
      default:
        return <Cloud className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getBadgeStyle = (level: string) => {
    switch (level) {
      case 'Core':
        return 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30';
      case 'Actively Learning':
        return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
      case 'Familiar':
      default:
        return 'bg-slate-800/80 text-slate-300 border-white/[0.08]';
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-white/[0.06] bg-[#0d1220]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 / TECHNICAL TOOLKIT</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Technologies &amp; Competencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Organized across core engineering fundamentals, modern frontend implementations, and cloud platforms.
          </p>

          {/* Level Legend */}
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
              <span className="text-slate-300 font-medium">Core Proficiency</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
              <span className="text-slate-400">Familiar / Applied</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              <span className="text-purple-300">Actively Learning / Deepening</span>
            </div>
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.skills.map((category, index) => (
            <div
              key={category.category}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08]">
                    {getCategoryIcon(index)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {category.category}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{category.description}</p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5 mt-5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-medium transition-transform hover:scale-[1.03] ${getBadgeStyle(
                        skill.level
                      )}`}
                    >
                      <span>{skill.name}</span>
                      <span className="text-[10px] opacity-60 font-mono tracking-tight">
                        {skill.level === 'Core'
                          ? '• core'
                          : skill.level === 'Actively Learning'
                          ? '• learning'
                          : '• familiar'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Areas of Focus Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-violet-950/40 border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-white text-sm">
                Engineering Focus Areas
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Modern Web Architectures • Algorithmic Problem Solving (DSA) • Cloud Computing • AI Dev Tooling
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-indigo-300/80 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 self-start md:self-auto">
            Practical Execution
          </span>
        </div>
      </div>
    </section>
  );
};
