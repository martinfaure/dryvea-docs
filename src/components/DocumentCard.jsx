import StatusBadge from './StatusBadge'

const statusLabels = {
  draft: 'Draft',
  review: 'Review',
  validated: 'Validated',
}

export default function DocumentCard({ document }) {
  return (
    <div className="border border-gray-100 rounded-none p-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-10 h-10 bg-black text-white flex items-center justify-center text-xs font-bold shrink-0">
          {document.type}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-black truncate">{document.filename}</p>
          <p className="text-xs text-gray-400 mt-0.5">
            {document.size} · Modifié le {new Date(document.lastModified).toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <StatusBadge status={document.status} label={statusLabels[document.status]} />
        <a
          href={`/documents/${document.filename}`}
          download={document.filename}
          className="px-3 py-1.5 text-xs font-medium border border-gray-100 hover:bg-gray-50 transition-colors inline-block"
        >
          Télécharger
        </a>
      </div>
    </div>
  )
}
