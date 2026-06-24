import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { useSearch } from '../hooks/useSearch'

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const { search } = useSearch()

  const results = search(query)

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (!isOpen) return

    const handler = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((i) => Math.max(i - 1, 0))
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault()
        navigate(results[selectedIndex].path)
        onClose()
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, results, selectedIndex, navigate, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-lg mx-4 bg-white border border-gray-100">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
          <Search size={16} className="text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher dans la documentation..."
            className="flex-1 text-sm outline-none bg-transparent text-black placeholder:text-gray-400"
          />
          <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors">
            <X size={16} />
          </button>
        </div>
        <div className="max-h-[320px] overflow-y-auto">
          {results.length === 0 ? (
            <p className="px-4 py-6 text-sm text-gray-400 text-center">Aucun résultat</p>
          ) : (
            results.map((result, index) => (
              <button
                key={result.path}
                onClick={() => {
                  navigate(result.path)
                  onClose()
                }}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`w-full text-left px-4 py-3 flex flex-col gap-0.5 transition-colors ${
                  index === selectedIndex ? 'bg-black text-white' : 'hover:bg-gray-50'
                }`}
              >
                <span className="text-sm font-medium">{result.title}</span>
                <span
                  className={`text-xs ${index === selectedIndex ? 'text-white/60' : 'text-gray-400'}`}
                >
                  {result.section}
                </span>
              </button>
            ))
          )}
        </div>
        <div className="px-4 py-2 border-t border-gray-100 flex items-center gap-4 text-[11px] text-gray-400">
          <span>↑↓ naviguer</span>
          <span>↵ ouvrir</span>
          <span>esc fermer</span>
        </div>
      </div>
    </div>
  )
}
