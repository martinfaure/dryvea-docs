import { useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar, { MobileHeader } from './components/Sidebar'
import SearchModal from './components/SearchModal'
import { useSearchShortcut } from './hooks/useSearch'
import Home from './pages/Home'
import DocumentPage from './pages/documents/DocumentPage'
import McdPage from './pages/database/McdPage'
import MldPage from './pages/database/MldPage'
import SqlPage from './pages/database/SqlPage'
import DictionaryPage from './pages/database/DictionaryPage'
import FigmaPage from './pages/design/FigmaPage'
import CharteGraphiquePage from './pages/design/CharteGraphiquePage'
import PersonasPage from './pages/design/PersonasPage'
import ArchitecturePage from './pages/architecture/ArchitecturePage'
import ProjetPage from './pages/projet/ProjetPage'
import CanvaPage from './pages/projet/CanvaPage'
import TestsPage from './pages/tests/TestsPage'
import DevPage from './pages/dev/DevPage'

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const openSearch = useCallback(() => setSearchOpen(true), [])
  const closeSearch = useCallback(() => setSearchOpen(false), [])

  useSearchShortcut(openSearch)

  return (
    <div className="min-h-screen bg-white text-black">
      <MobileHeader
        onMenuOpen={() => setMobileOpen(true)}
        onSearchOpen={openSearch}
      />

      <Sidebar
        onSearchOpen={openSearch}
        isMobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <SearchModal isOpen={searchOpen} onClose={closeSearch} />

      <main className="lg:ml-[240px] min-h-screen pt-14 lg:pt-0">
        <div className="px-6 py-8 lg:px-12 lg:py-12">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/documents/:docId" element={<DocumentPage />} />

            <Route path="/design/charte-graphique" element={<CharteGraphiquePage />} />
            <Route path="/design/personas" element={<PersonasPage />} />
            <Route path="/design/:designId" element={<FigmaPage />} />

            <Route path="/database/mcd" element={<McdPage />} />
            <Route path="/database/mld" element={<MldPage />} />
            <Route path="/database/schema-sql" element={<SqlPage />} />
            <Route path="/database/dictionnaire" element={<DictionaryPage />} />

            <Route path="/architecture/:archId" element={<ArchitecturePage />} />

            <Route path="/projet/presentation-canva" element={<CanvaPage />} />
            <Route path="/projet" element={<ProjetPage />} />

            <Route path="/tests/:testId" element={<TestsPage />} />

            <Route path="/dev/:devId" element={<DevPage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
