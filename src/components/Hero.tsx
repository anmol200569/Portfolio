import { useState, type FC } from 'react';
import { ArrowDown, Mail, Terminal, Users } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: FC = () => {
  const [imageError, setImageError] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden subtle-grid"
    >
      {/* Ambient background glows */}
      <div className="hero-glow -top-32 -left-32 w-[480px] h-[480px] bg-indigo-600/15" />
      <div className="hero-glow top-1/3 -right-32 w-[520px] h-[520px] bg-violet-600/12" />
      <div className="hero-glow -bottom-32 left-1/3 w-[400px] h-[400px] bg-blue-600/10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/[0.08] text-xs font-mono text-slate-300 mb-6 backdrop-blur-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PORTFOLIO_DATA.personal.availabilityText}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-6">
              Building with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-400 to-violet-400">
                code.
              </span>
              <br />
              Leading with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300">
                curiosity.
              </span>
            </h1>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8">
              {PORTFOLIO_DATA.personal.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:brightness-110 active:scale-[0.98] transition-all duration-200 border border-indigo-400/30 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm bg-slate-900/70 hover:bg-slate-800 text-slate-200 border border-white/[0.12] hover:border-indigo-400/40 hover:text-white transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Let's Connect</span>
              </button>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-slate-900/70 border border-white/[0.12] text-slate-300 hover:text-white hover:border-indigo-400/40 hover:bg-slate-800 transition-colors"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-slate-900/70 border border-white/[0.12] text-slate-300 hover:text-white hover:border-indigo-400/40 hover:bg-slate-800 transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Indicator Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-white/[0.08]">
              {PORTFOLIO_DATA.personal.highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-display font-bold text-white text-sm sm:text-base tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Decorative background border glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-violet-500/20 to-blue-500/30 blur-xl opacity-70" />

              <div className="relative rounded-3xl bg-slate-900/90 border border-white/[0.12] p-4 backdrop-blur-xl shadow-2xl">
                {/* Photo Frame */}
                <div className="relative aspect-[4/4.6] w-full rounded-2xl overflow-hidden bg-slate-800 border border-white/[0.08]">
                  {!imageError ? (
                    <img
                      src={PORTFOLIO_DATA.personal.profileImage}
                      alt="Anmol Singh"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-center filter saturate-[1.05] contrast-[1.02] transition-transform duration-500 hover:scale-105"
                      loading="eager"
                    />
                  ) : (
                    /* Fallback Typographic Graphic */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-950 p-6 text-center">
                      <div className="w-20 h-20 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center font-display font-extrabold text-white text-3xl mb-4">
                        AS
                      </div>
                      <span className="font-display font-bold text-lg text-white">Anmol Singh</span>
                      <span className="text-xs text-indigo-300 font-mono mt-1">
                        CS Student &amp; Builder
                      </span>
                    </div>
                  )}

                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

                  {/* Badges on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/90">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10">
                      GGITS • Jabalpur
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-indigo-950/70 backdrop-blur-md border border-indigo-500/30 text-indigo-200">
                      Ops Lead
                    </span>
                  </div>
                </div>

                {/* Sub-card details */}
                <div className="mt-4 px-1 py-1 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>C++ • React • Cloud</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Users className="w-3.5 h-3.5 text-violet-400" />
                    <span>Tech Community</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
