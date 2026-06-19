import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        {/* BRAND */}
        <div>
          <div className="footer-logo">
            <span className="logo-nb">NB</span>
            <span className="logo-divisor"></span>
            <div className="logo-textos">
              <span className="logo-nombre">NOELIA<br />BASUALDO</span>
              <span className="logo-estudio">Estudio Jurídico</span>
            </div>
          </div>
          <p className="footer-tagline">Tu derecho, nuestro compromiso. Asesoramiento jurídico previsional y en salud con enfoque humano.</p>
        </div>

        {/* ÁREAS */}
        <div className="footer-col">
          <h4>Áreas</h4>
          <Link href="/area-jubilaciones">Jubilaciones y Pensiones</Link>
          <Link href="/area-reajustes">Reajustes de Haberes</Link>
          <Link href="/area-salud">Salud · Obras Sociales</Link>
        </div>

        {/* ESTUDIO */}
        <div className="footer-col">
          <h4>Estudio</h4>
          <Link href="/">Inicio</Link>
          <Link href="/el-estudio">El Estudio</Link>
          <Link href="/contacto">Contacto</Link>
        </div>

        {/* CONTACTO */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <a href="mailto:contacto@nbestudiojuridico.com.ar">contacto@nbestudiojuridico.com.ar</a>
          <a href="tel:+5491178200546">+54 9 11 7820-0546</a>
          <a href="https://maps.google.com/?q=Bolívar+382+CABA" target="_blank" rel="noopener noreferrer">
            Bolívar 382, piso 6, oficina 23, CABA
          </a>
        </div>
      </div>

      {/* REDES */}
      <div className="footer-redes">
        <span className="footer-redes-label">Seguinos</span>
        <div className="footer-redes-iconos">
          <a 
            href="https://www.linkedin.com/in/noelia-basualdo-aa76005b/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
          </a>
          <a 
            href="https://wa.me/5491178200546" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <span>© 2026 NB Estudio Jurídico · Todos los derechos reservados</span>
        <div style={{ display: 'flex', gap: '18px' }}>
          <Link href="/politica-de-privacidad">Política de privacidad</Link>
        </div>
      </div>
    </footer>
  );
}