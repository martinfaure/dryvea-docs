export default function EntityCard({ entity }) {
  return (
    <div className="border border-gray-100 flex flex-col min-w-[240px] flex-1 max-w-[320px]">
      <div className="bg-black text-white px-4 py-2.5">
        <h3 className="text-sm font-semibold">{entity.name}</h3>
        {entity.description && (
          <p className="text-[11px] text-white/60 mt-0.5">{entity.description}</p>
        )}
      </div>
      <ul className="px-4 py-3 space-y-1">
        {entity.attributes.map((attr) => (
          <li key={attr.name} className="text-[13px] text-black font-mono">
            {attr.isPrimaryKey && <strong>{attr.name}</strong>}
            {!attr.isPrimaryKey && attr.isForeignKey && <em>{attr.name}</em>}
            {!attr.isPrimaryKey && !attr.isForeignKey && attr.name}
            <span className="text-gray-400 ml-2 text-[11px] font-sans">{attr.type}</span>
            {attr.references && (
              <span className="text-gray-400 ml-1 text-[11px] font-sans italic">
                → {attr.references}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
