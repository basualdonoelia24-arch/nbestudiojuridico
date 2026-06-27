import Link from 'next/link';

export const metadata = {
  title: 'Salud · Obras Sociales y Prepagas | NB Estudio Jurídico',
  description: 'Defensa de tus derechos en salud frente a obras sociales, prepagas y el Estado. Amparos por aumentos de cuota, mantenimiento de cobertura al jubilarse, medicamentos oncológicos, discapacidad y más.',
  canonical: 'https://nbestudiojuridico.com.ar/area-salud',
  openGraph: {
    type: 'website',
    title: 'Amparos de Salud — Obras Sociales y Prepagas | NB Estudio Jurídico',
    description: '¿Tu obra social o prepaga te negó cobertura o te aumentó la cuota? Te asesoramos en CABA. Consultá con la Dra. Basualdo.',
    url: 'https://nbestudiojuridico.com.ar/area-salud',
    image: 'https://nbestudiojuridico.com.ar/img/og-salud.jpg',
  },
};

const servicios = [
  {
    num: 1,
    titulo: '💰 Aumentos indebidos de cuota de prepaga',
    resumen: 'DNU 70/2023, aumentos por edad, inconstitucionalidad declarada',
    contenido: 'Tras el DNU 70/2023, las prepagas aumentaron sus cuotas de manera abusiva, en muchos casos sin justificación razonable. A esto se suman los aumentos por edad, que muchas empresas siguen aplicando a afiliados con larga antigüedad, en violación de lo que protegía la Ley 26.682.\n\nLa justicia ya declaró la inconstitucionalidad de los artículos del DNU que desregularon las cuotas, ordenando devolver lo cobrado en exceso. Reclamamos los aumentos abusivos —tanto los desproporcionados como los aplicados por rango etario— en sede judicial.',
    busqueda: '¿Te aumentaron la cuota de la prepaga de golpe o por cumplir años? ¿Pagás mucho más desde el DNU 70/2023? Se puede reclamar y pedir la devolución.',
  },
  {
    num: 2,
    titulo: '👴 Mantenimiento de cobertura al jubilarse',
    resumen: 'El paso a PAMI no es obligatorio · Fallo Albónico CSJN 2001',
    contenido: 'El paso a PAMI no es obligatorio. La Corte Suprema de Justicia de la Nación lo estableció en el fallo "Albónico" (2001), criterio que aplican uniformemente todos los juzgados. Si trabajaste en relación de dependencia y tenés tu obra social o prepaga, podés mantenerla al jubilarte.\n\nPara muchas personas, mantener la cobertura no es una cuestión administrativa: es una cuestión de continuidad humana. Después de toda una vida atendiéndote en el mismo lugar, con médicos de cabecera que conocen tu historia clínica, con tratamientos en curso, cambiar de sistema implica una pérdida real.\n\nLo clave: apenas se aprueba la jubilación, hay que notificar formalmente a la prepaga u obra social el deseo de continuidad. Si no se notifica, la persona pierde este derecho. Te asesoramos en este trámite urgente para que puedas conservar la cobertura que tenías.',
    busqueda: '¿Te estás por jubilar y no querés perder tu cobertura? No estás obligado a pasar a PAMI: podés continuar en tu obra social o prepaga derivando los aportes. En el caso de la prepaga, tené presente que deberás abonar la diferencia del plan.',
  },
  {
    num: 3,
    titulo: '💊 Medicamentos oncológicos / alto costo / monoclonales',
    resumen: 'Amparo + medida cautelar · Derecho constitucional a la salud',
    contenido: 'Cuando una obra social o prepaga niega o demora la cobertura de un medicamento oncológico, biológico o de alto costo, iniciamos el amparo de salud para garantizar el acceso inmediato al tratamiento. La medida cautelar puede resolver la urgencia en pocos días, mientras avanza el proceso principal.\n\nEstos reclamos se fundan en el derecho constitucional a la salud (art. 75 inc. 22 CN) y en los tratados internacionales con jerarquía constitucional, que protegen el acceso a tratamientos esenciales.',
    busqueda: '¿Te niegan o demoran un medicamento oncológico o de alto costo? El tiempo es clave: se puede pedir una medida cautelar urgente.',
  },
  {
    num: 4,
    titulo: '✂️ Te dieron de baja sin motivo',
    resumen: 'Rescisión unilateral e intempestiva · Ley 26.682',
    contenido: 'Cuando la prepaga u obra social da de baja tu afiliación de forma unilateral, intempestiva o sin causa justificada, podés reclamar la restitución del servicio. La Ley 26.682 limita las causales de rescisión y, si te acusan de haber ocultado una enfermedad, la carga de probarlo recae sobre la empresa, no sobre vos. La baja arbitraria es revisable judicialmente, incluso con medida cautelar urgente si quedaste sin cobertura.',
    busqueda: '¿Te dieron de baja de un día para el otro? ¿Te acusan de haber ocultado una enfermedad sin pruebas? La baja arbitraria se reclama.',
  },
  {
    num: 5,
    titulo: '🚫 Cobertura denegada',
    resumen: 'Cuando la obra social o prepaga rechaza un tratamiento',
    contenido: 'Reclamo judicial cuando la obra social o prepaga rechaza la cobertura de un tratamiento, estudio o medicamento que debería cubrir. Iniciamos amparo con medida cautelar para garantizar el acceso mientras avanza el juicio.',
    busqueda: '¿Te rechazaron un tratamiento, un estudio o un medicamento que deberían cubrir? ¿Te dieron una negativa por escrito o te dan vueltas sin contestar? Podemos reclamarlo.',
  },
  {
    num: 6,
    titulo: '♿ Discapacidad',
    resumen: 'Terapias, acompañante terapéutico, transporte, escolaridad',
    contenido: 'Defensa de los derechos previstos en la Ley 24.901 (Sistema de Prestaciones Básicas para personas con discapacidad): terapias, acompañante terapéutico, transporte, escolaridad especial, equipamiento ortopédico y todas las prestaciones que la obra social o prepaga debe cubrir al 100%.',
    busqueda: '¿Tenés el CUD y no te dan las terapias? ¿Te niegan el acompañante terapéutico, el transporte o la escuela especial? ¿Te cubren solo una parte?',
  },
  {
    num: 7,
    titulo: '🏥 Internación geriátrica',
    resumen: 'Cobertura de hogares de ancianos y centros de día',
    contenido: 'Reclamo de cobertura de internación en residencias geriátricas, hogares de ancianos y centros de día para adultos mayores cuando la obra social o prepaga no la brinda o la restringe injustificadamente.',
    busqueda: '¿PAMI no cubre el geriátrico de tu mamá o tu papá? ¿La obra social paga solo una parte de la residencia? ¿Te recortaron el centro de día?',
  },
  {
    num: 8,
    titulo: '🏥 PAMI',
    resumen: 'Reclamos contra el Instituto Nacional de Servicios Sociales',
    contenido: 'Defensa frente a denegaciones, demoras o restricciones de prestaciones por parte de PAMI. Como parte del Estado Nacional, PAMI está obligado a brindar coberturas de salud completas a sus afiliados jubilados y pensionados.',
    busqueda: '¿PAMI te demora o niega un medicamento, una cirugía, un estudio o una internación? ¿Te dan vueltas con una prestación que necesitás? Reclamamos por vos.',
  },
  {
    num: 9,
    titulo: '🍼 Fertilización asistida',
    resumen: 'Ley 26.862 · Cobertura integral garantizada',
    contenido: 'La Ley 26.862 garantiza el acceso integral a las técnicas de fertilización asistida (baja y alta complejidad). Reclamamos cuando la obra social o prepaga restringe el número de tratamientos, exige requisitos no previstos por ley o demora la cobertura cuando el factor edad es crítico.',
    busqueda: '¿Te limitan los intentos de FIV o ICSI? ¿Te piden requisitos que la ley no exige? ¿Demoran la cobertura y el tiempo te juega en contra?',
  },
  {
    num: 10,
    titulo: '💊 Medicación crónica',
    resumen: 'Tratamientos prolongados rechazados o restringidos',
    contenido: 'Reclamo de cobertura de medicación para tratamientos crónicos (diabetes, hipertensión, EPOC, enfermedades autoinmunes, etc.) cuando la obra social o prepaga la rechaza o no cubre el 100% que corresponde.',
    busqueda: '¿Te dejaron de cubrir la medicación de tu tratamiento crónico? ¿Te pagan solo un porcentaje y tenés que poner la diferencia todos los meses?',
  },
];

const faqs = [
  {
    num: 1,
    pregunta: '¿Cuándo se considera "urgente" un caso de salud?',
    respuesta: 'Un caso de salud se considera urgente cuando la demora en resolver el reclamo puede afectar gravemente la salud, la integridad física o la vida de la persona. En estos casos, podemos solicitar una medida cautelar que ordena a la obra social, prepaga o Estado cubrir el tratamiento mientras se resuelve el juicio principal.\n\nLa urgencia se evalúa caso por caso considerando el estado de salud actual, tratamientos en curso, impacto económico, personas con discapacidad o adultos mayores afectados, y tiempos médicos involucrados.\n\nCuando el caso lo amerita, presentamos un amparo con medida cautelar urgente. Esta medida puede ordenar a la obra social o prepaga cubrir un medicamento o tratamiento rechazado, mantener la cuota anterior mientras se discute un aumento, restituir cobertura suspendida o brindar un tratamiento ya iniciado.\n\nImportante: Guardá toda la documentación médica y administrativa, no esperes, y contá tu caso completo en la consulta.',
  },
  {
    num: 2,
    pregunta: '¿Qué es un amparo de salud y cómo funciona?',
    respuesta: 'El amparo de salud es una acción judicial rápida que protege el derecho constitucional a la salud cuando una obra social, prepaga o el Estado (en cualquiera de sus niveles: nacional, provincial o municipal) niega, demora o restringe una cobertura que debería brindar.\n\nEl amparo puede dirigirse a obras sociales, empresas de medicina prepaga, PAMI, organismos provinciales, sistemas municipales, o el Estado Nacional, Provincial o Municipal.\n\nEstá previsto en la Constitución Nacional (art. 43) y en la Ley 16.986. Se desarrolla en estas etapas: análisis y preparación, presentación de demanda, resolución de cautelar, trámite del juicio principal, apelaciones, y cumplimiento.\n\nSe usa para negativa de cobertura, aumentos abusivos de cuota, suspensión injustificada de afiliación, falta de prestación a personas con discapacidad, mantenimiento de cobertura al jubilarse, reclamos contra PAMI, y cualquier vulneración del derecho a la salud.',
  },
  {
    num: 3,
    pregunta: '¿Cuánto tarda un reclamo de salud en resolverse?',
    respuesta: 'No hay un plazo único. Los tiempos dependen del tipo de reclamo, la urgencia del caso, el juzgado que interviene y la complejidad probatoria.\n\nLa medida cautelar puede ir desde horas o días (en casos extremos) hasta algunas semanas en casos menos urgentes. Una vez dictada, la cobertura debe brindarse de manera inmediata.\n\nEl amparo como proceso completo puede durar entre algunos meses y más de un año, dependiendo de la complejidad, pruebas necesarias, apelaciones, y juzgado interviniente.\n\nLo importante es que la medida cautelar resuelve la urgencia rápidamente. Una vez que la obra social, prepaga o Estado debe cubrir el tratamiento por orden judicial, la persona ya tiene acceso a lo que necesita, aunque el juicio principal siga avanzando.\n\nLos tiempos pueden variar en reclamos por aumentos de cuota, casos contra el Estado, casos con múltiples afectados, y casos con apelaciones.',
  },
  {
    num: 4,
    pregunta: '¿La obra social o prepaga puede tomar represalias si la denuncio?',
    respuesta: 'No. La obra social o prepaga no puede darte de baja, negarte prestaciones ni perjudicarte por haber iniciado un reclamo administrativo o judicial. Cualquier acto de represalia es ilegal y se suma como prueba en contra del prestador.\n\nEn la práctica, una vez iniciado el reclamo, la relación con el afiliado queda especialmente vigilada por la justicia y los organismos de control.\n\nEl derecho a reclamar está protegido por la Constitución Nacional (art. 43), la Ley de Defensa del Consumidor, la Ley 26.682 (de regulación de prepagas), y los códigos de procedimiento de cada jurisdicción.\n\nLa represalia es considerada un agravio adicional que puede dar lugar a un reclamo separado por daño y perjuicio.',
  },
  {
    num: 5,
    pregunta: '¿Cuál es el costo de un reclamo de salud?',
    respuesta: 'El costo varía según el tipo de reclamo, la complejidad y la jurisdicción.\n\nEn general, hay costos de presentación ante la justicia (tasa de juzgado), honorarios de abogado, y posibles costos de pericias o informes médicos si el juez las ordena.\n\nEn muchos casos de salud, existe la posibilidad de que el afiliado se beneficie de exención de tasas o de una condena en costas (que la parte demandada pague los costos) si la sentencia es favorable.\n\nDurante la primera consulta, evaluamos tu caso y te orientamos sobre los costos esperables y las opciones de financiamiento.\n\nLo importante es que el costo inicial de actuar suele ser menor al ahorro que se obtiene al recuperar coberturas, recuperar lo pagado en exceso por aumentos indebidos, o acceder a tratamientos necesarios que la obra social o prepaga no brindaba.',
  },
];

export default function AreaSalud() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="breadcrumb">
               <Link href="/">Inicio</Link>
               <span className="sep">/</span>
               <span className="breadcrumb-categoria">Salud</span>
               <span className="sep">/</span>
                Obras Sociales y Prepagas
            </div>
            <h1>Salud · <em>Obras Sociales y Prepagas</em></h1>
            <p className="hero-sub">Defensa de tus derechos en salud frente a obras sociales, prepagas y el Estado. Amparos por aumentos de cuota, mantenimiento de cobertura al jubilarse, medicamentos oncológicos, discapacidad y más.</p>
            <div className="hero-cta-row">
              <Link href="/contacto" className="btn btn-rose">Consultar mi caso</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PRINCIPAL */}
      <section className="section">
        <div className="section-narrow">
          <div className="section-head">
            <span className="tag" style={{ color: 'var(--rose)' }}>Cómo trabajamos los casos de salud</span>
            <h2>El primer paso es <em>entender tu caso</em></h2>
            <p className="sub">Cada caso de salud es distinto y requiere análisis específico. El marco legal cambió mucho desde el DNU 70/2023 y hoy la jurisprudencia es clave. Por eso, antes de iniciar cualquier reclamo, revisamos tu situación completa para definir la mejor estrategia.</p>
          </div>

          {/* ANÁLISIS PREVISIONAL */}
          <div className="analisis-principal">
            <div className="analisis-badge">★ Análisis previo</div>
            <h3>Análisis previsional <em>personalizado</em></h3>
            <div className="analisis-tagline">Cada expediente cuenta una historia distinta</div>
            <p>A modo de ejemplo: una persona que se jubiló en 2004 no se reclama igual que una que se jubiló en 2024. La normativa cambió, hubo períodos especiales (como la pandemia) y cada jurisdicción tiene criterios distintos.</p>
            <p>Antes de iniciar cualquier reclamo, analizamos tu caso completo para definir <strong>la estrategia más efectiva</strong> según:</p>
            <ul style={{ margin: '12px 0 14px 22px', padding: 0 }}>
              <li style={{ marginBottom: '6px' }}>Tu tipo de cobertura (obra social, prepaga, PAMI)</li>
              <li style={{ marginBottom: '6px' }}>La normativa aplicable a tu caso específico</li>
              <li style={{ marginBottom: '6px' }}>La jurisprudencia vigente en tu jurisdicción</li>
              <li>Los errores administrativos que detectemos</li>
            </ul>
            <div className="compromiso">
              💡 <strong>Mi compromiso:</strong> No prometo resultados sin haber visto tu caso. Pero sí te digo con honestidad qué se puede reclamar, qué expectativas son razonables y si conviene actuar con urgencia.
            </div>
          </div>

          {/* SERVICIOS */}
          <div className="secciones-titulo">
            <span className="tag">Lo que el análisis puede detectar</span>
            <h3>Tipos de <em>reclamos</em></h3>
            <p>Estos son los reclamos más frecuentes. Cada caso puede combinar varios de ellos.</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--gray-text)', fontStyle: 'italic', marginTop: '14px' }}>Hacé click en cada servicio para ver el detalle</p>
          </div>

          {servicios.map((servicio) => (
            <details key={servicio.num} className="seccion-card" open={servicio.num <= 3}>
              <summary>
                <div className="num">{servicio.num}</div>
                <div className="summary-title">
                  <h4>{servicio.titulo}</h4>
                  <span className="resumen">{servicio.resumen}</span>
                </div>
                <span className="acordeon-icon">+</span>
              </summary>
              <div className="seccion-body">
                {servicio.contenido.split('\n\n').map((parrafo, i) => (
                  <p key={i}>{parrafo}</p>
                ))}
                <p className="busqueda-cliente">{servicio.busqueda}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section" id="faq">
        <div className="section-tight">
          <div className="section-head">
            <span className="tag" style={{ color: 'var(--rose)' }}>Preguntas frecuentes</span>
            <h2>Lo que más nos <em>preguntan</em></h2>
          </div>
          <p className="faq-helper">Hacé click en cualquier pregunta para ver la respuesta completa</p>

          {faqs.map((faq) => (
            <details key={faq.num} className="faq" open={faq.num === 1}>
              <summary>
                <span className="faq-num">{faq.num}</span>
                <span className="faq-question">{faq.pregunta}</span>
                <span className="faq-icon">+</span>
              </summary>
              <div className="faq-body">
                <div className="respuesta-corta">
                  <p><strong>Respuesta corta:</strong> {faq.respuesta.split('\n\n')[0]}</p>
                </div>
                {faq.respuesta.split('\n\n').slice(1).map((parrafo, i) => (
                  <p key={i} style={{ marginTop: i === 0 ? '18px' : '14px' }}>{parrafo}</p>
                ))}
                <p className="faq-fecha">Última actualización: junio 2026</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-banda">
        <h2>¿Tu obra social o prepaga te <em>negó</em> algo?</h2>
        <p>No esperes. Consultá con nosotros y evaluamos tu caso sin costo.</p>
        <Link href="/contacto" className="btn btn-outline-white">Contactanos →</Link>
      </section>
    </>
  );
}