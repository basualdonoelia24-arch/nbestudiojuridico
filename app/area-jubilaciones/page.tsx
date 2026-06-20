import Link from 'next/link';

export default function AreaJubilaciones() {
  return (
    <>
      {/* SECCIÓN DE SERVICIOS */}
      <section className="section">
        <div className="section-narrow">
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
              <p>Para quienes reúnen los requisitos de edad y aportes. Evaluamos tu <strong>historia laboral completa</strong> para acceder al haber más alto posible.</p>
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
              <p>Acceso a jubilación antes de la edad si estás desempleado. <strong>Evaluamos tu situación</strong> para tramitar esta opción.</p>
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
            </div>
          </details>

          <details className="seccion-card fade-in">
            <summary>
              <div className="num">6</div>
              <div className="summary-title">
                <h4>Jubilación especial Malvinas</h4>
                <span className="resumen">Ley 23.848 - Veteranos de la Guerra</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>Jubilación anticipada exclusiva para Veteranos de la Guerra de Malvinas. Tramitación con <strong>beneficios especiales y prioritarios</strong>.</p>
            </div>
          </details>

          <details className="seccion-card fade-in">
            <summary>
              <div className="num">7</div>
              <div className="summary-title">
                <h4>Pensión Malvinas a herederos</h4>
                <span className="resumen">Pensión honorífica para viuda/viudo e hijos</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>Pensión especial para Veteranos de Malvinas fallecidos. Tramitación para <strong>viuda/viudo e hijos derechohabientes</strong>.</p>
            </div>
          </details>

          <details className="seccion-card fade-in">
            <summary>
              <div className="num">8</div>
              <div className="summary-title">
                <h4>Impugnación de resoluciones</h4>
                <span className="resumen">Reclamo ante negativas de ANSES</span>
              </div>
              <span className="acordeon-icon">+</span>
            </summary>
            <div className="seccion-body">
              <p>Reclamo y amparo contra negativas de jubilación. <strong>Litigio administrativo y judicial</strong> si es necesario.</p>
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
              <span className="faq-question">¿Cuál es la edad de jubilación en Argentina?</span>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-body">
              <div className="respuesta-corta">
                <p><strong>Respuesta corta:</strong> La edad de jubilación es de 65 años para hombres y 60 años para mujeres (en el sistema público). Se requieren 30 años de aportes como mínimo.</p>
              </div>
              <p>Estas edades corresponden al régimen general de jubilación en Argentina. Sin embargo, existen excepciones y regímenes especiales que pueden variar según tu historia laboral.</p>
            </div>
          </details>

          <details className="faq" id="faq-2">
            <summary>
              <span className="faq-num">2</span>
              <span className="faq-question">¿Qué documentación necesito para tramitar jubilación?</span>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-body">
              <div className="respuesta-corta">
                <p><strong>Respuesta corta:</strong> DNI, partida de nacimiento, constancia de CUIL, antecedentes de empleadores, acta de matrimonio (si corresponde), y certificado de convivencia. Asesoramos para completar cada caso específico.</p>
              </div>
              <h4>Documentación básica obligatoria</h4>
              <p>Para iniciar el trámite de jubilación ante ANSES necesitás reunir esta documentación:</p>
              <ul>
                <li><strong>DNI</strong> vigente</li>
                <li><strong>CUIL</strong> y Clave Fiscal de ARCA</li>
                <li><strong>Certificación de Servicios</strong> de cada empleador</li>
                <li><strong>Recibos de sueldo</strong> del último período</li>
                <li><strong>Acta de matrimonio</strong> y partidas de nacimiento (si corresponde)</li>
              </ul>
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
                <p><strong>Respuesta corta:</strong> Generalmente entre 6 y 12 meses, dependiendo de la complejidad del expediente y la documentación completa. Casos especiales pueden tardar más.</p>
              </div>
              <p>El tiempo depende de varios factores: claridad de tu historia laboral, si hay aportes faltantes, y si ANSES requiere información adicional.</p>
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
                <p><strong>Respuesta corta:</strong> Sí. Si tenés aportes en diferentes regímenes (AFJP, estatal, etc.), podemos tramitar la unificación y consolidar tus derechos.</p>
              </div>
              <p>La unificación de aportes es clave para alcanzar la jubilación ordinaria cuando tienes historia laboral fragmentada.</p>
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
              <p>Las negativas de ANSES son frecuentes pero no son definitivas. Existe un camino legal para reclamar y en muchos casos revertir la decisión.</p>
            </div>
          </details>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-banda">
        <div className="container">
          <h2>¿Tenés dudas sobre tu jubilación o pensión?</h2>
          <p>Contactame para una consulta sin compromiso. Evaluamos tu situación completa.</p>
          <Link href="/contacto" className="btn">Agendar Consulta</Link>
        </div>
      </section>
    </>
  );
}