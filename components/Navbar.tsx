'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDetailsElement>(null);

  return (
    <nav className="main-nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <div className="logo-real">
            <div className="logo-nb">NB</div>
            <div className="logo-divisor"></div>
            <div className="logo-textos">
              <div className="logo-nombre">Noelia Basualdo</div>
              <div className="logo-estudio">Abogada</div>
            </div>
          </div>
        </Link>

        <div className="nav-links">
          <Link href="/">Inicio</Link>
          <div className="has-dropdown">
            <button 
              className="dropdown-toggle" 
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Previsional <span className="chev">▼</span>
            </button>
            <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
              <Link href="/area-jubilaciones">Jubilaciones y Pensiones</Link>
              <Link href="/area-reajustes">Reajustes</Link>
              <Link href="/area-malvinas">Veteranos de Malvinas</Link>
            </div>
          </div>
          <Link href="/area-salud">Salud</Link>
          <Link href="/el-estudio">El Estudio</Link>
          <Link href="/novedades">Novedades</Link>
        </div>

        <Link href="/contacto" className="nav-cta">Contacto</Link>

        <button 
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button 
          className="mobile-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Cerrar menu"
        >
          ✕
        </button>
        <Link href="/" onClick={() => setMobileOpen(false)}>Inicio</Link>
        <details ref={dropdownRef} className="mobile-dropdown">
          <summary>Previsional</summary>
          <Link href="/area-jubilaciones" onClick={() => setMobileOpen(false)}>Jubilaciones y Pensiones</Link>
          <Link href="/area-reajustes" onClick={() => setMobileOpen(false)}>Reajustes</Link>
          <span className="mobile-proxim">IPS · Proximamente</span>
          <Link href="/area-malvinas" onClick={() => setMobileOpen(false)}>Veteranos de Malvinas</Link>
          <span className="mobile-proxim">Fuerzas Armadas y Seguridad · Proximamente</span>
          <span className="mobile-proxim">Docentes · Proximamente</span>
        </details>
        <Link href="/area-salud" onClick={() => setMobileOpen(false)}>Salud</Link>
        <Link href="/el-estudio" onClick={() => setMobileOpen(false)}>El Estudio</Link>
        <Link href="/novedades" onClick={() => setMobileOpen(false)}>Novedades</Link>
      </div>
    </nav>
  );
}