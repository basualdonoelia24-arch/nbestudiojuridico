import Link from 'next/link';

export default function AreaReajustes() {
  return (
    <>
{/* HERO */}
<section className="hero">
  <div className="container">
    <div className="hero-inner">
      <div className="breadcrumb" style={{ gap: '12px' }}>
      <Link href="/">Inicio</Link>
      <span className="sep">/</span>
      <span className="breadcrumb-categoria">Previsional</span>
      <span className="sep">/</span>
      Reajustes de Haberes
      </div>
      <h1>Reajustes de <em>Haberes</em></h1>
      <p className="hero-sub" style={{ maxWidth: '700px', margin: '0 auto 30px' }}>Análisis previsional personalizado para detectar todos los reclamos posibles según tu situación: recálculo del haber inicial, movilidad, impuesto a las ganancias, levantamiento de topes, beneficios para Veteranos de Malvinas y reclamos AFJP - Régimen de Capitalización.</p>
      <div className="hero-cta-row">
        <Link href="/contacto" className="btn btn-rose">Contactanos →</Link>
        <Link href="#faq" className="btn btn-outline-white">Ver preguntas frecuentes</Link>
      </div>
    </div>
  </div>
</section>
     {/* SECCIÓN HEAD */}
       <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 50px' }}>
       <div style={{ textAlign: 'center', marginBottom: '50px' }}>
       <span style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--rose)', fontWeight: '600', display: 'block', marginBottom: '12px' }}>Cómo trabajamos los reajustes</span>
       <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', lineHeight: '1.2', marginBottom: '20px', fontWeight: '400' }}>El primer paso es <em style={{ color: 'var(--rose)', fontStyle: 'italic' }}>entender tu caso</em></h2>
       <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--ink)', maxWidth: '700px', margin: '0 auto' }}>No todos los reajustes son iguales. Las leyes cambiaron, hubo decretos en pandemia, y hoy cada juzgado falla distinto. Por eso, antes de iniciar cualquier reclamo, revisamos tu expediente completo.</p>
        </div>
         </section>
        {/* BLOQUE DESTACADO */}
<div className="destacado fade-in" style={{ maxWidth: '900px', margin: '0 auto 60px', padding: '40px 50px' }}>
  <div className="destacado-badge">★ Análisis previo</div>
  <h3>Análisis previsional <em>personalizado</em></h3>
  <div className="destacado-tagline">Cada expediente cuenta una historia distinta</div>
  <p>A modo de ejemplo: una persona que se jubiló en 2004 no se reclama igual que una que se jubiló en 2024. La normativa cambió, hubo períodos especiales (como la pandemia) y cada jurisdicción tiene criterios distintos.</p>
  <p>Antes de iniciar cualquier reajuste, revisamos tu expediente completo para identificar <strong>qué reclamos te corresponden según:</strong></p>
  <ul style={{ margin: '12px 0 14px 22px', padding: 0 }}>
    <li style={{ marginBottom: '6px' }}>• Tu fecha de jubilación y los períodos que se pueden reclamar</li>
    <li style={{ marginBottom: '6px' }}>• La normativa aplicable a tu caso específico</li>
    <li style={{ marginBottom: '6px' }}>• La jurisprudencia vigente en tu jurisdicción</li>
    <li>• Los errores administrativos que detectemos</li>
  </ul>
  <div style={{ borderLeft: '3px solid var(--rose)', paddingLeft: '20px', padding: '24px 20px', marginTop: '24px', backgroundColor: 'rgba(200, 132, 106, 0.05)' }}>
    💡 <strong>Mi compromiso:</strong> No prometo resultados sin haber visto tu caso. Pero sí te digo con honestidad qué se puede reclamar y qué expectativas son razonables.
  </div>
</div>
       {/* SECCIÓN TIPOS DE RECLAMOS */}
         <section style={{ maxWidth: '1100px', margin: '0 auto 50px', padding: '0 50px', textAlign: 'center' }}>
         <span style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--rose)', fontWeight: '600', display: 'block', marginBottom: '12px' }}>Lo que el análisis puede detectar</span>
         <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', lineHeight: '1.2', marginBottom: '20px', fontWeight: '400' }}>Tipos de <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>reclamos</em></h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--ink)', marginBottom: '12px' }}>Estos son los reclamos más frecuentes. Cada caso puede combinar varios de ellos.</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--gray-text)', fontStyle: 'italic', marginTop: '14px' }}>Hacé click en cada sección para ver el detalle</p>
          </section>
      {/* SECCIÓN DE SERVICIOS */}
      <section className="section">
        <div className="section-narrow">
          <details className="seccion-card fade-in" open>
            <summary>
              <div className="num">1</div>
              <div className="summary-title">
                <h4>Movilidad jubilatoria</h4>
                <span className="resumen">Aumentos periódicos del haber jubilatorio</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>Garantizamos que tu jubilación suba conforme a la <strong>movilidad legal</strong> establecida. Asesoramiento en aumentos y diferencias adeudadas.</p>
            </div>
          </details>

          <details className="seccion-card fade-in">
            <summary>
              <div className="num">2</div>
              <div className="summary-title">
                <h4>Reclamo de diferencias</h4>
                <span className="resumen">Diferencias de haber no pagadas por ANSES</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>Si tu jubilación no subió conforme a ley, reclamamos ante ANSES las <strong>diferencias adeudadas</strong> con intereses.</p>
            </div>
          </details>

          <details className="seccion-card fade-in">
            <summary>
              <div className="num">3</div>
              <div className="summary-title">
                <h4>Bonificación por invalidez</h4>
                <span className="resumen">Aumentos especiales para jubilados por invalidez</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>Si sos jubilado por invalidez, tenés derecho a <strong>bonificaciones especiales</strong>. Gestionamos estos aumentos ante ANSES.</p>
            </div>
          </details>

          <details className="seccion-card fade-in">
            <summary>
              <div className="num">4</div>
              <div className="summary-title">
                <h4>Reajuste de pensión por fallecimiento</h4>
                <span className="resumen">Movilidad de pensiones de viuda/viudo e hijos</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>Las pensiones por fallecimiento también tienen derecho a <strong>movilidad</strong>. Reclamamos los aumentos no reconocidos.</p>
            </div>
          </details>
            <details className="seccion-card fade-in">
            <summary>
              <div className="num">5</div>
              <div className="summary-title">
                <h4>Haberes AFJP</h4>
                <span className="resumen">Reclamos y movilidad de jubilaciones privadas</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>Si sos jubilado por AFJP, asesoramos en reclamos de movilidad, cambios de renta y <strong>reconversión a sistema público</strong>.</p>
            </div>
          </details>
        </div>
      </section>

      {/* SECCIÓN FAQ */}
      <section className="faq-section">
        <div className="section-tight">
          <div className="section-head fade-in">
            <h2>Preguntas frecuentes</h2>
          </div>

          <details className="faq" id="faq-1">
            <summary>
              <span className="faq-num">1</span>
              <span className="faq-question">¿Qué es la movilidad jubilatoria?</span>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-body">
              <div className="respuesta-corta">
                <p><strong>Respuesta corta:</strong> La movilidad jubilatoria es el aumento periódico que debe recibir tu jubilación conforme a una fórmula legal establecida. Es un derecho, no una gracia.</p>
              </div>
              <p>Cada tanto se aplica un coeficiente de ajuste a tu haber inicial. Si ANSES no te lo aplica, podés reclamar las diferencias.</p>
            </div>
          </details>

          <details className="faq" id="faq-2">
            <summary>
              <span className="faq-num">2</span>
              <span className="faq-question">¿Cuándo puedo reclamar diferencias de movilidad?</span>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-body">
              <div className="respuesta-corta">
                <p><strong>Respuesta corta:</strong> En cualquier momento. No hay plazo máximo para reclamar diferencias de movilidad no pagadas por ANSES.</p>
              </div>
              <p>Podés presentar un reclamo administrativo ante ANSES o ir directamente a litigio judicial si lo prefieres.</p>
            </div>
          </details>

          <details className="faq" id="faq-3">
            <summary>
              <span className="faq-num">3</span>
              <span className="faq-question">¿Qué debo hacer si mi jubilación no subió conforme a ley?</span>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-body">
              <div className="respuesta-corta">
                <p><strong>Respuesta corta:</strong> Lo primero es verificar cuál fue el aumento legal que te correspondía. Luego podés presentar un reclamo administrativo o ir a juicio.</p>
              </div>
              <p>Es recomendable una consulta profesional para calcular exactamente qué diferencia te deben.</p>
            </div>
          </details>

          <details className="faq" id="faq-4">
            <summary>
              <span className="faq-num">4</span>
              <span className="faq-question">¿Las pensiones también tienen movilidad?</span>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-body">
              <div className="respuesta-corta">
                <p><strong>Respuesta corta:</strong> Sí. Las pensiones por fallecimiento, invalidez y todas las prestaciones previsionales tienen derecho a movilidad igual que las jubilaciones.</p>
              </div>
              <p>Si sos viuda/viudo o hijo de jubilado fallecido, tu pensión también debe ajustarse periódicamente.</p>
            </div>
          </details>

          <details className="faq" id="faq-5">
            <summary>
              <span className="faq-num">5</span>
              <span className="faq-question">¿Cuánto tiempo tarda un reclamo de diferencias?</span>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-body">
              <div className="respuesta-corta">
                <p><strong>Respuesta corta:</strong> Un reclamo administrativo ante ANSES suele tardar entre 6 y 12 meses. Si va a juicio, puede tomar 1 a 3 años.</p>
              </div>
              <p>Mientras avanza el reclamo, tu jubilación sigue cobrándose sin cambios. Pero tenés derecho a que se te pague lo adeudado más intereses.</p>
            </div>
          </details>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-banda">
        <div className="container">
          <h2>¿Tenés dudas sobre <em>cuánto deberías cobrar?</em></h2>
          <p>Contactame para revisar tu caso. Reclamamos las diferencias que te corresponden.</p>
          <Link href="/contacto" className="btn">Agendar Consulta</Link>
        </div>
      </section>
    </>
  );
}
