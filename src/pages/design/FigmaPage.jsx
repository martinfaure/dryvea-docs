import { useParams } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'
import pages from '../../data/pages.json'

const pageIdMap = {
  'figma-overview': 'figma-overview',
}

export default function FigmaPage() {
  const { designId } = useParams()
  const pageId = pageIdMap[designId] || designId
  const page = pages[pageId]

  if (!page) {
    return (
      <div className="max-w-[720px]">
        <h1 className="text-2xl font-bold">Maquette introuvable</h1>
      </div>
    )
  }

  return (
    <PageLayout pageId={pageId}>
      <div className="space-y-8">
        <p className="text-[15px] leading-relaxed text-black">{page.body.split('\n\n')[0]}</p>

        <div>
          <h2 className="text-base font-semibold mb-3">Embed Figma</h2>
          <div className="border border-gray-100 bg-gray-50">
            <iframe
              title={`Figma — ${page.title}`}
              src={`https://www.figma.com/embed?embed_host=astra&url=${encodeURIComponent('https://www.figma.com/design/pegT3sk6JKAd7ZtxhKwNBA/Dryvea?node-id=0-1')}`}
              className="w-full aspect-video"
              allowFullScreen
            />
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold mb-3">Frames</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.frames?.map((frame) => (
              <div key={frame.name} className="border border-gray-100 group hover:bg-gray-50 transition-colors">
                <div className="bg-gray-50 aspect-[4/3] flex items-center justify-center border-b border-gray-100">
                  <span className="text-[11px] uppercase tracking-wide text-gray-400">
                    {frame.screen}
                  </span>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-sm font-medium text-black">{frame.name}</p>
                  <p className="text-xs text-gray-400">{frame.screen}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
