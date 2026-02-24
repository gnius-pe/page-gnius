# GNIUS - Corporate Website

Website oficial de GNIUS, una empresa multidisciplinaria de innovación enfocada en tecnología, creación audiovisual y soluciones de futuro.

## 🛠 Tecnologías

### Core
- **React 19** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y servidor de desarrollo

### 3D & Animaciones
- **Three.js** - Renderizado 3D
- **React Three Fiber** - Integración de Three.js con React
- **GSAP** - Animaciones profesionales con ScrollTrigger
- **Simplex Noise** - Algoritmo de ruido para animaciones orgánicas

### Funcionalidades
- **React Router DOM** - Navegación entre páginas
- **React i18next** - Internacionalización (EN, ES, PT, ZH)
- **React Icons** - Biblioteca de iconos

## 📁 Estructura del Proyecto

```
web-gnius/
├── src/
│   ├── components/
│   │   ├── About/           # Sección de identidad visual
│   │   ├── Culture/         # Sección de cultura empresarial
│   │   ├── Divisions/        # Divisiones del proyecto
│   │   ├── FutureExpansion/ # Expansión futura
│   │   ├── Hero/             # Sección hero principal
│   │   ├── Innovation/       # Sección 3D de partículas
│   │   ├── Navbar/           # Navegación
│   │   ├── Philosophy/       # Filosofía empresarial
│   │   ├── Vision/           # Visión empresarial
│   │   └── ui/               # Componentes reutilizables
│   ├── context/              # Contextos de React
│   ├── i18n/                 # Archivos de traducción
│   ├── pages/                # Páginas principales
│   │   ├── CodePage.tsx      # GNIUS Code
│   │   └── PicturesPage.tsx  # GNIUS Pictures
│   └── styles/               # Estilos globales
├── public/                   # Archivos estáticos
└── dist/                     # Build de producción
```

## 🚀 Características

### Secciones
- **Hero** - Imagen de fondo con overlay adaptativo
- **Innovation** - Esfera de partículas 3D interactiva
- **Philosophy** - Collage visual tipo mosaico
- **Divisions** - GNIUS Code y GNIUS Pictures
- **Vision** - Visión empresarial
- **Culture** - Cultura corporativa
- **Future Expansion** - Planes de crecimiento
- **Call to Action** - Llamado a la acción

### Funcionalidades Especiales
- 🌐 **Internacionalización** - 4 idiomas (EN, ES, PT, ZH)
- 🌓 **Modo Oscuro/Claro** - Theme switching con persistencia
- 🎨 **Animaciones 3D** - Esfera de partículas con:
  - Movimiento orgánico (Simplex Noise)
  - Pulso de respiración
  - Atracción magnética al mouse
  - Reactividad al scroll
  - Movimiento de traslación "deambulante"

## 📦 Instalación

```bash
npm install
```

## ▶️ Desarrollo

```bash
npm run dev
```

## 🔨 Build Producción

```bash
npm run build
```

El build se genera en la carpeta `dist/`.

## 🎨 Personalización

### Colores
Los colores principales están definidos en `src/styles/globals.css`:
- Azul principal: `#0066FF`
- Cyan: `#00D4FF`

### Animación de Partículas
Las variables de configuración están en `src/components/Innovation/ParticleSphere.tsx`:
- Velocidad de ruido
- Intensidad de respiración
- Fuerza de atracción del mouse
- Velocidad de flotación

## 📄 Licencia

© 2026 GNIUS. Todos los derechos reservados.
