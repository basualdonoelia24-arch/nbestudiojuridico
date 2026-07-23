'use client';

import Link from 'next/link';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    whatsapp: '',
    area: '',
    mensaje: '',
    consentimiento: false,
  });
  const [formMsg, setFormMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!formData.consentimiento) {
    setFormMsg('Debes aceptar la Política de Privacidad para continuar.');
    return;
  }

  const { error } = await supabase
    .from('contactos')
    .insert([formData]);
  
  if (error) {
    setFormMsg('Error: ' + error.message);
  } else {
    setFormMsg('✓ Consulta registrada. Te contactaremos en breve.');
    setFormData({ nombre: '', apellido: '', email: '', whatsapp: '', area: '', mensaje: '', consentimiento: false });
  }
};
 
  return (
    <>
    {/* HERO */}
      <section className="hero">
      <div className="container">
       <div className="hero-inner">
      <div className="breadcrumb" style={{ gap: '12px' }}>
        <Link href="/">Inicio</Link>
        <span className="sep">/</span>
        <span>Contacto</span>
      </div>
      <h1>Contanos tu <em>caso</em></h1>
      <p style={{ maxWidth: '550px', margin: '0 auto 30px' }}>
        Atendemos consultas de todo el país de manera virtual y también de forma presencial en nuestra oficina.
        Te respondemos en menos de 24 horas hábiles.
      </p>
      </div>
      </div>
     </section>

      {/* CONTACTO + DATOS */}
      <section className="contacto-section">
          <div className="contacto-grid">

            {/* FORMULARIO */}
            <div className="form-card fade-in">
              <h2>Formulario de consulta</h2>
              <p className="form-sub">
                Completá el formulario y te responderemos a la brevedad. <strong>Todos los campos con * son obligatorios.</strong>
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="fg">
                    <label htmlFor="nombre">Nombre *</label>
                    <input type="text" id="nombre" placeholder="Tu nombre" value={formData.nombre} onChange={handleChange} required />
                  </div>
                  <div className="fg">
                    <label htmlFor="apellido">Apellido *</label>
                    <input type="text" id="apellido" placeholder="Tu apellido" value={formData.apellido} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="fg">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" placeholder="tu@email.com" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="fg">
                    <label htmlFor="whatsapp">WhatsApp *</label>
                    <input type="tel" id="whatsapp" placeholder="+54 9 11 xxxx-xxxx" value={formData.whatsapp} onChange={handleChange} required />
                  </div>
                </div>

                <div className="fg">
                  <label htmlFor="area">¿Sobre qué tema querés consultar? *</label>
                  <select id="area" value={formData.area} onChange={handleChange} required>
                    <option value="" disabled>Seleccioná un área</option>
                    <option value="Jubilaciones y Pensiones">Jubilaciones y Pensiones</option>
                    <option value="Reajustes de Haberes">Reajustes de Haberes</option>
                    <option value="Salud · Obras sociales o Prepagas">Salud · Obras sociales o Prepagas</option>
                    <option value="Veteranos de Malvinas">Veteranos de Malvinas</option>
                    <option value="Otra consulta">Otra consulta</option>
                  </select>
                </div>

                <div className="fg">
                  <label htmlFor="mensaje">Contanos brevemente tu situación *</label>
                  <textarea id="mensaje" placeholder="Ej: Tengo 62 años, trabajé en relación de dependencia 25 años. Quiero saber cuándo puedo jubilarme..." value={formData.mensaje} onChange={handleChange} required></textarea>
                  <p className="help">Cuanto más claro nos cuentes, mejor podremos orientarte. Tu información es confidencial.</p>
                </div>

                <div className="consent-box">
                  <label className="consent-label">
                    <input type="checkbox" id="consentimiento" name="consentimiento" checked={formData.consentimiento} onChange={handleChange} required />
                    <span className="consent-text">
                      He leído y acepto la <Link href="/politica-de-privacidad" target="_blank" rel="noopener">Política de Privacidad</Link>. Autorizo a NB Estudio Jurídico al tratamiento de mis datos personales con la única finalidad de responder a mi consulta, conforme a la <strong>Ley 25.326 de Protección de Datos Personales</strong>. <span className="required-mark">*</span>
                    </span>
                  </label>
                </div>

                <p className="form-aviso-mini">
                  <span className="lock">🔒</span> Tus datos son confidenciales. No los compartimos con terceros.
                </p>

                <button type="submit" className="btn-enviar">Enviar consulta →</button>

                {formMsg && <div className="form-msg">{formMsg}</div>}
              </form>
            </div>

            {/* DATOS DE CONTACTO */}
            <aside className="contacto-datos">

              <a href="https://wa.me/5491178200546?text=Hola%2C%20quisiera%20hacer%20una%20consulta" className="dato-card wa-card">
                <div className="dato-icon">💬</div>
                <div className="dato-content">
                  <h3>WhatsApp</h3>
                  <div className="valor">+54 9 11 7820-0546</div>
                  <div className="extra">Respuesta más rápida durante el horario laboral.</div>
                  <span className="link">Escribir ahora →</span>
                </div>
              </a>

              <a href="tel:+5491178200546" className="dato-card">
                <div className="dato-icon">📞</div>
                <div className="dato-content">
                  <h3>Teléfono</h3>
                  <div className="valor">+54 9 11 7820-0546</div>
                  <div className="extra">Atención con turno previo.</div>
                </div>
              </a>

              <a href="mailto:contacto@nbestudiojuridico.com.ar" className="dato-card">
                <div className="dato-icon">✉</div>
                <div className="dato-content">
                  <h3>Email</h3>
                  <div className="valor">contacto@nbestudiojuridico.com.ar</div>
                  <div className="extra">Para consultas formales o envío de documentación.</div>
                </div>
              </a>

              <div className="dato-card">
                <div className="dato-icon">📍</div>
                <div className="dato-content">
                  <h3>Oficina</h3>
                  <div className="valor">Bolívar 382, Piso 6 Oficina 23 · CABA · CP 1066</div>
                  <div className="extra">Atención presencial con turno previo. Atendemos también de manera virtual a todo el país.</div>
                </div>
              </div>

              <div className="dato-card">
                <div className="dato-icon">⏰</div>
                <div className="dato-content">
                  <h3>Atención</h3>
                  <div className="valor">Lunes a viernes · 9 a 18 hs</div>
                  <div className="extra">Con turno previo. Coordinamos día y horario que te quede cómodo, virtual o presencial.</div>
                </div>
              </div>

            </aside>

          </div>
      </section>

      {/* MAPA */}
      <section className="mapa-section">
        <div className="container">
          <div className="section-header fade-in">
            <span className="tag-rosa">Cómo llegar</span>
            <h2>Nuestra <em>oficina</em></h2>
            <p className="subtitle">
              Atendemos consultas presenciales con turno previo. Si preferís consulta virtual, te atendemos desde cualquier punto del país.
            </p>
          </div>
          <div className="mapa-wrap">
            <iframe
              className="mapa-iframe"
              src="https://www.google.com/maps?q=Bol%C3%ADvar+382+CABA&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className="mapa-direccion-bloque">
              <div className="icon">📍</div>
              <div>
                <div className="titulo-direccion">Bolívar 382, Piso 6 Oficina 23 · CABA · CP 1066</div>
                <a href="https://maps.google.com/?q=Bolívar+382+CABA" target="_blank" rel="noopener" className="link-maps">Abrir en Google Maps →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}