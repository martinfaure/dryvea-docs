import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-1 text-[13px] text-gray-400 mb-6">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          {index > 0 && <ChevronRight size={12} className="text-gray-100" />}
          {index === items.length - 1 ? (
            <span className="text-gray-400">{item}</span>
          ) : index === 0 ? (
            <Link to="/" className="hover:text-black transition-colors">
              {item}
            </Link>
          ) : (
            <span>{item}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
