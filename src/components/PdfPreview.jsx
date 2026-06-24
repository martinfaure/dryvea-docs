import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function PdfPreview({ file, fileName }) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1)
  const [error, setError] = useState(false)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
    setError(false)
  }

  function onDocumentLoadError() {
    setError(true)
  }

  if (!file) return null

  return (
    <div className="border border-gray-100">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
            disabled={pageNumber <= 1}
            className="px-2 py-1 text-xs font-medium border border-gray-100 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            ←
          </button>
          <span className="text-xs text-gray-400 tabular-nums">
            {pageNumber} / {numPages || '—'}
          </span>
          <button
            onClick={() => setPageNumber((p) => Math.min(numPages || 1, p + 1))}
            disabled={pageNumber >= (numPages || 1)}
            className="px-2 py-1 text-xs font-medium border border-gray-100 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            →
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale((s) => Math.max(0.5, s - 0.25))}
            className="px-2 py-1 text-xs font-medium border border-gray-100 hover:bg-gray-100 transition-colors"
          >
            −
          </button>
          <span className="text-xs text-gray-400">{Math.round(scale * 100)}%</span>
          <button
            onClick={() => setScale((s) => Math.min(2, s + 0.25))}
            className="px-2 py-1 text-xs font-medium border border-gray-100 hover:bg-gray-100 transition-colors"
          >
            +
          </button>
          <a
            href={file}
            download={fileName}
            className="ml-2 px-3 py-1 text-xs font-medium border border-gray-100 hover:bg-gray-100 transition-colors"
          >
            Télécharger
          </a>
        </div>
      </div>
      <div className="flex justify-center p-4 bg-gray-50/50 min-h-[300px] items-center overflow-auto">
        {error ? (
          <div className="text-center px-8 py-12">
            <p className="text-sm font-medium text-gray-400">Aperçu indisponible</p>
            <p className="text-xs text-gray-400 mt-2">
              Le fichier PDF n'a pas encore été ajouté. Veuillez télécharger le document.
            </p>
            <a
              href={file}
              download={fileName}
              className="inline-block mt-4 px-4 py-2 text-xs font-medium border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              Télécharger le document
            </a>
          </div>
        ) : (
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="flex items-center justify-center py-20">
                <div className="w-6 h-6 border border-gray-300 border-t-black rounded-full animate-spin" />
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="shadow-lg"
            />
          </Document>
        )}
      </div>
    </div>
  )
}
