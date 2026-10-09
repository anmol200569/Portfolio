import { useState, type FC, type FormEvent } from 'react';
import { Sparkles, Copy, Check, Send, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleComposeEmail = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
      subject || 'Collaboration / Inquiries via Portfolio'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.06] bg-[#0b0f19]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Invitation & Social Channels */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>07 / GET IN TOUCH</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Have an idea{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
                worth building?
              </span>
            </h2>

            <p className="text-slate-300/90 text-base sm:text-lg mt-4 max-w-xl font-light leading-relaxed">
              I am open to technical collaborations, student hackathon teams, open-source projects, and internship discussions. Reach out directly and let's create something meaningful.
            </p>

            {/* Direct Email Card with 1-click Copy */}
            <div className="mt-8 w-full p-5 rounded-2xl bg-slate-900/80 border border-white/[0.1] backdrop-blur-md">
              <span className="text-xs font-mono text-slate-400 block mb-2 uppercase tracking-wider">
                Direct Email Address
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="font-mono text-base sm:text-lg text-indigo-300 hover:text-white font-medium transition-colors break-all"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/[0.08] active:scale-95 transition-all self-start sm:self-auto cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Verified Social Profiles */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-xs font-medium text-slate-200 border border-white/[0.08] hover:border-indigo-400/40 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-xs font-medium text-slate-200 border border-white/[0.08] hover:border-indigo-400/40 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-xs font-medium text-slate-200 border border-white/[0.08] hover:border-emerald-400/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Pre-filled Email Composer (Direct mailto trigger) */}
          <div className="lg:col-span-6 w-full">
            <div className="glass-card p-6 sm:p-8 rounded-3xl relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  Send a Direct Message
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  Reliable Mail Client
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-6 font-light">
                Composes a message in your default email client with guaranteed delivery directly to Anmol's inbox.
              </p>

              <form onSubmit={handleComposeEmail} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Technical Collaboration / Project Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Message Details
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, idea, or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-600/30 hover:brightness-110 active:scale-[0.99] transition-all border border-indigo-400/30 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Email Draft</span>
                </button>
              </form>

              <p className="text-[11px] text-slate-500 text-center mt-4 font-mono">
                No database or intermediary tracker — opens your personal email client directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
