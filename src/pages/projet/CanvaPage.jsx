import { ExternalLink } from 'lucide-react'
import PageLayout from '../../components/PageLayout'
import canva from '../../data/canva.json'

export default function CanvaPage() {
  return (
    <PageLayout pageId="presentation-canva">
      <div className="space-y-6">
        <p className="text-[15px] leading-relaxed text-black">{canva.description}</p>

        <div className="border border-gray-100 p-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-gray-400">Présentation Canva</p>
            <p className="text-sm font-mono mt-1 break-all">{canva.viewUrl}</p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <a
              href={canva.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 border border-black text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Voir
              <ExternalLink size={14} />
            </a>
            <a
              href={canva.editUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-black text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Modifier
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold mb-3">Aperçu</h2>
          <div className="border border-gray-100 bg-gray-50 aspect-video relative">
            <iframe
              title={canva.title}
              src={canva.embedUrl}
              className="absolute inset-0 w-full h-full bg-white"
              allow="fullscreen"
              allowFullScreen
            />
          </div>
          <p className="text-[12px] text-gray-400 mt-2">
            Utilisez les flèches du clavier ou les contrôles Canva pour naviguer entre les slides.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
