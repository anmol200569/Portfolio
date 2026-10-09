import { useState, type FC } from 'react';
import { Sparkles, ExternalLink, CloudSun, CheckSquare, Map, FileText } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PORTFOLIO_DATA, type Project } from '../data/portfolioData';

export const Projects: FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Frontend' | 'Full-Stack'>('All');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Frontend') {
      return (
        project.tags.includes('JavaScript') &&
        (project.tags.includes('CSS3') || project.tags.includes('Responsive UI')) &&
        !project.tags.includes('PostgreSQL') &&
        !project.tags.includes('MongoDB')
      );
    }
    if (activeFilter === 'Full-Stack') {
      return (
        project.tags.includes('Node.js') ||
        project.tags.includes('PostgreSQL') ||
        project.tags.includes('MongoDB')
      );
    }
    return true;
  });

  const renderProjectVisual = (project: Project) => {
    switch (project.previewType) {
      case 'weather':
        return (
          <div className="w-full h-44 rounded-xl bg-gradient-to-br from-slate-900 via-indigo-950/70 to-slate-900 p-4 border border-white/[0.08] flex flex-col justify-between relative overflow-hidden group-hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-300">Live API • OpenWeather</span>
              </div>
              <CloudSun className="w-6 h-6 text-indigo-300" />
            </div>

            <div className="my-auto py-2">
              <div className="flex items-baseline gap-2">
                <span className="font-display font-extrabold text-3xl text-white">28°C</span>
                <span className="text-xs text-indigo-300 font-mono">Clear Sky</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">Jabalpur, MP</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.08] text-[11px] font-mono text-slate-300">
              <div className="flex items-center justify-between px-2 py-1 rounded bg-black/40">
                <span className="text-slate-400">Humidity</span>
                <span>54%</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1 rounded bg-black/40">
                <span className="text-slate-400">Wind</span>
                <span>12 km/h</span>
              </div>
            </div>
          </div>
        );

      case 'todo':
        return (
          <div className="w-full h-44 rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 border border-white/[0.08] flex flex-col justify-between relative overflow-hidden group-hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-mono text-slate-300">Web Storage API</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                LocalStorage
              </span>
            </div>

            <div className="space-y-1.5 my-auto">
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/[0.04] text-xs text-slate-400 line-through">
                <span className="w-3.5 h-3.5 rounded bg-indigo-500/40 text-indigo-200 flex items-center justify-center text-[9px]">
                  ✓
                </span>
                <span>Review Data Structures (Graph BFS)</span>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs text-white">
                <span className="w-3.5 h-3.5 rounded border border-indigo-400/50" />
                <span>Prepare Microsoft Club Workshop slides</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-2 border-t border-white/[0.08]">
              <span>Dynamic DOM Lifecycle</span>
              <span className="text-emerald-400">State Persisted</span>
            </div>
          </div>
        );

      case 'tracker':
        return (
          <div className="w-full h-44 rounded-xl bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 p-4 border border-white/[0.08] flex flex-col justify-between relative overflow-hidden group-hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Map className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono text-slate-300">Relational DB Backend</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                PostgreSQL + Express
              </span>
            </div>

            <div className="my-auto py-1">
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1">
                <span>Visited Countries Log</span>
                <span className="font-bold text-white">12 Logged</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full w-[45%]" />
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-2 border-t border-white/[0.08]">
              <span>SQL Queries &amp; Parameterized Inserts</span>
              <span className="text-blue-300">Node/EJS Views</span>
            </div>
          </div>
        );

      case 'mern':
      default:
        return (
          <div className="w-full h-44 rounded-xl bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-900 p-4 border border-white/[0.08] flex flex-col justify-between relative overflow-hidden group-hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono text-slate-300">Full-Stack MERN Architecture</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Blueprint / Showcase
              </span>
            </div>

            <div className="my-auto py-1">
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs">
                <div className="flex items-center justify-between text-white font-medium mb-1">
                  <span>Structured Notes Engine</span>
                  <span className="text-[10px] font-mono text-indigo-400">REST CRUD</span>
                </div>
                <p className="text-[11px] text-slate-400 truncate">
                  JWT auth • Category tags • MongoDB Atlas schema
                </p>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-2 border-t border-white/[0.08]">
              <span>Configurable Project Entry</span>
              <span className="text-purple-300">Ready for Live URL</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.06] bg-[#0d1220]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>04 / FEATURED PROJECTS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Selected Works &amp; Applications
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
              Every project represents verified code built from scratch, addressing concrete problems with responsive interfaces and real endpoints.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-white/[0.08]">
            {(['All', 'Frontend', 'Full-Stack'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Preview */}
                <div className="mb-6">{renderProjectVisual(project)}</div>

                {/* Subtitle / Category */}
                <span className="text-xs font-mono text-indigo-400 font-medium uppercase tracking-wider block mb-1">
                  {project.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-indigo-200 transition-colors">
                  {project.title}
                </h3>

                {/* Problem & Solution */}
                <div className="mt-4 space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  <p>
                    <strong className="text-slate-200 font-medium">Problem: </strong>
                    {project.problem}
                  </p>
                  <p>
                    <strong className="text-indigo-300 font-medium">Solution: </strong>
                    {project.solution}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/[0.08] text-[11px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-200 border border-white/[0.1] hover:border-indigo-400/40 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-xs font-medium text-indigo-300 border border-indigo-500/30 transition-colors"
                      title="Live Deployment"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                {project.isPlaceholder && (
                  <span className="text-[11px] font-mono text-purple-300/80">
                    Editable Schema
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
