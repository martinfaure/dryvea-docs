import { Github } from 'lucide-react'

export default function TeamFigurine({ member }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="flex flex-col items-center mb-1">
        <div className="w-9 h-9 rounded-full border-2 border-black bg-white flex items-center justify-center text-[11px] font-bold tracking-tight">
          {member.initials}
        </div>
        <div className="w-6 h-8 bg-black mt-px" />
        <div className="flex gap-1 mt-px">
          <div className="w-2.5 h-3 bg-black" />
          <div className="w-2.5 h-3 bg-black" />
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="w-14 h-1.5 bg-black" />
        <div className="w-11 h-5 border-x border-b border-black bg-white" />
        <div className="w-[72px] h-2 bg-gray-50 border border-gray-100" />
        <div className="w-20 h-2.5 bg-black" />
      </div>

      <div className="mt-4 w-full">
        <p className="text-sm font-semibold text-black leading-tight">{member.name}</p>
        <p className="text-[12px] text-gray-400 mt-1">{member.role}</p>
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-2 text-[12px] text-gray-400 hover:text-black transition-colors"
        >
          <Github size={12} />
          @{member.githubUsername}
        </a>
      </div>
    </div>
  )
}
