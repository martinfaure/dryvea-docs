import { useParams } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'
import pages from '../../data/pages.json'

const pageIdMap = {
  globale: 'architecture-globale',
  'schema-api': 'schema-api',
  'flux-paiement': 'flux-paiement',
  infrastructure: 'infrastructure',
}

export default function ArchitecturePage() {
  const { archId } = useParams()
  const pageId = pageIdMap[archId] || archId
  const page = pages[pageId]

  if (!page) {
    return (
      <div className="max-w-[720px]">
        <h1 className="text-2xl font-bold">Page introuvable</h1>
      </div>
    )
  }

  const isGlobal = pageId === 'architecture-globale'

  return (
    <PageLayout pageId={pageId}>
      <div className="space-y-8">
        {isGlobal && <ArchitectureDiagram />}

        <div className="prose-dryvea">
          {page.body.split('\n\n').map((block, i) => {
            if (block.startsWith('## ')) {
              return (
                <div key={i}>
                  <h2 className="text-xl font-semibold mt-8 mb-3">{block.split('\n')[0].slice(3)}</h2>
                  {block.split('\n').slice(1).map((line, j) => (
                    <p key={j} className="text-[15px] leading-relaxed my-2 text-black">
                      {line.startsWith('- ') ? null : line}
                    </p>
                  ))}
                </div>
              )
            }
            if (block.startsWith('- ')) {
              const items = block.split('\n').filter((l) => l.startsWith('- '))
              return (
                <ul key={i} className="list-disc pl-5 space-y-1.5 my-3 text-[15px]">
                  {items.map((item, j) => (
                    <li key={j}>{item.slice(2).replace(/\*\*(.+?)\*\*/g, '$1')}</li>
                  ))}
                </ul>
              )
            }
            if (block.startsWith('|')) {
              const rows = block.split('\n').filter((r) => !r.includes('---'))
              return (
                <table key={i} className="w-full text-sm border-collapse my-4">
                  <tbody>
                    {rows.map((row, ri) => {
                      const cells = row.split('|').filter(Boolean).map((c) => c.trim())
                      const Tag = ri === 0 ? 'th' : 'td'
                      return (
                        <tr key={ri} className={ri === 0 ? 'border-b-2 border-black' : 'border-b border-gray-100'}>
                          {cells.map((cell, ci) => (
                            <Tag key={ci} className={`px-3 py-2 text-left ${ri === 0 ? 'font-semibold' : ''}`}>
                              {cell}
                            </Tag>
                          ))}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              )
            }
            return (
              <p key={i} className="text-[15px] leading-relaxed my-3 text-black">
                {block}
              </p>
            )
          })}
        </div>
      </div>
    </PageLayout>
  )
}

function ArchitectureDiagram() {
  const layers = [
    { label: 'Client', items: ['React Web App', 'React Native (future)'] },
    { label: 'API Gateway', items: ['AWS ALB', 'Rate Limiting', 'JWT Auth'] },
    { label: 'Services', items: ['Auth Service', 'Listing Service', 'Booking Service', 'Payment Service'] },
    { label: 'Data', items: ['PostgreSQL RDS', 'Redis Cache', 'S3 Storage'] },
  ]

  return (
    <div className="border border-gray-100 p-6">
      <h2 className="text-base font-semibold mb-6">Diagramme d'architecture</h2>
      <div className="flex flex-col items-start gap-0">
        {layers.map((layer, index) => (
          <div key={layer.label} className="flex flex-col items-start w-full">
            <div className="border border-black px-6 py-4 w-full max-w-md">
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">{layer.label}</p>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 border border-gray-100 text-[13px] bg-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {index < layers.length - 1 && (
              <div className="flex items-center ml-8 py-2">
                <div className="w-px h-6 bg-black" />
                <span className="text-[11px] text-gray-400 ml-2">↓</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-4 text-[13px] text-gray-400">
        <span>Stripe Connect ← Payment Service</span>
        <span>CloudFront CDN ← S3</span>
        <span>CloudWatch ← All Services</span>
      </div>
    </div>
  )
}
