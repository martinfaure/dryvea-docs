import PageLayout from '../../components/PageLayout'
import database from '../../data/database.json'

export default function DictionaryPage() {
  const tables = [...new Set(database.dictionary.map((d) => d.table))]

  return (
    <PageLayout pageId="dictionnaire">
      <div className="space-y-8">
        <p className="text-[15px] leading-relaxed text-black">
          Référentiel exhaustif de tous les champs de la base de données Dryvea.
        </p>

        {tables.map((tableName) => {
          const fields = database.dictionary.filter((d) => d.table === tableName)
          return (
            <div key={tableName}>
              <h2 className="text-base font-semibold mb-3 font-mono">{tableName}</h2>
              <div className="border border-gray-100 overflow-x-auto">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th className="text-left px-3 py-2 font-semibold text-[11px] uppercase tracking-wide text-gray-400">
                        Field
                      </th>
                      <th className="text-left px-3 py-2 font-semibold text-[11px] uppercase tracking-wide text-gray-400">
                        Type
                      </th>
                      <th className="text-left px-3 py-2 font-semibold text-[11px] uppercase tracking-wide text-gray-400">
                        Nullable
                      </th>
                      <th className="text-left px-3 py-2 font-semibold text-[11px] uppercase tracking-wide text-gray-400">
                        Description
                      </th>
                      <th className="text-left px-3 py-2 font-semibold text-[11px] uppercase tracking-wide text-gray-400">
                        Example
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fields.map((field) => (
                      <tr key={field.field} className="border-b border-gray-100 last:border-0">
                        <td className="px-3 py-2 font-mono font-medium">{field.field}</td>
                        <td className="px-3 py-2 font-mono text-gray-400">{field.type}</td>
                        <td className="px-3 py-2">{field.nullable ? 'Oui' : 'Non'}</td>
                        <td className="px-3 py-2 text-gray-400">{field.description}</td>
                        <td className="px-3 py-2 font-mono text-[11px] text-gray-400 max-w-[180px] truncate">
                          {field.example}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
        })}
      </div>
    </PageLayout>
  )
}
