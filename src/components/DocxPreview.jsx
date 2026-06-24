import { useEffect, useState } from 'react'
import mammoth from 'mammoth'

export default function DocxPreview({ file, fileName }) {
  const [html, setHtml] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!file) return

    setLoading(true)
    setError(false)
    setHtml('')

    fetch(file)
      .then((res) => {
        console.log('fetch status:', res.status, res.ok)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.arrayBuffer()
      })
      .then((buffer) => {
        console.log('buffer size:', buffer.byteLength)
        return mammoth.convertToHtml({ arrayBuffer: buffer })
      })
      .then((result) => {
        console.log('mammoth success, html length:', result.value.length)
        setHtml(result.value)
        setLoading(false)
      })
      .catch((err) => {
        console.error('docx preview error:', err.message || err)
        setError(true)
      })
  }, [file])

  if (!file) return null

  return (
    <div className="border border-gray-100">
      <div className="flex items-center justify-end px-4 py-2 bg-gray-50 border-b border-gray-100">
        <a
          href={file}
          download={fileName}
          className="px-3 py-1 text-xs font-medium border border-gray-100 hover:bg-gray-100 transition-colors"
        >
          Télécharger
        </a>
      </div>
      <div className="flex justify-center bg-gray-50/50 min-h-[300px] max-h-[600px] overflow-auto">
        {error ? (
          <div className="text-center px-8 py-12">
            <p className="text-sm font-medium text-gray-400">Aperçu indisponible</p>
            <p className="text-xs text-gray-400 mt-2">
              Le document n'a pas pu être chargé. Veuillez télécharger le fichier.
            </p>
            <a
              href={file}
              download={fileName}
              className="inline-block mt-4 px-4 py-2 text-xs font-medium border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              Télécharger le document
            </a>
          </div>
        ) : loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-6 h-6 border border-gray-300 border-t-black rounded-full animate-spin" />
          </div>
        ) : (
          <div
            className="docx-content p-8 w-full max-w-[800px] text-[15px] leading-relaxed text-black"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </div>
  )
}
