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

function renderMarkdown(text) {
  if (!text) return null

  const lines = text.split('\n')
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-xl font-semibold mt-8 mb-3 text-black">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-base font-semibold mt-6 mb-2 text-black">
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-5 space-y-1.5 my-3 text-[15px] leading-relaxed">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      )
      continue
    } else if (/^\d+\.\s/.test(line)) {
      const items = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ''))
        i++
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal pl-5 space-y-1.5 my-3 text-[15px] leading-relaxed">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ol>
      )
      continue
    } else if (line.startsWith('|')) {
      const rows = []
      while (i < lines.length && lines[i].startsWith('|')) {
        rows.push(lines[i])
        i++
      }
      const dataRows = rows.filter((r) => !r.includes('---'))
      elements.push(
        <div key={`table-${i}`} className="my-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {dataRows.map((row, ri) => {
                const cells = row.split('|').filter(Boolean).map((c) => c.trim())
                const Tag = ri === 0 ? 'th' : 'td'
                return (
                  <tr key={ri} className={ri === 0 ? 'border-b-2 border-black' : 'border-b border-gray-100'}>
                    {cells.map((cell, ci) => (
                      <Tag
                        key={ci}
                        className={`px-3 py-2 text-left ${ri === 0 ? 'font-semibold' : ''}`}
                      >
                        {cell}
                      </Tag>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
      continue
    } else if (line.trim() === '') {
      // skip empty lines
    } else {
      elements.push(
        <p
          key={i}
          className="text-[15px] leading-relaxed my-3 text-black"
          dangerouslySetInnerHTML={{ __html: formatInline(line) }}
        />
      )
    }
    i++
  }

  return elements
}

function formatInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code class="bg-gray-50 px-1 py-0.5 text-[13px] font-mono">$1</code>')
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
      {children || <div className="prose-dryvea">{renderMarkdown(page.body)}</div>}
    </article>
  )
}
