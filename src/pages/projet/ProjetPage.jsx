import { useState } from 'react'
import { ExternalLink, Copy, Check, Eye, EyeOff } from 'lucide-react'
import PageLayout from '../../components/PageLayout'
import projet from '../../data/projet.json'

export default function ProjetPage() {
  const [copied, setCopied] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleCopyPassword = async () => {
    await navigator.clipboard.writeText(projet.password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <PageLayout pageId="projet">
      <div className="space-y-6">
        <p className="text-[15px] leading-relaxed text-black">{projet.description}</p>

        <div className="border border-gray-100 p-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-gray-400">Accès</p>
            <p className="text-sm font-mono mt-1 break-all">{projet.url}</p>
          </div>
          <a
            href={projet.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-black text-white text-sm font-medium hover:opacity-90 transition-opacity shrink-0"
          >
            Ouvrir le projet
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="border border-gray-100 p-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-gray-400">Mot de passe</p>
            <p className="text-sm font-mono mt-1">
              {showPassword ? projet.password : '••••••'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-100 text-[13px] hover:bg-gray-50 transition-colors"
            >
              {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              {showPassword ? 'Masquer' : 'Afficher'}
            </button>
            <button
              onClick={handleCopyPassword}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-100 text-[13px] hover:bg-gray-50 transition-colors"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copié' : 'Copier'}
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold mb-3">Aperçu</h2>
          <div className="border border-gray-100 bg-gray-50 aspect-video relative">
            <iframe
              title={projet.title}
              src={projet.url}
              className="absolute inset-0 w-full h-full bg-white"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            />
          </div>
          <p className="text-[12px] text-gray-400 mt-2">
            Si l'aperçu ne s'affiche pas (restriction du site hôte), utilisez le bouton « Ouvrir le
            projet » ci-dessus.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
