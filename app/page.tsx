"use client";
import { useRef, useState, useEffect } from "react";

const techIcons = [
  { label: "React", angle: 0, color: "#61DAFB", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.468a23.456 23.456 0 0 0-1.364-3.578l-.101-.213.101-.213a23.273 23.273 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z"/></svg>` },
  { label: "JavaScript", angle: 40, color: "#F7DF1E", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>` },
  { label: "TypeScript", angle: 80, color: "#3178C6", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>` },
  { label: "Node.js", angle: 120, color: "#339933", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", svg: `` },
  { label: "Next.js", angle: 160, color: "#ffffff", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", svg: `` },
  { label: "MongoDB", angle: 200, color: "#47A248", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.045-.045-.765-2.405-.765-2.405z"/></svg>` },
  { label: "MySQL", angle: 240, color: "#4479A1", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.55h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.55zm4.017-4.08h-2.35c.03.63.05 1.2.064 1.71h2.93l-.136.89h-3.73c-.138-1.77-.17-3.59-.1-5.46l3.86-.01-.048.87h-2.88v1.394h2.35zm7.59 4.08h-1.477l-2.248-4.01c.225 1.362.34 2.658.344 3.988h-.886c-.003-1.737-.124-3.44-.36-5.1h1.116l2.318 4.044c-.218-1.35-.308-2.638-.268-3.73h.879c.086 1.646.186 3.33.582 4.808zm4.017-4.08h-2.35c.03.63.05 1.2.064 1.71h2.93l-.136.89h-3.73c-.138-1.77-.17-3.59-.1-5.46l3.86-.01-.048.87h-2.88v1.394h2.35zm-.536-5.38c.16-.244.302-.506.502-.716l-.01-.007c-.253-.115-.53-.172-.802-.172-.306 0-.62.07-.892.214-.5.266-.893.696-1.073 1.225-.122.37-.08.776.1 1.11.16.293.426.515.732.63.283.107.59.108.873.003.294-.11.543-.313.694-.577l-.01-.008c-.06.03-.12.055-.184.07-.354.087-.72-.1-.835-.44-.08-.235-.026-.503.127-.698.07-.09.163-.16.263-.21z"/></svg>` },
  { label: "PostgreSQL", angle: 280, color: "#4169E1", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8 2 5 4.5 5 8c0 1.5.5 2.9 1.4 4-.9 1-1.4 2.4-1.4 3.8 0 3.4 3.1 6.2 7 6.2s7-2.8 7-6.2c0-1.4-.5-2.7-1.4-3.8C18.5 10.9 19 9.5 19 8c0-3.5-3-6-7-6zm0 2c2.8 0 5 1.8 5 4 0 1-.4 2-1.1 2.7C14.8 9.9 13.5 9.4 12 9.4s-2.8.5-3.9 1.3C7.4 10 7 9 7 8c0-2.2 2.2-4 5-4zm0 7.4c1.1 0 2.1.3 2.9.8.5.3.9.7 1.2 1.1.3.5.4 1 .4 1.5v.2c-.1 2.3-2 4-4.5 4S7.1 17.3 7 15v-.2c0-.5.1-1 .4-1.5.3-.4.7-.8 1.2-1.1.8-.5 1.8-.8 2.9-.8h.5zm-.5 2c-.8 0-1.5.6-1.5 1.3s.7 1.3 1.5 1.3 1.5-.6 1.5-1.3-.7-1.3-1.5-1.3z"/></svg>` },
  { label: "GitHub", angle: 320, color: "#ffffff", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>` },
];

const projects = [
  {
    title: "REST API E-Commerce",
    tag: "Backend · Node.js",
    desc: "API robusta para e-commerce con autenticación JWT, gestión de productos, carrito de compras e integración de pasarela de pagos.",
    tech: ["Node.js", "TypeScript", "PostgreSQL"],
    gradient: "radial-gradient(ellipse at 20% 60%, #7c3aed55 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, #a855f730 0%, transparent 50%), linear-gradient(135deg, #0f0a2e 0%, #07071a 100%)",
    icon: "🛒", github: "#", demo: "#",
  },
  {
    title: "Dashboard Financiero",
    tag: "Full Stack · Next.js",
    desc: "Panel de control con gráficas en tiempo real, reportes exportables, autenticación por roles y gestión de usuarios.",
    tech: ["Next.js", "React", "MongoDB"],
    gradient: "radial-gradient(ellipse at 70% 70%, #3178C655 0%, transparent 55%), radial-gradient(ellipse at 20% 20%, #06B6D430 0%, transparent 50%), linear-gradient(135deg, #071420 0%, #07071a 100%)",
    icon: "📊", github: "#", demo: "#",
  },
  {
    title: "Sistema de Gestión",
    tag: "Backend · Express",
    desc: "Sistema empresarial completo con roles, permisos granulares, notificaciones en tiempo real y reportes automatizados.",
    tech: ["Node.js", "MySQL", "TypeScript"],
    gradient: "radial-gradient(ellipse at 30% 40%, #ec489955 0%, transparent 55%), radial-gradient(ellipse at 75% 75%, #a855f720 0%, transparent 50%), linear-gradient(135deg, #1a0714 0%, #07071a 100%)",
    icon: "⚙️", github: "#", demo: "#",
  },
  {
    title: "App Tiempo Real",
    tag: "Full Stack · Socket.io",
    desc: "Aplicación colaborativa con actualizaciones instantáneas, drag & drop interactivo y sincronización entre dispositivos.",
    tech: ["Node.js", "React", "MongoDB"],
    gradient: "radial-gradient(ellipse at 50% 30%, #33993355 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, #06B6D420 0%, transparent 50%), linear-gradient(135deg, #071a07 0%, #07071a 100%)",
    icon: "⚡", github: "#", demo: "#",
  },
];

export default function Home() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const FULL_TITLE = "DANIETH PUENTES";
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    let i = 0;
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setTypedText(FULL_TITLE.slice(0, i));
        if (i >= FULL_TITLE.length) {
          clearInterval(interval);
          setTypingDone(true);
        }
      }, 62);
      return () => clearInterval(interval);
    }, 350);
    return () => clearTimeout(startDelay);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#05051a",
        fontFamily: "'Space Grotesk', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* Star field background */
        body { background: #05051a; font-family: 'Space Grotesk', sans-serif; }

        /* Chat-like entrance animations */
        @keyframes chatFadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .chat-appear {
          opacity: 0;
          animation: chatFadeIn 0.45s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .typing-cursor {
          display: inline-block;
          width: 3px;
          height: 0.8em;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          margin-left: 4px;
          border-radius: 2px;
          animation: blinkCursor 0.65s ease-in-out infinite;
          vertical-align: middle;
          position: relative;
          top: -4px;
        }

        .stars {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 60%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 15%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 75% 45%, rgba(255,255,255,0.25) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 75%, rgba(255,255,255,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 20% 85%, rgba(255,255,255,0.2) 0%, transparent 100%),
            radial-gradient(1px 1px at 65% 90%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 45% 50%, rgba(255,255,255,0.15) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 80% 10%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 5% 40%, rgba(255,255,255,0.3) 0%, transparent 100%);
        }

        .ambient-glow {
          position: fixed;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 50px;
          background: rgba(5,5,26,0.88);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(139,92,246,0.15);
          box-shadow: 0 1px 30px rgba(0,0,0,0.4);
        }
        .nav-logo-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
          text-decoration: none;
        }
        .nav-logo-badge {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, #7c3aed, #a855f7, #ec4899);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.78rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: 0.5px;
          flex-shrink: 0;
        }
        .nav-logo-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.2px;
          line-height: 1.2;
        }
        .nav-logo-sub {
          font-size: 0.58rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 2px;
          text-transform: uppercase;
          line-height: 1;
        }
        .nav-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 22px;
          border-radius: 50px;
          background: transparent;
          border: 1px solid rgba(139,92,246,0.45);
          color: #a78bfa;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .nav-cta:hover {
          background: rgba(139,92,246,0.15);
          border-color: #7c3aed;
          color: #fff;
          box-shadow: 0 0 18px rgba(139,92,246,0.25);
        }
        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
        }
        .nav-links a {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.3px;
          transition: color 0.25s;
          position: relative;
          padding-bottom: 5px;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #7c3aed, #a855f7, #ec4899);
          border-radius: 2px;
          transition: width 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .nav-links a:hover {
          color: #fff;
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        .nav-active {
          color: #fff !important;
          border: none !important;
          padding: 0 !important;
          padding-bottom: 5px !important;
          border-radius: 0 !important;
        }
        .nav-active::after {
          width: 100% !important;
        }

        /* Toggle pills */
        .toggle-pills {
          display: flex;
          gap: 6px;
          margin-bottom: 28px;
        }
        .pill-btn {
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
          letter-spacing: 0.5px;
        }
        .pill-active {
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: #fff;
        }
        .pill-inactive {
          background: transparent;
          color: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.15) !important;
          border: none;
        }
        .pill-inactive:hover { color: #fff; border-color: rgba(139,92,246,0.4) !important; }

        /* Hero layout */
        .hero {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 60px 60px;
          gap: 80px;
        }

        /* Left text content */
        .hero-text { flex: 1; max-width: 560px; }

        .hero-greeting {
          font-size: 0.82rem;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .hero-title {
          font-size: clamp(2rem, 3.8vw, 3.6rem);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -2px;
          color: #fff;
          margin-bottom: 16px;
          text-transform: uppercase;
          min-height: 1.1em;
        }
        .hero-title .highlight {
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          margin-bottom: 12px;
        }

        .hero-desc {
          color: rgba(255,255,255,0.45);
          font-size: 0.9rem;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 440px;
        }

        /* Feature tags row */
        .feature-tags {
          display: flex;
          gap: 20px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .feature-tag {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.5);
          font-weight: 600;
        }
        .feature-tag-icon {
          width: 18px;
          height: 18px;
          opacity: 0.7;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          align-items: center;
          margin-bottom: 40px;
        }
        .btn-primary {
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: #fff;
          border: none;
          padding: 14px 30px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(139,92,246,0.4);
        }
        .btn-outline {
          background: transparent;
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.2);
          padding: 13px 28px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .btn-outline:hover { border-color: #a78bfa; color: #a78bfa; }

        /* Phone scene */
        .phone-scene {
          position: relative;
          width: 380px;
          height: 620px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Orbiting tech icons */
        .orbit-ring {
          position: absolute;
          width: 380px;
          height: 500px;
          border-radius: 50%;
          border: 1px dashed rgba(139,92,246,0.12);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .orbit-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0; left: 0;
          animation: orbit-spin 22s linear infinite;
        }
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .orbit-icon {
          position: absolute;
          width: 58px;
          height: 58px;
          border-radius: 14px;
          background: rgba(15,12,45,0.95);
          border: 1px solid rgba(139,92,246,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 24px rgba(0,0,0,0.7), 0 0 12px rgba(139,92,246,0.12);
          animation: counter-spin 22s linear infinite;
        }
        @keyframes counter-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .orbit-icon svg { width: 30px; height: 30px; }

        /* Phone mockup — realistic dark device */
        .phone-mockup {
          position: relative;
          z-index: 2;
          width: 262px;
          height: 530px;
          border-radius: 52px;
          background: #0d0d1f;
          border: 14px solid #111128;
          box-shadow:
            0 0 0 1.5px rgba(255,255,255,0.07),
            inset 0 0 0 1px rgba(255,255,255,0.05),
            0 40px 80px rgba(0,0,0,0.85),
            0 0 60px rgba(139,92,246,0.18);
          overflow: hidden;
          animation: breathe 5s ease-in-out infinite;
        }
        @keyframes breathe {
          0%, 100% {
            box-shadow:
              0 0 0 1.5px rgba(255,255,255,0.07),
              inset 0 0 0 1px rgba(255,255,255,0.05),
              0 40px 80px rgba(0,0,0,0.85),
              0 0 40px rgba(139,92,246,0.12);
          }
          50% {
            box-shadow:
              0 0 0 1.5px rgba(255,255,255,0.09),
              inset 0 0 0 1px rgba(255,255,255,0.07),
              0 50px 100px rgba(0,0,0,0.9),
              0 0 90px rgba(139,92,246,0.28);
          }
        }

        /* Side buttons on phone — positioned on outer wrapper */
        .phone-scene-inner {
          position: relative;
          display: inline-block;
        }
        .phone-btn-right {
          position: absolute;
          right: -5px;
          top: 140px;
          width: 4px;
          height: 64px;
          background: #1a1a35;
          border-radius: 0 4px 4px 0;
          z-index: 10;
        }
        .phone-btn-left-1 {
          position: absolute;
          left: -5px;
          top: 110px;
          width: 4px;
          height: 32px;
          background: #1a1a35;
          border-radius: 4px 0 0 4px;
          z-index: 10;
        }
        .phone-btn-left-2 {
          position: absolute;
          left: -5px;
          top: 155px;
          width: 4px;
          height: 52px;
          background: #1a1a35;
          border-radius: 4px 0 0 4px;
          z-index: 10;
        }

        /* Dynamic island */
        .phone-island {
          position: absolute;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: 88px;
          height: 24px;
          background: #000;
          border-radius: 20px;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .island-camera {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #0f0f20;
          border: 1px solid rgba(255,255,255,0.1);
          position: relative;
        }
        .island-camera::after {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #1a1a3a;
        }

        /* Phone content */
        .phone-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, #0a0a1f 0%, #0d0d2a 60%, #0a0a1f 100%);
          position: relative;
          overflow: hidden;
        }

        /* Photo area inside phone */
        .phone-photo {
          flex: 1;
          position: relative;
          overflow: hidden;
        }
        .phone-photo img {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .phone-photo-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 50%;
          background: linear-gradient(to top, rgba(10,10,31,0.9) 0%, transparent 100%);
          z-index: 2;
        }

        /* Profile info inside phone */
        .phone-profile {
          position: absolute;
          bottom: 14px;
          left: 12px;
          right: 12px;
          z-index: 5;
        }
        .phone-profile-name {
          font-size: 0.78rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 2px;
          letter-spacing: -0.2px;
        }
        .phone-profile-handle {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.5);
          margin-bottom: 8px;
        }
        .phone-stats-row {
          display: flex;
          gap: 8px;
        }
        .phone-stat-box {
          flex: 1;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 6px 8px;
        }
        .phone-stat-label {
          font-size: 0.55rem;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 2px;
        }
        .phone-stat-value {
          font-size: 0.8rem;
          font-weight: 700;
          color: #fff;
        }
        .stat-bar {
          width: 28px;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, #7c3aed, #a855f7);
          margin-top: 3px;
        }

        /* Placeholder for photo */
        .photo-placeholder {
          width: 110px;
          height: 150px;
          border-radius: 16px;
          background: rgba(139,92,246,0.08);
          border: 1px dashed rgba(139,92,246,0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: rgba(255,255,255,0.3);
          font-size: 0.6rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-align: center;
        }
        .photo-placeholder svg { width: 32px; height: 32px; opacity: 0.35; }

        /* Scan line */
        .scan-line {
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent);
          animation: scan 4s ease-in-out infinite;
          z-index: 8;
        }
        @keyframes scan {
          0% { top: 8%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 92%; opacity: 0; }
        }

        /* Floating badges */
        .phone-badge {
          position: absolute;
          z-index: 5;
          background: rgba(10,10,30,0.88);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(139,92,246,0.2);
          border-radius: 12px;
          padding: 9px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #fff;
          white-space: nowrap;
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        }
        .badge-tl { top: 40px; left: -65px; animation: float1 3s ease-in-out infinite; }
        .badge-tr { top: 60px; right: -65px; animation: float2 3.5s ease-in-out infinite; }
        .badge-bl { bottom: 80px; left: -60px; animation: float2 4s ease-in-out infinite; }
        @keyframes float1 {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes float2 {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(6px); }
        }
        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50% { box-shadow: 0 0 0 4px rgba(34,197,94,0); }
        }
        .badge-purple-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #a855f7;
          flex-shrink: 0;
        }

        /* Stats */
        .stats {
          display: flex;
          gap: 16px;
          margin-bottom: 36px;
        }
        .stat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(139,92,246,0.15);
          border-radius: 14px;
          padding: 14px 18px;
          text-align: center;
          min-width: 90px;
          transition: border-color 0.3s;
        }
        .stat-card:hover { border-color: #8b5cf6; }
        .stat-card .num {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #a78bfa, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
        }
        .stat-card .lbl {
          font-size: 0.68rem;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Social */
        .social-links { display: flex; gap: 14px; }
        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: rgba(255,255,255,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
          text-decoration: none;
        }
        .social-btn:hover { border-color: #a78bfa; color: #a78bfa; }

        /* Mobile responsive */
        @media (max-width: 900px) {
          .hero {
            flex-direction: column;
            align-items: center;
            padding: 100px 24px 60px;
            gap: 50px;
            text-align: center;
            min-height: auto;
          }
          .hero-text { max-width: 100%; }
          .toggle-pills, .feature-tags, .social-links {
            justify-content: center;
          }
          .phone-scene {
            width: 280px;
            height: 480px;
          }
          .phone-mockup {
            width: 200px;
            height: 406px;
            border: 11px solid #111128;
            border-radius: 42px;
          }
          .badge-tl { left: -50px; }
          .badge-tr { right: -50px; }
          .badge-bl { left: -46px; }
          .navbar {
            padding: 16px 20px;
          }
          .nav-links { gap: 16px; }
          .nav-links a { font-size: 0.65rem; letter-spacing: 1px; }
          .scroll-hint { left: 20px; }
        }
        @media (max-width: 600px) {
          .hero {
            padding: 90px 16px 40px;
          }
          .hero-title {
            font-size: clamp(2.2rem, 9vw, 3rem);
            letter-spacing: -1px;
          }
          .phone-scene {
            width: 240px;
            height: 420px;
          }
          .phone-mockup {
            width: 175px;
            height: 355px;
            border: 10px solid #111128;
            border-radius: 36px;
          }
          .nav-links { display: none; }
          .nav-right { display: none; }
          .nav-logo-sub { display: none; }
          .navbar { padding: 12px 20px; }
          .stats { gap: 10px; }
          .stat-card { min-width: 75px; padding: 10px 12px; }
          .badge-tl, .badge-tr, .badge-bl { display: none; }
        }

        /* Projects section - full screen */
        .projects-section {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100vh;
          min-height: 620px;
          overflow: hidden;
        }
        .projects-full-bg { position: absolute; inset: 0; transition: background 0.7s ease; }
        .projects-full-overlay {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(105deg, rgba(5,5,26,0.97) 0%, rgba(5,5,26,0.78) 38%, rgba(5,5,26,0.2) 70%, transparent 100%);
        }
        .projects-section-label { position: absolute; top: 50px; left: 60px; z-index: 10; }
        .projects-eyebrow {
          font-size: 0.68rem; font-weight: 600; letter-spacing: 3px;
          text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 4px;
        }
        .projects-heading { font-size: 1.7rem; font-weight: 800; color: #fff; letter-spacing: -0.3px; }
        .projects-heading span {
          background: linear-gradient(90deg, #7c3aed, #a855f7, #ec4899);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .project-featured-info {
          position: absolute; bottom: 105px; left: 60px; z-index: 10; max-width: 460px;
        }
        .project-main-icon { font-size: 2.8rem; margin-bottom: 10px; line-height: 1; }
        .project-main-tag {
          font-size: 0.67rem; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.4); margin-bottom: 10px; display: flex; align-items: center; gap: 10px;
        }
        .project-main-tag::before { content: ''; display: inline-block; width: 22px; height: 1px; background: rgba(255,255,255,0.25); }
        .project-featured-title {
          font-size: clamp(2rem, 3.5vw, 3.2rem); font-weight: 800; color: #fff;
          line-height: 1.0; margin-bottom: 14px; letter-spacing: -1.5px; text-transform: uppercase;
        }
        .project-featured-desc { font-size: 0.84rem; color: rgba(255,255,255,0.48); line-height: 1.75; margin-bottom: 20px; }
        .project-main-tech { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 26px; }
        .project-main-tech span {
          font-size: 0.64rem; font-weight: 600; letter-spacing: 0.8px; padding: 5px 12px;
          border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.55); background: rgba(255,255,255,0.05);
        }
        .project-main-actions { display: flex; gap: 12px; }
        .project-btn-primary {
          padding: 11px 26px; border-radius: 50px; background: linear-gradient(90deg, #7c3aed, #a855f7);
          color: #fff; font-size: 0.78rem; font-weight: 600; text-decoration: none;
          border: none; cursor: pointer; transition: all 0.25s; font-family: inherit;
        }
        .project-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(124,58,237,0.45); }
        .project-btn-ghost {
          padding: 11px 22px; border-radius: 50px; background: transparent; color: rgba(255,255,255,0.55);
          font-size: 0.78rem; font-weight: 600; text-decoration: none;
          border: 1px solid rgba(255,255,255,0.15); cursor: pointer; transition: all 0.25s; font-family: inherit;
        }
        .project-btn-ghost:hover { border-color: rgba(255,255,255,0.4); color: #fff; }
        .projects-nav-strip { position: absolute; bottom: 44px; left: 60px; z-index: 10; display: flex; align-items: center; gap: 10px; }
        .projects-nav-btn {
          width: 46px; height: 46px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15); background: rgba(5,5,26,0.6);
          backdrop-filter: blur(8px); color: rgba(255,255,255,0.7);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 1.1rem; transition: all 0.2s; user-select: none;
        }
        .projects-nav-btn:hover { background: rgba(139,92,246,0.3); border-color: rgba(139,92,246,0.6); color: #fff; }
        .projects-nav-counter { margin-left: 14px; display: flex; align-items: baseline; gap: 4px; }
        .projects-nav-current { font-size: 1.8rem; font-weight: 800; color: #fff; letter-spacing: -2px; line-height: 1; }
        .projects-nav-total { font-size: 0.9rem; font-weight: 500; color: rgba(255,255,255,0.2); }
        .projects-cards-strip {
          position: absolute; right: 60px; bottom: 60px; z-index: 10;
          display: flex; gap: 14px; align-items: flex-end;
        }
        .project-portrait-card {
          width: 165px; height: 260px; border-radius: 20px; overflow: hidden;
          position: relative; cursor: pointer; flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.07); transition: all 0.3s ease;
        }
        .project-portrait-card:hover { transform: translateY(-8px); border-color: rgba(139,92,246,0.4); }
        .project-portrait-card.portrait-active {
          transform: translateY(-16px); border-color: rgba(139,92,246,0.6);
          box-shadow: 0 16px 48px rgba(124,58,237,0.35);
        }
        .project-portrait-bg { position: absolute; inset: 0; }
        .project-portrait-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(5,5,26,0.96) 0%, rgba(5,5,26,0.3) 55%, transparent 100%);
          display: flex; flex-direction: column; justify-content: flex-end; padding: 16px 14px;
        }
        .project-portrait-icon {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -65%);
          font-size: 2.4rem; line-height: 1;
        }
        .project-portrait-tag-sm {
          font-size: 0.55rem; font-weight: 600; letter-spacing: 1.5px;
          text-transform: uppercase; color: rgba(255,255,255,0.4); display: block; margin-bottom: 4px;
        }
        .project-portrait-title-sm { font-size: 0.8rem; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: -0.2px; line-height: 1.2; }
        @media (max-width: 900px) {
          .projects-section-label { top: 30px; left: 24px; }
          .project-featured-info { left: 24px; bottom: 300px; max-width: calc(100vw - 48px); }
          .projects-nav-strip { bottom: 260px; left: 24px; }
          .projects-cards-strip {
            left: 0; right: 0; bottom: 20px;
            transform: none;
            padding: 0 16px;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .projects-cards-strip::-webkit-scrollbar { display: none; }
          .project-portrait-card { width: 130px; height: 190px; flex-shrink: 0; }
          .project-portrait-card.portrait-active { transform: translateY(-10px); }
          .project-featured-title { font-size: 1.8rem; }
          .projects-full-overlay { background: linear-gradient(180deg, rgba(5,5,26,0.6) 0%, rgba(5,5,26,0.95) 45%, rgba(5,5,26,0.97) 100%); }
        }

        /* About section */
        .about-section {
          position: relative;
          z-index: 1;
          padding: 90px 60px 100px;
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }
        .about-divider {
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #7c3aed, #a855f7, #ec4899);
          margin: 0 auto 56px;
          border-radius: 2px;
        }
        .about-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 36px;
          letter-spacing: -0.5px;
        }
        .about-text {
          font-size: 0.95rem;
          line-height: 1.85;
          color: rgba(255,255,255,0.55);
          margin-bottom: 22px;
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
        }
        .about-text:last-child { margin-bottom: 0; }
        @media (max-width: 900px) {
          .about-section { padding: 60px 24px 80px; }
          .about-title { font-size: 1.5rem; }
          .about-text { font-size: 0.88rem; }
        }

        /* Scroll hint */
        .scroll-hint {
          position: fixed;
          bottom: 36px;
          left: 60px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255,255,255,0.2);
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          z-index: 10;
        }
        .scroll-line {
          width: 40px;
          height: 1px;
          background: rgba(255,255,255,0.12);
        }
      `}</style>

      {/* Stars */}
      <div className="stars" />

      {/* Ambient glows */}
      <div className="ambient-glow" style={{ background: "rgba(124,58,237,0.12)", width: "700px", height: "700px", top: "-200px", left: "-100px" }} />
      <div className="ambient-glow" style={{ background: "rgba(168,85,247,0.08)", width: "500px", height: "500px", bottom: "-200px", right: "100px" }} />
      <div className="ambient-glow" style={{ background: "rgba(236,72,153,0.05)", width: "400px", height: "400px", top: "30%", right: "30%" }} />

      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="nav-logo-wrap">
          <div className="nav-logo-badge">DP</div>
        </a>
        <ul className="nav-links">
          {["Home", "About", "Service", "Project", "Skill", "Contact"].map((item, i) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className={i === 0 ? "nav-active" : ""}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        {/* Left */}
        <div className="hero-text">
          <p className="hero-greeting chat-appear" style={{ animationDelay: '0.05s' }}>Hola, soy</p>

          <h1 className="hero-title animate-title">
            <span className="highlight">{typedText}</span>
            {!typingDone && <span className="typing-cursor" />}
          </h1>

          <p className="hero-subtitle chat-appear" style={{ animationDelay: '1.8s' }}>Desarrollador Backend &amp; Web</p>

          <p className="hero-desc chat-appear" style={{ animationDelay: '2.1s' }}>
            Enfocado en el área Backend y Frontend Web, con experiencia en aplicaciones funcionales, estructuradas y escalables. Especializado en JavaScript, TypeScript, Node.js, Next.js y bases de datos relacionales y no relacionales.
          </p>

          {/* Feature tags */}
          <div className="feature-tags chat-appear" style={{ animationDelay: '2.4s' }}>
            <div className="feature-tag">
              <svg className="feature-tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              JavaScript
            </div>
            <div className="feature-tag">
              <svg className="feature-tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
              </svg>
              TypeScript
            </div>
            <div className="feature-tag">
              <svg className="feature-tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
              </svg>
              Node.js
            </div>
          </div>

          <div className="hero-actions chat-appear" style={{ animationDelay: '2.6s' }}>
            <a href="#project" className="btn-primary">Ver Proyectos →</a>
          </div>

          <div className="social-links chat-appear" style={{ animationDelay: '2.8s' }}>
            <a href="https://github.com" target="_blank" rel="noopener" className="social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" className="social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" className="social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Phone scene */}
        <div className="phone-scene">
          {/* Orbit ring decoration */}
          <div className="orbit-ring" />

          {/* Orbiting tech icons */}
          <div className="orbit-container">
            {techIcons.map((tech) => {
              const radius = 150;
              const rad = (tech.angle * Math.PI) / 180;
              const cx = 50 + (radius / 3.0) * Math.cos(rad);
              const cy = 50 + (radius / 4.8) * Math.sin(rad);
              return (
                <div
                  key={tech.label}
                  className="orbit-icon"
                  style={{
                    left: `${cx}%`,
                    top: `${cy}%`,
                    transform: "translate(-50%, -50%)",
                    color: tech.color,
                  }}
                >
                  {(tech as any).url
                    ? <img src={(tech as any).url} width={32} height={32} alt={tech.label} style={{ objectFit: 'contain' }} />
                    : <div dangerouslySetInnerHTML={{ __html: tech.svg }} />}
                </div>
              );
            })}
          </div>

          {/* Phone mockup */}
          <div className="phone-scene-inner">
            {/* Side buttons — outside phone frame */}
            <div className="phone-btn-right" />
            <div className="phone-btn-left-1" />
            <div className="phone-btn-left-2" />

          <div className="phone-mockup" ref={phoneRef}>
            {/* Dynamic island */}
            <div className="phone-island">
              <div className="island-camera" />
            </div>

            <div className="phone-content">
              <div className="scan-line" />

              <div className="phone-photo">
                <img src="/perfil.jpg" alt="Danieth Puentes" />
                <div className="phone-photo-overlay" />
              </div>

              {/* Profile info */}
              <div className="phone-profile">
                <div className="phone-profile-name">Danieth Puentes ✓</div>
                <div className="phone-profile-handle">@danieth · dev</div>
                <div className="phone-stats-row">
                  <div className="phone-stat-box">
                    <div className="phone-stat-label">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                      Proyectos
                    </div>
                    <div className="phone-stat-value">40+</div>
                  </div>
                  <div className="phone-stat-box">
                    <div className="phone-stat-label">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                      Engagement
                    </div>
                    <div className="phone-stat-value" style={{ color: "#a855f7" }}>Alto</div>
                    <div className="stat-bar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Floating badges */}
          <div className="phone-badge badge-tr">
            <span style={{ fontSize: "0.85rem" }}>📱</span>
            Responsive
          </div>
          <div className="phone-badge badge-bl">
            <div className="badge-dot" />
            Available for work
          </div>
          <div className="phone-badge badge-tl" style={{ fontSize: "0.7rem" }}>
            <div className="badge-purple-dot" />
            Full Stack Dev
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section" id="project">
        {/* Full-screen gradient background */}
        <div className="projects-full-bg" style={{ background: projects[activeProject].gradient }} />
        <div className="projects-full-overlay" />

        {/* Section label — top left */}
        <div className="projects-section-label">
          <p className="projects-eyebrow">— Trabajos destacados</p>
          <h2 className="projects-heading">Mis <span>Proyectos</span></h2>
        </div>

        {/* Featured project info — bottom left */}
        <div className="project-featured-info">
          <div className="project-main-icon">{projects[activeProject].icon}</div>
          <p className="project-main-tag">{projects[activeProject].tag}</p>
          <h3 className="project-featured-title">{projects[activeProject].title}</h3>
          <p className="project-featured-desc">{projects[activeProject].desc}</p>
          <div className="project-main-tech">
            {projects[activeProject].tech.map(t => <span key={t}>{t}</span>)}
          </div>
          <div className="project-main-actions">
            <a href={projects[activeProject].demo} className="project-btn-primary">Ver Demo →</a>
            <a href={projects[activeProject].github} className="project-btn-ghost">GitHub</a>
          </div>
        </div>

        {/* Navigation — bottom left */}
        <div className="projects-nav-strip">
          <button className="projects-nav-btn" onClick={() => setActiveProject(a => (a - 1 + projects.length) % projects.length)}>←</button>
          <button className="projects-nav-btn" onClick={() => setActiveProject(a => (a + 1) % projects.length)}>→</button>
          <div className="projects-nav-counter">
            <span className="projects-nav-current">{String(activeProject + 1).padStart(2, '0')}</span>
            <span className="projects-nav-total"> / {String(projects.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Portrait cards — bottom right */}
        <div className="projects-cards-strip">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`project-portrait-card${i === activeProject ? ' portrait-active' : ''}`}
              onClick={() => setActiveProject(i)}
            >
              <div className="project-portrait-bg" style={{ background: p.gradient }} />
              <div className="project-portrait-overlay">
                <span className="project-portrait-tag-sm">{p.tag.split(' · ')[0]}</span>
                <p className="project-portrait-title-sm">{p.title}</p>
              </div>
              <div className="project-portrait-icon">{p.icon}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Acerca de mí */}
      <section className="about-section" id="about">
        <div className="about-divider" />
        <h2 className="about-title">Acerca de mí</h2>
        <p className="about-text">
          Soy desarrollador de software enfocado en el área Backend y frontend desarrollo web, con experiencia en la creación
          de aplicaciones funcionales, estructuradas y escalables. Me especializo en el uso de tecnologías como JavaScript,
          TypeScript, Node.js, Next.js y bases de datos relacionales y no relacionales.
        </p>
        <p className="about-text">
          Me caracterizo por ser una persona responsable, comprometida y orientada a resultados. Disfruto trabajar en equipo,
          asumir retos técnicos y aportar soluciones eficientes que generen valor real en cada proyecto.
        </p>
        <p className="about-text">
          Actualmente continúo fortaleciendo mis habilidades en arquitectura backend, computación en la nube y buenas
          prácticas de desarrollo.
        </p>
      </section>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <div className="scroll-line" />
        Scroll
      </div>
    </main>
  );
}
