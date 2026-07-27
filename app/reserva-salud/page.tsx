'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ReservaSalud() {
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
        .page-hero::before { content:'AMPARO'; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-family:var(--f-display); font-size:24vw; color:rgba(27,58,92,0.025); letter-spacing:0.08em; pointer-events:none; user-select:none; white-space:nowrap; z-index:0; }
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

        .docs-lista { display:flex; flex-direction:column; gap:14px; margin-top:8px; }
        .doc-item { background:rgba(200,132,106,0.08); border:1px solid rgba(200,132,106,0.25); border-left:3px solid var(--rose); padding:18px 22px; border-radius:var(--radius); display:flex; align-items:flex-start; gap:18px; transition:all 0.3s ease; }
        .doc-item:hover { background:rgba(200,132,106,0.12); border-left-color:var(--rose-deep); }
        .doc-num { width:34px; height:34px; flex-shrink:0; background:var(--rose); color:var(--white); border-radius:50%; display:flex; align-items:center; justify-content:center; font-family:var(--f-serif); font-size:1.05rem; font-weight:500; box-shadow:0 4px 10px rgba(200,132,106,0.30); }
        .doc-info .doc-titulo { font-family:var(--f-serif); font-size:1.05rem; color:var(--cream); margin-bottom:4px; line-height:1.3; }
        .doc-info .doc-desc { font-size:0.85rem; opacity:0.78; line-height:1.6; color:var(--cream); }
        .doc-info .doc-desc strong { color:var(--rose); font-weight:600; }

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
        .form-row .fg label { flex:1; }
        .fg input, .fg textarea, .fg select { background:var(--white); border:2px solid transparent; color:var(--ink); border-radius:var(--radius); padding:14px 16px; font-family:var(--f-body); font-size:1rem; outline:none; transition:border-color var(--t), box-shadow var(--t); }
        .fg input::placeholder, .fg textarea::placeholder { color:#8a99a8; opacity:1; }
        .fg input:focus, .fg select:focus, .fg textarea:focus { border-color:var(--rose); box-shadow:0 0 0 3px rgba(200,132,106,0.25); }
        .fg select { color:var(--ink); cursor:pointer; }
        .fg select option { background:var(--white); color:var(--ink); }
        .fg textarea { resize:vertical; min-height:150px; line-height:1.5; }
        .cupon-row { display:flex; gap:12px; align-items:flex-end; }
        .cupon-row .fg { flex:1; }
        .cupon-row button { padding:14px 28px; background:var(--rose); color:var(--white); border:none; border-radius:var(--radius); font-weight:600; font-size:0.85rem; cursor:pointer; transition:background 0.3s; }
        .cupon-row button:hover { background:var(--rose-hover); }
        .cupon-msg { display:none; padding:12px 16px; border-radius:var(--radius); font-size:0.9rem; font-weight:600; margin-bottom:12px; }
        .cupon-msg.show { display:block; }
        .cupon-msg.ok { background:rgba(76,175,80,0.1); color:#4caf50; border:1px solid #4caf50; }
        .cupon-msg.error { background:rgba(244,67,54,0.1); color:#f44336; border:1px solid #f44336; }
        .form-aviso { font-size:0.85rem; color:#6a7a8a; line-height:1.5; padding:12px 0; border-top:1px solid var(--gray-line); }
        .btn-confirmar { padding:18px 32px; background:var(--rose); color:var(--white); font-family:var(--f-body); font-size:0.9rem; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; border-radius:var(--radius); border:none; cursor:pointer; transition:background 0.3s; width:100%; }
        .btn-confirmar:hover { background:var(--rose-hover); }

        @media(max-width:1024px) {
          .page-hero-inner { grid-template-columns:1fr; gap:40px; }
          .paso-inner { grid-template-columns:1fr; }
          .paso2-inner { grid-template-columns:1fr; }
          .qh-grid { grid-template-columns:1fr; }
          .form-row { grid-template-columns:1fr; }
          .ca-pasos { grid-template-columns:1fr 1fr; gap:18px; }
          .ca-paso:nth-child(2)::after { display:none; }
        }
        @media(max-width:600px) {
          .ca-pasos { grid-template-columns:1fr; gap:18px; }
          .ca-paso::after { display:none; }
          .doc-item { padding:14px 16px; gap:12px; }
          .doc-num { width:28px; height:28px; font-size:0.9rem; }
          .doc-info .doc-titulo { font-size:0.95rem; }
          .doc-info .doc-desc { font-size:0.78rem; }
        }
      `}</style>

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="hero-foto-wrap">
            <span className="hero-foto-deco"></span>
            <span className="hero-foto-deco-bottom"></span>
            <div className="hero-foto">
              <img src="/noelia.jpg" alt="Dra. Noelia Basualdo" />
            </div>
          </div>
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/">Inicio</Link>
              <span className="sep">/</span>
              <Link href="/area-salud">Salud</Link>
              <span className="sep">/</span>
              <span>Reservar turno</span>
            </div>
            <span className="area-tag">⚖ SALUD · OBRAS SOCIALES Y PREPAGAS</span>
            <h1>RESERVA <em>de turno</em></h1>
            <p className="page-hero-sub">El acceso a la salud es un derecho. Te acompañamos para defenderlo.</p>
            <p className="intro"><strong>Asesoramiento personalizado</strong> con la Dra. Noelia Basualdo, especialista en Derecho de Seguridad Social. Una entrevista virtual donde analizamos tu caso, revisamos la documentación que aportes y diseñamos la mejor estrategia para defender tus derechos frente a tu obra social o prepaga.</p>
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
              <h3>Análisis del caso</h3>
              <p>Revisión de tu situación particular: las negativas o aumentos recibidos, antecedentes médicos cuando aplique, y la relación con tu obra social o prepaga.</p>
            </div>
            <div className="qh-card">
              <div className="qh-num">02</div>
              <div className="qh-icon">⚖️</div>
              <h3>Evaluación de viabilidad</h3>
              <p>Te decimos con honestidad si hay base para un reclamo, qué probabilidades tiene y cuál es el camino más adecuado (amparo, mediación, reclamo administrativo).</p>
            </div>
            <div className="qh-card">
              <div className="qh-num">03</div>
              <div className="qh-icon">🎯</div>
              <h3>Estrategia y próximos pasos</h3>
              <p>Si conviene reclamar, te explicamos cómo se hace, cuáles son los tiempos y qué documentación adicional necesitamos para iniciar el reclamo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OPORTUNIDAD */}
      <section className="oportunidad">
        <div className="op-inner">
          <h2>NO TE PIERDAS<br/>ESTA <em>oportunidad</em></h2>
          <p>Agendá tu entrevista por videollamada y comenzá hoy a defender tus derechos en salud.</p>
          <span className="op-video">📹 Entrevista por videollamada · 50 minutos</span>
        </div>
      </section>

      {/* QUÉ TRAER A LA CONSULTA */}
      <section className="aviso-bloque">
        <div className="aviso-inner">
          <span className="tag-imp">⚠ Importante</span>
          <h3>¿Qué traer a la consulta?</h3>
          <p style={{fontSize:'0.95rem', opacity:0.78, maxWidth:'60ch', margin:'0 auto 24px', lineHeight:1.7}}>
            Para que podamos analizar tu caso de manera completa, conviene tener a mano los siguientes documentos:
          </p>

          <div className="docs-lista" style={{maxWidth:'780px', margin:'0 auto', textAlign:'left'}}>
            <div className="doc-item">
              <div className="doc-num">1</div>
              <div className="doc-info">
                <div className="doc-titulo">Credencial de obra social o prepaga</div>
                <div className="doc-desc">Foto o copia del frente. <strong>En caso de tener adherentes</strong>, la copia de todas las credenciales o captura de pantalla de las credenciales virtuales.</div>
              </div>
            </div>
            <div className="doc-item">
              <div className="doc-num">2</div>
              <div className="doc-info">
                <div className="doc-titulo">Última factura o recibo de pago</div>
                <div className="doc-desc">Para casos de aumento de cuota se va a requerir <strong>las facturas desde noviembre de 2023 a la fecha</strong>.</div>
              </div>
            </div>
            <div className="doc-item">
              <div className="doc-num">3</div>
              <div className="doc-info">
                <div className="doc-titulo">Prescripción médica</div>
                <div className="doc-desc">En casos de medicamentos o tratamientos.</div>
              </div>
            </div>
            <div className="doc-item">
              <div className="doc-num">4</div>
              <div className="doc-info">
                <div className="doc-titulo">Carta o respuesta de rechazo</div>
                <div className="doc-desc">De la obra social/prepaga, si ya hubo un reclamo previo.</div>
              </div>
            </div>
            <div className="doc-item">
              <div className="doc-num">5</div>
              <div className="doc-info">
                <div className="doc-titulo">Documentación médica relevante</div>
                <div className="doc-desc">Estudios, historia clínica, informes.</div>
              </div>
            </div>
          </div>

          <p style={{fontSize:'0.88rem', opacity:0.65, maxWidth:'60ch', margin:'24px auto 0', fontStyle:'italic', textAlign:'center', lineHeight:1.6}}>
            No es indispensable tener TODO para la consulta. Si te falta algo, podemos analizarlo y pedirlo después.
          </p>
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
              <p>Te conectás por videollamada el día y hora elegidos. Duración: 50 minutos.</p>
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
                  <strong>Revisar tu documentación</strong>
                  Analizamos las negativas, facturas, prescripciones e informes médicos que aportes para entender exactamente en qué situación estás.
                </div>
              </div>
              <div className="reco-item">
                <span className="check">✓</span>
                <div>
                  <strong>Decirte si tu reclamo tiene base</strong>
                  Con honestidad, sin generar expectativas falsas: si hay fundamento para reclamar y si tu caso requiere una medida urgente.
                </div>
              </div>
              <div className="reco-item">
                <span className="check">✓</span>
                <div>
                  <strong>Explicarte los pasos concretos</strong>
                  Qué vía corresponde, qué documentación falta y cuáles son los tiempos reales del reclamo.
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
                <div className="fg">
                  <label>Provincia *</label>
                  <select required defaultValue="">
                    <option value="" disabled>Seleccioná</option>
                    <option>Buenos Aires</option><option>CABA</option><option>Catamarca</option>
                    <option>Chaco</option><option>Chubut</option><option>Córdoba</option>
                    <option>Corrientes</option><option>Entre Ríos</option><option>Formosa</option>
                    <option>Jujuy</option><option>La Pampa</option><option>La Rioja</option>
                    <option>Mendoza</option><option>Misiones</option><option>Neuquén</option>
                    <option>Río Negro</option><option>Salta</option><option>San Juan</option>
                    <option>San Luis</option><option>Santa Cruz</option><option>Santa Fe</option>
                    <option>Santiago del Estero</option><option>Tierra del Fuego</option><option>Tucumán</option>
                  </select>
                </div>
                <div className="fg"><label>Localidad *</label><input type="text" placeholder="Tu ciudad" required /></div>
              </div>

              <div className="form-row">
                <div className="fg">
                  <label>¿Cuál es tu obra social o prepaga? *</label>
                  <input type="text" placeholder="Ej: OSDE, Galeno, Swiss Medical, IOMA..." required />
                </div>
                <div className="fg">
                  <label>¿Tu reclamo es urgente? *</label>
                  <select required defaultValue="">
                    <option value="" disabled>Seleccioná</option>
                    <option>Sí, hay tratamiento en curso o por iniciar</option>
                    <option>Sí, situación delicada pero no inmediata</option>
                    <option>No, es un reclamo general</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="fg"><label>Fecha del turno *</label><input type="date" id="fechaTurno" required /></div>
                <div className="fg"><label>Horario *</label><select id="horaTurno" required disabled={horariosDisabled} defaultValue=""><option value="" disabled>Primero elegí una fecha</option></select></div>
              </div>

              <div className="fg">
                <label>Contanos tu caso *</label>
                <textarea
                  required
                  placeholder={"Ej: Mi obra social/prepaga rechaza la cobertura de un medicamento que necesito (o aumentó la cuota desproporcionadamente, o me dijeron que tengo que pasarme a PAMI...). Quiero saber qué puedo hacer.\n\nPara conocer bien tu situación, ayudanos a entender también:\n▸ ¿Estás afiliado/a solo/a, con familiares a cargo, o estás a cargo de un familiar?\n▸ ¿Desde cuándo estás afiliado/a a esa obra social o prepaga?\n▸ ¿Cuántas personas están afectadas por este reclamo?"}
                ></textarea>
              </div>

              <div className="cupon-row">
                <div className="fg"><label>Código de descuento (opcional)</label><input type="text" id="cuponInput" placeholder="Si tenés un código, ingresalo aquí" /></div>
                <button type="button" onClick={aplicarCupon}>Aplicar</button>
              </div>
              {cuponMsg && <div className={`cupon-msg ${cuponClass}`}>{cuponMsg}</div>}

              <p className="form-aviso">🔒 Tu información es confidencial. Recibirás la confirmación de tu entrevista y el link de la videollamada en tu email dentro de las 24 hs hábiles.</p>
              <p className="form-aviso" style={{fontSize:'0.68rem', opacity:0.4}}>
                Este sitio está protegido por reCAPTCHA y se aplican la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de privacidad</a> y los <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Términos del servicio</a> de Google.
              </p>

              <button type="submit" className="btn-confirmar">Pagar y confirmar mi entrevista →</button>
            </form>
          </div>
        </div>
      </section>

      <a href="https://wa.me/5491178200546" target="_blank" rel="noopener noreferrer" aria-label="Escribinos por WhatsApp" style={{position:'fixed', bottom:'24px', right:'24px', width:'60px', height:'60px', background:'#25D366', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 16px rgba(37,211,102,0.4)', zIndex:90}}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}