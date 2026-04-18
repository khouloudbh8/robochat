import '../styles/Sidebar.css'

const NAV_LINKS = [
  { icon: '◉', label: 'Login', href: '#' },
  { icon: '◈', label: 'Quiz',       href: '#' },
  { icon: '◉', label: 'Chat',       href: '#' },
]
function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      {/* Grain texture overlay */}
      <div className="sidebar-grain" />

      {/* Close button (mobile) */}
      <button className="sidebar-close" onClick={onClose} aria-label="Fermer">
        ✕
      </button>

      {/* ── Logo & Titre ── */}
      <div className="sidebar-brand">
        <div className="sidebar-logo-wrap">
          <div className="sidebar-logo-icon">
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Triangle stylisé inspiré du logo */}
              <polygon points="30,4 56,52 4,52" fill="none" stroke="url(#goldGrad1)" strokeWidth="2.5"/>
              <polygon points="30,14 48,48 12,48" fill="none" stroke="url(#goldGrad2)" strokeWidth="1.5" opacity="0.6"/>
              {/* Barres horizontales (E du logo) */}
              <line x1="32" y1="38" x2="52" y2="38" stroke="#F0C040" strokeWidth="3" strokeLinecap="round"/>
              <line x1="35" y1="44" x2="52" y2="44" stroke="#D4A017" strokeWidth="3" strokeLinecap="round"/>
              <defs>
                <linearGradient id="goldGrad1" x1="0" y1="0" x2="60" y2="60">
                  <stop offset="0%" stopColor="#A0A0A0"/>
                  <stop offset="100%" stopColor="#F0C040"/>
                </linearGradient>
                <linearGradient id="goldGrad2" x1="60" y1="0" x2="0" y2="60">
                  <stop offset="0%" stopColor="#F0C040"/>
                  <stop offset="100%" stopColor="#555"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <h1 className="sidebar-app-name">RoboChat</h1>
        <p className="sidebar-assoc-name">Association Robotique ENSI</p>
        <div className="sidebar-divider" />
      </div>

      {/* ── Navigation ── */}
      <nav className="sidebar-nav">
        <p className="sidebar-nav-label">Navigation</p>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="sidebar-nav-link">
                <span className="nav-icon">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Statut ── */}
      <div className="sidebar-status">
        <div className="status-dot" />
        <span>RoboChat en ligne</span>
      </div>

      {/* ── Footer ── */}
      <div className="sidebar-footer">
        <p>© 2025 Association  Robotique ENSI</p>
        <p>Tous droits réservés</p>
      </div>
    </aside>
  )
}

export default Sidebar
