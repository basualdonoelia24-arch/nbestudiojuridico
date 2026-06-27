import Link from 'next/link';

export const metadata = {
  title: 'Veteranos de Malvinas | NB Estudio Jurídico',
  description: 'Asesoramiento previsional especializado para Veteranos de Malvinas y sus familias: jubilación anticipada, pensión honorífica y reajustes. Atención en todo el país.',
};

export default function AreaMalvinas() {
  const servicios = [
    {
      num: 1,
      titulo: 'Jubilación anticipada para Veteranos de Malvinas',
      subtitulo: 'Desde los 53 años con 10 de aportes — régimen ANSES',
      contenido: 'Los veteranos de Malvinas que se desempeñaron como soldados conscriptos o civiles pueden jubilarse de forma anticipada a través del régimen específico de ANSES. El beneficio requiere 53 años de edad y acreditar 10 años de aportes previsionales. Quiénes cumplieron el servicio militar obligatorio suman 2 años adicionales de aportes por ese período.',
      busqueda: '¿Sos veterano de Malvinas y querés jubilarte de forma anticipada? ¿Te dijeron en ANSES que no calificás o no sabés si te suman los años del servicio militar?',
    },
    {
      num: 2,
      titulo: 'Pensión hijos de Veteranos de Malvinas',
      subtitulo: 'Ley 23.848 — pensión vitalicia',
      contenido: 'Asesoramiento integral para hijos de excombatientes que deseen acceder a la pensión correspondiente.',
      busqueda: '¿Sos hijo o hija de un veterano de Malvinas y querés saber si te corresponde la pensión vitalicia de la Ley 23.848?',
    },
    {
      num: 3,
      titulo: 'Reajustes para jubilación de Veteranos de Malvinas',
      subtitulo: 'Ley 27.329 — jubilación especial de carácter excepcional',
      contenido: 'La jubilación que perciben los Veteranos de Guerra de Malvinas es una jubilación especial de carácter excepcional (Ley 27.329), pero esto no impide reclamar como cualquier otra jubilación. Aplican los mismos criterios jurisprudenciales del régimen previsional general: recálculo del haber inicial, movilidad —incluida la suspendida durante la pandemia—, Impuesto a las Ganancias y levantamiento de topes.',
      busqueda: '¿Sos Veterano de Malvinas y cobrás una jubilación que sentís mal calculada? Los reclamos de reajuste aplican igual que para cualquier jubilación.',
    },
    {
      num: 4,
      titulo: 'Reajustes de la Pensión Honorífica de Malvinas',
      subtitulo: 'Ley 23.848 — Reclamos por movilidad de los últimos períodos',
      contenido: 'La Pensión Honorífica de Veteranos de Guerra de Malvinas (Ley 23.848) tiene un régimen específico distinto del previsional general. Los reclamos de reajuste viables son los correspondientes a la movilidad suspendida durante la pandemia y a las distintas movilidades aplicadas, como ocurre en el caso de las jubilaciones.',
      busqueda: '¿Cobrás la Pensión Honorífica de Malvinas y sentís que el haber quedó atrasado? Hay reclamos de movilidad de los últimos períodos que se pueden iniciar.',
    },
  ];

  const faqs = [
    {
      pregunta: '¿Quiénes acceden a la jubilación anticipada de Veteranos de Malvinas?',
      respuesta: 'Pueden acceder los veteranos que se desempeñaron como soldados conscriptos o civiles en el conflicto. El beneficio requiere 53 años de edad y 10 años de aportes previsionales. Quienes cumplieron el servicio militar obligatorio suman 2 años adicionales de aportes por ese período. Cada caso se evalúa según la historia laboral completa.'
    },
    {
      pregunta: 'Soy hijo/a de un veterano de Malvinas, ¿me corresponde una pensión?',
      respuesta: 'La Ley 23.848 contempla una pensión vitalicia para los excombatientes y, en determinados supuestos, para su grupo familiar. Para saber si te corresponde y bajo qué condiciones, hay que analizar tu situación particular y la del veterano. Te asesoramos sobre la viabilidad del trámite.'
    },
    {
      pregunta: 'Ya cobro mi jubilación o pensión de Malvinas, ¿puedo reclamar un reajuste?',
      respuesta: 'Sí. Aunque la jubilación de Veteranos (Ley 27.329) y la Pensión Honorífica (Ley 23.848) tienen regímenes específicos, eso no impide reclamar. Aplican los mismos criterios que en el régimen general: recálculo del haber inicial, movilidad —incluida la suspendida durante la pandemia—, y en el caso de las jubilaciones, también Impuesto a las Ganancias y levantamiento de topes.'
    },
    {
      pregunta: '¿Cuánto tiempo lleva tramitar una jubilación o pensión de Malvinas?',
      respuesta: 'Los plazos varían según si se trata de una jubilación (tramite administrativo ante ANSES) o una pensión honorífica. Las jubilaciones suelen tardar entre 3 a 6 meses. Si hay rechazo y se debe iniciar una demanda, los tiempos se extienden. No prometemos plazos exactos porque dependen de factores externos (carga del juzgado, recursos de ANSES), pero te mantenemos informado en cada etapa.'
    },
    {
      pregunta: '¿Dónde se tramita la jubilación o pensión de Malvinas?',
      respuesta: 'La jubilación de Veteranos se tramita ante ANSES. La Pensión Honorífica también, pero con un expediente separado. Nosotros gestionamos todo el trámite: recopilamos documentación, presentamos solicitudes, hacemos seguimiento ante ANSES y, si es necesario, iniciamos acciones judiciales. Vos no tenés que ir a ANSES; nos encargamos nosotros.'
    },
  ];

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
              Veteranos de Malvinas
            </div>
            <h1>Veteranos de <em>Malvinas</em></h1>
            <p className="hero-sub" style={{ maxWidth: '700px', margin: '0 auto 30px' }}>Los derechos de nuestros héroes y sus familias. Jubilación anticipada, pensión honorífica y reajustes — asesoramiento previsional especializado en todo el país.</p>
            <div className="hero-cta-row">
              <Link href="/contacto" className="btn btn-rose">Contactanos →</Link>
              <Link href="#servicios" className="btn btn-outline-white">Ver servicios</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 50px' }} id="servicios">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--rose)', fontWeight: '600', display: 'block', marginBottom: '12px' }}>Qué incluye esta área</span>
          <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', lineHeight: '1.2', marginBottom: '20px', fontWeight: '400' }}>Derechos para <em style={{ color: 'var(--rose)', fontStyle: 'italic' }}>Veteranos de Malvinas</em></h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--ink)', maxWidth: '700px', margin: '0 auto 12px' }}>Asesoramiento previsional especializado para veteranos de guerra y sus familias. Cada caso es único — abajo encontrás los servicios más consultados.</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--gray-text)', fontStyle: 'italic', marginTop: '14px' }}>Hacé click en cada servicio para ver el detalle</p>
        </div>

       {/* ACORDEONES */}
       {servicios.map((servicio) => (
         <details key={servicio.num} className="seccion-card fade-in" open={servicio.num === 1}>
         <summary>
          <div className="num">{servicio.num}</div>
          <div className="summary-title">
           <h4>{servicio.titulo}</h4>
         <span className="resumen">{servicio.subtitulo}</span>
         </div>
          <span className="acordeon-icon">+</span>
         </summary>
         <div className="seccion-body">
         <p>{servicio.contenido}</p>
         <p className="busqueda-cliente">{servicio.busqueda}</p>
         </div>
         </details>
         ))}
      </section>

      {/* FAQ */}
<section className="faq-section" id="faq">
  <div className="section-tight">
    <div className="section-head fade-in">
      <span className="tag" style={{ color: 'var(--rose)' }}>Preguntas frecuentes</span>
      <h2>Lo que más nos <em>preguntan</em></h2>
    </div>

    {faqs.map((faq, idx) => (
      <details key={idx} className="faq" id={`faq-${idx + 1}`}>
        <summary>
          <span className="faq-num">{idx + 1}</span>
          <span className="faq-question">{faq.pregunta}</span>
          <span className="faq-icon">+</span>
        </summary>
        <div className="faq-body">
          <p>{faq.respuesta}</p>
        </div>
      </details>
    ))}
  </div>
</section>

{/* CTA FINAL */}
<section className="cta-banda">
   <h2>Sabés que podés reclamar como <em>Veterano de Malvinas</em></h2>
  <p>Contactanos y evaluamos tu caso sin costo. Te asesoramos sobre qué se puede reclamar y cómo proceder.</p>
  <Link href="/contacto" className="btn btn-outline-white">Contactanos →</Link>
</section>
 </>
  );
}