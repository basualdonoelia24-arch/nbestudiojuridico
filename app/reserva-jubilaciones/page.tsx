'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ReservaJubilaciones() {
  const [cuponMsg, setCuponMsg] = useState('');
  const [cuponClass, setCuponClass] = useState('');
  const [horarios, setHorarios] = useState<string[]>([]);
  const [horariosDisabled, setHorariosDisabled] = useState(true);

  useEffect(() => {
    // Fade-in observer
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

    // Configurar fecha del turno
    const inputFecha = document.getElementById('fechaTurno') as HTMLInputElement;
    const selectHora = document.getElementById('horaTurno') as HTMLSelectElement;
    
    if (inputFecha && selectHora) {
      const HORARIOS_BASE: Record<number, { inicio: string; fin: string }> = {
        1: { inicio: '09:00', fin: '13:00' },
        2: { inicio: '15:00', fin: '19:00' },
        3: { inicio: '09:00', fin: '13:00' },
        4: { inicio: '15:00', fin: '19:00' },
        5: { inicio: '09:00', fin: '13:00' },
      };
      const DURACION_TURNO_MIN = 30;

      function generarSlots(inicio: string, fin: string): string[] {
        const [hI, mI] = inicio.split(':').map(Number);
        const [hF, mF] = fin.split(':').map(Number);
        const slots = [];
        let total = hI * 60 + mI;
        const totalFin = hF * 60 + mF;
        while (total + DURACION_TURNO_MIN <= totalFin) {
          const fmt = (mins: number) => {
            const h = String(Math.floor(mins / 60)).padStart(2, '0');
            const m = String(mins % 60).padStart(2, '0');
            return `${h}:${m}`;
          };
          slots.push(`${fmt(total)} - ${fmt(total + DURACION_TURNO_MIN)}`);
          total += DURACION_TURNO_MIN;
        }
        return slots;
      }

      const hoy = new Date();
      const manana = new Date(hoy);
      manana.setDate(hoy.getDate() + 1);
      const limite = new Date(hoy);
      limite.setDate(hoy.getDate() + 60);
      const fmt = (d: Date) => d.toISOString().split('T')[0];
      inputFecha.min = fmt(manana);
      inputFecha.max = fmt(limite);

      inputFecha.addEventListener('change', function() {
        selectHora.innerHTML = '';
        setHorariosDisabled(true);

        if (!this.value) {
          selectHora.innerHTML = '<option value="" disabled selected>Primero elegí una fecha</option>';
          return;
        }

        const [a, m, d] = this.value.split('-').map(Number);
        const elegida = new Date(a, m - 1, d);
        const dia = elegida.getDay();

        if (dia === 0 || dia === 6) {
          alert('Atendemos de lunes a viernes. Por favor elegí un día hábil.');
          this.value = '';
          selectHora.innerHTML = '<option value="" disabled selected>Primero elegí una fecha</option>';
          return;
        }

        const horario = HORARIOS_BASE[dia];
        if (!horario) {
          selectHora.innerHTML = '<option value="" disabled selected>Sin atención este día</option>';
          return;
        }

        const slots = generarSlots(horario.inicio, horario.fin);
        const optDefault = document.createElement('option');
        optDefault.value = '';
        optDefault.disabled = true;
        optDefault.selected = true;
        optDefault.textContent = 'Elegí un horario';
        selectHora.appendChild(optDefault);

        slots.forEach(s => {
          const opt = document.createElement('option');
          opt.value = s;
          opt.textContent = s;
          selectHora.appendChild(opt);
        });
        setHorariosDisabled(false);
      });
    }
  }, []);

  const aplicarCupon = () => {
    const input = document.getElementById('cuponInput') as HTMLInputElement;
    const cupon = input.value.trim().toUpperCase();
    const cuponesValidos: Record<string, string> = {
      'NB100': '100% de descuento — Consulta bonificada',
      'NB50': '50% de descuento aplicado',
      'JUBILA25': '25% de descuento aplicado'
    };
    setCuponMsg('');
    setCuponClass('');
    if (cupon === '') return;
    if (cuponesValidos[cupon]) {
      setCuponMsg('✓ ' + cuponesValidos[cupon]);
      setCuponClass('show ok');
    } else {
      setCuponMsg('✗ El código ingresado no es válido o ha expirado.');
      setCuponClass('show error');
    }
  };

  const handleTurno = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Entrevista reservada! Recibirás un email con todos los datos y el link de la videollamada.');
    (e.target as HTMLFormElement).reset();
    setCuponMsg('');
    setCuponClass('');
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --navy:        #1B3A5C;
          --navy-dark:   #0e1f33;
          --navy-deeper: #060d1a;
          --rose:        #C8846A;
          --rose-hover:  #b5705a;
          --cream:       #faf7f5;
          --mist:        #f0ebe6;
          --ink:         #0e1f33;
          --white:       #ffffff;
          --f-display: 'Bebas Neue', sans-serif;
          --f-serif:   'DM Serif Display', serif;
          --f-body:    'DM Sans', sans-serif;
          --f-logo:    'Cormorant Garamond', serif;
          --f-logo-sub:'Inter', sans-serif;
          --nav-h: 76px;
          --radius: 3px;
          --t: 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        html { scroll-behavior: smooth; }
        body { font-family: var(--f-body); background: var(--cream); color: var(--ink); overflow-x: hidden; }

        .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
        .fade-in-delay-1 { transition-delay: 0.15s; }
        .fade-in-delay-2 { transition-delay: 0.30s; }
        .fade-in-delay-3 { transition-delay: 0.45s; }

        a { color: inherit; text-decoration: none; }
        ul { list-style: none; }

        .container { width: 90%; max-width: 1280px; margin-inline: auto; }
        .tag { display:inline-block; font-family:var(--f-body); font-size:0.63rem; font-weight:500; letter-spacing:0.18em; text-transform:uppercase; border:1px solid currentColor; padding:4px 14px; border-radius:999px; }
        .btn { display:inline-flex; align-items:center; gap:8px; font-family:var(--f-body); font-size:0.78rem; font-weight:500; letter-spacing:0.12em; text-transform:uppercase; padding:14px 28px; border-radius:var(--radius); cursor:pointer; border:none; transition:var(--t); text-decoration:none; }
        .btn-rose { background:var(--rose); color:var(--white); box-shadow: 0 4px 12px rgba(200,132,106,0.25); }
        .btn-rose:hover { background:var(--rose-hover); transform: translateY(-2px); box-shadow: 0 10px 22px rgba(200,132,106,0.40); }
        .btn-rose:active { transform: translateY(0); }

        .page-hero { padding-top: calc(var(--nav-h) + 50px); padding-bottom: clamp(48px, 6vw, 88px); padding-inline: 5%; background:var(--cream); position:relative; overflow:hidden; }
        .page-hero::before { content:'JUBILACIÓN'; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-family:var(--f-display); font-size:24vw; color:rgba(27,58,92,0.025); letter-spacing:0.08em; pointer-events:none; user-select:none; white-space:nowrap; z-index:0; }
        .page-hero-inner { position:relative; z-index:2; max-width:1280px; margin:0 auto; display:grid; grid-template-columns:0.85fr 1.2fr; gap:clamp(40px,5vw,80px); align-items:center; }
        .page-hero-content { text-align:left; }
        .breadcrumb { display:flex; align-items:center; gap:8px; margin-bottom:24px; font-size:0.7rem; letter-spacing:0.18em; text-transform:uppercase; color:#6a7a8a; }
        .breadcrumb a { color:var(--rose); }
        .breadcrumb a:hover { color:var(--navy); }
        .breadcrumb .sep { opacity:0.4; }
        .area-tag { display:inline-block; padding:8px 22px; background:var(--navy); color:var(--rose); font-family:var(--f-body); font-size:0.7rem; letter-spacing:0.22em; text-transform:uppercase; font-weight:600; border-radius:999px; margin-bottom:24px; }
        .page-hero h1 { font-family:var(--f-display); font-size:clamp(2.8rem,5.8vw,5.8rem); line-height:0.92; letter-spacing:0.02em; color:var(--navy); margin-bottom:16px; }
        .page-hero h1 em { font-family:var(--f-serif); font-style:italic; color:var(--rose); }
        .page-hero-sub { font-family:var(--f-serif); font-style:italic; font-size:clamp(1.1rem,1.6vw,1.4rem); color:var(--rose); margin-bottom:18px; line-height:1.4; }
        .page-hero p.intro { font-size:1.02rem; line-height:1.75; color:#4a5a6a; max-width:54ch; margin-bottom:0; }
        .page-hero p.intro strong { color:var(--navy); }

        .hero-foto { position:relative; width:100%; max-width:380px; aspect-ratio:1/1; margin:0 auto; border-radius:50%; overflow:hidden; box-shadow:0 30px 70px rgba(27,58,92,0.22); border:5px solid var(--white); outline:1.5px solid var(--rose); outline-offset:7px; }
        .hero-foto img { width:100%; height:100%; object-fit:cover; object-position:center 22%; display:block; }
        .hero-foto-wrap { position:relative; padding:18px; }

        .paso1 { padding: clamp(60px, 8vw, 100px) 5%; background: var(--cream); position: relative; overflow: hidden; }
        .paso1::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 1px; background: linear-gradient(90deg, transparent, var(--rose), transparent); opacity: 0.4; }
        .paso-inner { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: clamp(40px, 5vw, 80px); align-items: center; }
        .paso-info .paso-numero-grande { font-family: var(--f-display); font-size: clamp(4rem, 10vw, 10rem); font-weight: 700; color: var(--rose); line-height: 0.9; margin-bottom: 20px; }
        .paso-label { display: inline-block; font-family: var(--f-body); font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--rose); font-weight: 600; margin-bottom: 12px; }
        .paso-info h2 { font-family: var(--f-display); font-size: clamp(2.2rem, 5vw, 4rem); line-height: 1; color: var(--navy); margin-bottom: 24px; letter-spacing: 0.01em; }
        .paso-info h2 em { font-family: var(--f-serif); font-style: italic; color: var(--rose); }
        .paso-info > p { font-size: 1.05rem; line-height: 1.75; color: #4a5a6a; margin-bottom: 24px; max-width: 52ch; }
        .paso-info > p strong { color: var(--navy); }

        .precio-card { padding: 40px; background: var(--mist); border: 1px solid rgba(200, 132, 106, 0.2); border-radius: 8px; text-align: center; position: relative; }
        .precio-card h3 { font-family: var(--f-display); font-size: clamp(1.4rem, 3vw, 2.2rem); color: var(--navy); margin-bottom: 20px; line-height: 1.2; }
        .precio-card .precio-monto { font-family: var(--f-display); font-size: clamp(3rem, 8vw, 5rem); color: var(--rose); font-weight: 700; line-height: 1; margin-bottom: 12px; }
        .precio-card .precio-monto small { display: block; font-size: 0.35em; color: var(--navy); font-weight: 400; }
        .precio-detalle { font-size: 0.85rem; color: #6b6b6b; margin-top: 16px; line-height: 1.6; }
        .btn-ir-formulario { margin-top: 28px; display: inline-block; }

        .paso2 { padding: clamp(60px, 8vw, 100px) 5%; background: var(--navy-dark); position: relative; overflow: hidden; }
        .paso2::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 1px; background: linear-gradient(90deg, transparent, var(--rose), transparent); opacity: 0.4; }
        .paso2-inner { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: clamp(40px, 5vw, 80px); align-items: flex-start; }
        .paso2-info { padding-top: 20px; }
        .paso2-info .paso-numero-grande { font-family: var(--f-display); font-size: clamp(4rem, 10vw, 10rem); font-weight: 700; color: var(--rose); line-height: 0.9; margin-bottom: 20px; }
        .paso2-info .paso-label { color: var(--cream); }
        .paso2-info h2 { color: var(--cream); }
        .paso2-info > p { font-size: 1.05rem; line-height: 1.75; color: rgba(250, 247, 245, 0.8); margin-bottom: 24px; max-width: 52ch; }
        .paso2-info > p strong { color: var(--rose); }

        .mail-aviso { margin-top: 32px; padding: 24px; background: rgba(200, 132, 106, 0.12); border: 1px solid rgba(200, 132, 106, 0.3); border-left: 4px solid var(--rose); border-radius: 6px; }
        .mail-titulo { font-weight: 600; color: var(--cream); font-size: 1rem; margin-bottom: 12px; }
        .mail-aviso p { font-size: 0.95rem; color: rgba(250, 247, 245, 0.8); line-height: 1.6; }

        .form-card { padding: 40px; background: var(--white); border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 8px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08); }
        .form-titulo-wrap { margin-bottom: 30px; }
        .form-titulo { display: block; font-family: var(--f-display); font-size: 1.3rem; letter-spacing: 0.08em; color: var(--navy); font-weight: 700; margin-bottom: 8px; }
        .form-sub-mini { display: block; font-size: 0.75rem; color: #6b6b6b; letter-spacing: 0.12em; text-transform: uppercase; }

        .t-form { display: flex; flex-direction: column; gap: 20px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .fg { display: flex; flex-direction: column; }
        .fg label { font-size: 0.85rem; font-weight: 600; color: var(--navy); margin-bottom: 8px; letter-spacing: 0.04em; }
        .fg input, .fg textarea, .fg select { padding: 14px 16px; border: 1.5px solid var(--rose); border-radius: 4px; font-family: var(--f-body); font-size: 0.95rem; color: var(--navy); background: rgba(200, 132, 106, 0.08); transition: border-color 0.3s; }
        .fg input:focus, .fg textarea:focus, .fg select:focus { outline: none; border-color: var(--rose); background: rgba(200, 132, 106, 0.12); }
        .fg textarea { min-height: 100px; resize: vertical; }

        .cupon-row { display: flex; gap: 12px; align-items: flex-end; }
        .cupon-row .fg { flex: 1; }
        .cupon-row button { padding: 14px 28px; background: var(--rose); color: var(--white); border: none; border-radius: 4px; font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: background 0.3s; }
        .cupon-row button:hover { background: var(--rose-hover); }

        .cupon-msg { display: none; padding: 12px 16px; border-radius: 4px; font-size: 0.9rem; font-weight: 600; margin-bottom: 12px; }
        .cupon-msg.show { display: block; }
        .cupon-msg.ok { background: rgba(76, 175, 80, 0.1); color: #4caf50; border: 1px solid #4caf50; }
        .cupon-msg.error { background: rgba(244, 67, 54, 0.1); color: #f44336; border: 1px solid #f44336; }

        .form-aviso { font-size: 0.85rem; color: #6b6b6b; line-height: 1.6; padding: 12px 0; border-top: 1px solid var(--gray-line); }
        .form-aviso:last-of-type { border-top: none; opacity: 0.7; font-size: 0.75rem; }

        .btn-confirmar { padding: 16px 32px; background: var(--rose); color: var(--white); border: none; border-radius: 4px; font-family: var(--f-body); font-size: 0.9rem; font-weight: 600; letter-spacing: 0.08em; cursor: pointer; transition: background 0.3s; width: 100%; }
        .btn-confirmar:hover { background: var(--rose-hover); }

        footer { padding: 60px 5% 40px; background: var(--navy); border-top: 1px solid rgba(200, 132, 106, 0.2); }
        .footer-inner { max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; gap: 40px; }
        .footer-links { display: flex; gap: 32px; }
        .footer-links a { font-size: 0.85rem; color: var(--cream); transition: color 0.3s; }
        .footer-links a:hover { color: var(--rose); }
        .footer-legal { max-width: 1280px; margin: 0 auto; text-align: center; font-size: 0.8rem; color: rgba(250, 247, 245, 0.6); }
        .footer-tagline { margin-top: 8px; font-style: italic; color: var(--rose); }

        .wa-float { position: fixed; bottom: 24px; right: 24px; width: 60px; height: 60px; background: var(--rose); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; box-shadow: 0 4px 16px rgba(200, 132, 106, 0.4); transition: transform 0.3s; z-index: 90; }
        .wa-float:hover { transform: scale(1.1); }

        @media(max-width:1024px) {
          .page-hero-inner { grid-template-columns: 1fr; gap: 40px; text-align: center; }
          .page-hero-content { text-align: center; }
          .breadcrumb { justify-content: center; }
          .paso-inner, .paso2-inner { grid-template-columns: 1fr; gap: 40px; }
          .form-row { grid-template-columns: 1fr; }
          .footer-inner { flex-direction: column; text-align: center; }
          .footer-links { justify-content: center; }
        }

        @media(max-width:768px) {
          .page-hero h1 { font-size: clamp(2rem, 9vw, 2.8rem); line-height: 1; }
          .paso-info .paso-numero-grande { font-size: clamp(4.5rem, 18vw, 7rem); }
          .paso-info h2 { font-size: clamp(1.8rem, 7vw, 2.4rem); }
          .form-card { padding: 24px 20px; }
          .cupon-row { flex-direction: column; }
          .cupon-row .fg { margin-bottom: 12px; }
        }
      `}</style>

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/">Inicio</Link>
              <span className="sep">/</span>
              <Link href="/area-jubilaciones">Jubilaciones</Link>
              <span className="sep">/</span>
              <span>Reservar turno</span>
            </div>
            <span className="area-tag">Jubilaciones y Pensiones</span>
            <h1>Reservá tu <em>turno</em></h1>
            <p className="page-hero-sub">Consulta personalizada sobre jubilación y pensiones</p>
            <p className="intro">
              Selecciona una fecha y hora disponible para tu <strong>entrevista individual</strong>. 
              Te responderemos todas tus dudas sobre opciones de jubilación.
            </p>
          </div>
          <div className="hero-foto-wrap">
            <div className="hero-foto">
              <img src="https://via.placeholder.com/380" alt="Dra. Noelia Basualdo" />
            </div>
          </div>
        </div>
      </section>

      {/* PASO 1: PRECIO */}
      <section className="paso1" id="paso1">
        <div className="paso-inner fade-in">
          <div className="paso-info">
            <div className="paso-numero-grande">01</div>
            <span className="paso-label">Primer paso</span>
            <h2>Conocé nuestros <em>precios</em></h2>
            <p>
              Ofrecemos una consulta integral sobre jubilación y pensiones. 
              <strong>El valor incluye asesoramiento personalizado y análisis de tu situación previsional.</strong>
            </p>
          </div>
          <div className="precio-card fade-in fade-in-delay-2">
            <h3>Consulta de Jubilación y Pensiones</h3>
            <div className="precio-monto">$50<small>USD</small></div>
            <div className="precio-detalle">
              Pago seguro vía Mercado Pago · Si tenés código de descuento, podrás aplicarlo en el formulario
            </div>
            <a href="#paso2" className="btn btn-rose btn-ir-formulario">📝 Ir al formulario de reserva →</a>
          </div>
        </div>
      </section>

      {/* PASO 2: FORMULARIO */}
      <section className="paso2" id="paso2">
        <div className="paso2-inner">
          <div className="paso2-info fade-in">
            <div className="paso-numero-grande">02</div>
            <span className="paso-label">Segundo paso</span>
            <h2>COMPLETÁ EL <em>formulario</em></h2>
            <p>
              Ahora para finalizar, completá el formulario.
              <strong>Es indispensable</strong> seleccionar la fecha y la hora para tu entrevista.
            </p>
            <div className="mail-aviso">
              <div className="mail-titulo">📧 ¿Qué pasa después?</div>
              <p>
                Vas a recibir un mail con todos los datos de tu entrevista, 
                <strong>incluso para que lo puedas agendar</strong> en tu calendario.
              </p>
            </div>
          </div>

          <div className="form-card fade-in fade-in-delay-1">
            <div className="form-titulo-wrap">
              <span className="form-titulo">FORMULARIO DE RESERVA</span>
              <span className="form-sub-mini">Todos los campos con * son obligatorios</span>
            </div>
            <form className="t-form" onSubmit={handleTurno}>
              <div className="form-row">
                <div className="fg"><label>Nombre *</label><input type="text" placeholder="Tu nombre" required /></div>
                <div className="fg"><label>Apellido *</label><input type="text" placeholder="Tu apellido" required /></div>
              </div>

              <div className="form-row">
                <div className="fg"><label>CUIL *</label><input type="text" placeholder="20-12345678-9" required /></div>
                <div className="fg"><label>Fecha de nacimiento *</label><input type="date" required /></div>
              </div>

              <div className="form-row">
                <div className="fg"><label>Email *</label><input type="email" placeholder="tu@email.com" required /></div>
                <div className="fg"><label>WhatsApp *</label><input type="tel" placeholder="+54 11 xxxxxxxx" required /></div>
              </div>

              <div className="form-row">
                <div className="fg">
                  <label>Provincia *</label>
                  <select required>
                    <option value="">Seleccioná</option>
                    {['Buenos Aires', 'CABA', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'].map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div className="fg"><label>Localidad *</label><input type="text" placeholder="Tu ciudad" required /></div>
              </div>

              <div className="fg">
                <label>¿Tenés Clave de ANSES y AFIP activas? *</label>
                <select required>
                  <option value="">Seleccioná</option>
                  <option>Sí, tengo ambas activas</option>
                  <option>Solo tengo una de las dos</option>
                  <option>No tengo ninguna activa</option>
                  <option>No estoy seguro/a</option>
                </select>
              </div>

              <div className="form-row">
                <div className="fg">
                  <label>Fecha del turno *</label>
                  <input type="date" id="fechaTurno" required />
                </div>
                <div className="fg">
                  <label>Horario *</label>
                  <select id="horaTurno" required disabled={horariosDisabled}>
                    <option value="" disabled selected>Primero elegí una fecha</option>
                  </select>
                </div>
              </div>

              <div className="fg">
                <label>Contanos brevemente tu situación previsional *</label>
                <textarea placeholder="Ej: Tengo 62 años, trabajé en relación de dependencia 25 años, también fui monotributista 5 años. Quiero saber cuándo puedo jubilarme..." required></textarea>
              </div>

              <div className="cupon-row">
                <div className="fg">
                  <label>Código de descuento (opcional)</label>
                  <input type="text" placeholder="Si tenés un código, ingresalo aquí" id="cuponInput" />
                </div>
                <button type="button" onClick={aplicarCupon}>Aplicar</button>
              </div>
              {cuponMsg && <div className={`cupon-msg ${cuponClass}`}>{cuponMsg}</div>}

              <p className="form-aviso">
                🔒 Tu información es confidencial. Recibirás la confirmación de tu entrevista y el link de la videollamada en tu email dentro de las 24 hs hábiles.
              </p>
              <p className="form-aviso">
                Este sitio está protegido por reCAPTCHA y se aplican la <a href="https://policies.google.com/privacy" target="_blank">Política de privacidad</a> y los <a href="https://policies.google.com/terms" target="_blank">Términos del servicio</a> de Google.
              </p>

              <button type="submit" className="btn-confirmar">Pagar y confirmar mi entrevista →</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="logo-real" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontFamily: 'var(--f-logo)', fontSize: '1.8rem', fontWeight: 500, color: 'var(--rose)', lineHeight: 1 }}>NB</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontFamily: 'var(--f-logo)', fontSize: '0.7rem', fontWeight: 400, color: 'var(--cream)', letterSpacing: '0.08em' }}>NOELIA<br/>BASUALDO</span>
              <span style={{ fontFamily: 'var(--f-logo-sub)', fontSize: '0.4rem', fontWeight: 400, color: 'var(--cream)', letterSpacing: '0.38em', textTransform: 'uppercase' }}>Estudio Jurídico</span>
            </div>
          </div>
          <nav className="footer-links">
            <a href="/">Inicio</a>
            <a href="/el-estudio">El Estudio</a>
            <a href="/contacto">Contacto</a>
          </nav>
        </div>
        <div className="footer-legal">
          <p>© 2026 <strong>NB Estudio Jurídico</strong> · Dra. Noelia Basualdo</p>
          <p className="footer-tagline">Tu derecho, nuestro compromiso</p>
        </div>
      </footer>

      <a href="https://wa.me/5491178200546" className="wa-float">💬</a>
    </>
  );
}