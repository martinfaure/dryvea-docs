import { useState } from 'react'
import PageLayout from '../../components/PageLayout'
import ImageLightbox from '../../components/ImageLightbox'

export default function McdMldPage() {
  const [fullscreen, setFullscreen] = useState(false)

  return (
    <PageLayout pageId="mcd-mld">
      <div className="space-y-6">
        <p className="text-[15px] leading-relaxed text-black">
          Vue d'ensemble du modèle conceptuel (MCD) et logique (MLD) de données de la plateforme
          Dryvea.
        </p>

        <div
          className="border border-gray-100 overflow-hidden cursor-zoom-in"
          onClick={() => setFullscreen(true)}
        >
          <img
            src="/documents/MCD-MLD.png"
            alt="MCD et MLD de la base de données Dryvea"
            className="w-full h-auto"
          />
        </div>

        <ImageLightbox
          src="/documents/MCD-MLD.png"
          alt="MCD et MLD de la base de données Dryvea"
          isOpen={fullscreen}
          onClose={() => setFullscreen(false)}
        />
      </div>
    </PageLayout>
  )
}
