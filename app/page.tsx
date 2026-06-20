import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-foto-wrap">
              <div className="hero-foto">FOTO PROFESIONAL</div>
            </div>
            <div>
              <h1 className="hero-nombre">Dra. Noelia Basualdo</h1>
              <div className="hero-subtitulo">Estudio Jurídico - Abogada Previsionalista</div>
              <div className="hero-divisor"></div>
              <p className="hero-tagline">Tu derecho, nuestro compromiso</p>
              <p className="hero-bajada">Asesoramiento personalizado en jubilaciones, reajustes, fuerzas armadas y amparos de salud.</p>
              <p className="hero-firma"><strong>Más de 10 años</strong> acompañando a quienes buscan respuestas claras.</p>
              <div className="hero-actions">
                <Link href="/contacto" className="btn btn-rose">Consultar mi caso</Link>
                <Link href="#areas" className="btn btn-outline">Ver áreas</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="areas-section" id="areas">
        <div className="container">
          <div className="section-header">
            <div className="tag-rosa">Especialidades</div>
            <h2>Áreas de práctica</h2>
          </div>
          <div className="areas-grid">
            <div className="area-card">
              <span className="area-badge">Derecho Previsional</span>
              <h3>Jubilaciones y Pensiones</h3>
              <p>Tramitación completa de jubilaciones ordinarias, anticipadas y especiales.</p>
              <Link href="/area-jubilaciones" className="area-cta">Más información</Link>
            </div>
            <div className="area-card">
              <span className="area-badge">Haberes Previsionales</span>
              <h3>Reajustes de Haberes</h3>
              <p>Reclamos y tramitación de reajustes en jubilaciones, pensiones y haberes.</p>
              <Link href="/area-reajustes" className="area-cta">Más información</Link>
            </div>
            <div className="area-card">
              <span className="area-badge">Protección de Derechos</span>
              <h3>Amparos de Salud</h3>
              <p>Defensa contra aumentos de cuota, cambios de cobertura y negaciones.</p>
              <Link href="/area-salud" className="area-cta">Más información</Link>
            </div>
            <div className="area-card">
              <span className="area-badge">Veteranos de Malvinas</span>
              <h3>Jubilación y Pensión Honorífica</h3>
              <p>Tramitación y asesoramiento integral para Veteranos de Malvinas.</p>
              <Link href="/area-malvinas" className="area-cta">Más información</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banda">
        <div className="container">
          <h2>¿Necesitás asesoramiento?</h2>
          <p>Contactame sin compromiso. La primera consulta es para entender tu situación.</p>
          <Link href="/contacto" className="btn">Agendar Consulta</Link>
        </div>
      </section>
    </>
  );
}