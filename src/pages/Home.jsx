import { Link } from 'react-router-dom'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import { TeamFigurine } from '../components/TeamFigurine'
import home from '../data/home.json'

export default function Home() {
  return (
    <div className="max-w-[800px] space-y-14">
      {/* Hero */}
      <section>
        <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-3">
          Documentation interne
        </p>
        <h1 className="text-[32px] font-bold text-black leading-tight mb-4">Bonjour</h1>
        <p className="text-[15px] leading-relaxed text-black mb-2">
          Bienvenue sur <strong>Dryvea Docs</strong>.
        </p>
        <p className="text-[15px] leading-relaxed text-gray-400">{home.project.description}</p>
      </section>

      {/* Project */}
      <section className="border border-gray-100 p-5">
        <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">Le projet</p>
        <h2 className="text-xl font-bold text-black">{home.project.name}</h2>
        <p className="text-[14px] text-gray-400 mt-1">{home.project.tagline}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {home.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-medium border border-gray-100 text-black"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-1 mt-4 text-[13px] text-gray-400">
          <span>
            Staging :{' '}
            <span className="font-mono text-black">{home.links.staging}</span>
          </span>
          <span>
            Prod :{' '}
            <span className="font-mono text-black">{home.links.production}</span>
          </span>
        </div>
      </section>

      {/* GitHub repos */}
      <section>
        <h2 className="text-base font-semibold text-black mb-4">GitHub</h2>
        <div className="space-y-3">
          {home.repositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-4 border border-gray-100 p-4 hover:bg-gray-50 transition-colors group"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Github size={16} className="shrink-0" />
                  <span className="text-sm font-semibold font-mono">{repo.name}</span>
                  <span className="text-[11px] uppercase tracking-wide text-gray-400 border border-gray-100 px-1.5 py-0.5">
                    {repo.label}
                  </span>
                </div>
                <p className="text-[13px] text-gray-400 mt-1.5">{repo.description}</p>
              </div>
              <ExternalLink
                size={14}
                className="text-gray-400 group-hover:text-black shrink-0 mt-0.5 transition-colors"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Team figurines */}
      <section>
        <h2 className="text-base font-semibold text-black mb-2">L'équipe</h2>
        <p className="text-[13px] text-gray-400 mb-8">
          Quatre développeurs, un projet — retrouvez chacun sur GitHub.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
          {home.team.map((member) => (
            <TeamFigurine key={member.githubUsername} member={member} />
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section>
        <h2 className="text-base font-semibold text-black mb-4">Accès rapide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {home.quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="flex items-center justify-between px-4 py-3 border border-gray-100 text-[13px] hover:bg-gray-50 transition-colors group"
            >
              <span>{link.label}</span>
              <ArrowRight
                size={14}
                className="text-gray-400 group-hover:text-black transition-colors"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Footer hint */}
      <p className="text-[13px] text-gray-400 pb-4">
        Menu latéral pour toutes les sections ·{' '}
        <kbd className="border border-gray-100 px-1.5 py-0.5 text-[11px] font-mono text-black">
          ⌘K
        </kbd>{' '}
        pour rechercher
      </p>
    </div>
  )
}
