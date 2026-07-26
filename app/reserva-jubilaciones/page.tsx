'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ReservaJubilaciones() {
  const [cuponMsg, setCuponMsg] = useState('');
  const [cuponClass, setCuponClass] = useState('');
  const [horariosDisabled, setHorariosDisabled] = useState(true);

  useEffect(() => {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

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
          --rose:        #C8846A;
          --rose-hover:  #b5705a;
          --rose-deep:   #a16447;
          --cream:       #faf7f5;
          --mist:        #f0ebe6;
          --ink:         #0e1f33;
          --white:       #ffffff;
          --f-display: 'Bebas Neue', sans-serif;
          --f-serif:   'DM Serif Display', serif;
          --f-body:    'DM Sans', sans-serif;
        }
        .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
        .tag { display:inline-block; font-family:var(--f-body); font-size:0.63rem; font-weight:500; letter-spacing:0.18em; text-transform:uppercase; border:1px solid currentColor; padding:4px 14px; border-radius:999px; }
        
        .page-hero { padding-top:76px; padding-bottom:80px; padding-inline:5%; background:var(--cream); position:relative; overflow:hidden; }
        .page-hero-inner { position:relative; z-index:2; max-width:1280px; margin:0 auto; display:grid; grid-template-columns:0.85fr 1.2fr; gap:60px; align-items:center; }
        .breadcrumb { display:flex; align-items:center; gap:8px; margin-bottom:24px; font-size:0.7rem; color:#6a7a8a; }
        .breadcrumb a { color:var(--rose); }
        .breadcrumb .sep { opacity:0.4; }
        .area-tag { display:inline-block; padding:8px 22px; background:var(--navy); color:var(--rose); font-size:0.8rem; font-weight:700; border-radius:999px; margin-bottom:24px; letter-spacing:0.08em; }
        .page-hero h1 { font-family:var(--f-display); font-size:clamp(2.8rem,5.8vw,5.8rem); line-height:0.92; color:var(--navy); margin-bottom:16px; }
        .page-hero h1 em { font-family:var(--f-serif); font-style:italic; color:var(--rose); }
        .page-hero-sub { font-family:var(--f-serif); font-style:italic; font-size:clamp(1.1rem,1.6vw,1.4rem); color:var(--rose); margin-bottom:18px; }
        .page-hero p.intro { font-size:1.02rem; line-height:1.75; color:#4a5a6a; max-width:54ch; }
        .hero-foto { position:relative; width:100%; max-width:380px; aspect-ratio:1/1; margin:0 auto; border-radius:50%; overflow:hidden; box-shadow:0 30px 70px rgba(27,58,92,0.22); border:5px solid var(--white); outline:1.5px solid var(--rose); outline-offset:7px; }
        .hero-foto img { width:100%; height:100%; object-fit:cover; object-position:center 22%; display:block; }
        .hero-foto-wrap { position:relative; padding:18px; }
        .hero-foto-deco { position:absolute; top:0; right:0; width:120px; height:120px; background-image:radial-gradient(circle, var(--rose) 1.8px, transparent 1.8px); background-size:14px 14px; opacity:0.45; z-index:-1; }
        .hero-foto-deco-bottom { position:absolute; bottom:0; left:0; width:120px; height:120px; background-image:radial-gradient(circle, var(--rose) 1.8px, transparent 1.8px); background-size:14px 14px; opacity:0.45; z-index:-1; }

        .que-hacemos { background:var(--white); padding:clamp(64px,8vw,100px) 5%; border-top:1px solid rgba(27,58,92,0.06); }
        .qh-inner { max-width:1100px; margin:0 auto; }
        .qh-header { text-align:center; margin-bottom:60px; }
        .qh-header h2 { font-family:var(--f-display); font-size:clamp(2.4rem,5vw,4.5rem); line-height:0.92; letter-spacing:0.02em; color:var(--navy); margin-top:14px; }
        .qh-header h2 em { font-family:var(--f-serif); font-style:italic; color:var(--rose); }
        .qh-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .qh-card { background:var(--cream); padding:32px 28px; border-radius:3px; border:1px solid rgba(27,58,92,0.08); border-top:4px solid var(--rose); transition:transform 0.35s, box-shadow 0.35s, border-color 0.35s; }
        .qh-card:hover { transform:translateY(-10px) scale(1.02); box-shadow:0 24px 50px rgba(27,58,92,0.18), 0 0 0 1px var(--rose); border-color:transparent; }
        .qh-num { font-family:var(--f-display); font-size:3rem; line-height:1; color:var(--rose); letter-spacing:0.04em; margin-bottom:14px; display:inline-block; }
        .qh-icon { font-size:1.8rem; margin-bottom:14px; display:inline-block; }
        .qh-card h3 { font-family:var(--f-serif); font-size:1.25rem; color:var(--navy); margin-bottom:10px; line-height:1.3; }
        .qh-card p { font-size:0.92rem; line-height:1.7; color:#5a6a7a; }

        .oportunidad { background:var(--rose); color:var(--white); padding:clamp(56px,7vw,88px) 5%; text-align:center; position:relative; overflow:hidden; }
        .oportunidad::before { content:'★'; position:absolute; top:-30px; left:5%; font-size:8rem; color:rgba(255,255,255,0.07); pointer-events:none; }
        .oportunidad::after { content:'★'; position:absolute; bottom:-30px; right:5%; font-size:8rem; color:rgba(255,255,255,0.07); pointer-events:none; }
        .op-inner { max-width:780px; margin:0 auto; position:relative; z-index:2; }
        .op-inner h2 { font-family:var(--f-display); font-size:clamp(2.5rem,5.5vw,5rem); line-height:0.95; letter-spacing:0.02em; margin-bottom:18px; }
        .op-inner h2 em { font-family:var(--f-serif); font-style:italic; }
        .op-inner > p { font-size:1.1rem; line-height:1.7; max-width:54ch; margin:0 auto 32px; opacity:0.95; }
        .op-video { display:inline-flex; align-items:center; gap:10px; background:rgba(255,255,255,0.15); padding:10px 22px; border-radius:999px; font-size:0.85rem; border:1px solid rgba(255,255,255,0.3); }

        .aviso-bloque { background:var(--navy); color:var(--cream); padding:clamp(48px,6vw,80px) 5%; text-align:center; }
        .aviso-inner { max-width:780px; margin:0 auto; }
        .tag-imp { display:inline-block; font-size:0.7rem; font-weight:600; letter-spacing:0.22em; text-transform:uppercase; color:var(--rose); padding:6px 18px; border:1.5px solid var(--rose); border-radius:999px; margin-bottom:20px; }
        .aviso-inner h3 { font-family:var(--f-serif); font-size:clamp(1.3rem,2.2vw,1.8rem); line-height:1.4; margin-bottom:24px; }
        .claves-grid { display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-top:24px; }
        .clave-card { background:rgba(200,132,106,0.1); border:1px solid rgba(200,132,106,0.3); border-left:4px solid var(--rose); padding:24px; border-radius:3px; text-align:left; display:flex; align-items:center; gap:16px; }
        .clave-icon { width:48px; height:48px; flex-shrink:0; background:var(--rose); color:var(--white); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.4rem; }
        .clave-label { font-size:0.62rem; letter-spacing:0.22em; text-transform:uppercase; color:var(--rose); font-weight:600; margin-bottom:4px; }
        .clave-nombre { font-family:var(--f-serif); font-size:1.15rem; color:var(--cream); }
        .clave-desc { font-size:0.82rem; color:rgba(250,247,245,0.75); line-height:1.5; }

        .como-accedes { background:var(--navy); color:var(--cream); padding:clamp(64px,7vw,100px) 5%; position:relative; overflow:hidden; border-top:3px solid var(--rose); }
        .como-accedes::before { content:'PROCESO'; position:absolute; top:50%; right:-8%; transform:translateY(-50%); font-family:var(--f-display); font-size:24vw; color:rgba(200,132,106,0.04); letter-spacing:0.08em; pointer-events:none; user-select:none; line-height:1; }
        .ca-inner { max-width:1200px; margin:0 auto; position:relative; z-index:2; }
        .ca-header { text-align:center; margin-bottom:60px; }
        .ca-header .tag-rosa { display:inline-block; padding:8px 22px; background:var(--rose); color:var(--white); font-size:0.72rem; letter-spacing:0.22em; text-transform:uppercase; font-weight:700; border-radius:999px; margin-bottom:20px; }
        .ca-header h2 { font-family:var(--f-display); font-size:clamp(2.5rem,5.5vw,5rem); line-height:0.92; letter-spacing:0.02em; margin-bottom:14px; }
        .ca-header h2 em { font-family:var(--f-serif); font-style:italic; color:var(--rose); }
        .ca-header > p { font-size:1.05rem; opacity:0.8; max-width:60ch; margin:0 auto; line-height:1.7; }
        .ca-pasos { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
        .ca-paso { padding:36px 24px 32px; text-align:center; position:relative; background:rgba(255,255,255,0.04); border:1px solid rgba(200,132,106,0.30); border-radius:12px; transition:transform 0.35s, background 0.35s, border-color 0.35s; }
        .ca-paso:hover { transform:translateY(-6px); background:rgba(200,132,106,0.12); border-color:var(--rose); box-shadow:0 16px 40px rgba(0,0,0,0.30), 0 0 0 1px var(--rose); }
        .ca-paso::after { content:'→'; position:absolute; top:50%; right:-26px; transform:translateY(-50%); width:36px; height:36px; background:var(--rose); color:var(--white); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.2rem; font-weight:700; z-index:5; box-shadow:0 4px 12px rgba(200,132,106,0.4); }
        .ca-paso:last-child::after { display:none; }
        .ca-paso-num { width:68px; height:68px; background:linear-gradient(135deg, var(--rose) 0%, var(--rose-deep) 100%); color:var(--white); border-radius:50%; margin:0 auto 18px; display:flex; align-items:center; justify-content:center; font-family:var(--f-display); font-size:2rem; letter-spacing:0.04em; box-shadow:0 4px 14px rgba(200,132,106,0.35); transition:transform 0.35s, box-shadow 0.35s; }
        .ca-paso:hover .ca-paso-num { transform:scale(1.1); box-shadow:0 8px 22px rgba(200,132,106,0.5); }
        .ca-paso-icon { font-size:2.2rem; margin-bottom:14px; transition:transform 0.35s; display:inline-block; }
        .ca-paso:hover .ca-paso-icon { transform:scale(1.15) rotate(-5deg); }
        .ca-paso h4 { font-family:var(--f-serif); font-size:1.2rem; color:var(--white); margin-bottom:10px; line-height:1.3; }
        .ca-paso p { font-size:0.95rem; line-height:1.65; opacity:0.88; }

        .separador { background:var(--mist); padding:clamp(40px,5vw,72px) 5%; text-align:center; }
        .separador-inner { max-width:680px; margin:0 auto; }
        .separador-flecha { font-family:var(--f-display); font-size:3rem; color:var(--rose); margin-bottom:14px; }
        .separador-inner h3 { font-family:var(--f-display); font-size:clamp(1.5rem,2.5vw,2.2rem); letter-spacing:0.04em; color:var(--navy); margin-bottom:8px; }
        .separador-inner h3 em { font-family:var(--f-serif); font-style:italic; color:var(--rose); }
        .separador-inner p { font-size:0.92rem; color:#4a5a6a; line-height:1.7; }

        .paso1 { padding:clamp(64px,8vw,100px) 5%; background:var(--cream); }
        .paso-inner { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,5vw,72px); align-items:flex-start; }
        .paso-numero-grande { font-family:var(--f-display); font-size:clamp(5.5rem,11vw,10rem); line-height:0.85; color:var(--rose); letter-spacing:0.02em; }
        .paso-label { display:inline-block; font-size:0.7rem; letter-spacing:0.22em; text-transform:uppercase; color:var(--navy); font-weight:600; padding-left:8px; border-left:3px solid var(--rose); margin-bottom:14px; }
        .paso-info h2 { font-family:var(--f-display); font-size:clamp(2rem,4vw,3.5rem); line-height:0.95; letter-spacing:0.02em; color:var(--navy); margin-bottom:20px; }
        .paso-info h2 em { font-family:var(--f-serif); font-style:italic; color:var(--rose); }
        .paso-info > p { font-size:0.95rem; line-height:1.8; color:#4a5a6a; margin-bottom:18px; max-width:46ch; }
        .paso-info > p strong { color:var(--navy); }
        .precio-card { background:var(--navy); color:var(--cream); padding:32px; border-radius:var(--radius); border-left:4px solid var(--rose); margin-bottom:28px; }
        .precio-label { font-size:0.65rem; letter-spacing:0.22em; text-transform:uppercase; color:var(--rose); font-weight:600; margin-bottom:8px; }
        .precio-monto { font-family:var(--f-display); font-size:clamp(2.8rem,5vw,4.2rem); letter-spacing:0.04em; color:var(--cream); line-height:1; }
        .precio-detalle { font-size:0.82rem; opacity:0.7; margin-top:8px; }
        .pago-acciones { display:flex; flex-direction:column; gap:12px; }
        .btn-pagar { display:inline-flex; align-items:center; justify-content:center; gap:10px; padding:18px 32px; background:var(--rose); color:var(--white); font-family:var(--f-body); font-size:0.85rem; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; border-radius:var(--radius); border:none; cursor:pointer; transition:var(--t); text-decoration:none; }
        .btn-pagar:hover { background:var(--rose-hover); transform:translateY(-2px); }
        .pago-nota { font-size:0.78rem; color:#6a7a8a; line-height:1.5; }
        
        .recordatorio-card { background:var(--white); border:1px solid rgba(27,58,92,0.1); border-radius:var(--radius); padding:36px; box-shadow:0 12px 40px rgba(27,58,92,0.06); }
        .recordatorio-card h4 { font-family:var(--f-serif); font-size:1.2rem; color:var(--navy); margin-bottom:8px; line-height:1.3; }
        .recordatorio-card .reco-sub { font-size:0.85rem; color:var(--rose); letter-spacing:0.06em; font-weight:500; margin-bottom:24px; padding-bottom:14px; border-bottom:1px solid rgba(27,58,92,0.08); }
        .reco-list { display:flex; flex-direction:column; gap:18px; }
        .reco-item { display:flex; gap:14px; align-items:flex-start; font-size:0.9rem; line-height:1.6; color:#4a5a6a; }
        .reco-item .check { width:26px; height:26px; flex-shrink:0; background:var(--rose); color:var(--white); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.85rem; font-weight:700; }
        .reco-item strong { color:var(--navy); display:block; margin-bottom:3px; font-family:var(--f-serif); font-size:0.95rem; }

        .paso2 { padding:clamp(64px,8vw,100px) 5%; background:var(--navy); color:var(--cream); position:relative; overflow:hidden; }
        .paso2::before { content:'PASO 02'; position:absolute; top:50%; right:-5%; transform:translateY(-50%); font-family:var(--f-display); font-size:22vw; color:rgba(200,132,106,0.04); letter-spacing:0.08em; pointer-events:none; user-select:none; line-height:1; }
        .paso2-inner { max-width:1100px; margin:0 auto; position:relative; z-index:2; display:grid; grid-template-columns:1fr 1.4fr; gap:clamp(32px,5vw,72px); }
        .paso2-info { padding-top:20px; }
        .paso2-info .paso-numero-grande { color:var(--rose); }
        .paso2-info .paso-label { color:var(--cream); }
        .paso2-info h2 { color:var(--cream); }
        .paso2-info > p { color:var(--cream); opacity:0.92; font-size:1.02rem; }
        .paso2-info > p strong { color:var(--rose); }
        .mail-aviso { margin-top:32px; padding:22px; background:rgba(200,132,106,0.1); border-left:3px solid var(--rose); border-radius:var(--radius); }
        .mail-titulo { display:flex; align-items:center; gap:10px; font-size:0.82rem; color:var(--rose); font-weight:600; letter-spacing:0.06em; margin-bottom:8px; }
        .mail-aviso p { font-size:0.85rem; opacity:0.75; line-height:1.6; }
        
        .form-card { background:rgba(255,255,255,0.08); border:2px solid rgba(200,132,106,0.45); border-radius:var(--radius); padding:clamp(28px,3vw,44px); box-shadow:0 12px 32px rgba(0,0,0,0.18); position:relative; z-index:3; }
        .form-titulo-wrap { display:flex; flex-direction:column; gap:6px; padding-bottom:20px; margin-bottom:24px; border-bottom:1px solid rgba(200,132,106,0.25); }
        .form-titulo { font-family:var(--f-display); font-size:1.5rem; letter-spacing:0.18em; color:var(--rose); }
        .form-sub-mini { font-size:0.78rem; color:var(--cream); opacity:0.7; }
        .t-form { display:flex; flex-direction:column; gap:18px; }
        .form-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .fg { display:flex; flex-direction:column; gap:7px; }
        .fg label { font-size:0.78rem; letter-spacing:0.06em; text-transform:uppercase; color:var(--white); font-weight:600; }
        .fg input, .fg textarea, .fg select { background:var(--white); border:2px solid transparent; color:var(--ink); border-radius:var(--radius); padding:14px 16px; font-family:var(--f-body); font-size:1rem; outline:none; transition:border-color var(--t), box-shadow var(--t); }
        .fg input::placeholder, .fg textarea::placeholder { color:#8a99a8; opacity:1; }
        .fg input:focus, .fg select:focus, .fg textarea:focus { border-color:var(--rose); box-shadow:0 0 0 3px rgba(200,132,106,0.25); }
        .fg select { color:var(--ink); cursor:pointer; }
        .fg select option { background:var(--white); color:var(--ink); }
        .fg textarea { resize:vertical; min-height:110px; line-height:1.5; }
        .cupon-row { display:flex; gap:12px; align-items:flex-end; }
        .cupon-row .fg { flex:1; }
        .cupon-row button { padding:14px 28px; background:var(--rose); color:var(--white); border:none; border-radius:var(--radius); font-weight:600; font-size:0.85rem; cursor:pointer; transition:background 0.3s; }
        .cupon-row button:hover { background:var(--rose-hover); }
        .cupon-msg { display:none; padding:12px 16px; border-radius:var(--radius); font-size:0.9rem; font-weight:600; margin-bottom:12px; }
        .cupon-msg.show { display:block; }
        .cupon-msg.ok { background:rgba(76,175,80,0.1); color:#4caf50; border:1px solid #4caf50; }
        .cupon-msg.error { background:rgba(244,67,54,0.1); color:#f44336; border:1px solid #f44336; }
        .form-aviso { font-size:0.85rem; color:#6a7a8a; line-height:1.5; padding:12px 0; border-top:1px solid var(--gray-line); }
        .nro-operacion { background:rgba(200,132,106,0.18); border:1px solid rgba(200,132,106,0.4); border-left:5px solid var(--rose); border-radius:var(--radius); padding:22px; }
        .nro-operacion label { color:var(--rose) !important; font-size:0.85rem !important; }
        .btn-confirmar { padding:18px 32px; background:var(--rose); color:var(--white); font-family:var(--f-body); font-size:0.9rem; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; border-radius:var(--radius); border:none; cursor:pointer; transition:background 0.3s; width:100%; }
        .btn-confirmar:hover { background:var(--rose-hover); }

        @media(max-width:1024px) {
          .page-hero-inner { grid-template-columns:1fr; gap:40px; }
          .paso-inner { grid-template-columns:1fr; }
          .paso2-inner { grid-template-columns:1fr; }
          .qh-grid { grid-template-columns:1fr; }
          .claves-grid { grid-template-columns:1fr; }
          .form-row { grid-template-columns:1fr; }
          .ca-pasos { grid-template-columns:1fr 1fr; gap:18px; }
          .ca-paso:nth-child(2)::after { display:none; }
        }
        @media(max-width:600px) {
          .ca-pasos { grid-template-columns:1fr; gap:18px; }
          .ca-paso::after { display:none; }
        }
      `}</style>

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="hero-foto-wrap">
            <span className="hero-foto-deco"></span>
            <span className="hero-foto-deco-bottom"></span>
            <div className="hero-foto">
              <img src="https://via.placeholder.com/380" alt="Dra. Noelia Basualdo" />
            </div>
          </div>
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/">Inicio</Link>
              <span className="sep">/</span>
              <Link href="/area-jubilaciones">Jubilaciones</Link>
              <span className="sep">/</span>
              <span>Reservar turno</span>
            </div>
            <span className="area-tag">⚖ JUBILACIONES Y PENSIONES</span>
            <h1>Reservá tu <em>turno</em></h1>
            <p className="page-hero-sub">Consulta personalizada sobre jubilación y pensiones</p>
            <p className="intro">Selecciona una fecha y hora disponible para tu <strong>entrevista individual</strong>. Te responderemos todas tus dudas sobre opciones de jubilación.</p>
          </div>
        </div>
      </section>

      {/* QUÉ VAMOS A HACER */}
      <section className="que-hacemos">
        <div className="qh-inner">
          <div className="qh-header fade-in">
            <span className="tag" style={{color:'var(--rose)', borderColor:'var(--rose)'}}>La entrevista</span>
            <h2>¿QUÉ VAMOS A HACER<br/><em>en esta entrevista</em>?</h2>
          </div>
          <div className="qh-grid">
            <div className="qh-card">
              <div className="qh-num">01</div>
              <div className="qh-icon">📋</div>
              <h3>Evaluamos tu caso en concreto</h3>
              <p>Analizamos tu situación particular, revisamos tu historia laboral y entendemos exactamente dónde estás parado para iniciar tu trámite jubilatorio.</p>
            </div>
            <div className="qh-card">
              <div className="qh-num">02</div>
              <div className="qh-icon">🔢</div>
              <h3>Calculamos cuántos años tenés trabajados</h3>
              <p>Hacemos el cálculo exacto de tus aportes y servicios reconocidos, identificando posibles períodos faltantes y cómo recuperarlos.</p>
            </div>
            <div className="qh-card">
              <div className="qh-num">03</div>
              <div className="qh-icon">🎯</div>
              <h3>Diseñamos la mejor estrategia</h3>
              <p>Planificamos juntos el camino más conveniente para que puedas acceder a tu jubilación, optimizando tiempos y resultados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OPORTUNIDAD */}
      <section className="oportunidad">
        <div className="op-inner">
          <h2>NO TE PIERDAS<br/>ESTA <em>oportunidad</em></h2>
          <p>Agendá tu entrevista por videollamada y comenzá hoy a planificar tu futuro jubilatorio.</p>
          <span className="op-video">📹 Entrevista por videollamada · 30 minutos</span>
        </div>
      </section>

      {/* AVISO IMPORTANTE */}
      <section className="aviso-bloque">
        <div className="aviso-inner">
          <span className="tag-imp">⚠ Importante</span>
          <h3>Es muy importante que cuentes con tus claves activas</h3>
          <p style={{fontSize:'0.95rem', opacity:0.78, maxWidth:'60ch', margin:'0 auto 8px', lineHeight:1.7}}>
            Para que la consulta sea efectiva, necesitamos acceder a tu historia previsional. Si todavía no las tenés o están desactualizadas, podés gestionarlas de forma online antes del turno.
          </p>
          <div className="claves-grid">
            <div className="clave-card">
              <div className="clave-icon">🔐</div>
              <div>
                <div className="clave-label">Necesitás tu</div>
                <div className="clave-nombre">Clave de ANSES</div>
                <div className="clave-desc">Para acceder a tu historia laboral y aportes</div>
              </div>
            </div>
            <div className="clave-card">
              <div className="clave-icon">🔐</div>
              <div>
                <div className="clave-label">Necesitás tu</div>
                <div className="clave-nombre">Clave de AFIP</div>
                <div className="clave-desc">Para validar tu situación fiscal y aportes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿CÓMO ACCEDÉS A LA CONSULTA? */}
      <section className="como-accedes">
        <div className="ca-inner">
          <div className="ca-header">
            <span className="tag-rosa">El proceso</span>
            <h2>¿CÓMO ACCEDÉS<br/><em>a la consulta</em>?</h2>
            <p>En 4 pasos simples reservás tu entrevista virtual con la Dra. Basualdo. El proceso es 100% online y te lleva menos de 5 minutos completarlo.</p>
          </div>
          <div className="ca-pasos">
            <div className="ca-paso">
              <div className="ca-paso-num">1</div>
              <div className="ca-paso-icon">📝</div>
              <h4>Completás el formulario</h4>
              <p>Cargás tus datos personales y elegís la fecha y hora del turno que mejor te convenga.</p>
            </div>
            <div className="ca-paso">
              <div className="ca-paso-num">2</div>
              <div className="ca-paso-icon">💳</div>
              <h4>Realizás el pago</h4>
              <p>Al confirmar, te lleva a Mercado Pago para abonar con el medio que prefieras de forma segura.</p>
            </div>
            <div className="ca-paso">
              <div className="ca-paso-num">3</div>
              <div className="ca-paso-icon">📧</div>
              <h4>Recibís la confirmación</h4>
              <p>Te llega un mail con todos los datos de tu entrevista para que la agendes en tu calendario.</p>
            </div>
            <div className="ca-paso">
              <div className="ca-paso-num">4</div>
              <div className="ca-paso-icon">📹</div>
              <h4>Tenés tu entrevista</h4>
              <p>Te conectás por videollamada el día y hora elegidos. Duración: 30 minutos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PASO 1: CONOCÉ EL VALOR */}
      <section className="paso1" id="paso1">
        <div className="paso-inner">
          <div className="paso-info">
            <div className="paso-numero-grande">01</div>
            <span className="paso-label">Primer paso</span>
            <h2>CONOCÉ EL <em>valor</em></h2>
            <p>La consulta virtual tiene un valor único e incluye todo lo descripto en este servicio. <strong>El pago se realiza al final</strong>, después de completar tus datos y elegir fecha y horario.</p>
            <p>Aceptamos todos los medios de pago a través de Mercado Pago: tarjetas de crédito, débito, dinero en cuenta y transferencia.</p>
            <div className="precio-card">
              <div className="precio-label">Valor de la consulta virtual</div>
              <div className="precio-monto">$50.000</div>
              <div className="precio-detalle">Pago seguro vía Mercado Pago · Si tenés código de descuento, podrás aplicarlo en el formulario</div>
            </div>
            <div className="pago-acciones">
              <a href="#paso2" className="btn-pagar">📝 Ir al formulario de reserva →</a>
              <p className="pago-nota">🔒 Tus datos y tu pago están 100% seguros. Recibirás la confirmación por email.</p>
            </div>
          </div>

          <div className="recordatorio-card">
            <h4>Te recordamos que vamos a:</h4>
            <p className="reco-sub">EN ESTA CONSULTA VIRTUAL</p>
            <div className="reco-list">
              <div className="reco-item">
                <span className="check">✓</span>
                <div>
                  <strong>Asesorarte de manera integral</strong>
                  Para que el paso al sector pasivo lo hagas con toda la información que necesitás, sin sorpresas ni decisiones apuradas.
                </div>
              </div>
              <div className="reco-item">
                <span className="check">✓</span>
                <div>
                  <strong>Calcular los años aportados</strong>
                  Análisis detallado de tus aportes registrados y períodos reconocidos para saber exactamente dónde estás parado.
                </div>
              </div>
              <div className="reco-item">
                <span className="check">✓</span>
                <div>
                  <strong>Diagramar la mejor estrategia</strong>
                  Para que cuando obtengas tu haber jubilatorio sea el más elevado posible.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARADOR */}
      <section className="separador">
        <div className="separador-inner">
          <div className="separador-flecha">↓</div>
          <h3>AHORA <em>completá tus datos</em></h3>
          <p>Reservá fecha y horario y al final pagás de forma segura.</p>
        </div>
      </section>

      {/* PASO 2: FORMULARIO */}
      <section className="paso2" id="paso2">
        <div className="paso2-inner">
          <div className="paso2-info">
            <div className="paso-numero-grande">02</div>
            <span className="paso-label">Segundo paso</span>
            <h2>COMPLETÁ EL <em>formulario</em></h2>
            <p>Ahora para finalizar, completá el formulario. <strong>Es indispensable</strong> seleccionar la fecha y la hora para tu entrevista.</p>
            <div className="mail-aviso">
              <div className="mail-titulo">📧 ¿Qué pasa después?</div>
              <p>Vas a recibir un mail con todos los datos de tu entrevista, <strong>incluso para que lo puedas agendar</strong> en tu calendario.</p>
            </div>
          </div>

          <div className="form-card">
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
                <div className="fg"><label>Provincia *</label><select required><option value="" disabled selected>Seleccioná</option><option>Buenos Aires</option><option>CABA</option><option>Córdoba</option></select></div>
                <div className="fg"><label>Localidad *</label><input type="text" placeholder="Tu ciudad" required /></div>
              </div>
              <div className="fg"><label>¿Tenés Clave de ANSES y AFIP activas? *</label><select required><option value="" disabled selected>Seleccioná</option><option>Sí, tengo ambas activas</option><option>No tengo ninguna</option></select></div>
              <div className="form-row">
                <div className="fg"><label>Fecha del turno *</label><input type="date" id="fechaTurno" required /></div>
                <div className="fg"><label>Horario *</label><select id="horaTurno" required disabled={horariosDisabled}><option value="" disabled>Primero elegí una fecha</option></select></div>
              </div>
              <div className="fg"><label>Situación previsional *</label><textarea placeholder="Contanos tu caso..." required></textarea></div>
              <div className="cupon-row">
                <div className="fg"><label>Código descuento (opcional)</label><input type="text" id="cuponInput" placeholder="Código..." /></div>
                <button type="button" onClick={aplicarCupon}>Aplicar</button>
              </div>
              {cuponMsg && <div className={`cupon-msg ${cuponClass}`}>{cuponMsg}</div>}
              <p className="form-aviso">🔒 Tu información es confidencial. Recibirás confirmación en 24hs hábiles.</p>
              <button type="submit" className="btn-confirmar">Pagar y confirmar mi entrevista →</button>
            </form>
          </div>
        </div>
      </section>

      <a href="https://wa.me/5491178200546" style={{position:'fixed', bottom:'24px', right:'24px', width:'60px', height:'60px', background:'var(--rose)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.8rem', boxShadow:'0 4px 16px rgba(200,132,106,0.4)', zIndex:90}}>💬</a>
    </>
  );
}