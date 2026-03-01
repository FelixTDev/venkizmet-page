import { motion } from 'framer-motion'
import { Shield, Layers, Cloud, BarChart3, Settings2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import '../styles/Servicios.css'

const services = [
    {
        icon: Shield, color: '#e8631a',
        tag: 'IAM & Ciberseguridad',
        title: 'Gestión de Identidades y Control de Accesos',
        desc: 'Aseguramos continuamente tu negocio digital con una identidad única y un control de acceso unificado, protegiendo cada punto de entrada de tu organización.',
        features: ['CIAM / CIAM', 'Single Sign-On', 'MFA', 'Federación de Identidades', 'Gestión Privilegiada (PAM)'],
    },
    {
        icon: Layers, color: '#0f2044',
        tag: 'Integración · ML · Big Data',
        title: 'Arquitectura Digital',
        desc: 'Automatizamos e integramos tus procesos de negocio para transformarlos en verdaderos ecosistemas digitales capaces de adaptarse y escalar.',
        features: ['Integración de Aplicaciones', 'Aprendizaje Máquina', 'Analítica Avanzada', 'APIs & Middleware', 'Automatización RPA'],
    },
    {
        icon: Cloud, color: '#0891b2',
        tag: 'Microservicios · Event-Driven',
        title: 'Cloud y Multi-Cloud',
        desc: 'Implementamos arquitecturas de microservicios y diseños manejados por eventos para una nube resiliente, escalable y rentable.',
        features: ['AWS / Azure / GCP', 'Kubernetes', 'Docker & Containers', 'Event Streaming', 'FinOps'],
    },
    {
        icon: BarChart3, color: '#059669',
        tag: 'Datos en tiempo real',
        title: 'Big Data & IoT',
        desc: 'Impulsamos tu negocio digital mediante el análisis y la gestión de datos masivos en tiempo real, conectando dispositivos y plataformas.',
        features: ['Data Lakes', 'Streaming Analytics', 'Dashboards BI', 'IoT Connectivity', 'Data Governance'],
    },
    {
        icon: Settings2, color: '#7c3aed',
        tag: 'SRE · IA Aplicada',
        title: 'Infraestructura y Operaciones',
        desc: 'Automatizamos el ciclo de vida de tu infraestructura con herramientas avanzadas de Inteligencia Artificial para operaciones sin fricciones.',
        features: ['SRE / DevOps', 'Monitoreo 24/7', 'IaC (Terraform)', 'AIOps', 'Continuidad del Negocio'],
    },
]

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

export default function Servicios() {
    return (
        <div className="page-enter">
            {/* Hero */}
            <section className="servicios-hero">
                <div className="servicios-hero__pattern">
                    <svg width="100%" height="100%" viewBox="0 0 1400 500" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
                                <circle cx="15" cy="15" r="1.5" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots)" />
                    </svg>
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <span className="label label--light">Lo que hacemos</span>
                    <h1 className="servicios-hero__title">Nuestros Servicios</h1>
                    <p className="servicios-hero__sub">
                        Soluciones tecnológicas de clase mundial con equipos locales y precios competitivos en toda Latinoamérica.
                    </p>
                </motion.div>
            </section>

            {/* Service list */}
            <section className="servicios-body">
                <div className="container">
                    <motion.div
                        className="servicios-list"
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
                        initial="hidden" whileInView="show" viewport={{ once: true }}
                    >
                        {services.map(({ icon: Icon, color, tag, title, desc, features }, i) => (
                            <motion.div
                                key={title}
                                className={`service-card${i % 2 === 1 ? ' service-card--reverse' : ''}`}
                                variants={fadeUp}
                                transition={{ duration: 0.6 }}
                                whileHover={{ borderColor: color }}
                            >
                                {/* Visual panel */}
                                <div className="service-card__visual" style={{ background: `${color}08` }}>
                                    <div className="service-card__icon-wrap" style={{ background: `${color}18`, border: `1.5px solid ${color}35` }}>
                                        <Icon size={34} color={color} />
                                    </div>
                                    <div className="service-card__num" style={{ color }}>{String(i + 1).padStart(2, '0')}</div>
                                </div>

                                {/* Body */}
                                <div className="service-card__body">
                                    <p className="service-card__tag" style={{ color }}>{tag}</p>
                                    <h2 className="service-card__title">{title}</h2>
                                    <p className="service-card__desc">{desc}</p>
                                    <div className="service-card__features">
                                        {features.map(f => (
                                            <span key={f} className="service-card__feat">{f}</span>
                                        ))}
                                    </div>
                                    <div className="service-card__bar" style={{ background: `linear-gradient(90deg,${color},transparent)` }} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ textAlign: 'center', marginTop: '4rem', padding: '3.5rem', background: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}
                    >
                        <span className="label">¿Tienes un proyecto en mente?</span>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2044', margin: '0.5rem 0 0.75rem' }}>
                            Hablemos sobre cómo podemos ayudarte
                        </h3>
                        <p className="body-sm" style={{ maxWidth: '440px', margin: '0 auto 1.75rem' }}>
                            Nuestros expertos están listos para analizar tu caso y proponer la mejor solución.
                        </p>
                        <Link to="/contacto">
                            <button className="btn btn--primary">Contactar ahora <ArrowRight size={17} /></button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
