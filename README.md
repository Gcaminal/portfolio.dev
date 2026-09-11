# Portfolio — Gerard Caminal

Portfolio personal desarrollado con Astro y TailwindCSS.

**[Ver el portfolio](https://gerard-caminal.netlify.app)**

## 🚀 Sobre el proyecto

Web de una sola página que recoge mi perfil profesional, experiencia laboral y proyectos. Está construida sin frameworks de UI (React, Vue, etc.): solo componentes `.astro`, HTML y Tailwind, lo que mantiene el bundle final mínimo.

**Secciones:**

- **Hero** — presentación y enlaces de contacto
- **Experiencia laboral** — timeline con las posiciones ocupadas
- **Proyectos** — trabajos destacados con enlace al repositorio
- **Sobre mí** — formación y trayectoria
- **Contacto** — email y redes profesionales

## Stack

| Tecnología | Uso |
| --- | --- |
| [Astro](https://astro.build) | Framework — generación de HTML estático |
| [TailwindCSS](https://tailwindcss.com) | Estilos mediante clases de utilidad |
| [Fontsource](https://fontsource.org) | Tipografía Onest Variable, autoalojada |
| [Bun](https://bun.sh) | Gestor de paquetes y runtime |

## 🧞 Estructura

```
portfolio-dev/
├── public/                        # Archivos estáticos servidos tal cual
│   ├── projects/                  # Imágenes de los proyectos
│   │   ├── canon-banner.png
│   │   └── uni-banner.webp
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── Gerard_Caminal.png         # Foto de perfil (Header y Sobre mí)
│   └── gradient-bg.png            # Fondo degradado
│
├── src/
│   ├── assets/                    # Plantilla de Astro
│   │   ├── astro.svg
│   │   └── background.svg
│   │
│   ├── components/
│   │   ├── icons/                 # Iconos SVG como componentes
│   │   │   ├── GitHub.astro
│   │   │   ├── LinkedIn.astro
│   │   │   └── Mail.astro
│   │   ├── AboutMe.astro          # Sección "Sobre mí"
│   │   ├── Contact.astro          # Sección "Contacto"
│   │   ├── Experience.astro       # Lista de experiencias (datos + map)
│   │   ├── ExperienceItems.astro  # Item individual de la timeline
│   │   ├── Footer.astro
│   │   ├── Header.astro           # Logo + navegación
│   │   ├── Projects.astro         # Sección "Proyectos"
│   │   ├── SectionContainer.astro # Ancho y márgenes comunes
│   │   └── SocialPill.astro       # Pastilla de redes sociales
│   │
│   ├── layouts/
│   │   └── Layout.astro           # <html>, <head>, Header, Footer, estilos globales
│   │
│   ├── pages/
│   │   └── index.astro            # Página única: compone todas las secciones
│   │
│   └── styles/
│       └── global.css             # Import de Tailwind
│
├── .gitignore
├── astro.config.mjs               # Configuración de Astro + plugin de Tailwind
├── bun.lock
├── package.json
├── README.md
└── tsconfig.json
```

## Desarrollo local

Requiere [Bun](https://bun.sh) instalado.

```bash
# Instalar dependencias
bun install

# Levantar el servidor de desarrollo en localhost:4321
bun run dev

# Generar la build de producción en dist/
bun run build

# Previsualizar la build antes de desplegar
bun run preview
```

## 👀 Contacto

- **Email** — gerard.caminal.altimir@gmail.com
- **LinkedIn** — [Gerard Caminal Altimir](https://www.linkedin.com/in/gerard-caminal-altimir-96b88120b/)
- **GitHub** — [@Gcaminal](https://github.com/Gcaminal)
