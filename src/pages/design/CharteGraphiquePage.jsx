import PageLayout from '../../components/PageLayout'

const colors = [
  { name: 'Navy', hex: '#0b1120', usage: 'Navbar, header, fond sombre global' },
  { name: 'Primary Blue', hex: '#4f6ef7', usage: 'Boutons principaux, liens, accents, hover' },
  { name: 'White', hex: '#FFFFFF', usage: 'Fond principal, surfaces, cartes' },
  { name: 'Background', hex: '#e8e8e8', usage: 'Fond de page (home)' },
  { name: 'Text Dark', hex: '#1a1a2e', usage: 'Texte principal, titres' },
  { name: 'Text Gray', hex: '#9ca3af', usage: 'Labels, placeholders, navigation' },
  { name: 'Border', hex: '#e5e7eb', usage: 'Bordures, séparateurs, inputs' },
  { name: 'Gold', hex: '#f59e0b', usage: 'Étoiles de notation' },
]

const typography = [
  { name: 'Display', size: '32px', weight: '800', usage: 'Titre hero, banner, titres voitures' },
  { name: 'Heading', size: '22px', weight: '700', usage: 'Titres de cartes, sections' },
  { name: 'Subheading', size: '16px', weight: '600', usage: 'Sous-sections, labels forts' },
  { name: 'Body', size: '15px', weight: '400', usage: 'Texte courant, descriptions' },
  { name: 'Small', size: '13px', weight: '400', usage: 'Métadonnées, sous-titres' },
  { name: 'Caption', size: '11px', weight: '600', usage: 'Labels uppercase, badges, tags' },
]

const spacing = [4, 8, 12, 16, 24, 32, 40, 48, 64]

const borderRadii = [
  { name: 'Small', value: '8px', usage: 'Inputs, petits éléments' },
  { name: 'Medium', value: '12px', usage: 'Cartes secondaires, search section' },
  { name: 'Large', value: '16px', usage: 'Cartes principales (home)' },
  { name: 'XL', value: '24px', usage: 'Catalogue, search section (catalogue)' },
  { name: 'Pill', value: '50px', usage: 'Boutons, navigation, tags' },
]

export default function CharteGraphiquePage() {
  return (
    <PageLayout pageId="charte-graphique">
      <div className="space-y-10">
        <p className="text-[15px] leading-relaxed text-black">
          Design system Dryvea — interface dark/light, bleu primaire #4f6ef7, cartes arrondies et
          navigation épurée sur fond sombre #0b1120. Typographie Inter.
        </p>

        {/* Logo */}
        <section>
          <h2 className="text-base font-semibold mb-4">Logo</h2>
          <div className="flex flex-wrap gap-6">
            <div className="bg-[#0b1120] p-8 flex flex-col items-center gap-3 rounded-xl">
              <img src="/logo.svg" alt="Dryvea" className="w-24 h-24" />
              <p className="text-[13px] text-white/60">Logo — navbar sombre</p>
            </div>
            <div className="border border-gray-100 p-8 flex flex-col items-center gap-3 rounded-xl">
              <img src="/logo.svg" alt="Dryvea" className="w-24 h-24" />
              <p className="text-[13px] text-gray-400">Logo — fond clair</p>
            </div>
          </div>
          <ul className="mt-4 space-y-1 text-[13px] text-gray-400">
            <li>Icône entrelacée (maillons) dans un carré noir arrondi</li>
            <li>Zone de protection : ½ hauteur du logo sur chaque côté</li>
            <li>Ne pas déformer ni ajouter d'effets</li>
          </ul>
        </section>

        {/* Couleurs */}
        <section>
          <h2 className="text-base font-semibold mb-4">Palette couleurs</h2>
          <div className="space-y-2">
            {colors.map((color) => (
              <div key={color.hex} className="flex items-center gap-4 border border-gray-100 p-3 rounded-xl">
                <div
                  className="w-12 h-12 border border-gray-100 shrink-0 rounded-lg"
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
          <div className="border border-gray-100 divide-y divide-gray-100 rounded-xl overflow-hidden">
            {typography.map((t) => (
              <div key={t.name} className="flex items-center gap-6 p-4">
                <div className="w-24 shrink-0">
                  <p className="text-[11px] uppercase tracking-wider text-gray-400">{t.name}</p>
                </div>
                <p
                  className="flex-1 text-black"
                  style={{ fontSize: t.size, fontWeight: t.weight }}
                >
                  Drive the car of your dreams
                </p>
                <div className="text-right shrink-0 text-[12px] text-gray-400 font-mono">
                  {t.size} / {t.weight}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius */}
        <section>
          <h2 className="text-base font-semibold mb-4">Border Radius</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {borderRadii.map((r) => (
              <div key={r.name} className="border border-gray-100 p-3 rounded-xl text-center">
                <div
                  className="bg-[#4f6ef7] w-full h-10 mb-2"
                  style={{ borderRadius: r.value }}
                />
                <p className="text-[11px] uppercase tracking-wider text-gray-400">{r.name}</p>
                <p className="text-sm font-mono font-semibold">{r.value}</p>
                <p className="text-[11px] text-gray-400 mt-1">{r.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Espacements */}
        <section>
          <h2 className="text-base font-semibold mb-4">Grille & espacements</h2>
          <p className="text-[13px] text-gray-400 mb-4">
            Échelle base 4px. Layout responsive, contenu max 1280px, navbar 72px hauteur fixe.
          </p>
          <div className="flex flex-wrap gap-4">
            {spacing.map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div className="bg-[#4f6ef7]" style={{ width: s, height: 24, borderRadius: 4 }} />
                <span className="text-[11px] font-mono text-gray-400">{s}px</span>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section>
          <h2 className="text-base font-semibold mb-4">Ombres</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl" style={{ boxShadow: '0 2px 20px rgba(0, 0, 0, 0.06)' }}>
              <p className="text-sm font-semibold">Shadow SM</p>
              <p className="text-[12px] text-gray-400 font-mono mt-1">0 2px 20px rgba(0,0,0,0.06)</p>
              <p className="text-[12px] text-gray-400 mt-2">Cartes home</p>
            </div>
            <div className="bg-white p-6 rounded-xl" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
              <p className="text-sm font-semibold">Shadow MD</p>
              <p className="text-[12px] text-gray-400 font-mono mt-1">0 4px 20px rgba(0,0,0,0.08)</p>
              <p className="text-[12px] text-gray-400 mt-2">Search section</p>
            </div>
            <div className="bg-white p-6 rounded-xl" style={{ boxShadow: '0 8px 40px rgba(0, 0, 0, 0.12)' }}>
              <p className="text-sm font-semibold">Shadow LG</p>
              <p className="text-[12px] text-gray-400 font-mono mt-1">0 8px 40px rgba(0,0,0,0.12)</p>
              <p className="text-[12px] text-gray-400 mt-2">Modals, overlays</p>
            </div>
          </div>
        </section>

        {/* Composants UI */}
        <section>
          <h2 className="text-base font-semibold mb-4">Composants UI</h2>
          <div className="space-y-6 border border-gray-100 p-6 rounded-xl">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-3">Boutons</p>
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-2.5 bg-[#4f6ef7] text-white text-sm font-medium rounded-[50px] hover:bg-[#3d5ce0] transition-colors">
                  Rechercher
                </button>
                <button className="px-5 py-2.5 bg-[#0b1120] text-white text-sm font-medium rounded-[50px]">
                  Book Now
                </button>
                <button className="px-5 py-2.5 border border-gray-200 text-black text-sm font-medium rounded-[50px] hover:bg-gray-50 transition-colors">
                  Contact Host
                </button>
                <button className="px-5 py-2.5 bg-[#4f6ef7] text-white text-sm font-medium rounded-[50px] opacity-40 cursor-not-allowed">
                  Disabled
                </button>
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-3">Inputs</p>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Saisissez votre e-mail"
                  className="w-full max-w-sm px-4 py-2.5 border border-gray-200 rounded-[12px] text-sm outline-none focus:border-[#4f6ef7] transition-colors"
                  readOnly
                />
                <select className="px-4 py-2.5 border border-gray-200 rounded-[12px] text-sm outline-none bg-white">
                  <option>Marque</option>
                </select>
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-3">Cards — Home</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-100 rounded-[16px] p-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow">
                  <p className="text-base font-bold">Connection / inscription</p>
                  <p className="text-[13px] text-gray-400 mt-1">Accédez à votre compte ou créez-en un nouveau</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[16px] p-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow">
                  <p className="text-base font-bold">Devenez Hôte</p>
                  <p className="text-[13px] text-gray-400 mt-1">Louez votre véhicule et gagnez de l'argent</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-3">Cards — Catalogue</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['Citroën Ami', 'Peugeot e-208', 'Fiat 500e'].map((car) => (
                  <div key={car} className="bg-white border border-gray-100 rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                    <div className="bg-gray-100 h-40" />
                    <div className="p-4">
                      <p className="text-sm font-semibold">{car}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-[#f59e0b]">★</span>
                        <span className="text-[13px]">4.8</span>
                        <span className="text-[12px] text-gray-400">(124)</span>
                      </div>
                      <p className="text-[13px] text-gray-400 mt-1">80 €/jour · Électrique</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-3">Tags / Chips</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-[12px] bg-gray-100 rounded-full text-gray-600">Bluetooth</span>
                <span className="px-3 py-1 text-[12px] bg-gray-100 rounded-full text-gray-600">Air heating</span>
                <span className="px-3 py-1 text-[12px] bg-gray-100 rounded-full text-gray-600">USB Charge</span>
                <span className="px-3 py-1 text-[12px] bg-gray-100 rounded-full text-gray-600">Panoramic roof</span>
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-3">Navbar</p>
              <div className="bg-[#0b1120] rounded-xl p-4 flex items-center gap-6">
                <img src="/logo.svg" alt="Dryvea" className="w-7 h-7" />
                <div className="flex items-center gap-2 text-[13px]">
                  <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-[50px] text-white font-medium">
                    <span className="text-sm">🏠</span> Home
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 rounded-[50px] text-[#a0a8b8] hover:text-white transition-colors">
                    <span className="text-sm">🚗</span> Catalogue
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 rounded-[50px] text-[#a0a8b8] hover:text-white transition-colors">
                    <span className="text-sm">💬</span> Message
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-3">Specs bar</p>
              <div className="flex flex-wrap gap-8 border border-gray-100 rounded-xl p-5">
                {[
                  { value: '120 km/h', label: 'Top Speed' },
                  { value: '75 km', label: 'Range' },
                  { value: 'Automatic', label: 'Transmission' },
                  { value: '4 Seats', label: 'Places' },
                  { value: 'Electric', label: 'Fuel Type' },
                ].map((spec) => (
                  <div key={spec.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                      ●
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{spec.value}</p>
                      <p className="text-[11px] text-gray-400">{spec.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-3">Features list</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Compact size - Easy parking',
                  'USB charging port',
                  'Electric - Zero emissions',
                  'Heating / Ventilation',
                  'Automatic transmission',
                  'Bluetooth speaker',
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-[13px]">
                    <span className="text-[#4f6ef7]">✓</span>
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Iconographie */}
        <section>
          <h2 className="text-base font-semibold mb-4">Iconographie</h2>
          <p className="text-[13px] text-gray-400 mb-2">
            Icônes inline (emoji ou SVG custom) — navigation, specs voitures, features.
            Palette monochrome sur fond sombre #0b1120, accent bleu #4f6ef7 sur fond clair.
          </p>
          <div className="flex gap-4 mt-3">
            <span className="text-2xl">🏠</span>
            <span className="text-2xl">🚗</span>
            <span className="text-2xl">💬</span>
            <span className="text-2xl">⚡</span>
            <span className="text-2xl">🔑</span>
          </div>
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
              <div key={p.title} className="border border-gray-100 p-4 rounded-xl">
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
