import Link from 'next/link';

export default function AreaReajustes() {
  return (
    <>
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
                <h4>Reajuste Veteranos Malvinas</h4>
                <span className="resumen">Ley 27.329 - Beneficios especiales</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>Veteranos de Malvinas tienen derechos especiales de reajuste conforme a Ley 27.329. Aseguramos el reconocimiento de estos beneficios.</p>
            </div>
          </details>

          <details className="seccion-card fade-in">
            <summary>
              <div className="num">6</div>
              <div className="summary-title">
                <h4>Pensión Honorífica Malvinas</h4>
                <span className="resumen">Ley 23.848 - Movilidad de pensión</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>La Pensión Honorífica de Malvinas tiene movilidad garantizada por ley. Gestionamos aumentos y diferencias adeudadas.</p>
            </div>
          </details>

          <details className="seccion-card fade-in">
            <summary>
              <div className="num">7</div>
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
          <h2>¿Tu jubilación no subió como debería?</h2>
          <p>Contactame para revisar tu caso. Reclamamos las diferencias que te corresponden.</p>
          <Link href="/contacto" className="btn">Agendar Consulta</Link>
        </div>
      </section>
    </>
  );
}
