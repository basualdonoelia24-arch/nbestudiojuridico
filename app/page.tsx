import Link from 'next/link';
export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero home">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-foto-wrap">
              <div className="hero-foto">FOTO PROFESIONAL</div>
            </div>
            <div className="hero-texto">
               <h1 className="hero-nombre">Dra. Noelia Basualdo</h1>
            <div className="hero-subtitulo">ESTUDIO JURÍDICO · ABOGADA PREVISIONALISTA</div>
            <div className="hero-divisor"></div>
               <p className="hero-tagline">Cada caso es único. Nuestra estrategia también.</p>
               <p className="hero-tagline">Porque detrás de cada expediente hay una persona.</p>
               <p className="hero-bajada">Asesoramiento personalizado en jubilaciones, reajustes, fuerzas armadas y amparos de salud. Atención virtual o presencial en todo el país, con un trato cercano y honesto desde la primera consulta.</p>
               <p className="hero-firma"><strong>Más de 15 años</strong> acompañando a quienes buscan respuestas claras.</p>
            <div className="hero-actions">
    <Link href="/contacto" className="btn btn-rose">Consultar mi caso</Link>
    <Link href="#areas" className="btn btn-outline">Ver áreas de práctica</Link>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section className="areas-section" id="areas">
        <div className="container">
          <div className="section-header fade-in">
            <div className="tag-rosa">En qué te puedo ayudar</div>
            <h2>Áreas de <em>práctica</em></h2>
            <p className="subtitle">
              Atendemos casos de derecho previsional y amparos de salud.
              Cada área tiene su propia página con información detallada y la posibilidad de reservar consulta directamente.
            </p>
          </div>

          <div className="areas-grid">
            {/* DESTACADA: Jubilaciones */}
            <article className="area-card destacada fade-in">
              <span className="area-badge">★ Más consultado</span>
              <h3>Jubilaciones y Pensiones</h3>
              <p>
                Asesoramiento integral para acceder a tu jubilación o pensión.
                Evaluamos tu caso, calculamos los años aportados y diseñamos la mejor estrategia
                para que cobres el haber más alto al que tengas derecho.
              </p>
              <ul className="area-features">
                <li><span className="check">✓</span> Cálculo de años de aportes y reconocimiento de períodos</li>
                <li><span className="check">✓</span> Asesoramiento sobre moratoria previsional vigente</li>
                <li><span className="check">✓</span> Pensión por fallecimiento, invalidez y vejez</li>
                <li><span className="check">✓</span> Pensión No Contributiva por Discapacidad y amparo por mora</li>
              </ul>
              <Link href="/area-jubilaciones" className="area-cta">
                Conocer más <span className="arrow">→</span>
              </Link>
            </article>

            {/* Reajustes */}
            <article className="area-card fade-in fade-in-delay-1">
              <h3>Reajustes de Haberes</h3>
              <p>
                Si tu jubilación está mal liquidada o quedó desactualizada respecto de la movilidad,
                te ayudamos a reclamar el ajuste correspondiente y recuperar lo que te corresponde.
              </p>
              <ul className="area-features">
                <li><span className="check">✓</span> Recálculo del haber inicial</li>
                <li><span className="check">✓</span> Reclamo por movilidad jubilatoria</li>
              </ul>
              <Link href="/area-reajustes" className="area-cta">
                Conocer más <span className="arrow">→</span>
              </Link>
            </article>

            {/* Salud */}
            <article className="area-card fade-in fade-in-delay-1">
              <h3>Salud · Obras sociales y Prepagas</h3>
              <p>
                Amparos por cobertura denegada, aumentos abusivos en cuotas de prepaga,
                tratamientos no autorizados o medicación que la obra social te niega.
              </p>
              <ul className="area-features">
                <li><span className="check">✓</span> Amparos de salud urgentes</li>
                <li><span className="check">✓</span> Reclamos por aumentos de prepagas</li>
              </ul>
              <Link href="/area-salud" className="area-cta">
                Conocer más <span className="arrow">→</span>
              </Link>
            </article>

            {/* Veteranos de Malvinas */}
            <article className="area-card fade-in fade-in-delay-1">
              <h3>Veteranos de Malvinas</h3>
              <p>
                Asesoramiento previsional especializado para veteranos de guerra y sus familias:
                jubilación anticipada, pensión honorífica y reajustes.
              </p>
              <ul className="area-features">
                <li><span className="check">✓</span> Jubilación anticipada y pensión para hijos</li>
                <li><span className="check">✓</span> Reajustes de jubilación y pensión honorífica</li>
              </ul>
              <Link href="/area-malvinas" className="area-cta">
                Conocer más <span className="arrow">→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="proceso-section">
        <div className="container">
          <div className="section-header fade-in">
            <div className="tag-rosa">Cómo trabajamos</div>
            <h2>3 pasos simples para tu <em>consulta</em></h2>
          </div>
          <div className="proceso-grid">
            <div className="proceso-paso fade-in">
              <div className="proceso-num">01</div>
              <h4>Contás tu caso</h4>
              <p>Nos contactás por WhatsApp, teléfono o el formulario web y nos contás brevemente tu situación.</p>
            </div>
            <div className="proceso-paso fade-in fade-in-delay-1">
              <div className="proceso-num">02</div>
              <h4>Coordinamos consulta</h4>
              <p>Si tu caso es para nosotros, te enviamos los pasos a seguir y agendamos una entrevista virtual o presencial.</p>
            </div>
            <div className="proceso-paso fade-in fade-in-delay-2">
              <div className="proceso-num">03</div>
              <h4>Diseñamos la estrategia</h4>
              <p>En la entrevista evaluamos en profundidad y, si decidís avanzar, te acompañamos en cada paso del trámite.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE NOELIA */}
      <section className="sobre-section">
        <div className="container">
          <div className="sobre-inner">
            <div className="sobre-texto">
              <div className="tag-rosa">Sobre la profesional</div>
              <h2>Dra. Noelia <em>Basualdo</em></h2>
              <p>
                Abogada especializada en <strong>derecho previsional</strong> y de la <strong>seguridad social</strong>.
                Hace más de 10 años acompaño a personas que buscan información clara y honesta
                sobre sus derechos: cuándo pueden jubilarse, cómo reclamar un haber mal liquidado,
                o cómo acceder a la cobertura de salud que les corresponde.
              </p>
              <p>
                Mi forma de trabajar es la del trato cercano: nada de tecnicismos vacíos.
                Te explico tu caso en palabras simples y resolvemos cada etapa del trámite con un plan claro.
              </p>
              <Link href="/el-estudio" className="btn btn-outline" style={{ marginTop: '14px' }}>
                Conocer mi historia →
              </Link>
            </div>
            <div className="sobre-stats fade-in">
              <div className="stat-card">
                <div className="stat-num">+15</div>
                <div className="stat-label">Años de experiencia</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">+500</div>
                <div className="stat-label">Clientes asesorados</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">100%</div>
                <div className="stat-label">Virtual o presencial</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">★★★★★</div>
                <div className="stat-label">Opinión de clientes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-banda">
        <div className="container">
          <h2>¿Tenés un problema?</h2>
          <p>Nos contactás sin compromiso. Te respondemos en menos de 24 horas hábiles para evaluar si podemos ayudarte.</p>
          <Link href="/contacto" className="btn">Contactar al estudio</Link>
        </div>
      </section>
    </>
  );
}