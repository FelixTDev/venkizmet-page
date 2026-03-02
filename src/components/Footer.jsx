import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Logo from "../images/logo.png";
import "../styles/Footer.css";

const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "¿Quiénes somos?", to: "/nosotros" },
  { label: "Contacto", to: "/contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__body">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <NavLink
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
              }}
            >
              <img src={Logo} alt="VenKizmet Logo" className="footer__logo" />
            </NavLink>
            <p className="footer__desc">
              Consultoría tecnológica de clase mundial con presencia en toda
              Latinoamérica desde 2003.
            </p>
            <div className="footer__socials">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-btn"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span className="footer__col-title">Navegación</span>
            <ul className="footer__nav-list">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <NavLink to={to} className="footer__nav-link">
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="footer__col-title">Contacto</span>
            <p className="footer__address">
              Jr. Batalla de Miraflores 290 Int 103-D
              <br />
              Santiago de Surco, Lima, Perú
            </p>
            <a href="tel:+51986647259" className="footer__contact-link">
              +51 986 647 259
            </a>
            <a
              href="mailto:info@venkizmet.com"
              className="footer__contact-link"
            >
              info@venkizmet.com
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2003–{year} VenKizmet. Todos los derechos reservados.
          </p>
          <p className="footer__copy">Lima · Buenos Aires · Ciudad de México</p>
        </div>
      </div>
    </footer>
  );
}
