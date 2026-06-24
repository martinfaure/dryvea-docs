import PageLayout from '../../components/PageLayout'
import EntityCard from '../../components/EntityCard'
import database from '../../data/database.json'

export default function McdPage() {
  return (
    <PageLayout pageId="mcd">
      <div className="space-y-6">
        <p className="text-[15px] leading-relaxed text-black">
          Modèle conceptuel de données représentant les entités métier de la plateforme Dryvea et
          leurs relations.
        </p>

        <div className="flex flex-wrap gap-4">
          {database.entities.map((entity) => (
            <EntityCard key={entity.name} entity={entity} />
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-base font-semibold mb-4">Relations</h2>
          <div className="border border-gray-100">
            {database.relations.map((rel, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-100 last:border-0 text-[13px]"
              >
                <span className="font-semibold">{rel.from}</span>
                <span className="text-gray-400">→</span>
                <span className="font-semibold">{rel.to}</span>
                <span className="text-gray-400 ml-auto font-mono text-[11px]">
                  {rel.cardinality} · {rel.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
