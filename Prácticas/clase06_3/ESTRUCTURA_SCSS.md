# Estructura de SCSS Refactorizado

## 📋 Descripción General
El proyecto ha sido refactorizado con una estructura clara de 12 secciones SCSS, cada una correspondiendo a una sección del sitio web.

---

## 📂 Archivos SCSS Organizados

### **_variables.scss**
- Colores (primarios, secundarios, neutral)
- Tipografía (fuentes, tamaños)
- Espaciado (márgenes, padding)
- Breakpoints responsivos
- Propiedades de línea (altura de línea, espaciado de letras)

### **main.scss**
- Importa todos los archivos de secciones (1-12)
- Estilos globales (body, html, container)

---

## 🎨 Secciones Organizadas

| # | Archivo | Componentes | Notas |
|---|---------|-------------|-------|
| 1 | **seccion1.scss** | Header + Navegación + Hero | Incluye estilos responsivos |
| 2 | **seccion2.scss** | Features Preview | Grid de 3 columnas, fondo decorativo |
| 3 | **seccion3.scss** | Social Proof / Logos | Flex layout, hover effects |
| 4 | **seccion4.scss** | Customer Needs | Grid 2 columnas, items con iconos |
| 5 | **seccion5.scss** | Statistics / Downloads | Fondo azul (#007AFF), números grandes |
| 6 | **seccion6.scss** | Screenshots | Header centrado, imagen responsiva |
| 7 | **seccion7.scss** | Pricing Plans | Toggle selector, badges |
| 8 | **seccion8.scss** | Testimonials | Grid 2 columnas, botones |
| 9 | **seccion9.scss** | FAQ | Header, imagen, footer con botón |
| 10 | **seccion10.scss** | App Download | Fondo azul primario, grid 2 columnas |
| 11 | **seccion11.scss** | Footer | Fondo oscuro (#0E1133), 4 columnas |
| 12 | **seccion12.scss** | Utilidades/Globals | Reservado para estilos finales |

---

## 🔗 Convenciones de Nombres

### Clases BEM utilizadas:
```
.header - bloque principal
.header__content - elemento dentro del bloque
.header--modifier - modificador opcional

.hero__title
.hero__description
.hero__buttons

.features-preview__header
.features-preview__bg-wrapper

.social-proof__text
.social-proof__logos

.customer-needs__grid
.customer-needs__item

.statistics__grid
.statistics__value

... y así sucesivamente
```

---

## 🎯 Cambios Realizados en HTML

✅ **Refactorización:**
1. Agregados comentarios descriptivos para cada sección
2. Nombres de clases consistentes y semánticos
3. Estructura de contenedores mejorada
4. ALT texts descriptivos en imágenes
5. Uso de etiquetas semánticas (`<header>`, `<footer>`, `<section>`)

✅ **Correcciones:**
- Removidos comentarios incompletos (`<!-- != -->`)
- Convertidas listas `<ol>` incorrectas a `<li>` (en footer)
- Atributos alt mejorados
- Estructura de grid más clara

---

## 📱 Breakpoints Responsivos

```scss
$breakpoint-sm: 576px   // Teléfono pequeño
$breakpoint-md: 768px   // Tablet
$breakpoint-lg: 992px   // Desktop pequeño
$breakpoint-xl: 1200px  // Desktop grande
```

---

## 🎨 Paleta de Colores

```
$primary-blue: #007bff     // Azul principal (botones, header)
$dark-blue: #0e1133        // Azul oscuro (footer)
$light-gray: #f8f9fa       // Gris claro (fondos)
$light-blue: #f2f5f8       // Azul claro (testimonios)
$text-dark: #1a1a2e        // Texto oscuro
$text-gray: #6c757d        // Texto secundario
$white: #ffffff            // Blanco
```

---

## 🔤 Tipografía

```
Primary: 'Nunito' (titulares, pesos: 700)
Secondary: 'Rubik' (cuerpo, pesos: 400, 500)
```

---

## ✨ Cómo Usar

1. **Para agregar estilos a una sección:** Edita el archivo `seccionX.scss` correspondiente
2. **Para variables globales:** Actualiza `_variables.scss`
3. **El archivo main.scss importa automáticamente todos los estilos**
4. **Compila SCSS a CSS** (asegúrate de tener configurado tu build system)

---

## 🔄 Flujo de Importación

```
main.scss
  ├── _variables.scss (leyendo variables)
  ├── seccion1.scss (header + hero)
  ├── seccion2.scss (features)
  ├── seccion3.scss (social proof)
  ├── seccion4.scss (customer needs)
  ├── seccion5.scss (statistics)
  ├── seccion6.scss (screenshots)
  ├── seccion7.scss (pricing)
  ├── seccion8.scss (testimonials)
  ├── seccion9.scss (FAQ)
  ├── seccion10.scss (app download)
  ├── seccion11.scss (footer)
  └── seccion12.scss (utilities)
```

---

**Última actualización:** Marzo 2026  
**Versión:** 2.0 - Refactorizada
