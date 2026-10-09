import type { FC } from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const CURRENT_YEAR = 2026;

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#070b14] text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-display font-bold text-white text-base">
              {PORTFOLIO_DATA.personal.wordmark}
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>
              &copy; {CURRENT_YEAR} {PORTFOLIO_DATA.personal.name}. All rights reserved.
            </span>
          </div>

          {/* Tech Stack Credit */}
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
            <span>Crafted with</span>
            <span className="text-indigo-400 font-semibold">React</span>
            <span>&amp;</span>
            <span className="text-violet-400 font-semibold">Tailwind CSS</span>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
