import PageLayout from '../../components/PageLayout'
import database from '../../data/database.json'

export default function MldPage() {
  return (
    <PageLayout pageId="mld">
      <div className="space-y-8">
        <p className="text-[15px] leading-relaxed text-black">
          Modèle logique de données traduisant le MCD en tables relationnelles avec clés primaires,
          étrangères et contraintes d'unicité.
        </p>

        {database.mldTables.map((table) => (
          <div key={table.name} className="border border-gray-100">
            <div className="bg-black text-white px-4 py-2 flex items-center justify-between">
              <span className="font-mono text-sm font-semibold">{table.name}</span>
              <span className="text-[11px] text-white/60">PK: {table.primaryKey}</span>
            </div>
            <div className="p-4 font-mono text-[13px] leading-relaxed space-y-1">
              {table.columns.map((col) => (
                <div key={col} className="text-black">
                  {col.includes('PK') ? (
                    <strong>{col}</strong>
                  ) : col.includes('FK') ? (
                    <em>{col}</em>
                  ) : (
                    col
                  )}
                </div>
              ))}
            </div>
            {table.foreignKeys.length > 0 && (
              <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
                <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1">Foreign Keys</p>
                {table.foreignKeys.map((fk) => (
                  <p key={fk} className="font-mono text-[12px] text-gray-400">
                    {fk}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
