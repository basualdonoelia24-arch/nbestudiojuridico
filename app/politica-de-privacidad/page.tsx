import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad | NB Estudio Jurídico',
  description: 'Política de Privacidad de NB Estudio Jurídico conforme a la Ley 25.326 de Protección de Datos Personales.',
};

export default function PoliticaPrivacidad() {
  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ minHeight: 'auto', padding: '80px 0' }}>
        <div className="container">
          <div className="hero-inner">
            <h1 style={{ textAlign: 'center' }}>Política de Privacidad</h1>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--rose)', fontWeight: '600', marginBottom: '20px' }}>Última actualización: 20 de junio de 2026</p>
            <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
              En NB Estudio Jurídico tu información personal está protegida. Esta política explica qué datos recopilamos, para qué los usamos y cuáles son tus derechos como titular de los datos, conforme a la <strong>Ley 25.326 de Protección de Datos Personales de la República Argentina</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 50px' }}>
        
        {/* ÍNDICE */}
        <nav style={{ marginBottom: '60px', padding: '30px', background: 'var(--mist)', borderRadius: '8px', borderLeft: '4px solid var(--rose)' }}>
          <h3 style={{ color: 'var(--navy)', marginBottom: '20px' }}>Contenido</h3>
          <ol style={{ columns: 2, gap: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <li><a href="#s1" style={{ color: 'var(--rose)', textDecoration: 'none' }}>Responsable del tratamiento</a></li>
            <li><a href="#s2" style={{ color: 'var(--rose)', textDecoration: 'none' }}>Marco legal</a></li>
            <li><a href="#s3" style={{ color: 'var(--rose)', textDecoration: 'none' }}>Datos que recopilamos</a></li>
            <li><a href="#s4" style={{ color: 'var(--rose)', textDecoration: 'none' }}>Finalidad del tratamiento</a></li>
            <li><a href="#s5" style={{ color: 'var(--rose)', textDecoration: 'none' }}>Quién tiene acceso a tus datos</a></li>
            <li><a href="#s6" style={{ color: 'var(--rose)', textDecoration: 'none' }}>Tratamiento de claves ANSES y AFIP</a></li>
            <li><a href="#s7" style={{ color: 'var(--rose)', textDecoration: 'none' }}>Tiempo de conservación</a></li>
            <li><a href="#s8" style={{ color: 'var(--rose)', textDecoration: 'none' }}>Tus derechos como titular</a></li>
            <li><a href="#s9" style={{ color: 'var(--rose)', textDecoration: 'none' }}>Medidas de seguridad</a></li>
            <li><a href="#s10" style={{ color: 'var(--rose)', textDecoration: 'none' }}>Cookies y tecnologías similares</a></li>
            <li><a href="#s11" style={{ color: 'var(--rose)', textDecoration: 'none' }}>Cambios en esta política</a></li>
            <li><a href="#s12" style={{ color: 'var(--rose)', textDecoration: 'none' }}>Jurisdicción y contacto</a></li>
          </ol>
        </nav>

        {/* SECCIONES */}
        <section id="s1" style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '16px' }}><span style={{ color: 'var(--rose)', fontWeight: 'bold' }}>1.</span> Responsable del tratamiento</h2>
          <p style={{ lineHeight: '1.7', marginBottom: '12px' }}>El responsable del tratamiento de tus datos personales es:</p>
          <p style={{ lineHeight: '1.7', marginBottom: '12px', fontWeight: '500' }}>
            Dra. Noelia Basualdo<br />
            NB Estudio Jurídico<br />
            Domicilio profesional: Bolívar 382, piso 6, oficina 23, Ciudad Autónoma de Buenos Aires, Argentina.
          </p>
          <p style={{ lineHeight: '1.7' }}>Para cualquier consulta sobre el tratamiento de tus datos, podés contactarnos por los medios indicados en la <a href="#s12" style={{ color: 'var(--rose)', textDecoration: 'none', fontWeight: '600' }}>sección 12</a> de esta política.</p>
        </section>

        <section id="s2" style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '16px' }}><span style={{ color: 'var(--rose)', fontWeight: 'bold' }}>2.</span> Marco legal</h2>
          <p style={{ lineHeight: '1.7', marginBottom: '12px' }}>Esta Política de Privacidad se rige por la <strong>Ley 25.326 de Protección de Datos Personales</strong> de la República Argentina, su Decreto Reglamentario 1558/2001, las resoluciones de la <strong>Agencia de Acceso a la Información Pública (AAIP)</strong> y demás normativa complementaria vigente.</p>
          <p style={{ lineHeight: '1.7' }}>Si la AAIP emite nueva normativa que modifique el tratamiento de datos personales, esta política será actualizada para reflejar esos cambios.</p>
        </section>

        <section id="s3" style={{ marginBottom: '50px' }}>
         <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '16px' }}><span style={{ color: 'var(--rose)', fontWeight: 'bold' }}>3.</span> Datos que recopilamos</h2>
          <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>En NB Estudio Jurídico recopilamos los siguientes datos según el momento de la relación:</p>
  
          <h4 style={{ color: 'var(--navy)', marginBottom: '12px', fontWeight: '600' }}>Al completar el formulario de contacto o reserva de turno</h4>
          <ul style={{ marginLeft: '24px', marginBottom: '20px', lineHeight: '1.8', listStyle: 'disc' }}>
            <li>Nombre y apellido</li>
            <li>Correo electrónico</li>
            <li>Teléfono o WhatsApp</li>
            <li>Motivo de consulta (jubilación, reajuste, salud, etc.)</li>
            <li>Información que decidas compartir voluntariamente en el campo de mensaje</li>
             </ul>

  <h4 style={{ color: 'var(--navy)', marginBottom: '12px', fontWeight: '600' }}>Cuando contratás nuestros servicios</h4>
  <ul style={{ marginLeft: '24px', marginBottom: '20px', lineHeight: '1.8', listStyle: 'disc' }}>
    <li>Datos de identidad: DNI, fecha de nacimiento, estado civil</li>
    <li>Datos previsionales: CUIL, historia laboral, aportes, beneficios actuales</li>
    <li>Datos médicos (cuando el caso lo requiere): certificados, diagnósticos, prescripciones</li>
    <li>Documentación específica del caso: poder, partidas, recibos, etc.</li>
    <li>En casos de jubilación o reajuste: <strong>credenciales de acceso a ANSES y/o AFIP</strong> (ver <a href="#s6" style={{ color: 'var(--rose)' }}>sección 6</a>)</li>
  </ul>

      <div style={{ padding: '16px', background: 'var(--rose-soft)', borderLeft: '4px solid var(--rose)', marginBottom: '20px', lineHeight: '1.7' }}>
       <strong style={{ color: 'var(--navy)' }}>Datos sensibles:</strong> los datos médicos son considerados sensibles bajo la Ley 25.326. Solo los recopilamos cuando son indispensables para tu caso (por ejemplo, amparos de salud) y siempre con tu consentimiento expreso.
         </div>

           <h4 style={{ color: 'var(--navy)', marginBottom: '12px', fontWeight: '600' }}>Datos de menores de edad</h4>
             <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>Cuando un caso involucra a personas menores de edad (por ejemplo, amparos de salud para hijos, pensiones derivadas, beneficios por hijos a cargo), recopilamos los datos del menor a través de sus padres, tutores o representantes legales, quienes brindan el consentimiento en su nombre. Tratamos esos datos con el mismo nivel de protección y confidencialidad, y los utilizamos exclusivamente para el caso específico.</p>

         <h4 style={{ color: 'var(--navy)', marginBottom: '12px', fontWeight: '600' }}>Documentación escaneada o fotografiada</h4>
          <p style={{ lineHeight: '1.7' }}>En el transcurso del caso recibimos documentación que vos nos enviás de forma digital: fotografías o escaneos de DNI, recibos de prepaga u obra social, prescripciones médicas, estudios, partidas, poderes y demás documentación que sea necesaria. Esta información se trata con los mismos cuidados que la documentación física y se almacena con las medidas de seguridad descriptas en la <a href="#s9" style={{ color: 'var(--rose)' }}>sección 9</a>.</p>
          </section>

        <section id="s4" style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '16px' }}><span style={{ color: 'var(--rose)', fontWeight: 'bold' }}>4.</span> Finalidad del tratamiento</h2>
          <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>Tratamos tus datos exclusivamente para:</p>
          <ul style={{ marginLeft: '24px', lineHeight: '1.8', listStyle: 'disc' }}>
            <li>Responder a consultas iniciales y agendar entrevistas</li>
            <li>Prestar los servicios jurídicos profesionales que nos contrataste</li>
            <li>Gestionar trámites administrativos y judiciales en tu nombre (ANSES, juzgados, obras sociales, prepagas)</li>
            <li>Calcular haberes previsionales, reajustes y montos correspondientes</li>
            <li>Mantenerte informado/a del estado de tu caso</li>
            <li>Emitir facturación correspondiente a los honorarios profesionales</li>
            <li>Cumplir con obligaciones legales y tributarias del estudio</li>
          </ul>
          <div style={{ padding: '16px', background: 'var(--rose-soft)', borderLeft: '4px solid var(--rose)', marginTop: '20px', lineHeight: '1.7' }}>
            <strong style={{ color: 'var(--navy)' }}>Lo que NO hacemos con tus datos:</strong> No vendemos, cedemos, transferimos ni compartimos tu información con terceros para fines comerciales, publicitarios o de marketing. No realizamos perfilamiento automático. No utilizamos tus datos para crear perfiles de riesgo crediticio.
          </div>
        </section>

        <section id="s5" style={{ marginBottom: '50px' }}>
         <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '16px' }}><span style={{ color: 'var(--rose)', fontWeight: 'bold' }}>5.</span> Quién tiene acceso a tus datos</h2>
          <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>El acceso a tus datos está limitado a las personas que estrictamente lo necesitan para prestar los servicios:</p>
          <ul style={{ marginLeft: '24px', marginBottom: '20px', lineHeight: '1.8', listStyle: 'disc' }}>
          <li><strong>Dra. Noelia Basualdo</strong> — Titular del estudio, con acceso completo en su calidad de profesional responsable.</li>
          <li><strong>Personal administrativo y abogados del estudio</strong> — Acceso limitado a las funciones que requiera cada caso (carga de documentación, coordinación de turnos, gestión de trámites, análisis técnico-jurídico). Tanto el personal administrativo como los abogados colaboradores del estudio están obligados por el secreto profesional bajo acuerdo de confidencialidad.</li>
          <li><strong>Abogados externos o sustitutos</strong> — En casos que requieran intervención de profesionales especializados en otras jurisdicciones, fueros o materias complementarias, su acceso queda limitado exclusivamente a la información necesaria para el caso, bajo obligación de confidencialidad y secreto profesional.</li>
          </ul>

         <h4 style={{ color: 'var(--navy)', marginBottom: '12px', fontWeight: '600' }}>Cuándo podemos compartir tus datos con terceros</h4>
           <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>Solo cuando es necesario para prestar el servicio contratado:</p>
            <ul style={{ marginLeft: '24px', lineHeight: '1.8', listStyle: 'disc' }}>
           <li><strong>Organismos públicos:</strong> ANSES, AFIP, IPS, ministerios, en el marco de los trámites que gestionemos en tu nombre.</li>
           <li><strong>Tribunales:</strong> presentación de escritos, demandas, prueba documental.</li>
          <li><strong>Profesionales auxiliares:</strong> peritos contables, calígrafos, traductores públicos cuando un caso los requiera.</li>
           <li><strong>Obras sociales y prepagas:</strong> en gestiones de cobertura, autorizaciones, amparos.</li>
           <li><strong>Autoridades judiciales o administrativas:</strong> cuando exista requerimiento legal expreso.</li>
           </ul>
          </section>

        <section id="s6" style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '16px' }}><span style={{ color: 'var(--rose)', fontWeight: 'bold' }}>6.</span> Tratamiento de claves ANSES y AFIP</h2>
          <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>En algunos casos previsionales necesitamos acceder a tu información en los sistemas de ANSES o AFIP para consultar tu historia laboral, aportes y beneficios. Esto puede requerir el uso temporal de tus credenciales de acceso.</p>
  
            <div style={{ padding: '16px', background: 'var(--rose-soft)', borderLeft: '4px solid var(--rose)', marginBottom: '20px', lineHeight: '1.7' }}>
              <strong style={{ color: 'var(--navy)' }}>Consentimiento expreso adicional:</strong> el uso de tus credenciales requiere un consentimiento específico, separado del consentimiento general de esta política. Sin tu autorización expresa, no accedemos a tus sistemas con tus claves.
               </div>

             <h4 style={{ color: 'var(--navy)', marginBottom: '12px', fontWeight: '600' }}>Cómo manejamos tus credenciales</h4>
             <ul style={{ marginLeft: '24px', marginBottom: '20px', lineHeight: '1.8', listStyle: 'disc' }}>
             <li>Las usamos <strong>exclusivamente</strong> para los trámites de tu caso</li>
             <li>No las compartimos con personas ajenas al estudio</li>
             <li>No las usamos para fines distintos a los acordados con vos</li>
              <li><strong>Conservación:</strong> guardamos tus credenciales mientras tu caso esté activo, ya que muchos clientes nos solicitan recordarlas posteriormente (cuando las olvidan o necesitan acceder con nuestra asistencia). Las almacenamos con medidas de seguridad acordes a su sensibilidad.</li>
              <li>Si en algún momento querés que eliminemos tus credenciales de nuestros registros, podés solicitarlo expresamente y procedemos a su eliminación segura</li>
              <li>También podés revocar nuestro acceso cambiando vos directamente las claves y avisándonos</li>
              </ul>

              <p style={{ lineHeight: '1.7' }}>Cuando sea posible, priorizamos métodos que no requieran tus credenciales (poderes especiales ante ANSES, autorizaciones formales, etc.).</p>
              </section>

        <section id="s7" style={{ marginBottom: '50px' }}>
            <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '16px' }}><span style={{ color: 'var(--rose)', fontWeight: 'bold' }}>7.</span> Tiempo de conservación</h2>
              <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>Conservamos tus datos según el tipo y la finalidad:</p>
              <ul style={{ marginLeft: '24px', marginBottom: '20px', lineHeight: '1.8', listStyle: 'disc' }}>
              <li><strong>Consultas iniciales no contratadas:</strong> hasta 12 meses, luego se eliminan automáticamente.</li>
              <li><strong>Casos contratados:</strong> durante toda la prestación del servicio y por el plazo legal posterior aplicable a la profesión (10 años desde la finalización del caso, por exigencias del Colegio de Abogados y la Ley de Honorarios).</li>
             <li><strong>Documentación contable y tributaria:</strong> por el plazo exigido por AFIP (10 años).</li>
          <li><strong>Credenciales ANSES/AFIP:</strong> mientras el cliente las requiera para gestiones futuras del estudio. Se eliminan si el cliente lo solicita expresamente o si finaliza la relación profesional sin previsión de nuevos trámites.</li>
            </ul>
          <p style={{ lineHeight: '1.7' }}>Una vez vencidos los plazos legales, tus datos son eliminados de manera segura.</p>
        </section>

       <section id="s8" style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '16px' }}><span style={{ color: 'var(--rose)', fontWeight: 'bold' }}>8.</span> Tus derechos como titular</h2>
          <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>Como titular de los datos, la Ley 25.326 te garantiza los siguientes derechos:</p>
          <ul style={{ marginLeft: '24px', marginBottom: '20px', lineHeight: '1.8', listStyle: 'disc' }}>
          <li><strong>Acceso:</strong> podés solicitar saber qué datos tuyos tenemos y cómo los tratamos.</li>
          <li><strong>Rectificación:</strong> si algún dato es incorrecto o está desactualizado, podés pedir su corrección.</li>
          <li><strong>Actualización:</strong> podés solicitar la incorporación de datos nuevos.</li>
          <li><strong>Supresión:</strong> podés solicitar la eliminación de tus datos cuando ya no sean necesarios para los fines para los que fueron recopilados (con las limitaciones legales del punto 7).</li>
          <li><strong>Oposición:</strong> podés oponerte al tratamiento por motivos legítimos.</li>
            <li><strong>Revocación del consentimiento:</strong> podés retirar tu consentimiento en cualquier momento, sin afectar la legalidad del tratamiento anterior.</li>
           <li><strong>Portabilidad:</strong> conforme las resoluciones recientes de la AAIP, podés solicitar que te entreguemos tus datos personales en un formato estructurado y de uso común, para que puedas transmitirlos a otro responsable si así lo deseás.</li>
         </ul>

          <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>Para ejercer estos derechos, contactanos por los medios indicados en la <a href="#s12" style={{ color: 'var(--rose)' }}>sección 12</a>. La respuesta se brinda dentro de los 10 días corridos.</p>

          <div style={{ padding: '16px', background: 'var(--rose-soft)', borderLeft: '4px solid var(--rose)', lineHeight: '1.7' }}>
          <strong style={{ color: 'var(--navy)' }}>Reclamo ante la autoridad de aplicación:</strong> si considerás que tus derechos no fueron respetados, podés presentar un reclamo ante la <strong>Agencia de Acceso a la Información Pública (AAIP)</strong>, organismo de control de la Ley 25.326. Más información en <a href="https://www.argentina.gob.ar/aaip" style={{ color: 'var(--rose)', textDecoration: 'none', fontWeight: '600' }} target="_blank" rel="noopener">argentina.gob.ar/aaip</a>.
          </div>
          </section>

        <section id="s9" style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '16px' }}><span style={{ color: 'var(--rose)', fontWeight: 'bold' }}>9.</span> Medidas de seguridad</h2>
          <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>Adoptamos medidas técnicas y organizativas razonables para proteger tus datos:</p>
          <ul style={{ marginLeft: '24px', marginBottom: '20px', lineHeight: '1.8', listStyle: 'disc' }}>
           <li><strong>Almacenamiento cifrado:</strong> los archivos digitales se guardan en servicios con cifrado en tránsito y en reposo.</li>
           <li><strong>Autenticación reforzada del personal del estudio:</strong> el acceso al sistema interno donde se gestionan los expedientes está protegido por autenticación de dos factores. Cada profesional autorizado (Dra. Noelia Basualdo, personal administrativo y abogados del estudio) accede con credenciales personales más un código de un solo uso que se envía por email o mensaje al profesional.</li>
           <li><strong>Acceso restringido:</strong> cada profesional del estudio tiene credenciales personales e intransferibles. No existe un usuario "compartido".</li>
          <li><strong>Documentación física resguardada:</strong> los expedientes físicos se conservan en la oficina con acceso controlado.</li>
          <li><strong>Capacitación y compromiso del personal:</strong> todo el equipo recibe formación sobre obligaciones de confidencialidad y secreto profesional, y firma acuerdos de confidencialidad antes de acceder a información de clientes.</li>
             <li><strong>Eliminación segura:</strong> documentación digital y física se elimina de forma segura al cumplir el plazo de conservación o ante tu solicitud expresa.</li>
             <li><strong>Notificación de incidentes:</strong> comunicamos cualquier incidente de seguridad relevante a los afectados y a la AAIP, conforme la normativa.</li>
            </ul>
           <p style={{ lineHeight: '1.7' }}>Aunque adoptamos buenas prácticas, ningún sistema es 100% inviolable. Si detectás un incidente o una situación de riesgo, comunicate inmediatamente con nosotros.</p>
           </section>

        <section id="s10" style={{ marginBottom: '50px' }}>
            <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '16px' }}><span style={{ color: 'var(--rose)', fontWeight: 'bold' }}>10.</span> Cookies y tecnologías similares</h2>
            <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>Este sitio web utiliza cookies y tecnologías similares para su funcionamiento básico, para mejorar tu experiencia de navegación y para analizar el uso del sitio.</p>
  
            <h4 style={{ color: 'var(--navy)', marginBottom: '12px', fontWeight: '600' }}>Tipos de cookies que utilizamos</h4>
           <ul style={{ marginLeft: '24px', marginBottom: '20px', lineHeight: '1.8', listStyle: 'disc' }}>
           <li><strong>Cookies técnicas (necesarias):</strong> indispensables para el funcionamiento del sitio. Mantienen sesiones activas, recuerdan preferencias y permiten que el sitio funcione correctamente. No requieren consentimiento.</li>
            <li><strong>Cookies analíticas (Google Analytics y Google Tag Manager):</strong> nos permiten entender cómo se usa el sitio (qué páginas se visitan más, de dónde vienen los visitantes, cuánto tiempo permanecen). Los datos se procesan de forma agregada y anónima.</li>
            <li><strong>Cookies de marketing (Meta Pixel):</strong> si llegaste a este sitio desde un anuncio en Instagram o Facebook, esta cookie permite medir la efectividad de la publicidad. Podés bloquearla desde tu navegador o desde la configuración de Meta.</li>
            <li><strong>Cookies de mapas de calor (Hotjar):</strong> registran de forma anónima en qué partes de la página hacen click los usuarios, para ayudarnos a mejorar la usabilidad. No identifican a usuarios individuales.</li>
             <li><strong>Cookies de procesamiento de pagos (MercadoPago):</strong> cuando reservás un turno y pagás online, MercadoPago utiliza sus propias cookies para procesar la transacción de manera segura. Esto está regido por la <a href="https://www.mercadopago.com.ar/privacidad" style={{ color: 'var(--rose)', textDecoration: 'none', fontWeight: '600' }} target="_blank" rel="noopener">Política de Privacidad de MercadoPago</a>.</li>
                   </ul>
  
             <h4 style={{ color: 'var(--navy)', marginBottom: '12px', fontWeight: '600' }}>Tu control sobre las cookies</h4>
             <p style={{ lineHeight: '1.7', marginBottom: '12px' }}>Podés aceptar, rechazar o configurar las cookies que aceptás desde tu navegador. Te informamos que rechazar cookies analíticas y de marketing no afecta el funcionamiento básico del sitio. Las cookies técnicas son necesarias para la navegación y no pueden desactivarse.</p>
             <p style={{ lineHeight: '1.7' }}>Para más información sobre cómo controlar cookies, consultá la documentación de tu navegador (Chrome, Firefox, Safari, Edge).</p>
             </section>

        <section id="s11" style={{ marginBottom: '50px' }}>
         <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '16px' }}><span style={{ color: 'var(--rose)', fontWeight: 'bold' }}>11.</span> Cambios en esta política</h2>
         <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>Esta Política de Privacidad puede actualizarse para reflejar cambios legales, mejoras en nuestros procesos o nuevas prácticas. Cuando se realicen cambios sustanciales:</p>
         <ul style={{ marginLeft: '24px', marginBottom: '20px', lineHeight: '1.8', listStyle: 'disc' }}>
         <li>Actualizaremos la fecha de "Última actualización" al inicio del documento.</li>
          <li>Comunicaremos los cambios relevantes por los canales habituales (sitio web, email si corresponde).</li>
          <li>Si los cambios afectan derechos sustanciales, solicitaremos tu consentimiento renovado.</li>
          </ul>
          <p style={{ lineHeight: '1.7' }}>Te recomendamos revisar esta política periódicamente.</p>
          </section>

        <section id="s12" style={{ marginBottom: '50px' }}>
           <div style={{ padding: '40px', background: 'var(--navy)', color: 'white', borderRadius: '8px' }}>
           <h2 style={{ fontFamily: 'var(--f-serif)', fontSize: '1.6rem', color: 'white', marginBottom: '20px' }}><span style={{ color: 'var(--rose)', fontWeight: 'bold' }}>12.</span> Jurisdicción y contacto</h2>
    
           <p style={{ lineHeight: '1.7', marginBottom: '24px' }}>Esta Política se rige por la legislación de la <strong>República Argentina</strong>. Cualquier controversia derivada de esta política o del tratamiento de datos personales se somete a los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires.</p>
    
          <p style={{ lineHeight: '1.7', marginBottom: '20px', fontWeight: '600' }}>Para consultas sobre esta política o sobre tus datos:</p>
    
          <div style={{ marginBottom: '24px', lineHeight: '2' }}>
           <p style={{ marginBottom: '12px' }}>
           <span style={{ color: 'var(--rose)', fontWeight: '600' }}>📧 Email:</span>
           <span style={{ color: 'white' }}>contacto@nbestudiojuridico.com.ar</span>
            </p>
            <p style={{ marginBottom: '12px' }}>
           <span style={{ color: 'var(--rose)', fontWeight: '600' }}>📍 Dirección:</span>
            <span style={{ color: 'white' }}>Bolívar 382, piso 6, oficina 23, CABA, Argentina</span>
             </p>
             <p>
            <span style={{ color: 'var(--rose)', fontWeight: '600' }}>📞 Teléfono:</span>
              <span style={{ color: 'white' }}>+54 9 11 7820-0546</span>
              </p>
             </div>
    
             <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px', marginTop: '20px', fontSize: '0.9rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }}>
      Cada caso es único. Nuestra estrategia también. Porque detrás de cada expediente hay una persona.
    </div>
  </div>
</section>
          <p style={{ lineHeight: '1.7', color: 'var(--gray-text)', fontSize: '0.9rem', fontStyle: 'italic' }}>© 2026 NB Estudio Jurídico. Todos los derechos reservados.</p>
        </section>
        
    </>
  );
}