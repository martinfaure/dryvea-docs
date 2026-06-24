import { useEffect, useCallback } from 'react'
import navigation from '../data/navigation.json'
import pages from '../data/pages.json'
import documents from '../data/documents.json'

function flattenNav(items, section = '') {
  const results = []
  for (const item of items) {
    if (item.children) {
      results.push(...flattenNav(item.children, item.label))
    } else if (item.path) {
      results.push({
        id: item.id,
        title: item.label,
        path: item.path,
        section,
      })
    }
  }
  return results
}

function buildSearchIndex() {
  const navItems = flattenNav(navigation)
  const pathById = Object.fromEntries(navItems.map((n) => [n.id, n.path]))

  const pageEntries = Object.values(pages).map((page) => ({
    id: page.id,
    title: page.title,
    path: pathById[page.id] || (page.id === 'home' ? '/' : `/${page.id}`),
    section: page.breadcrumb?.[0] || '',
    content: page.body || '',
  }))

  const docEntries = documents.map((doc) => ({
    id: doc.id,
    title: doc.title,
    path: `/documents/${doc.id}`,
    section: 'Documents',
    content: `${doc.description} ${doc.filename}`,
  }))

  const unique = new Map()
  ;[...pageEntries, ...docEntries, ...navItems.map((n) => ({
    id: n.id,
    title: n.title,
    path: n.path,
    section: n.section,
    content: n.title,
  }))].forEach((entry) => {
    if (entry.path && !unique.has(entry.path)) {
      unique.set(entry.path, entry)
    }
  })

  return Array.from(unique.values())
}

const searchIndex = buildSearchIndex()

export function useSearch() {
  const search = useCallback((query) => {
    if (!query.trim()) return searchIndex.slice(0, 8)

    const q = query.toLowerCase()
    return searchIndex
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.section.toLowerCase().includes(q) ||
          item.content.toLowerCase().includes(q)
      )
      .slice(0, 10)
  }, [])

  return { search, searchIndex }
}

export function useSearchShortcut(onOpen) {
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        onOpen()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onOpen])
}
