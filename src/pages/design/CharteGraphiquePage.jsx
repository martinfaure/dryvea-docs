import PageLayout from '../../components/PageLayout'

const colors = [
  { name: 'White', hex: '#FFFFFF', usage: 'Fond principal, surfaces' },
  { name: 'Black', hex: '#0A0A0A', usage: 'Texte principal, CTA, headers' },
  { name: 'Gray 400', hex: '#6B6B6B', usage: 'Texte secondaire, labels' },
  { name: 'Gray 100', hex: '#E5E5E5', usage: 'Bordures, séparateurs' },
  { name: 'Gray 50', hex: '#F5F5F5', usage: 'Hover, fonds alternés' },
]

const typography = [
  { name: 'Display', size: '32px', weight: '700', usage: 'Titres de page (H1)' },
  { name: 'Heading', size: '20px', weight: '600', usage: 'Sections (H2)' },
  { name: 'Subheading', size: '16px', weight: '600', usage: 'Sous-sections (H3)' },
  { name: 'Body', size: '15px', weight: '400', usage: 'Texte courant, descriptions' },
  { name: 'Small', size: '13px', weight: '400', usage: 'Métadonnées, dates' },
  { name: 'Caption', size: '11px', weight: '600', usage: 'Labels uppercase, badges' },
]

const spacing = [4, 8, 12, 16, 24, 32, 48, 64]

export default function CharteGraphiquePage() {
  return (
    <PageLayout pageId="charte-graphique">
      <div className="space-y-10">
        <p className="text-[15px] leading-relaxed text-black">
          Design system Dryvea — identité monochrome stricte, inspirée Notion. Aucune couleur
          d'accentuation : le contraste noir/blanc porte toute la hiérarchie visuelle.
        </p>

        {/* Logo */}
        <section>
          <h2 className="text-base font-semibold mb-4">Logo & monogramme</h2>
          <div className="flex flex-wrap gap-6">
            <div className="border border-gray-100 p-8 flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-[32px] font-bold">
                D
              </div>
              <p className="text-[13px] text-gray-400">Monogramme — fond clair</p>
            </div>
            <div className="bg-black p-8 flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white text-black flex items-center justify-center text-[32px] font-bold">
                D
              </div>
              <p className="text-[13px] text-white/60">Monogramme — fond sombre</p>
            </div>
            <div className="border border-gray-100 p-8 flex items-center gap-3">
              <div className="w-7 h-7 bg-black text-white flex items-center justify-center text-[20px] font-bold">
                D
              </div>
              <span className="text-[14px] font-semibold">Dryvea</span>
              <span className="text-[13px] text-gray-400 ml-2">Lockup horizontal</span>
            </div>
          </div>
          <ul className="mt-4 space-y-1 text-[13px] text-gray-400">
            <li>Zone de protection : ½ hauteur du monogramme sur chaque côté</li>
            <li>Taille minimum : 20px (monogramme seul), 14px (texte lockup)</li>
            <li>Ne pas déformer, recolorer ou ajouter d'effets (ombre, dégradé)</li>
          </ul>
        </section>

        {/* Couleurs */}
        <section>
          <h2 className="text-base font-semibold mb-4">Palette couleurs</h2>
          <div className="space-y-2">
            {colors.map((color) => (
              <div key={color.hex} className="flex items-center gap-4 border border-gray-100 p-3">
                <div
                  className="w-12 h-12 border border-gray-100 shrink-0"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold">{color.name}</p>
                  <p className="text-[13px] text-gray-400">{color.usage}</p>
                </div>
                <code className="text-[13px] font-mono text-gray-400">{color.hex}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Typographie */}
        <section>
          <h2 className="text-base font-semibold mb-4">Typographie — Inter</h2>
          <div className="border border-gray-100 divide-y divide-gray-100">
            {typography.map((t) => (
              <div key={t.name} className="flex items-center gap-6 p-4">
                <div className="w-24 shrink-0">
                  <p className="text-[11px] uppercase tracking-wider text-gray-400">{t.name}</p>
                </div>
                <p
                  className="flex-1 text-black"
                  style={{ fontSize: t.size, fontWeight: t.weight }}
                >
                  Location VSP électrique
                </p>
                <div className="text-right shrink-0 text-[12px] text-gray-400 font-mono">
                  {t.size} / {t.weight}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Espacements */}
        <section>
          <h2 className="text-base font-semibold mb-4">Grille & espacements</h2>
          <p className="text-[13px] text-gray-400 mb-4">
            Échelle base 4px. Layout left-aligned, contenu max 720px, sidebar fixe 240px.
          </p>
          <div className="flex flex-wrap gap-4">
            {spacing.map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div className="bg-black" style={{ width: s, height: 24 }} />
                <span className="text-[11px] font-mono text-gray-400">{s}px</span>
              </div>
            ))}
          </div>
        </section>

        {/* Composants UI */}
        <section>
          <h2 className="text-base font-semibold mb-4">Composants UI</h2>
          <div className="space-y-6 border border-gray-100 p-6">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-3">Boutons</p>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-black text-white text-sm font-medium">
                  Primary
                </button>
                <button className="px-4 py-2 border border-black text-black text-sm font-medium hover:bg-gray-50">
                  Secondary
                </button>
                <button className="px-4 py-2 text-sm text-gray-400 hover:text-black hover:bg-gray-50">
                  Ghost
                </button>
                <button className="px-4 py-2 bg-black text-white text-sm font-medium opacity-40 cursor-not-allowed">
                  Disabled
                </button>
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-3">Inputs</p>
              <input
                type="text"
                placeholder="Rechercher un VSP..."
                className="w-full max-w-sm px-3 py-2 border border-gray-100 text-sm outline-none focus:border-black"
                readOnly
              />
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-3">Badges</p>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 text-[11px] font-medium uppercase border border-gray-100 bg-gray-50 text-gray-400">
                  Draft
                </span>
                <span className="px-2 py-0.5 text-[11px] font-medium uppercase border border-black bg-gray-50 text-black">
                  Review
                </span>
                <span className="px-2 py-0.5 text-[11px] font-medium uppercase bg-black text-white">
                  Validated
                </span>
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-3">Cards</p>
              <div className="max-w-sm border border-gray-100 p-4 hover:bg-gray-50 transition-colors">
                <p className="text-sm font-semibold">Aixam City Pack</p>
                <p className="text-[13px] text-gray-400 mt-1">Lyon 3e · 45 €/jour</p>
                <p className="text-[13px] mt-3">Autonomie 75 km · L6e · Électrique</p>
              </div>
            </div>
          </div>
        </section>

        {/* Iconographie */}
        <section>
          <h2 className="text-base font-semibold mb-4">Iconographie</h2>
          <p className="text-[13px] text-gray-400 mb-2">
            Lucide React — stroke 1.5px, tailles 14px (sidebar), 16px (inline), 24px (titres).
            Monochrome uniquement, jamais de fill coloré.
          </p>
        </section>

        {/* Principes */}
        <section>
          <h2 className="text-base font-semibold mb-4">Principes directeurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: 'Clarté', desc: 'Une action principale par écran, hiérarchie typographique stricte' },
              { title: 'Confiance', desc: 'Transparence tarifaire, statuts explicites, pas de dark patterns' },
              { title: 'Accessibilité', desc: 'Contraste WCAG AA minimum, cibles tactiles 44px' },
              { title: 'Cohérence', desc: 'Mêmes composants web et mobile, tokens partagés Figma ↔ code' },
            ].map((p) => (
              <div key={p.title} className="border border-gray-100 p-4">
                <p className="text-sm font-semibold">{p.title}</p>
                <p className="text-[13px] text-gray-400 mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
