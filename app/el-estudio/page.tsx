import Link from 'next/link';

export const metadata = {
  title: 'El Estudio | NB Estudio Jurídico - Dra. Noelia Basualdo',
  description: 'Conocé a la Dra. Noelia Basualdo, abogada con 15 años de trayectoria en derecho previsional y en salud.',
};

export default function ElEstudio() {
  return (
    <>
      {/* ENCABEZADO */}
      <div style={{ textAlign: 'center', padding: '60px 50px 40px', borderBottom: '1px solid var(--gray-line)' }}>
        <div style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--rose)', fontWeight: '600', marginBottom: '6px' }}>El Estudio · Volumen I</div>
        <div style={{ fontSize: '0.85rem', color: 'var(--gray-text)', textAlign: 'right', paddingRight: '50px' }}>Marzo 2026</div>
      </div>

      {/* FOTO + TÍTULO + INTRO (lado a lado) */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 50px', display: 'grid', gridTemplateColumns: '350px 1fr', gap: '60px', alignItems: 'flex-start' }}>
        
        {/* FOTO */}
        <div style={{ width: '100%', aspectRatio: '1', background: 'var(--mist)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gray-text)', fontSize: '0.9rem' }}>
          FOTO PROFESIONAL
        </div>

        {/* TÍTULO + INTRO */}
        <div>
          <h1 style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', lineHeight: '1.2', marginBottom: '20px', fontWeight: '400' }}>
              Noelia Basualdo:<br />
          <span style={{ color: 'var(--navy)', fontStyle: 'italic' }}>"Cada caso es único.<br />Nuestra estrategia también.<br /></span>
          <span style={{ color: 'var(--rose)', fontStyle: 'italic' }}>Porque detrás de cada expediente hay una persona."</span>
          </h1>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--ink)' }}>
            Soy Noelia Basualdo, abogada de la Universidad de Buenos Aires con 15 años de trayectoria profesional en derecho previsional y en salud. Desde mi estudio en Bolívar 382, piso 6, oficina 23, CABA, acompaño a personas de todo el país que buscan respuestas claras sobre sus derechos previsionales, ya sea para iniciar un trámite jubilatorio, reclamar un haber mal liquidado, o resolver un conflicto con su obra social.
          </p>
        </div>

      </section>
{/* LATERAL + ARTÍCULO */}
<section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 50px', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '60px' }}>
  
  {/* LATERAL */}
  <aside style={{ borderRight: '2px solid var(--rose)', paddingRight: '40px' }}>
    <div style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--rose)', fontWeight: '600', marginBottom: '20px' }}>— Quién es</div>
    <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.5rem', marginBottom: '30px', fontWeight: '400', color: 'var(--navy)' }}>Dra. Noelia Basualdo</h3>
    <div style={{ marginBottom: '24px', lineHeight: '1.6', fontSize: '0.9rem' }}>
      <strong style={{ color: 'var(--rose)', display: 'block', marginBottom: '6px', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Formación</strong>
      <span>Abogada<br />Universidad de Buenos Aires (UBA)</span>
    </div>

    <div style={{ marginBottom: '24px', lineHeight: '1.6', fontSize: '0.9rem' }}>
      <strong style={{ color: 'var(--rose)', display: 'block', marginBottom: '6px', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Matrículas</strong>
      <span>CPACF · Colegio Público de Abogados de la Capital Federal<br />CASI · Colegio de Abogados de San Isidro<br />Matrícula Federal del Interior</span>
    </div>

    <div style={{ marginBottom: '24px', lineHeight: '1.6', fontSize: '0.9rem' }}>
      <strong style={{ color: 'var(--rose)', display: 'block', marginBottom: '6px', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Especialización</strong>
      <span>Derecho previsional y en salud<br />Capacitaciones permanentes en jubilaciones, pensiones, reajustes y normativa ANSES.</span>
    </div>

    <div style={{ marginBottom: '24px', lineHeight: '1.6', fontSize: '0.9rem' }}>
      <strong style={{ color: 'var(--rose)', display: 'block', marginBottom: '6px', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Experiencia</strong>
      <span>15 años de ejercicio profesional<br />en derecho previsional y en salud</span>
    </div>

    <div style={{ marginBottom: '24px', lineHeight: '1.6', fontSize: '0.9rem' }}>
      <strong style={{ color: 'var(--rose)', display: 'block', marginBottom: '6px', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Estudio</strong>
      <span>NB Estudio Jurídico<br />Titular y fundadora</span>
    </div>

    <div style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>
      <strong style={{ color: 'var(--rose)', display: 'block', marginBottom: '6px', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Áreas de práctica</strong>
      <span>Jubilaciones y Pensiones<br />Reajustes de Haberes<br />Salud · Obras sociales y prepagas</span>
    </div>
  </aside>

  {/* ARTÍCULO */}
  <article style={{ lineHeight: '1.8', color: 'var(--ink)', fontSize: '0.95rem' }}>
    <p style={{ marginBottom: '20px' }}>
      <span style={{ fontFamily: 'var(--f-serif)', fontSize: '2.5rem', fontWeight: '400', float: 'left', marginRight: '8px', marginTop: '-4px', color: 'var(--rose)' }}>M</span>
      i vínculo con el derecho previsional y en salud no es casual. Empecé con mi abuela. Ella tuvo que litigar contra ANSES para poder percibir la pensión de mi abuelo, con quien había compartido toda su vida sin haberse casado y con quien tuvo tres hijos. La justicia terminó reconociendo ese vínculo, y con ese reconocimiento llegó algo que va más allá de lo económico: la dignidad de que se reconociera oficialmente la vida que habían construido juntos. Ese fue mi primer acercamiento al derecho previsional, mucho antes de elegir mi profesión.
    </p>

    <p style={{ marginBottom: '20px' }}>
      Años después, ya como abogada, llegó a mi estudio quien sería mi primera clienta. Nadie quería representarla porque el caso era muy complejo: contaba con dos denegatorias que parecían hacer imposible el acceso a su jubilación. Cuando analicé su expediente, encontré argumentos. Tomé la decisión de representarla. Ganamos en primera instancia, incluso ante <strong>el juez más recusado del fuero</strong>. En segunda instancia, la Cámara confirmó lo reclamado. Hoy es jubilada, y está feliz.
    </p>

    <p style={{ marginBottom: '28px' }}>
      Nunca voy a olvidarme de todo lo que viví junto a mi primera clienta.
    </p>

    <p style={{ marginBottom: '28px' }}>
      Esas dos historias —la de mi abuela y la de mi primera clienta— resumen por qué hago lo que hago: detrás de cada expediente hay una persona, y detrás de cada persona, una vida que merece ser reconocida.
    </p>

    <h4 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.2rem', marginBottom: '16px', marginTop: '32px', fontWeight: '400' }}>Por qué el derecho previsional</h4>

    <p style={{ marginBottom: '20px' }}>
      El derecho previsional es una rama muy específica del derecho. No alcanza con haber estudiado abogacía: hay que estudiar normativa que cambia constantemente, conocer la jurisprudencia actualizada, entender cómo funciona internamente ANSES, y manejar el cálculo previsional como una herramienta de trabajo.
    </p>

    <p style={{ marginBottom: '28px' }}>
      Pero, sobre todo, hay algo más profundo: el derecho previsional es <strong>el derecho de la última etapa de la vida laboral</strong>. Cuando alguien llega a mi estudio, normalmente trae años, a veces décadas, de trabajo a sus espaldas. Mi tarea no es solo legal: es traducir esos años de esfuerzo en un haber que respete su dignidad.
    </p>

    <blockquote style={{ borderLeft: '3px solid var(--rose)', paddingLeft: '20px', marginBottom: '28px', fontStyle: 'italic', color: 'var(--rose-deep)' }}>
      "El derecho previsional no es solo un trámite: es la última oportunidad que muchas personas tienen de vivir con dignidad. Cada expediente que armo es una historia de trabajo de toda una vida, y mi tarea es asegurarme de que esa historia tenga el final que merece."
    </blockquote>

    <h4 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.2rem', marginBottom: '16px', marginTop: '32px', fontWeight: '400' }}>La forma de trabajar</h4>

    <p style={{ marginBottom: '20px' }}>
      Mi forma de trabajar tiene tres pilares.
    </p>

    <p style={{ marginBottom: '20px' }}>
      <strong>Análisis previo honesto.</strong> Antes de iniciar cualquier reclamo o trámite, reviso el expediente y los recibos. Si veo que un caso no tiene viabilidad, lo digo. Si veo que sí la tiene, explico exactamente qué se puede esperar y qué no.
    </p>

    <p style={{ marginBottom: '20px' }}>
      <strong>Dedicación caso por caso.</strong> No trabajo con plantillas ni con expedientes en serie. Cada situación previsional es única, y cada estrategia se diseña a medida.
    </p>

    <p style={{ marginBottom: '28px' }}>
      <strong>Acompañamiento integral.</strong> Desde la primera consulta hasta el cobro del primer haber o la resolución del trámite, estoy presente. Mi cliente no queda nunca con dudas sobre en qué etapa está su caso.
    </p>

    <h4 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.2rem', marginBottom: '16px', marginTop: '32px', fontWeight: '400' }}>Hoy</h4>

    <p style={{ marginBottom: '20px' }}>
      Hoy, desde mi estudio en Bolívar 382 (CABA) y atendiendo también de manera virtual a personas de todo el país <strong>y desde el exterior</strong>, sigo trabajando en lo mismo que me apasionó desde el primer día: que cada persona que llega a mi estudio se vaya con respuestas claras, con un plan concreto, y con la certeza de que sus derechos están siendo defendidos por alguien que entiende profundamente lo que hace.
    </p>

    <p>
      Si necesitás asesoramiento previsional, <Link href="/contacto" style={{ color: 'var(--rose)', fontWeight: '500', textDecoration: 'none' }}>contactanos</Link>. El primer paso siempre es entender tu caso.
    </p>
  </article>

</section>
{/* CTA FINAL */}
      <section className="cta-banda">
        <h2>¿Tenés un <em>problema previsional</em>?</h2>
        <p>Cada caso es único. Contactanos y evaluamos en detalle qué te corresponde y cómo podemos ayudarte.</p>
        <Link href="/contacto" className="btn btn-outline-white">Contactanos →</Link>
      </section>
    </>
  );
}