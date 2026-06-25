function FigurineBody({ m }) {
  return (
    <svg
      viewBox="0 0 60 122"
      xmlns="http://www.w3.org/2000/svg"
      className="figurine-svg"
      style={{
        width: 88,
        height: 'auto',
        display: 'block',
        filter: `drop-shadow(0 0 14px ${m.glow}88) drop-shadow(0 4px 10px rgba(0,0,0,0.8))`,
        transition: 'filter 0.3s, transform 0.3s',
      }}
    >
      {/* ombre sol */}
      <ellipse cx="30" cy="119" rx="13" ry="2.5" fill="rgba(0,0,0,0.4)" />
 
      {/* ── JAMBES ── */}
      <rect x="18" y="82" width="9" height="30" rx="2.5" fill={m.pants} />
      <rect x="33" y="82" width="9" height="30" rx="2.5" fill={m.pants} />
      {/* surpiqûres jambes */}
      <line x1="22.5" y1="84" x2="22.5" y2="108" stroke={m.accent} strokeWidth="0.4" opacity="0.3" />
      <line x1="37.5" y1="84" x2="37.5" y2="108" stroke={m.accent} strokeWidth="0.4" opacity="0.3" />
      {/* Chaussures */}
      <rect x="15" y="108" width="14" height="5" rx="2.5" fill="#0f0f0f" />
      <rect x="31" y="108" width="14" height="5" rx="2.5" fill="#0f0f0f" />
      {/* semelle */}
      <rect x="15" y="111" width="14" height="2" rx="1" fill="#222" />
      <rect x="31" y="111" width="14" height="2" rx="1" fill="#222" />
 
      {/* ── CORPS ── */}
      <rect x="14" y="46" width="32" height="38" rx="5" fill={m.shirt} />
      {/* col V */}
      <polygon points="23,46 37,46 30,56" fill="rgba(255,255,255,0.12)" />
      {/* coutures épaules */}
      <line x1="14" y1="52" x2="24" y2="52" stroke="rgba(0,0,0,0.25)" strokeWidth="0.8" />
      <line x1="36" y1="52" x2="46" y2="52" stroke="rgba(0,0,0,0.25)" strokeWidth="0.8" />
      {/* poche chest */}
      <rect x="32" y="54" width="9" height="8" rx="1.5" fill="rgba(0,0,0,0.2)" stroke={m.accent} strokeWidth="0.5" opacity="0.6" />
      {/* logo/badge cercle */}
      <circle cx="20" cy="58" r="3.5" fill="rgba(255,255,255,0.08)" stroke={m.accent} strokeWidth="0.6" opacity="0.7" />
      <circle cx="20" cy="58" r="1.5" fill={m.accent} opacity="0.5" />
      {/* bas chemise */}
      <rect x="14" y="80" width="32" height="4" rx="0" fill="rgba(0,0,0,0.15)" />
 
      {/* ── BRAS ── */}
      <rect x="3"  y="47" width="12" height="28" rx="5" fill={m.shirt} />
      <rect x="45" y="47" width="12" height="28" rx="5" fill={m.shirt} />
      {/* coudes */}
      <ellipse cx="9"  cy="62" rx="5" ry="3" fill="rgba(0,0,0,0.15)" />
      <ellipse cx="51" cy="62" rx="5" ry="3" fill="rgba(0,0,0,0.15)" />
      {/* Mains */}
      <ellipse cx="9"  cy="77" rx="5.5" ry="5" fill={m.skin} />
      <ellipse cx="51" cy="77" rx="5.5" ry="5" fill={m.skin} />
      {/* doigts hints */}
      <line x1="6"  y1="80" x2="12" y2="80" stroke="rgba(0,0,0,0.18)" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="48" y1="80" x2="54" y2="80" stroke="rgba(0,0,0,0.18)" strokeWidth="0.8" strokeLinecap="round" />
 
      {/* ── COU ── */}
      <rect x="25" y="37" width="10" height="11" rx="4" fill={m.skin} />
 
      {/* ── TÊTE ── */}
      <rect x="11" y="6" width="38" height="35" rx="10" fill={m.skin} />
      {/* ombre mâchoire */}
      <rect x="11" y="30" width="38" height="11" rx="6" fill="rgba(0,0,0,0.07)" />
 
      {/* ── CHEVEUX ── */}
      {/* calotte */}
      <rect x="11" y="6"  width="38" height="14" rx="10" fill={m.hair} />
      {/* côtés */}
      <rect x="11" y="6"  width="9"  height="20" rx="4" fill={m.hair} />
      <rect x="40" y="6"  width="9"  height="20" rx="4" fill={m.hair} />
      {/* mèche centrale */}
      <rect x="26" y="4"  width="8"  height="8"  rx="4" fill={m.hair} />
 
      {/* ── OREILLES ── */}
      <ellipse cx="11" cy="24" rx="3" ry="4" fill={m.skin} />
      <ellipse cx="49" cy="24" rx="3" ry="4" fill={m.skin} />
      <ellipse cx="11" cy="24" rx="1.5" ry="2.5" fill="rgba(0,0,0,0.1)" />
      <ellipse cx="49" cy="24" rx="1.5" ry="2.5" fill="rgba(0,0,0,0.1)" />
 
      {/* ── YEUX ── */}
      {/* sourcils */}
      <rect x="18" y="20" width="8" height="2" rx="1" fill={m.hair} opacity="0.9" />
      <rect x="34" y="20" width="8" height="2" rx="1" fill={m.hair} opacity="0.9" />
      {/* globe */}
      <rect x="18" y="23" width="8" height="8" rx="4" fill="white" />
      <rect x="34" y="23" width="8" height="8" rx="4" fill="white" />
      {/* iris */}
      <circle cx="22" cy="27" r="3" fill={m.shirt} opacity="0.85" />
      <circle cx="38" cy="27" r="3" fill={m.shirt} opacity="0.85" />
      {/* pupille */}
      <circle cx="22" cy="27" r="1.8" fill="#0d0d1a" />
      <circle cx="38" cy="27" r="1.8" fill="#0d0d1a" />
      {/* reflet */}
      <circle cx="23.2" cy="25.8" r="1" fill="white" opacity="0.85" />
      <circle cx="39.2" cy="25.8" r="1" fill="white" opacity="0.85" />
 
      {/* ── NEZ ── */}
      <ellipse cx="30" cy="31" rx="2" ry="1.5" fill="rgba(0,0,0,0.1)" />
 
      {/* ── BOUCHE ── */}
      <path d="M22 36 Q30 41 38 36" stroke="#a0705a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      {/* lèvre inférieure hint */}
      <path d="M26 38 Q30 40 34 38" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
 
      {/* ── OUTLINES GLOW ── */}
      <rect x="11" y="6" width="38" height="35" rx="10" fill="none" stroke={m.accent} strokeWidth="0.5" opacity="0.35" />
      <rect x="14" y="46" width="32" height="38" rx="5"  fill="none" stroke={m.accent} strokeWidth="0.5" opacity="0.25" />
    </svg>
  )
}
 
export function TeamFigurine({ member }) {
  const m = member
  return (
    <div
      className="team-figurine flex flex-col items-center cursor-pointer"
      style={{ '--glow': m.glow }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@700;800&display=swap');
 
        .team-figurine { position: relative; }
 
        .figurine-svg { transition: filter 0.3s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1); }
 
        .team-figurine:hover .figurine-svg {
          transform: translateY(-10px) scale(1.04);
          animation: wobble 0.42s ease-in-out;
        }
        @keyframes wobble {
          0%,100% { rotate: 0deg; }
          20%  { rotate: -4deg; }
          60%  { rotate: 3.5deg; }
          80%  { rotate: -1.5deg; }
        }
 
        .glow-base { transition: opacity 0.3s, transform 0.3s; }
        .team-figurine:hover .glow-base { opacity: 1 !important; transform: scaleX(1.4) !important; }
 
        .figurine-name  { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 13px; color: #efefef; letter-spacing: 0.02em; }
        .figurine-role  { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.07em; opacity: 0.85; margin-top: 2px; }
        .figurine-gh    {
          display: inline-flex; align-items: center; gap: 4px;
          font-family: 'Space Mono', monospace; font-size: 9px; color: #444;
          text-decoration: none; margin-top: 5px;
          transition: color 0.2s;
        }
        .figurine-gh:hover { color: #888; }
      `}</style>
 
      <FigurineBody m={m} />
 
      {/* halo sol */}
      <div
        className="glow-base"
        style={{
          width: 64, height: 10,
          borderRadius: '50%',
          background: `radial-gradient(ellipse, ${m.glow}99 0%, transparent 70%)`,
          opacity: 0.45,
          marginTop: -3,
        }}
      />
 
      {/* infos */}
      <div style={{ marginTop: 12, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span className="figurine-name">{m.name}</span>
        <span className="figurine-role" style={{ color: m.glow }}>{m.role}</span>
        <a
          className="figurine-gh"
          href={m.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          @{m.githubUsername}
        </a>
      </div>
    </div>
  )
}
 
// ─── Preview ──────────────────────────────────────────────────────────────────
export default function TeamShowcase() {
  return (
    <div style={{
      background: '#08080e',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 24px',
      gap: 40,
    }}>
      <p style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: 10,
        color: '#2a2a3a',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
      }}>
        Dryvea — Équipe
      </p>
 
      <div style={{
        display: 'flex',
        gap: 56,
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {TEAM.map((m, i) => (
          <div
            key={m.name}
            style={{
              animation: `floatIn 0.55s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.08}s both`,
            }}
          >
            <style>{`
              @keyframes floatIn {
                from { opacity:0; transform:translateY(28px) scale(0.82); }
                to   { opacity:1; transform:translateY(0) scale(1); }
              }
            `}</style>
            <TeamFigurine member={m} />
          </div>
        ))}
      </div>
    </div>
  )
}
 