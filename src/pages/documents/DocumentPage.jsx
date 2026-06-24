import { useParams } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'
import DocumentCard from '../../components/DocumentCard'
import DocxPreview from '../../components/DocxPreview'
import documents from '../../data/documents.json'
import pages from '../../data/pages.json'

const statusLabels = {
  draft: 'Draft',
  review: 'Review',
  validated: 'Validated',
}

export default function DocumentPage() {
  const { docId } = useParams()
  const document = documents.find((d) => d.id === docId)
  const page = pages[docId]

  if (!document || !page) {
    return (
      <div className="max-w-[720px]">
        <h1 className="text-2xl font-bold">Document introuvable</h1>
        <p className="text-gray-400 mt-2">Ce document n'existe pas dans la base documentaire.</p>
      </div>
    )
  }

  return (
    <PageLayout pageId={docId}>
      <div className="space-y-8">
        <DocumentCard document={document} />

        <div>
          <h2 className="text-base font-semibold mb-3">Aperçu</h2>
          <DocxPreview
            file={`/documents/${document.filename}`}
            fileName={document.filename}
          />
        </div>

        <div>
          <h2 className="text-base font-semibold mb-3">Historique des versions</h2>
          <div className="border border-gray-100 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-4 py-2.5 font-semibold text-[11px] uppercase tracking-wide text-gray-400">
                    Version
                  </th>
                  <th className="text-left px-4 py-2.5 font-semibold text-[11px] uppercase tracking-wide text-gray-400">
                    Date
                  </th>
                  <th className="text-left px-4 py-2.5 font-semibold text-[11px] uppercase tracking-wide text-gray-400">
                    Auteur
                  </th>
                  <th className="text-left px-4 py-2.5 font-semibold text-[11px] uppercase tracking-wide text-gray-400">
                    Modifications
                  </th>
                  <th className="text-left px-4 py-2.5 font-semibold text-[11px] uppercase tracking-wide text-gray-400">
                    Statut
                  </th>
                </tr>
              </thead>
              <tbody>
                {document.versions.map((v, index) => (
                  <tr key={v.version} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-mono text-[13px]">v{v.version}</td>
                    <td className="px-4 py-3 text-[13px]">
                      {new Date(v.date).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-4 py-3 text-[13px]">{v.author}</td>
                    <td className="px-4 py-3 text-[13px] text-gray-400">{v.changes}</td>
                    <td className="px-4 py-3">
                      {index === 0 && (
                        <span className="text-[11px] font-medium uppercase tracking-wide">
                          {statusLabels[document.status]}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
