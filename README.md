# MorsedSite - Sitio de Asesores de Salud

Un sitio web single-page para Morsed Asesores, brokers de seguros de salud en Argentina.

## Características

- **Single Page Application (SPA)**: Navegación fluida sin recargas de página
- **Diseño Responsive**: Optimizado para móvil, tablet y desktop
- **Tabs de Prepagas**: Sistema de pestañas para mostrar diferentes proveedores de salud
- **Formulario HubSpot**: Integración con formulario de HubSpot para captación de leads
- **Diseño Moderno**: Basado en el estilo original del sitio Morsed

## Estructura de Proveedores

El sitio incluye información de 6 proveedores de salud:

1. **Galeno** - Planes con 50% OFF, aportes sin copagos
2. **Sancor Salud** - Líder en calidad de servicio
3. **Prevención Salud** - Más de 70 años de trayectoria
4. **Avalian** - Planes para cada etapa de la vida
5. **Swiss Medical** - Más de 40 años de experiencia
6. **OSDE** - Próximamente disponible

## Tecnologías

- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript vanilla (sin frameworks)
- Google Fonts (Inter)
- HubSpot Forms

## Estructura de Archivos

```
morsedSite/
├── index.html              # Página principal
├── css/
│   ├── variables.css       # Variables de diseño
│   ├── styles.css          # Estilos principales
│   └── responsive.css      # Media queries
├── js/
│   ├── main.js             # Funcionalidad principal
│   └── tabs.js             # Sistema de tabs
├── assets/
│   └── images/
│       ├── logo-morsed.svg
│       ├── providers/      # Logos de prepagas
│       └── icons/          # Iconos SVG
└── README.md
```

## Instalación

1. Clonar o descargar el proyecto
2. Abrir `index.html` en un navegador web
3. No requiere servidor web (sitio estático)

Para desarrollo local con recarga automática:
```bash
# Usar Python
python -m http.server 8000

# O usar Node.js (npx)
npx serve .

# O usar PHP
php -S localhost:8000
```

## Personalización

### Colores
Editar `css/variables.css`:
```css
--color-primary: #0693e3;  /* Azul principal */
```

### Contacto
Actualizar la sección de contacto en `index.html`:
```html
<p class="contact-value">[Tu número]</p>
<p class="contact-value">[tu@email.com]</p>
```

### Proveedores
Para modificar los planes, editar los paneles en `index.html` dentro de la sección `#prepagas`.

## SEO

El sitio incluye:
- Meta tags descriptivos
- Etiquetas semánticas HTML5
- Atributos ARIA para accesibilidad
- Texto alternativo en imágenes
- Schema.org (recomendado agregar)

## Compatibilidad

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Créditos

Basado en el diseño original de Morsed Asesores Comerciales.
Desarrollado como sitio estático HTML/CSS/JS.

## Licencia

Uso exclusivo para Morsed Asesores.
