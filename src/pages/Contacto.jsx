import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Mail, Globe, Clock } from 'lucide-react'
import '../styles/Contacto.css'

const WHATSAPP = 'https://wa.me/51986647259?text=Hola%20VenKizmet%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios.'

const offices = [
    {
        flag: '🇵🇪', country: 'Perú', city: 'Lima', label: 'Oficina Principal',
        phone: '+51 986 647 259',
        address: 'Jr. Batalla de Miraflores 290 Int 103-D, Residencial Jardines de Surco, Santiago de Surco',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.1!2d-77.0001!3d-12.1529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d6cde4087f%3A0xe5d55b2d9dfe80c8!2sJr.%20Batalla%20de%20Miraflores%20290%2C%20Santiago%20de%20Surco%2015023!5e0!3m2!1ses-419!2spe!4v1700000000000',
        primary: true,
    },
    {
        flag: '🇦🇷', country: 'Argentina', city: 'Buenos Aires', label: 'Oficina Regional',
        phone: '+51 986 647 259',
        address: 'Ciudad Autónoma de Buenos Aires, Argentina',
        primary: false,
    },
    {
        flag: '🇲🇽', country: 'México', city: 'Ciudad de México', label: 'Oficina Regional',
        phone: '+51 986 647 259',
        address: 'Ciudad de México, México',
        primary: false,
    },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }

export default function Contacto() {
    return (
        <div className="page-enter">
            {/* Hero */}
            <section className="contacto-hero">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <span className="label label--light">Hablemos</span>
                    <h1 className="contacto-hero__title">Oficinas y Contacto</h1>
                    <p className="contacto-hero__sub">
                        Estamos en toda Latinoamérica y listos para ayudarte con tu próximo proyecto digital.
                    </p>
                    <div className="contacto-hero__btns">
                        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ textDecoration: 'none' }}>
                            <MessageCircle size={17} /> WhatsApp
                        </a>
                        <a href="mailto:info@venkizmet.com" className="btn btn--ghost" style={{ textDecoration: 'none' }}>
                            <Mail size={17} /> info@venkizmet.com
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Office cards */}
            <section className="contacto-offices">
                <div className="container">
                    <div className="section-header">
                        <span className="label">Nuestras sedes</span>
                        <h2 className="heading-lg">Encuéntranos</h2>
                        <div className="divider" />
                    </div>
                    <motion.div
                        className="contacto-offices__grid"
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }}
                        initial="hidden" whileInView="show" viewport={{ once: true }}
                    >
                        {offices.map((o) => (
                            <motion.div
                                key={o.country}
                                className={`office-card${o.primary ? ' office-card--primary' : ''}`}
                                variants={fadeUp} transition={{ duration: 0.55 }}
                            >
                                {o.mapSrc && (
                                    <div className="office-card__map">
                                        <iframe title={`Mapa ${o.city}`} src={o.mapSrc} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    </div>
                                )}
                                <div className="office-card__body">
                                    <div className="office-card__header">
                                        <div className="office-card__flag-wrap">
                                            <span className="office-card__flag">{o.flag}</span>
                                            <div>
                                                <p className="office-card__label">{o.label}</p>
                                                <p className="office-card__city">{o.city}, {o.country}</p>
                                            </div>
                                        </div>
                                        {o.primary && <span className="office-card__badge">HQ</span>}
                                    </div>
                                    <div className="office-card__divider" />
                                    <div className="office-card__row">
                                        <MapPin size={14} color="#e8631a" style={{ marginTop: 2, flexShrink: 0 }} />
                                        <p className="office-card__row-text">{o.address}</p>
                                    </div>
                                    <div className="office-card__row">
                                        <Phone size={14} color="#e8631a" style={{ flexShrink: 0 }} />
                                        <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="office-card__link">{o.phone}</a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Info strip */}
            <section className="contacto-strip">
                <div className="container">
                    <motion.div
                        className="contacto-strip__grid"
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
                        initial="hidden" whileInView="show" viewport={{ once: true }}
                    >
                        {[
                            { icon: Phone, label: 'Teléfono', value: '+51 986 647 259', href: 'tel:+51986647259', isLink: true },
                            { icon: Mail, label: 'Email', value: 'info@venkizmet.com', href: 'mailto:info@venkizmet.com', isLink: true },
                            { icon: Globe, label: 'Cobertura', value: 'Toda Latinoamérica', isLink: false },
                            { icon: Clock, label: 'Disponibilidad', value: 'Lun–Vie, 9am–6pm', isLink: false },
                            { icon: MessageCircle, label: 'WhatsApp', value: 'Chat directo', href: WHATSAPP, isLink: true },
                            { icon: MapPin, label: 'Sede principal', value: 'Lima, Perú', isLink: false },
                        ].map(({ icon: Icon, label, value, href, isLink }) => (
                            <motion.div key={label} className="contacto-strip__item" variants={fadeUp} transition={{ duration: 0.45 }}>
                                <div className="contacto-strip__icon" style={{ background: 'rgba(232,99,26,0.1)', border: '1.5px solid rgba(232,99,26,0.25)' }}>
                                    <Icon size={22} color="#e8631a" />
                                </div>
                                <span className="contacto-strip__label">{label}</span>
                                {isLink
                                    ? <a href={href} className="contacto-strip__link" target={href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{value}</a>
                                    : <span className="contacto-strip__value">{value}</span>
                                }
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
