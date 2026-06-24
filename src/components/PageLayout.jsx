import { useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import ImageLightbox from '../components/ImageLightbox'
import Breadcrumb from '../components/Breadcrumb'
import pages from '../data/pages.json'
import {
  Home,
  FileText,
  Database,
  Code,
  Table,
  Network,
  Server,
  CreditCard,
  Cloud,
  Layout,
  Rocket,
  BookOpen,
  GitBranch,
  Workflow,
  Palette,
  Users,
  Kanban,
  Columns,
  Tag,
  ClipboardCheck,
  CheckSquare,
  ListChecks,
  Presentation,
} from 'lucide-react'

const iconMap = {
  home: Home,
  'file-text': FileText,
  database: Database,
  code: Code,
  table: Table,
  network: Network,
  server: Server,
  'credit-card': CreditCard,
  cloud: Cloud,
  layout: Layout,
  figma: Layout,
  rocket: Rocket,
  'book-open': BookOpen,
  'git-branch': GitBranch,
  workflow: Workflow,
  palette: Palette,
  users: Users,
  kanban: Kanban,
  columns: Columns,
  tag: Tag,
  'clipboard-check': ClipboardCheck,
  'check-square': CheckSquare,
  'list-checks': ListChecks,
  presentation: Presentation,
}

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

export default function PageLayout({ pageId, children }) {
  const page = pages[pageId]
  if (!page) return null

  const Icon = iconMap[page.icon] || FileText

  return (
    <article className="max-w-[720px]">
      <Breadcrumb items={page.breadcrumb} />
      <div className="flex items-center gap-3 mb-2">
        <Icon size={28} className="text-black shrink-0" strokeWidth={1.5} />
        <h1 className="text-[32px] font-bold text-black leading-tight">{page.title}</h1>
      </div>
      <p className="text-[13px] text-gray-400 mb-6">
        Dernière mise à jour :{' '}
        {new Date(page.lastUpdated).toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
      <hr className="border-gray-100 mb-8" />
      {children || (
        <Markdown remarkPlugins={[remarkGfm]} components={mdComponents}>
          {page.body}
        </Markdown>
      )}
    </article>
  )
}
