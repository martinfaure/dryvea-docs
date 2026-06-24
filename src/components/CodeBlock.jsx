import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CodeBlock({ code, language = 'sql' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-white/70 hover:text-white border border-white/20 hover:border-white/40 transition-colors"
          aria-label="Copier le code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copié' : 'Copier'}
        </button>
      </div>
      <pre className="bg-black text-white p-4 pt-12 overflow-x-auto text-[13px] leading-relaxed font-mono">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}
