# Aging & Fitness - Presentación Interactiva

Webapp interactiva para presentación de 40 minutos sobre "Aging & Fitness" dirigida a profesionales de wellness.

## 🎯 Características

- ✅ **20 slides completos** con contenido científico
- ✅ **Navegación scroll-based** - cada slide ocupa fullscreen
- ✅ **Términos interactivos** - click en conceptos técnicos para ver definiciones, datos y fuentes
- ✅ **Animaciones suaves** con Framer Motion
- ✅ **Diseño responsive** - funciona en proyector y móvil
- ✅ **Navegación por teclado** - flechas arriba/abajo o izquierda/derecha
- ✅ **Progress indicator** - dots laterales y contador de slides

## 🚀 Inicio Rápido

### Desarrollo
```bash
npm install
npm run dev
```

La app estará disponible en `http://localhost:5173/`

### Build para producción
```bash
npm run build
```

Los archivos optimizados estarán en la carpeta `dist/`

### Preview del build
```bash
npm run preview
```

## 📖 Navegación

- **Scroll**: Mouse wheel o trackpad
- **Teclado**: Flechas ↑↓ o ←→
- **Dots**: Click en los puntos del lateral derecho
- **Términos**: Hover para tooltip rápido, click para modal completo

## 📊 Contenido de la Presentación

### Sección 1: Dallas Study (Slides 1-6)
- Introducción y pregunta provocadora
- Setup del experimento de 1966
- Resultados iniciales, 30 y 40 años después

### Sección 2: Problemas del Envejecimiento (Slides 7-10)
- Overview de cambios relacionados con edad
- Sarcopenia, osteoporosis, y otros cambios
- Términos interactivos con datos científicos

### Sección 3: Reverse Aging (Slides 11-14)
- Concepto y evidencia
- Casos reales de reversión
- Los 3 pilares del ejercicio

### Sección 4: Canadian Study (Slides 15-18)
- Setup del estudio de 2023
- Resultados críticos
- La ecuación: 1h ejercicio ≠ 23h sedentarismo

### Sección 5: Cierre (Slides 19-20)
- Resumen de puntos clave
- Mensaje final

## 🎨 Términos Interactivos

Los siguientes términos tienen modales con información detallada:
- **VO₂max**: Capacidad cardiorrespiratoria
- **Sarcopenia**: Pérdida de masa muscular
- **Osteoporosis**: Debilitamiento óseo
- **Telómeros**: Reloj biológico celular
- **Telomerasa**: Enzima que alarga telómeros
- **HIIT**: Entrenamiento de intervalos
- **Entrenamiento de Resistencia**: Construcción muscular
- **Intolerancia Ortostática**: Problema de presión arterial

## 🛠️ Stack Tecnológico

- **React 18** - Framework UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - Componentes UI (Dialog, HoverCard)
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

## 📤 Deployment

### Netlify (Recomendado)

1. Conecta tu repositorio a Netlify
2. Configuración de build:
   - Build command: `npm run build`
   - Publish directory: `dist`

O usa el archivo `netlify.toml` incluido:
```bash
netlify deploy --prod
```

### Vercel

```bash
vercel --prod
```

## 📄 Export a PDF

### Opción 1: Browser Print
1. Abrir webapp en navegador
2. Ctrl/Cmd + P
3. Seleccionar "Guardar como PDF"
4. Ajustar orientación a Horizontal

### Opción 2: Script automático
```bash
npm run export-pdf
```

## 📱 Responsive

- **Desktop/Proyector** (1920x1080+): Layout completo
- **Tablet** (768-1024px): Layout adaptado
- **Móvil** (< 768px): Stack vertical, navegación táctil

## 🔧 Desarrollo

### Estructura de archivos
```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Slide.jsx        # Base slide component
│   └── Term.jsx         # Interactive term component
├── slides/              # 20 slide components
├── data/
│   └── terms.json       # Database de términos
├── styles/
│   └── globals.css      # Estilos globales + Tailwind
└── App.jsx              # Main app component
```

### Agregar nuevo término

Edita `src/data/terms.json`:
```json
{
  "terms": {
    "nuevo_termino": {
      "name": "Nombre del Término",
      "definition": "Definición breve",
      "detail": "Explicación detallada",
      "emoji": "🔬",
      "stats": ["Stat 1", "Stat 2"],
      "sources": [
        {
          "text": "Nombre del estudio",
          "url": "https://..."
        }
      ]
    }
  }
}
```

Usa en cualquier slide:
```jsx
<Term termKey="nuevo_termino">Texto clickeable</Term>
```

## 📚 Fuentes Científicas

Todos los datos están respaldados por estudios revisados por pares:
- Dallas Bed Rest Study (1966-2006)
- Canadian Aging and Inactivity Study (2023)
- BYU Telomere Study (Tucker 2017)
- European Consensus on Sarcopenia (2019)
- Y más... (ver modales de términos)
## 📝 Licencia

Contenido científico bajo fuentes citadas. Código MIT License.

---