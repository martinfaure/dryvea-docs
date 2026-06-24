import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  ChevronRight,
  ChevronDown,
  Search,
  Menu,
  X,
  FileText,
  Layout,
  Database,
  Code,
  Table,
  Network,
  Server,
  CreditCard,
  Cloud,
  Rocket,
  BookOpen,
  GitBranch,
  Workflow,
  Scale,
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
import navigation from '../data/navigation.json'

const iconMap = {
  'file-text': FileText,
  layout: Layout,
  database: Database,
  code: Code,
  table: Table,
  network: Network,
  server: Server,
  'credit-card': CreditCard,
  cloud: Cloud,
  rocket: Rocket,
  'book-open': BookOpen,
  'git-branch': GitBranch,
  workflow: Workflow,
  scale: Scale,
  figma: Layout,
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

function NavItem({ item, depth = 0, onNavigate }) {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(true)
  const hasChildren = item.children && item.children.length > 0
  const Icon = item.icon ? iconMap[item.icon] : null

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-2 px-3 py-1.5 text-left hover:bg-gray-50 transition-colors group"
          style={{ paddingLeft: `${12 + depth * 12}px` }}
        >
          {isOpen ? (
            <ChevronDown size={14} className="text-gray-400 shrink-0" />
          ) : (
            <ChevronRight size={14} className="text-gray-400 shrink-0" />
          )}
          <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            {item.label}
          </span>
        </button>
        {isOpen && (
          <div>
            {item.children.map((child) => (
              <NavItem key={child.id} item={child} depth={depth + 1} onNavigate={onNavigate} />
            ))}
          </div>
        )}
      </div>
    )
  }

  const isActive = location.pathname === item.path

  return (
    <NavLink
      to={item.path}
      onClick={onNavigate}
      className={`flex items-center gap-2 px-3 py-1.5 text-[13px] transition-colors ${
        isActive
          ? 'bg-black text-white'
          : 'text-black hover:bg-gray-50'
      }`}
      style={{ paddingLeft: `${24 + depth * 12}px` }}
    >
      {Icon && <Icon size={14} className="shrink-0" />}
      <span className="truncate">{item.label}</span>
    </NavLink>
  )
}

export default function Sidebar({ onSearchOpen, isMobileOpen, onMobileClose }) {
  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-[240px] bg-white border-r border-gray-100 z-50 flex flex-col transition-transform duration-200 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <img src="/logo.svg" alt="Dryvea" className="w-7 h-7" />
              <span className="text-[14px] font-semibold text-black">Dryvea Docs</span>
            </div>
          <button
            onClick={onMobileClose}
            className="lg:hidden text-gray-400 hover:text-black"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-3 py-3">
          <button
            onClick={onSearchOpen}
            className="w-full flex items-center gap-2 px-3 py-2 border border-gray-100 text-gray-400 text-[13px] hover:bg-gray-50 transition-colors"
          >
            <Search size={14} />
            <span className="flex-1 text-left">Rechercher...</span>
            <kbd className="text-[10px] border border-gray-100 px-1.5 py-0.5 font-mono">⌘K</kbd>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto pb-4">
          {navigation.map((section) => (
            <NavItem key={section.id} item={section} onNavigate={onMobileClose} />
          ))}
        </nav>
      </aside>
    </>
  )
}

export function MobileHeader({ onMenuOpen, onSearchOpen }) {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-100 z-30 flex items-center justify-between px-4">
      <button onClick={onMenuOpen} className="text-black">
        <Menu size={20} />
      </button>
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Dryvea" className="w-6 h-6" />
        <span className="text-sm font-semibold">Dryvea Docs</span>
      </div>
      <button onClick={onSearchOpen} className="text-gray-400">
        <Search size={18} />
      </button>
    </header>
  )
}
