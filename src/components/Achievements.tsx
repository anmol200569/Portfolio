import type { FC } from 'react';
import { Sparkles, Trophy, ShieldCheck, Flame } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Achievements: FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud & Tech':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Certification':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Competition':
      default:
        return <Trophy className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative border-t border-white/[0.06] bg-[#0b0f19]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 / ACHIEVEMENTS &amp; CREDENTIALS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Verified Milestones &amp; Competitions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Recognized performance in international cloud programs, regional hack challenges, and industry-standard certifications.
          </p>
        </div>

        {/* Featured Big Milestone: Google Cloud Arcade Legend Tier */}
        <div className="mb-10 rounded-3xl bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-indigo-950/40 border border-amber-500/20 p-6 sm:p-8 relative overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Top Tier Milestone
                </span>
                <span className="text-xs font-mono text-slate-400">Google Cloud Arcade 2025</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                Google Cloud Arcade — Legend Tier
              </h3>

              <p className="text-sm sm:text-base text-slate-300/90 font-light mt-3 leading-relaxed">
                Completed exhaustive hands-on cloud labs across compute engine provisioning, IAM security architecture, big data pipelines, and container orchestrations to earn top-tier recognition in the Google Cloud ecosystem.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] text-center flex flex-col justify-center">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-amber-300">
                  451
                </span>
                <span className="text-[11px] font-mono text-slate-400 uppercase mt-1">
                  Cloud Labs
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] text-center flex flex-col justify-center">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-indigo-300">
                  139
                </span>
                <span className="text-[11px] font-mono text-slate-400 uppercase mt-1">
                  Skill Badges
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] text-center flex flex-col justify-center">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-300">
                  27
                </span>
                <span className="text-[11px] font-mono text-slate-400 uppercase mt-1">
                  Games Won
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.achievements
            .filter((a) => a.id !== 'google-cloud-arcade')
            .map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08]">
                      {getCategoryIcon(item.category)}
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-indigo-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-medium text-indigo-400 mt-1">{item.issuer}</p>

                  <p className="text-xs sm:text-sm text-slate-300/80 mt-3 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-emerald-400 font-semibold">{item.stats}</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {item.credentialBadge}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
