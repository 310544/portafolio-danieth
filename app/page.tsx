"use client";
import { useRef, useState, useEffect } from "react";

const techIcons = [
  { label: "React", angle: 0.0, color: "#61DAFB", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.468a23.456 23.456 0 0 0-1.364-3.578l-.101-.213.101-.213a23.273 23.273 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z"/></svg>` },
  { label: "JavaScript", angle: 27.7, color: "#F7DF1E", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>` },
  { label: "TypeScript", angle: 55.4, color: "#3178C6", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>` },
  { label: "Node.js", angle: 83.1, color: "#339933", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", svg: `` },
  { label: "Next.js", angle: 110.8, color: "#ffffff", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", svg: `` },
  { label: "MongoDB", angle: 138.5, color: "#47A248", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.045-.045-.765-2.405-.765-2.405z"/></svg>` },
  { label: "MySQL", angle: 166.2, color: "#4479A1", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.55h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.55zm4.017-4.08h-2.35c.03.63.05 1.2.064 1.71h2.93l-.136.89h-3.73c-.138-1.77-.17-3.59-.1-5.46l3.86-.01-.048.87h-2.88v1.394h2.35zm7.59 4.08h-1.477l-2.248-4.01c.225 1.362.34 2.658.344 3.988h-.886c-.003-1.737-.124-3.44-.36-5.1h1.116l2.318 4.044c-.218-1.35-.308-2.638-.268-3.73h.879c.086 1.646.186 3.33.582 4.808zm4.017-4.08h-2.35c.03.63.05 1.2.064 1.71h2.93l-.136.89h-3.73c-.138-1.77-.17-3.59-.1-5.46l3.86-.01-.048.87h-2.88v1.394h2.35zm-.536-5.38c.16-.244.302-.506.502-.716l-.01-.007c-.253-.115-.53-.172-.802-.172-.306 0-.62.07-.892.214-.5.266-.893.696-1.073 1.225-.122.37-.08.776.1 1.11.16.293.426.515.732.63.283.107.59.108.873.003.294-.11.543-.313.694-.577l-.01-.008c-.06.03-.12.055-.184.07-.354.087-.72-.1-.835-.44-.08-.235-.026-.503.127-.698.07-.09.163-.16.263-.21z"/></svg>` },
  { label: "PostgreSQL", angle: 193.8, color: "#4169E1", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8 2 5 4.5 5 8c0 1.5.5 2.9 1.4 4-.9 1-1.4 2.4-1.4 3.8 0 3.4 3.1 6.2 7 6.2s7-2.8 7-6.2c0-1.4-.5-2.7-1.4-3.8C18.5 10.9 19 9.5 19 8c0-3.5-3-6-7-6zm0 2c2.8 0 5 1.8 5 4 0 1-.4 2-1.1 2.7C14.8 9.9 13.5 9.4 12 9.4s-2.8.5-3.9 1.3C7.4 10 7 9 7 8c0-2.2 2.2-4 5-4zm0 7.4c1.1 0 2.1.3 2.9.8.5.3.9.7 1.2 1.1.3.5.4 1 .4 1.5v.2c-.1 2.3-2 4-4.5 4S7.1 17.3 7 15v-.2c0-.5.1-1 .4-1.5.3-.4.7-.8 1.2-1.1.8-.5 1.8-.8 2.9-.8h.5zm-.5 2c-.8 0-1.5.6-1.5 1.3s.7 1.3 1.5 1.3 1.5-.6 1.5-1.3-.7-1.3-1.5-1.3z"/></svg>` },
  { label: "GitHub", angle: 221.5, color: "#ffffff", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>` },
  { label: "Meta Ads", angle: 249.2, color: "#0467DF", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/></svg>` },
  { label: "Facebook", angle: 276.9, color: "#0866FF", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>` },
  { label: "Instagram", angle: 304.6, color: "#E4405F", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>` },
  { label: "WhatsApp", angle: 332.3, color: "#25D366", svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>` },
];

const projects = [
  {
    title: "Medencers",
    tag: "Full Stack · Next.js",
    desc: "Plataforma que conecta marcas con creadores de contenido validados. Búsqueda por nicho, métricas reales de engagement y negociación segura entre ambas partes.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/medencers.png",
    github: "#",
    demo: "https://www.medencers.com/",
  },
  {
    title: "Vayric",
    tag: "Frontend · Dashboard SaaS",
    desc: "Dashboard para marcas que gestionan campañas con creadores: seguimiento de alcance y engagement en TikTok, Instagram, X y YouTube, analíticas en vivo y buscador de creadores asistido por IA.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: "/vayric.png",
    github: "#",
    demo: "https://vayric.com/",
  },
  {
    title: "Avofy AI",
    tag: "Full Stack · SaaS con IA",
    desc: "Plataforma de seguimiento nutricional para nutricionistas y coaches. Los usuarios registran cada comida con una foto que la IA analiza, y el profesional ve macros, adherencia y alertas de riesgo en un solo panel.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: "/avofy.png",
    github: "#",
    demo: "https://macrofyai.com/es",
  },
  {
    title: "Serviorinoquia SAS",
    tag: "Frontend · Sitio corporativo",
    desc: "Sitio para una empresa de transporte especial de pasajeros: servicios, flota y habilitaciones, con solicitud de cotización y contacto directo por WhatsApp.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/transportadora.png",
    github: "#",
    demo: "https://tranportadora.vercel.app/",
  },
  {
    title: "REST API E-Commerce",
    tag: "Backend · Node.js",
    desc: "API robusta para e-commerce con autenticación JWT, gestión de productos, carrito de compras e integración de pasarela de pagos.",
    tech: ["Node.js", "TypeScript", "PostgreSQL"],
    image: "/tienda-ecoshop.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Dashboard Financiero",
    tag: "Full Stack · Next.js",
    desc: "Panel de control con gráficas en tiempo real, reportes exportables, autenticación por roles y gestión de usuarios.",
    tech: ["Next.js", "React", "MongoDB"],
    image: "/pixabay.jpg",
    github: "#",
    demo: "#",
  },
];

// Servicios flotando alrededor del mockup, cada uno en su posición
const servicios = [
  { label: "Publicidad", icon: "📣", pos: "badge-s1" },
  { label: "Marketing", icon: "📈", pos: "badge-s2" },
  { label: "Software", icon: "💻", pos: "badge-s3" },
  { label: "Chatbots", icon: "💬", pos: "badge-s4" },
  { label: "Web", icon: "🌐", pos: "badge-s5" },
];

export default function Home() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const FULL_TITLE = "DANIETH PUENTES";

  // Entrada escalonada de las tarjetas de proyectos al hacer scroll
  useEffect(() => {
    const grid = document.querySelector<HTMLElement>(".projects-grid");
    if (!grid || typeof IntersectionObserver === "undefined") return;
    grid.classList.add("js-reveal");
    const cards = grid.querySelectorAll<HTMLElement>(".project-card");
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    cards.forEach(c => {
      // red de seguridad: si ya esta en pantalla al montar, se muestra sin esperar al observer
      if (c.getBoundingClientRect().top < window.innerHeight) c.classList.add("is-in");
      else io.observe(c);
    });
    return () => io.disconnect();
  }, []);
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

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
          justify-content: center;
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
          gap: 12px;
          list-style: none;
        }
        .nav-links a {
          display: inline-flex;
          align-items: center;
          padding: 9px 26px;
          border-radius: 50px;
          border: 1px solid rgba(139,92,246,0.35);
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          background: rgba(255,255,255,0.03);
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          position: relative;
          overflow: hidden;
        }
        .nav-links a::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #7c3aed, #a855f7);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50px;
        }
        .nav-links a span { position: relative; z-index: 1; }
        .nav-links a:hover {
          color: #fff;
          border-color: transparent;
          box-shadow: 0 0 22px rgba(124,58,237,0.5), 0 4px 16px rgba(124,58,237,0.3);
          transform: translateY(-2px);
        }
        .nav-links a:hover::before { opacity: 1; }
        .nav-contact a {
          background: linear-gradient(90deg, #7c3aed, #a855f7) !important;
          border-color: transparent !important;
          color: #fff !important;
        }
        .nav-contact a::before { opacity: 0 !important; }
        .nav-contact a:hover {
          box-shadow: 0 0 28px rgba(124,58,237,0.65), 0 4px 20px rgba(124,58,237,0.4) !important;
          transform: translateY(-2px) scale(1.03) !important;
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
        /* Solo movil: los servicios que en escritorio flotan junto al mockup */
        .servicios-movil { display: none; }
        .servicio-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(10,10,30,0.88);
          border: 1px solid rgba(139,92,246,0.2);
          border-radius: 999px;
          padding: 7px 13px;
          font-size: 0.68rem;
          font-weight: 600;
          color: #fff;
          white-space: nowrap;
          box-shadow: 0 6px 18px rgba(0,0,0,0.45);
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
        /* Los 5 servicios repartidos alrededor del mockup */
        .badge-s1 { top: 30px;     left: -78px;  animation: float1 3s   ease-in-out infinite; }
        .badge-s2 { top: 105px;    right: -72px; animation: float2 3.5s ease-in-out infinite; }
        .badge-s3 { top: 255px;    left: -92px;  animation: float1 4s   ease-in-out infinite; }
        .badge-s4 { bottom: 170px; right: -80px; animation: float2 3.2s ease-in-out infinite; }
        .badge-s5 { bottom: 60px;  left: -64px;  animation: float1 3.8s ease-in-out infinite; }
        @keyframes float1 {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes float2 {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(6px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .phone-badge { animation: none !important; }
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
          .phone-badge { font-size: 0.66rem; padding: 8px 12px; }
          .badge-s1 { top: 20px;     left: -56px; }
          .badge-s2 { top: 80px;     right: -52px; }
          .badge-s3 { top: 195px;    left: -66px; }
          .badge-s4 { bottom: 130px; right: -58px; }
          .badge-s5 { bottom: 40px;  left: -46px; }
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
          .phone-badge { display: none; }
          .servicios-movil {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            margin-bottom: 30px;
          }
        }

        /* Projects section - grid */
        .projects-section {
          position: relative;
          padding: 110px 60px 120px;
          background:
            radial-gradient(ellipse at 12% 0%, rgba(124,58,237,0.14) 0%, transparent 55%),
            radial-gradient(ellipse at 88% 100%, rgba(236,72,153,0.08) 0%, transparent 50%),
            #05051a;
        }
        .projects-section-label { margin-bottom: 46px; }
        .projects-eyebrow {
          font-size: 0.7rem; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 10px;
        }
        .projects-heading {
          font-size: 2.5rem; font-weight: 800; color: #fff;
          letter-spacing: -1.2px; line-height: 1.05;
        }
        .projects-heading span {
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
          gap: 26px;
        }

        .project-card {
          position: relative; display: block; text-decoration: none;
          border-radius: 18px; overflow: hidden;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          transition:
            opacity 0.75s cubic-bezier(0.22,1,0.36,1),
            transform 0.75s cubic-bezier(0.22,1,0.36,1),
            border-color 0.4s ease,
            box-shadow 0.4s ease;
        }
        /* Solo se ocultan si el JS activo el reveal: sin JS quedan visibles */
        .projects-grid.js-reveal .project-card { opacity: 0; transform: translateY(30px); }
        .projects-grid.js-reveal .project-card.is-in { opacity: 1; transform: translateY(0); }
        .project-card-link { cursor: pointer; }
        .project-card-link:hover {
          border-color: rgba(139,92,246,0.5);
          box-shadow: 0 20px 50px rgba(124,58,237,0.28);
        }
        .projects-grid.js-reveal .project-card-link.is-in:hover,
        .project-card-link:hover { transform: translateY(-6px); }

        .project-card-media {
          position: relative; aspect-ratio: 16 / 10;
          overflow: hidden; background: #0a0a24;
        }
        .project-card-img {
          position: absolute; inset: 0;
          background-size: cover; background-position: center top;
          filter: saturate(0.8) brightness(0.78);
          transform: scale(1.01);
          transition: transform 1.1s cubic-bezier(0.22,1,0.36,1), filter 0.5s ease;
        }
        .project-card:hover .project-card-img {
          transform: scale(1.08);
          filter: saturate(1) brightness(1);
        }
        .project-card-shade {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(5,5,26,0.15) 30%, rgba(5,5,26,0.92) 100%);
        }
        .project-card-open {
          position: absolute; top: 12px; right: 12px; z-index: 2;
          padding: 6px 11px; border-radius: 999px;
          font-size: 0.66rem; font-weight: 700; letter-spacing: 0.4px;
          color: #fff; background: rgba(124,58,237,0.9);
          border: 1px solid rgba(255,255,255,0.22);
          backdrop-filter: blur(6px);
          opacity: 0; transform: translateY(-8px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .project-card-link:hover .project-card-open { opacity: 1; transform: translateY(0); }

        .project-card-body { position: relative; padding: 20px 22px 24px; }
        .project-card-tag {
          display: flex; align-items: center; gap: 9px;
          font-size: 0.62rem; font-weight: 600; letter-spacing: 1.6px;
          text-transform: uppercase; color: rgba(255,255,255,0.42); margin-bottom: 9px;
        }
        .project-card-tag::before {
          content: ""; width: 20px; height: 1px;
          background: linear-gradient(90deg, #a855f7, transparent);
        }
        .project-card-title {
          font-size: 1.18rem; font-weight: 700; color: #fff;
          letter-spacing: -0.4px; margin-bottom: 9px;
        }
        .project-card-desc {
          font-size: 0.82rem; line-height: 1.65; color: rgba(255,255,255,0.45);
          margin-bottom: 16px;
          display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
        }
        .project-card-tech { display: flex; gap: 7px; flex-wrap: wrap; }
        .project-card-tech span {
          font-size: 0.66rem; font-weight: 500; color: rgba(255,255,255,0.6);
          padding: 4px 10px; border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .project-card-cta {
          display: flex; align-items: center; gap: 7px; margin-top: 16px;
          font-size: 0.78rem; font-weight: 600; color: #a855f7;
        }
        .project-card-cta span {
          display: inline-block;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .project-card-link:hover .project-card-cta span { transform: translateX(5px); }
        .project-card-soon {
          margin-top: 16px; font-size: 0.75rem; font-weight: 500;
          color: rgba(255,255,255,0.28);
        }

        @media (max-width: 900px) {
          .projects-section { padding: 70px 24px 80px; }
          .projects-heading { font-size: 1.9rem; }
          .projects-grid { grid-template-columns: 1fr; gap: 20px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .project-card, .project-card-img, .project-card-open, .project-card-cta span {
            transition: none !important;
          }
          .projects-grid.js-reveal .project-card { opacity: 1; transform: none; }
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
        /* Astronauta flotando al costado del texto */
        .about-astro {
          position: absolute;
          top: 40px;
          right: -190px;
          width: 300px;
          height: auto;
          pointer-events: none;
          user-select: none;
          filter: drop-shadow(0 0 30px rgba(139,92,246,0.3));
          animation: astro-float 5s ease-in-out infinite;
        }
        @keyframes astro-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        @media (max-width: 1300px) {
          .about-astro {
            position: static;
            display: block;
            width: 210px;
            margin: 0 auto 30px;
          }
        }
        @media (max-width: 900px) {
          .about-section { padding: 60px 24px 80px; }
          .about-title { font-size: 1.5rem; }
          .about-text { font-size: 0.88rem; }
          .about-astro { width: 170px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-astro { animation: none; }
        }

        /* Scroll hint */
        .scroll-hint {
          position: fixed;
          bottom: 36px;
          left: 60px;
          pointer-events: none;
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

        /* Botón flotante de WhatsApp */
        .wa-float {
          position: fixed;
          right: 28px;
          bottom: 28px;
          z-index: 60;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 22px 8px 8px;
          border-radius: 999px;
          background: transparent;
          text-decoration: none;
          transition: transform 0.25s ease;
        }
        /* Superficie blanca del pill: va en un pseudo-elemento para que los
           anillos puedan pintarse por detrás de ella (z-index negativo). */
        .wa-float::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: 999px;
          background: rgba(10,10,30,0.9);
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.55), 0 0 0 1px rgba(139,92,246,0.22);
          transition: box-shadow 0.25s ease;
        }
        .wa-float:hover { transform: translateY(-2px) scale(1.03); }
        .wa-float:hover::before {
          box-shadow: 0 14px 38px rgba(0,0,0,0.6), 0 0 0 1px rgba(37,211,102,0.45);
        }
        .wa-float:hover .wa-float-icon,
        .wa-float:hover .wa-ring { animation-play-state: paused; }
        /* Ondas que salen de la bolita, por detrás del pill blanco */
        .wa-ring {
          position: absolute;
          left: 8px;
          top: 50%;
          width: 44px;
          height: 44px;
          margin-top: -22px;
          z-index: -1;
          border-radius: 50%;
          border: 2px solid #25D366;
          pointer-events: none;
          opacity: 0;
          animation: wa-ring 2.2s ease-out infinite;
        }
        .wa-ring-2 { animation-delay: 1.1s; }
        @keyframes wa-ring {
          0%   { transform: scale(1);   opacity: 0.65; }
          70%  { opacity: 0; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .wa-float-text { position: relative; z-index: 1; }
        .wa-float-icon {
          position: relative;
          z-index: 1;
          animation: wa-pulse 2.2s ease-in-out infinite;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 4px 12px rgba(37,211,102,0.45);
        }
        .wa-float-icon svg { width: 24px; height: 24px; }
        .wa-float-text { display: flex; flex-direction: column; line-height: 1.15; }
        .wa-float-label {
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: rgba(37,211,102,0.85);
        }
        .wa-float-cta {
          font-size: 0.92rem;
          font-weight: 500;
          letter-spacing: 0.3px;
          color: #ffffff;
        }
        /* La bolita se ensancha, se empequeña y vibra */
        @keyframes wa-pulse {
          0%   { transform: scale(1)    rotate(0deg); }
          8%   { transform: scale(1.11) rotate(-9deg); }
          16%  { transform: scale(1.05) rotate(8deg); }
          24%  { transform: scale(1.11) rotate(-6deg); }
          32%  { transform: scale(1.04) rotate(5deg); }
          40%  { transform: scale(1.08) rotate(-3deg); }
          50%  { transform: scale(1)    rotate(0deg); }
          100% { transform: scale(1)    rotate(0deg); }
        }
        @media (max-width: 600px) {
          .wa-float { right: 16px; bottom: 16px; padding: 7px 18px 7px 7px; gap: 10px; }
          .wa-float-icon { width: 38px; height: 38px; }
          .wa-float-icon svg { width: 21px; height: 21px; }
          .wa-float-cta { font-size: 0.86rem; }
          .wa-ring { left: 7px; width: 38px; height: 38px; margin-top: -19px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-float-icon { animation: none; }
          .wa-ring { display: none; }
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
        <ul className="nav-links">
          <li>
            <a href="#project"><span>Proyectos</span></a>
          </li>
          <li className="nav-contact">
            <a href="#contact"><span>Contacto</span></a>
          </li>
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

          {/* En movil los badges del mockup se ocultan, asi que los servicios
              se muestran aqui como chips */}
          <div className="servicios-movil chat-appear" style={{ animationDelay: '2.5s' }}>
            {servicios.map(s => (
              <span key={s.label} className="servicio-chip">
                <span style={{ fontSize: "0.8rem" }}>{s.icon}</span>
                {s.label}
              </span>
            ))}
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
              const cx = (50 + (radius / 3.0) * Math.cos(rad)).toFixed(3);
              const cy = (50 + (radius / 4.8) * Math.sin(rad)).toFixed(3);
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
          {servicios.map(s => (
            <div key={s.label} className={`phone-badge ${s.pos}`}>
              <span style={{ fontSize: "0.85rem" }}>{s.icon}</span>
              {s.label}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section" id="project">
        <div className="projects-section-label">
          <p className="projects-eyebrow">Trabajos destacados</p>
          <h2 className="projects-heading">Mis <span>Proyectos</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => {
            const esLink = p.demo.startsWith("http");
            return (
              <a
                key={p.title}
                className={`project-card${esLink ? " project-card-link" : ""}`}
                style={{ transitionDelay: `${i * 90}ms` }}
                href={esLink ? p.demo : undefined}
                target={esLink ? "_blank" : undefined}
                rel={esLink ? "noopener noreferrer" : undefined}
                title={esLink ? `Abrir ${p.title}` : p.title}
              >
                <div className="project-card-media">
                  <div
                    className="project-card-img"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                  <div className="project-card-shade" />
                  {esLink && <span className="project-card-open">Visitar ↗</span>}
                </div>

                <div className="project-card-body">
                  <p className="project-card-tag">{p.tag}</p>
                  <h3 className="project-card-title">{p.title}</h3>
                  <p className="project-card-desc">{p.desc}</p>
                  <div className="project-card-tech">
                    {p.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                  {esLink
                    ? <p className="project-card-cta">Ver proyecto <span>→</span></p>
                    : <p className="project-card-soon">Demo no disponible</p>}
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Acerca de mí */}
      <section className="about-section" id="about">
        <img
          className="about-astro"
          src="/astronauta.png"
          alt="Astronauta flotando mientras programa en un portátil"
          width={547}
          height={456}
        />
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

      {/* Botón flotante de WhatsApp */}
      <a
        className="wa-float"
        href="https://wa.me/573125414817"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbeme por WhatsApp al 312 541 4817"
      >
        <span className="wa-ring" aria-hidden="true" />
        <span className="wa-ring wa-ring-2" aria-hidden="true" />
        <span
          className="wa-float-icon"
          dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>` }}
        />
        <span className="wa-float-text">
          <span className="wa-float-label">WhatsApp</span>
          <span className="wa-float-cta">Contáctame</span>
        </span>
      </a>
    </main>
  );
}
