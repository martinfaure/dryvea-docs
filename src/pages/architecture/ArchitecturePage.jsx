import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import ImageLightbox from '../../components/ImageLightbox'
import PageLayout from '../../components/PageLayout'
import pages from '../../data/pages.json'

function ImageMarkdown({ src, alt }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <img
        src={src}
        alt={alt}
        className="max-w-full h-auto my-4 cursor-zoom-in"
        onClick={() => setOpen(true)}
      />
      <ImageLightbox src={src} alt={alt} isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}

const mdComponents = {
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold mt-8 mb-3 text-black">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-semibold mt-6 mb-2 text-black">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-[15px] leading-relaxed my-3 text-black">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-5 space-y-1.5 my-3 text-[15px] leading-relaxed">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-5 space-y-1.5 my-3 text-[15px] leading-relaxed">{children}</ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  table: ({ children }) => (
    <div className="my-4 overflow-x-auto">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="border-b-2 border-black">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children, ...props }) => {
    const isHeader = props.node?.parent?.tagName === 'thead'
    return (
      <tr className={isHeader ? '' : 'border-b border-gray-100'}>{children}</tr>
    )
  },
  th: ({ children }) => (
    <th className="px-3 py-2 text-left font-semibold">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-3 py-2 text-left">{children}</td>
  ),
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  code: ({ children, className }) => {
    const isBlock = className?.includes('language-')
    if (isBlock) {
      return (
        <code className="block bg-gray-50 p-4 my-3 text-[13px] font-mono overflow-x-auto">
          {children}
        </code>
      )
    }
    return (
      <code className="bg-gray-50 px-1 py-0.5 text-[13px] font-mono">{children}</code>
    )
  },
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-200 pl-4 my-4 text-[15px] text-gray-600 italic">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a href={href} className="text-black underline decoration-gray-300 hover:decoration-black transition-colors" target="_blank" rel="noopener noreferrer">{children}</a>
  ),
  hr: () => <hr className="border-gray-100 my-6" />,
  img: ({ src, alt }) => <ImageMarkdown src={src} alt={alt} />,
}

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

        <Markdown remarkPlugins={[remarkGfm]} components={mdComponents}>
          {page.body}
        </Markdown>
      </div>
    </PageLayout>
  )
}

function ArchitectureDiagram() {
  const layers = [
    { label: 'Client (Browser)', items: ['HTML/CSS/JS', 'Flatpickr CDN'] },
    { label: 'Apache / PHP Server', items: ['.htaccess rewrite', 'public/index.php', 'Session PHP'] },
    { label: 'MVC Framework', items: ['Router', 'Controllers', 'Models', 'Views', 'Middlewares'] },
    { label: 'Database', items: ['MySQL 8+', 'PDO'] },
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
        <span>Composer autoload PSR-4</span>
        <span>config/config.php</span>
        <span>dryvea.sql → MySQL</span>
      </div>
    </div>
  )
}
