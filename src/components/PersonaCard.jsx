export default function PersonaCard({ persona }) {
  return (
    <div className="border border-gray-100 flex flex-col">
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-black text-white flex items-center justify-center text-lg font-bold shrink-0">
            {persona.avatar}
          </div>
          <div>
            <h3 className="text-lg font-bold text-black">{persona.name}</h3>
            <p className="text-sm text-gray-400">{persona.role}</p>
            <p className="text-[13px] text-gray-400 mt-0.5">
              {persona.age} ans · {persona.location}
            </p>
          </div>
        </div>
        <blockquote className="mt-4 pl-3 border-l-2 border-black text-[14px] italic text-black leading-relaxed">
          « {persona.quote} »
        </blockquote>
      </div>

      <div className="p-5 space-y-5 flex-1">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">Contexte</p>
          <p className="text-[13px] leading-relaxed text-black">{persona.context}</p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">Objectifs</p>
          <ul className="space-y-1">
            {persona.goals.map((goal) => (
              <li key={goal} className="text-[13px] text-black flex gap-2">
                <span className="text-black shrink-0">+</span>
                {goal}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">Frustrations</p>
          <ul className="space-y-1">
            {persona.frustrations.map((item) => (
              <li key={item} className="text-[13px] text-gray-400 flex gap-2">
                <span className="shrink-0">−</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">Comportements</p>
          <ul className="space-y-1">
            {persona.behaviors.map((item) => (
              <li key={item} className="text-[13px] text-black flex gap-2">
                <span className="text-gray-400 shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-6 pt-2 border-t border-gray-100">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-gray-400">Niveau tech</p>
            <p className="text-[13px] font-medium mt-0.5">{persona.techLevel}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-gray-400">Appareils</p>
            <p className="text-[13px] mt-0.5">{persona.devices.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
