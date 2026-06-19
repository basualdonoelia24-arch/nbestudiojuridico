'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* NAVBAR DE ESCRITORIO */}
      <nav className="main-nav">
        <div className="nav-inner">
          {/* LOGO */}
          <Link href="/" className="nav-logo">
            <div className="logo-real">
              <span className="logo-nb">NB</span>
              <span className="logo-divisor"></span>
              <div className="logo-textos">
                <span className="logo-nombre">NOELIA<br />BASUALDO</span>
                <span className="logo-estudio">Estudio Jurídico</span>
              </div>
            </div>
          </Link>

          {/* LINKS */}
          <ul className="nav-links">
            <li><Link href="/">Inicio</Link></li>
            
            {/* DROPDOWN PREVISIONAL */}
            <li className="has-dropdown">
              <button 
                className="dropdown-toggle" 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
              >
                Previsional <span className="chev">▾</span>
              </button>
              <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                <Link href="/area-jubilaciones">Jubilaciones y Pensiones</Link>
                <Link href="/area-reajustes">Reajustes</Link>
                <span className="dropdown-disabled">IPS <span className="proxim">Próximamente</span></span>
                <Link href="/area-malvinas">Veteranos de Malvinas</Link>
                <span className="dropdown-disabled">Fuerzas Armadas y Seguridad <span className="proxim">Próximamente</span></span>
                <span className="dropdown-disabled">Docentes <span className="proxim">Próximamente</span></span>
              </div>
            </li>

            <li><Link href="/area-salud">Salud</Link></li>
            <li><Link href="/el-estudio">El Estudio</Link></li>
            <li><Link href="/novedades">Novedades</Link></li>
          </ul>

          {/* BOTÓN CONTACTAR */}
          <Link href="/contacto" className="btn btn-rose nav-cta">Contactar</Link>

          {/* HAMBURGUESA MOBILE */}
          <button 
            className="nav-hamburger" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* MENÚ MOBILE */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button 
          className="mobile-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Cerrar menú"
        >
          ✕
        </button>
        <Link href="/">Inicio</Link>
        <details className="mobile-dropdown">
          <summary>Previsional</summary>
          <Link href="/area-jubilaciones">Jubilaciones y Pensiones</Link>
          <Link href="/area-reajustes">Reajustes</Link>
          <span className="mobile-proxim">IPS · Próximamente</span>
          <Link href="/area-malvinas">Veteranos de Malvinas</Link>
          <span className="mobile-proxim">Fuerzas Armadas y Seguridad · Próximamente</span>
          <span className="mobile-proxim">Docentes · Próximamente</span>
        </details>
        <Link href="/area-salud">Salud</Link>
        <Link href="/el-estudio">El Estudio</Link>
        <Link href="/novedades">Novedades</Link>
      </div>
    </>
  );
}