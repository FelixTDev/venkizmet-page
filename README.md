# VenKizmet — Landing Page

Sitio web corporativo de **VenKizmet**, empresa latinoamericana de consultoría tecnológica fundada en Lima, Perú (2003).

## 🚀 Stack

| Tecnología | Uso |
|---|---|
| [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/) | Framework y bundler |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utilidades CSS base |
| [Framer Motion](https://www.framer.com/motion/) | Animaciones de entrada y transiciones de página |
| [React Router DOM v7](https://reactrouter.com/) | Ruteo multi-página (SPA) |
| [Lucide React](https://lucide.dev/) | Íconos vectoriales |

## 📁 Estructura del proyecto

```
src/
├── pages/              # Páginas independientes
│   ├── Home.jsx        # Inicio: hero, servicios, clientes, CTA
│   ├── Servicios.jsx   # Todos los servicios detallados
│   ├── Nosotros.jsx    # Historia, timeline, fortalezas
│   └── Contacto.jsx    # Oficinas (Lima con mapa), WhatsApp, email
│
├── components/         # Componentes compartidos
│   ├── Navbar.jsx      # Navbar fijo con active route
│   └── Footer.jsx      # Footer con links, contacto, RRSS
│
├── styles/             # CSS por componente (BEM)
│   ├── global.css      # Tokens de diseño, reset, utilidades
│   ├── Navbar.css
│   ├── Footer.css
│   ├── Home.css
│   ├── Servicios.css
│   ├── Nosotros.css
│   └── Contacto.css
│
├── App.jsx             # BrowserRouter + AnimatePresence
├── main.jsx
└── index.css           # Manifiesto de imports CSS
```

## 🎨 Paleta de colores

| Token | Valor | Uso |
|---|---|---|
| `--orange` | `#e8631a` | Acento principal, CTAs, íconos |
| `--navy` | `#0f2044` | Fondos oscuros, textos |
| `--navy-mid` | `#1e3a5f` | Gradientes |
| `--gray-50` | `#f8fafc` | Secciones claras |
| `--white` | `#ffffff` | Cards, fondo base |

## 📄 Páginas y rutas

| Ruta | Página |
|---|---|
| `/` | Home — Hero + service tiles + clientes + CTA |
| `/servicios` | Servicios — 5 cards detalladas |
| `/nosotros` | ¿Quiénes somos? — Historia + timeline + fortalezas |
| `/contacto` | Contacto — Oficinas Lima/BA/MX + WhatsApp |

## 🛠️ Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción
npm run build
```

## 🌍 Cobertura regional

VenKizmet tiene presencia en:
- 🇵🇪 **Lima, Perú** — Sede principal (2003)
- 🇦🇷 **Buenos Aires, Argentina** — Oficina regional (2009)
- 🇲🇽 **Ciudad de México, México** — Oficina regional

## 📌 Contribuciones

Si eres parte del equipo, crea tu rama de trabajo:

```bash
git checkout -b feature/nombre-de-tu-mejora
git add .
git commit -m "feat: descripción de tu cambio"
git push origin feature/nombre-de-tu-mejora
```

Luego abre un Pull Request hacia `main`.
