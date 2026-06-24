const statusStyles = {
  draft: 'bg-gray-50 text-gray-400 border-gray-100',
  review: 'bg-gray-50 text-black border-black',
  validated: 'bg-black text-white border-black',
}

export default function StatusBadge({ status, label }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide border ${statusStyles[status] || statusStyles.draft}`}
    >
      {label || status}
    </span>
  )
}
