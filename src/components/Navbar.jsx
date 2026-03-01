import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import '../styles/Navbar.css'

const links = [
    { label: 'Inicio', to: '/' },
    { label: 'Servicios', to: '/servicios' },
    { label: '¿Quiénes somos?', to: '/nosotros' },
    { label: 'Contacto', to: '/contacto' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const location = useLocation()

    // Pages with dark hero need transparent navbar
    const isDark = true

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', fn)
        return () => window.removeEventListener('scroll', fn)
    }, [])

    useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [location.pathname])

    const logoColor = scrolled ? '#0f2044' : '#fff'
    const logoTagColor = scrolled ? '#94a3b8' : 'rgba(255,255,255,0.5)'
    const linkColor = scrolled ? '#64748b' : 'rgba(255,255,255,0.8)'

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--transparent'}`}>
            <div className="navbar__inner">
                {/* Logo */}
                <NavLink to="/" className="navbar__logo" style={{ textDecoration: 'none' }}>
                    <svg width="36" height="34" viewBox="0 0 38 36" fill="none">
                        <polygon points="12,2 2,32 22,32" fill="#e8631a" />
                        <polygon points="26,2 16,32 36,32" fill="#c05214" opacity="0.85" />
                    </svg>
                    <div>
                        <div className="navbar__logo-name" style={{ color: logoColor }}>
                            Ven<span>Kizmet</span>
                        </div>
                        <div className="navbar__logo-tagline" style={{ color: logoTagColor }}>
                            APPLYING TECHNOLOGY TO BUSINESS
                        </div>
                    </div>
                </NavLink>

                {/* Desktop links */}
                <div className="navbar__links">
                    {links.map(({ label, to }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
                            style={({ isActive }) => ({ color: isActive ? '#e8631a' : linkColor })}
                        >
                            {label}
                        </NavLink>
                    ))}
                    <NavLink to="/contacto">
                        <button className="btn btn--primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
                            Contáctanos
                        </button>
                    </NavLink>
                </div>

                {/* Mobile toggle */}
                <button
                    className="navbar__mobile-toggle"
                    style={{ color: scrolled ? '#0f2044' : '#fff' }}
                    onClick={() => setOpen(!open)}
                    aria-label="Menú"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="navbar__mobile-menu">
                    {links.map(({ label, to }) => (
                        <NavLink key={to} to={to} className="navbar__mobile-link">{label}</NavLink>
                    ))}
                    <NavLink to="/contacto" className="navbar__mobile-cta">
                        <button className="btn btn--primary navbar__mobile-cta" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                            Contáctanos
                        </button>
                    </NavLink>
                </div>
            )}
        </nav>
    )
}
