import PageLayout from '../../components/PageLayout'

export default function McdMldPage() {
  return (
    <PageLayout pageId="mcd-mld">
      <div className="space-y-6">
        <p className="text-[15px] leading-relaxed text-black">
          Vue d'ensemble du modèle conceptuel (MCD) et logique (MLD) de données de la plateforme
          Dryvea.
        </p>

        <div className="border border-gray-100 overflow-hidden">
          <img
            src="/documents/MCD-MLD.png"
            alt="MCD et MLD de la base de données Dryvea"
            className="w-full h-auto"
          />
        </div>
      </div>
    </PageLayout>
  )
}
