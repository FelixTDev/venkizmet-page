import { motion } from 'framer-motion'
import { Globe, TrendingDown, Users, Award, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import '../styles/Nosotros.css'

const timeline = [
    { year: '2003', title: 'Fundación en Lima', text: 'Nace VenKizmet como iniciativa de profesionales latinoamericanos en tecnología.' },
    { year: '2009', title: 'Apertura Buenos Aires', text: 'Expansión a Argentina. Primer paso hacia la cobertura regional.' },
    { year: '2017', title: 'Centro de Innovación Digital', text: 'Creación del CID en Lima para I+D en IA, Big Data e IoT.' },
    { year: 'Hoy', title: 'Toda Latinoamérica', text: 'Presencia en México, Perú, Argentina y proyectos en toda la región.' },
]

const strengths = [
    { icon: Award, val: '20+', label: 'Años de experiencia', desc: 'Desde 2003, transformando negocios en LatAm.', color: '#e8631a' },
    { icon: Globe, val: '3', label: 'Países con oficinas', desc: 'Lima, Buenos Aires y Ciudad de México.', color: '#0891b2' },
    { icon: Users, val: '10+', label: 'Clientes de clase mundial', desc: 'BBVA, Oracle, Deloitte y más.', color: '#7c3aed' },
    { icon: TrendingDown, val: '30%', label: 'Ahorro vs. competidores', desc: 'Frente a consultoras australianas y canadienses.', color: '#059669' },
]

const adv = [
    'Equipos locales con know-how internacional',
    'Precios competitivos frente a consultoras extranjeras',
    'Transferencia de conocimiento y talento local',
    'Cobertura end-to-end: estrategia, implementación y soporte',
    'Partners certificados: AWS, Azure, Oracle, Okta y más',
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }

export default function Nosotros() {
    return (
        <div className="page-enter">
            {/* Hero */}
            <section className="nosotros-hero">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <span className="label label--light">Nuestra historia</span>
                    <h1 className="nosotros-hero__title">¿Quiénes somos?</h1>
                    <p className="nosotros-hero__sub">
                        Profesionales latinoamericanos con experiencia global, construyendo el futuro digital de la región.
                    </p>
                </motion.div>
            </section>

            {/* Story + Timeline */}
            <section className="nosotros-story">
                <div className="container">
                    <div className="nosotros-story__grid">
                        {/* Left: text */}
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <span className="nosotros-story__label">Quiénes somos</span>
                            <h2 className="nosotros-story__title">Tecnología de clase mundial, equipos de raíz local</h2>
                            <div className="divider divider--left" style={{ marginBottom: '1.5rem' }} />
                            <p className="nosotros-story__text">
                                <strong>VenKizmet</strong> nace en Lima, Perú en 2003 como una iniciativa de profesionales con amplia experiencia en consultoría tecnológica para empresas de América Latina.
                            </p>
                            <p className="nosotros-story__text">
                                En 2009 abrimos nuestras oficinas en Buenos Aires, Argentina. Hoy cubrimos toda la región, aportando experiencia internacional con sensibilidad local y precios competitivos.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1.25rem' }}>
                                {adv.map(a => (
                                    <div key={a} className="check-item" style={{ color: '#64748b' }}>
                                        <CheckCircle size={16} color="#e8631a" style={{ marginTop: 2, flexShrink: 0 }} />
                                        <span>{a}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="nosotros-story__tags" style={{ marginTop: '1.5rem' }}>
                                {['IAM', 'Cloud', 'Big Data', 'IA', 'DevOps', 'SRE', 'Integración'].map(t => (
                                    <span key={t} className="tag">{t}</span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: timeline */}
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
                            <div className="nosotros-timeline">
                                {timeline.map((item, i) => (
                                    <motion.div
                                        key={item.year}
                                        className="timeline-item"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.12, duration: 0.5 }}
                                    >
                                        <div className="timeline-dot">{item.year.slice(-2)}</div>
                                        <div className="timeline-content">
                                            <p className="timeline-content__year">{item.year}</p>
                                            <p className="timeline-content__title">{item.title}</p>
                                            <p className="timeline-content__text">{item.text}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Strengths */}
            <section className="nosotros-strengths">
                <div className="container">
                    <div className="section-header">
                        <span className="label">Por qué elegirnos</span>
                        <h2 className="heading-lg">Nuestras fortalezas</h2>
                        <div className="divider" />
                    </div>
                    <motion.div
                        className="nosotros-strengths__grid"
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                        initial="hidden" whileInView="show" viewport={{ once: true }}
                    >
                        {strengths.map(({ icon: Icon, val, label, desc, color }) => (
                            <motion.div key={label} className="strength-card" variants={fadeUp} transition={{ duration: 0.5 }}>
                                <div className="strength-card__icon" style={{ background: `${color}15`, border: `1.5px solid ${color}30` }}>
                                    <Icon size={24} color={color} />
                                </div>
                                <div className="strength-card__val" style={{ color }}>{val}</div>
                                <div className="strength-card__label">{label}</div>
                                <div className="strength-card__desc">{desc}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Region */}
            <section className="nosotros-region">
                <div className="container">
                    <div className="section-header" style={{ margin: '0 auto 0' }}>
                        <span className="label label--light">Presencia regional</span>
                        <h2 style={{ fontSize: 'clamp(1.7rem,3vw,2.4rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                            Oficinas en Latinoamérica
                        </h2>
                        <div className="divider" />
                    </div>
                    <motion.div
                        className="nosotros-region__grid"
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
                        initial="hidden" whileInView="show" viewport={{ once: true }}
                    >
                        {[
                            { flag: '🇵🇪', country: 'Perú', city: 'Lima', since: 'Desde 2003 — HQ' },
                            { flag: '🇦🇷', country: 'Argentina', city: 'Buenos Aires', since: 'Desde 2009' },
                            { flag: '🇲🇽', country: 'México', city: 'Ciudad de México', since: 'Oficina regional' },
                        ].map(o => (
                            <motion.div key={o.country} className="region-card" variants={fadeUp} transition={{ duration: 0.5 }}>
                                <span className="region-card__flag">{o.flag}</span>
                                <div className="region-card__country">{o.country}</div>
                                <div className="region-card__city">{o.city}</div>
                                <div className="region-card__since">{o.since}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/contacto">
                            <button className="btn btn--primary">Hablar con nosotros</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
