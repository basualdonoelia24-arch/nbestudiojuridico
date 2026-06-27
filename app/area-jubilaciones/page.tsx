import Link from 'next/link';

export default function AreaJubilaciones() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="sep">/</span>
            <span className="breadcrumb-categoria">Previsional</span>
            <span className="sep">/</span>
            Jubilaciones y Pensiones
          </div>
          <h1>Jubilaciones y <em>Pensiones</em></h1>
          <p className="hero-sub">Asesoramiento integral en jubilaciones, pensiones, moratorias previsionales y reconocimiento de aportes. Te acompañamos desde el análisis previo hasta el cobro del primer haber.</p>
          <div className="hero-cta-row">
            <Link href="/contacto" className="btn btn-rose">Contactanos →</Link>
            <Link href="#faq" className="btn btn-outline-white">Ver preguntas frecuentes</Link>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section-narrow">
          <div className="secciones-titulo fade-in">
            <span className="tag">Qué incluye esta área</span>
            <h3>Servicios de <em>Jubilaciones y Pensiones</em></h3>
            <p>Asesoramiento integral en todos los trámites previsionales. Cada caso es único — abajo encontrás los servicios más consultados.</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--gray-text)', fontStyle: 'italic', marginTop: '14px' }}>Hacé click en cada servicio para ver el detalle</p>
          </div>

          <details className="seccion-card fade-in" open>
            <summary>
              <div className="num">1</div>
              <div className="summary-title">
                <h4>Jubilación ordinaria</h4>
                <span className="resumen">60 mujeres / 65 hombres + 30 años de aportes</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>Para quienes reúnen los requisitos de edad y aportes. Evaluamos tu historia laboral completa para acceder al haber más alto posible.</p>
              <p className="busqueda-cliente">¿Cumplís la edad pero no sabés si te alcanzan los aportes? ¿Querés jubilarte con el haber más alto posible? Revisamos tu historia laboral.</p>
            </div>
          </details>

          <details className="seccion-card fade-in">
            <summary>
              <div className="num">2</div>
              <div className="summary-title">
                <h4>Retiro por invalidez</h4>
                <span className="resumen">Para incapacidad laboral certificada por junta médica</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>Si una enfermedad o incapacidad te impide trabajar, gestionamos el <strong>retiro por invalidez</strong> ante ANSES y te acompañamos en la junta médica.</p>
              <p className="busqueda-cliente">¿Una enfermedad o accidente te impide seguir trabajando? ¿Presentaste la carpeta médica y la junta de ANSES te lo rechazó?</p>
            </div>
          </details>

          <details className="seccion-card fade-in">
            <summary>
              <div className="num">3</div>
              <div className="summary-title">
                <h4>Pensión por fallecimiento</h4>
                <span className="resumen">Cónyuges, convivientes e hijos de jubilados o trabajadores</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>Si perdiste a un ser querido jubilado o trabajador, tramitamos la <strong>pensión por fallecimiento</strong> para viuda/viudo e hijos derechohabientes.</p>
              <p className="busqueda-cliente">¿Sos viuda/viudo o hijo de un jubilado o aportante fallecido? Podés tener derecho a una pensión.</p>
            </div>
          </details>

          <details className="seccion-card fade-in">
            <summary>
              <div className="num">4</div>
              <div className="summary-title">
                <h4>Jubilación anticipada</h4>
                <span className="resumen">Por desempleo o programa especial</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>Acceso a jubilación antes de la edad si estás desempleado. Evaluamos tu <strong>situación</strong> para tramitar esta opción.</p>
              <p className="busqueda-cliente">¿Perdiste tu trabajo y querés jubilarte antes? Podemos analizar si reúnís los requisitos.</p>
            </div>
          </details>

          <details className="seccion-card fade-in">
            <summary>
              <div className="num">5</div>
              <div className="summary-title">
                <h4>Moratoria de aportes</h4>
                <span className="resumen">Blanqueo de aportes faltantes - Ley 27.260</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>Regularización de aportes faltantes mediante moratoria. Te ayudamos a <strong>alcanzar jubilación ordinaria</strong> con menos años de aporte.</p>
              <p className="busqueda-cliente">¿Te faltan años de aportes para jubilarte? La moratoria es una oportunidad para regularizarlos.</p>
            </div>
          </details>

          <details className="seccion-card fade-in">
            <summary>
              <div className="num">6</div>
              <div className="summary-title">
                <h4>Impugnación de resoluciones</h4>
                <span className="resumen">Reclamo ante negativas de ANSES</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>Reclamo y amparo contra negativas de jubilación. <strong>Litigio administrativo y judicial</strong> si es necesario.</p>
              <p className="busqueda-cliente">¿ANSES te rechazó tu jubilación? Podemos impugnar la decisión y defender tus derechos.</p>
            </div>
          </details>

          <div className="destacado fade-in">
            <div className="destacado-badge">★ Servicio preventivo</div>
            <div className="destacado-grid">
              <div className="destacado-icon">📋</div>
              <div className="destacado-content">
                <h3>Estrategia jubilatoria anticipada</h3>
                <div className="destacado-tagline">Mujeres desde los 50 años · Hombres desde los 55 años</div>
                <p>No esperes al último momento. Hacé un análisis temprano de tu historia laboral para <strong>identificar aportes faltantes a tiempo</strong>, planificar la mejor edad de retiro y proyectar el haber al que vas a acceder. <strong>La diferencia entre planificar a los 50 o tramitar a los 65 puede ser de millones de pesos en tu haber jubilatorio.</strong></p>
                <Link href="/contacto" className="btn btn-rose" style={{ fontSize: '0.72rem', padding: '11px 20px' }}>Consultar este servicio →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-tight">
          <div className="section-head fade-in">
            <span className="tag" style={{ color: 'var(--rose)' }}>Preguntas frecuentes</span>
            <h2>Lo que más nos <em>preguntan</em></h2>
          </div>
          <p className="faq-helper">Hacé click en cualquier pregunta para ver la respuesta completa</p>

          <details className="faq" id="faq-1">
            <summary>
              <span className="faq-num">1</span>
              <span className="faq-question">¿Qué se necesita para iniciar mi jubilación?</span>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-body">
              <div className="respuesta-corta">
                <p><strong>Respuesta corta:</strong> Para iniciar tu jubilación necesitás presentar ante ANSES tu DNI, CUIL, Clave Fiscal de ARCA, las Certificaciones de Servicios de cada empleador, recibos de sueldo, y partidas civiles correspondientes. Sin embargo, <strong>cada caso requiere documentación adicional según tu historia laboral</strong>.</p>
              </div>
              <h4>Documentación básica obligatoria</h4>
              <p>Para iniciar el trámite de jubilación ante ANSES necesitás reunir esta documentación:</p>
              <ul>
                <li><strong>DNI</strong> vigente</li>
                <li><strong>CUIL</strong> y Clave Fiscal ARCA nivel 3</li>
                <li><strong>Certificación de Servicios</strong> de cada empleador</li>
                <li><strong>Recibos de sueldo</strong> del último período</li>
              </ul>
            </div>
          </details>

          <details className="faq" id="faq-2">
            <summary>
              <span className="faq-num">2</span>
              <span className="faq-question">¿Cuál es la edad de jubilación?</span>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-body">
              <div className="respuesta-corta">
                <p><strong>Respuesta corta:</strong> 65 años para hombres y 60 para mujeres. Se requieren 30 años de aportes como mínimo.</p>
              </div>
            </div>
          </details>

          <details className="faq" id="faq-3">
            <summary>
              <span className="faq-num">3</span>
              <span className="faq-question">¿Cuánto tiempo tarda la tramitación?</span>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-body">
              <div className="respuesta-corta">
                <p><strong>Respuesta corta:</strong> Entre 6 y 12 meses, dependiendo de la complejidad del expediente y la documentación completa. Casos especiales pueden tardar más.</p>
              </div>
            </div>
          </details>

          <details className="faq" id="faq-4">
            <summary>
              <span className="faq-num">4</span>
              <span className="faq-question">¿Puedo jubilarme si tengo aportes en más de un régimen?</span>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-body">
              <div className="respuesta-corta">
                <p><strong>Respuesta corta:</strong> Sí. Si tenés aportes en diferentes regímenes (AFJP, estatal, etc.), podemos tramitar la unificación y consolidar tus derechos para alcanzar la jubilación ordinaria.</p>
              </div>
            </div>
          </details>

          <details className="faq" id="faq-5">
            <summary>
              <span className="faq-num">5</span>
              <span className="faq-question">¿Qué pasa si ANSES deniega mi jubilación?</span>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-body">
              <div className="respuesta-corta">
                <p><strong>Respuesta corta:</strong> Podemos impugnar la decisión mediante amparo, reclamo administrativo o litigio judicial. Cada caso tiene argumentos legales para revertir la negativa.</p>
              </div>
            </div>
          </details>
        </div>
      </section>

      <section className="cta-banda">
        <div className="container">
          <h2>¿Tenés dudas sobre tu <em>jubilación o pensión</em>?</h2>
          <p>Cada situación previsional requiere un análisis específico. Contactanos y evaluamos en detalle qué te corresponde y cómo resolvemos tu caso.</p>
          <div className="cta-banda-btns">
            <Link href="/contacto" className="btn btn-rose">Contactanos →</Link>
          </div>
        </div>
      </section>
    </>
  );
}