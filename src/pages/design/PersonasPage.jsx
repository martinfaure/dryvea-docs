import PageLayout from '../../components/PageLayout'
import PersonaCard from '../../components/PersonaCard'
import personas from '../../data/personas.json'

export default function PersonasPage() {
  return (
    <PageLayout pageId="personas">
      <div className="space-y-8">
        <p className="text-[15px] leading-relaxed text-black">
          Quatre profils utilisateurs représentatifs des parcours Dryvea. Chaque feature doit
          répondre aux besoins d'au moins un persona prioritaire avant mise en production.
        </p>

        <div className="border border-gray-100 p-4">
          <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-3">Priorité MVP</p>
          <div className="flex flex-wrap gap-3">
            {[
              { persona: 'Matilde', priority: 'P0 — Lycéenne', flow: 'Recherche VSP → Réservation → Trajet lycée' },
              { persona: 'Didier', priority: 'P0 — Urgence mobilité', flow: 'Recherche rapide → Location courte durée → Rendez-vous' },
              { persona: 'Timéo', priority: 'P1 — Social', flow: 'Découverte → Location minute → Partage réseau' },
            ].map((item) => (
              <div key={item.persona} className="border border-gray-100 px-3 py-2 flex-1 min-w-[200px]">
                <p className="text-sm font-semibold">{item.persona}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{item.priority}</p>
                <p className="text-[12px] text-black mt-1">{item.flow}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {personas.map((persona) => (
            <PersonaCard key={persona.id} persona={persona} />
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
