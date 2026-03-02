import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Shield,
  Layers,
  Cloud,
  BarChart3,
  Settings2,
} from "lucide-react";
import "../styles/Home.css";
import CountUp from "react-countup";

import Movistar from "../images/movistar.png";
import Nextel from "../images/nextel.png";
import Novell from "../images/novell.png";
import Oracle from "../images/oracle.png";
import Ositran from "../images/ositran.png";
import Telcel from "../images/telcel.png";
import Deloite from "../images/deloitte.png";
import BBVA from "../images/bbva.png";
import Aserta from "../images/aserta.png";
import Claro from "../images/claro4.png";

const tiles = [
  {
    icon: Shield,
    tag: "IAM & Ciberseguridad",
    color: "#e8631a",
    title: "Gestión de Identidades y Accesos",
    desc: "Identidad única y control de acceso unificado para proteger tu negocio digital.",
  },
  {
    icon: Layers,
    tag: "Integración · ML · Big Data",
    color: "#0f2044",
    title: "Arquitectura Digital",
    desc: "Automatizamos e integramos tus procesos en verdaderos ecosistemas digitales.",
  },
  {
    icon: Cloud,
    tag: "Microservicios · Event-Driven",
    color: "#0891b2",
    title: "Cloud y Multi-Cloud",
    desc: "Arquitecturas modernas en la nube con microservicios y eventos.",
  },
  {
    icon: BarChart3,
    tag: "Datos en tiempo real",
    color: "#059669",
    title: "Big Data & IoT",
    desc: "Análisis y gestión de datos masivos para decisiones inteligentes.",
  },
  {
    icon: Settings2,
    tag: "SRE · IA Aplicada",
    color: "#7c3aed",
    title: "Infraestructura y Operaciones",
    desc: "IA aplicada al ciclo de vida completo de tu infraestructura.",
  },
];

const clients = [
  { name: "ASERTA", letter: "AS", color: "#e63946", logo: Aserta },
  { name: "BBVA", letter: "BB", color: "#00a3e0", logo: BBVA },
  { name: "Claro", letter: "CL", color: "#da0000", logo: Claro },
  { name: "Deloitte", letter: "DL", color: "#86bc25", logo: Deloite },
  { name: "Movistar", letter: "MV", color: "#019df4", logo: Movistar },
  { name: "Oracle", letter: "OR", color: "#f80000", logo: Oracle },
  { name: "Novell", letter: "NV", color: "#c0392b", logo: Novell },
  { name: "Nextel", letter: "G4", color: "#a01010", logo: Nextel },
  { name: "Ositran", letter: "TL", color: "#000000", logo: Ositran },
  { name: "Telcel", letter: "TL", color: "#000000", logo: Telcel },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const stats = [
  { v: 20, suffix: "+", l: "Años en Latam" },
  { v: 3, l: "Países con oficinas" },
  { v: 10, suffix: "+", l: "Clientes globales" },
];

export default function Home() {
  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="home-hero__bg">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1400 900"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M80 0L0 0 0 80"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.8"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <polygon
              points="1100,0 1400,0 1400,400"
              fill="white"
              opacity="0.4"
            />
            <polygon points="0,600 200,900 0,900" fill="white" opacity="0.2" />
          </svg>
        </div>
        <div className="home-hero__glow" />

        <motion.div
          className="home-hero__badge"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="home-hero__badge-dot" />
          <span className="home-hero__badge-text">
            Lima · Buenos Aires · Ciudad de México
          </span>
        </motion.div>

        <motion.h1
          className="home-hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7 }}
        >
          El futuro de tu negocio <span>se construye</span> con tecnología
          inteligente
        </motion.h1>

        <motion.p
          className="home-hero__sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Más de 20 años implementando arquitecturas digitales de alto impacto
          en Latinoamérica.
        </motion.p>

        <motion.div
          className="home-hero__cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.6 }}
        >
          <Link to="/servicios">
            <button className="btn btn--primary">
              Nuestros Servicios <ArrowRight size={17} />
            </button>
          </Link>
          <Link to="/nosotros">
            <button className="btn btn--ghost">¿Quiénes somos?</button>
          </Link>
        </motion.div>

        <motion.div
          className="home-hero__stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {stats.map((s) => (
            <div key={s.l} className="home-hero__stat">
              <div className="home-hero__stat-val">
                <CountUp
                  end={s.v}
                  start={0}
                  duration={4}
                  suffix={s.suffix || ""}
                />
              </div>
              <div className="home-hero__stat-label">{s.l}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="home-hero__scroll"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </section>

      {/* ── SERVICE TILES ── */}
      <section className="home-services">
        <div className="container">
          <div className="section-header">
            <span className="label">Lo que hacemos</span>
            <h2 className="heading-lg">Nuestros Servicios</h2>
            <div className="divider" />
            <p className="body-sm" style={{ marginTop: "0.75rem" }}>
              Soluciones de clase mundial con equipos locales y precios
              competitivos.
            </p>
          </div>

          <motion.div
            className="home-services__grid"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {tiles.map(({ icon: Icon, tag, color, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                transition={{ duration: 0.55 }}
              >
                <Link
                  to="/servicios"
                  className="home-tile"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="home-tile::before"
                    style={{ background: color }}
                  />
                  <div
                    className="icon-box"
                    style={{
                      background: `${color}15`,
                      border: `1.5px solid ${color}30`,
                    }}
                  >
                    <Icon size={22} color={color} />
                  </div>
                  <p className="home-tile__tag" style={{ color }}>
                    {tag}
                  </p>
                  <h3 className="home-tile__title">{title}</h3>
                  <p className="home-tile__desc">{desc}</p>
                  <span className="home-tile__arrow" style={{ color }}>
                    Ver más <ArrowRight size={14} />
                  </span>
                  <style>{`.home-tile:hover { border-color: ${color}40 !important; }`}</style>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CLIENTS STRIP ── */}
      <section className="home-clients">
        <div className="container">
          <div className="section-header" style={{ marginBottom: "2.5rem" }}>
            <span className="label">Confían en nosotros</span>
            <h2 className="label-client">Clientes &amp; Proyectos</h2>
            <div className="divider" />
          </div>


          <div className="home-clients__carousel">
            <div className="home-clients__track">
                
              {[...clients, ...clients].map((c, i) => (
                <div key={i} className="home-clients__item">
                    {c.logo && (
                      <img
                        src={c.logo}
                        alt={c.name}
                        className="home-clients__logo-img"
                      />
                    )}
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <motion.section
        className="home-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <h2 className="home-cta__title">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="home-cta__sub">
            Conversemos sobre tu próximo proyecto digital.
          </p>
          <div className="home-cta__btns">
            <Link to="/contacto">
              <button className="btn btn--primary">
                Contáctanos <ArrowRight size={17} />
              </button>
            </Link>
            <Link to="/servicios">
              <button className="btn--services">Ver servicios</button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
