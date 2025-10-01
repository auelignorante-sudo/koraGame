# 🎮 Kora Game

Plataforma moderna de juegos y aplicaciones de diseño.

## 📋 Características

- ✨ Diseño moderno y responsivo
- 🎨 Sección para apps de diseño (como tu app de dibujo)
- 🎮 Sección para juegos (lista para agregar juegos futuros)
- 📱 Compatible con móviles y tablets
- 🚀 Fácil de expandir y personalizar

## 🚀 Cómo usar

1. Abre `index.html` en tu navegador para ver la página principal
2. La página está lista para que agregues tu app de dibujo y juegos

## 🎨 Integrar tu App de Dibujo

Para agregar tu aplicación de dibujo existente:

1. Crea una carpeta llamada `dibujo` en el directorio principal
2. Coloca todos los archivos de tu app de dibujo en esa carpeta
3. Edita `script.js` y actualiza la función `openDrawingApp()`:
   ```javascript
   function openDrawingApp() {
       window.location.href = '/dibujo/';
       // O para abrir en nueva pestaña:
       // window.open('/dibujo/', '_blank');
   }
   ```

## 🎮 Agregar Nuevos Juegos

Para agregar un nuevo juego:

1. Crea una carpeta para tu juego (ej: `juego1/`)
2. En `index.html`, reemplaza una tarjeta placeholder con:
   ```html
   <div class="card">
       <div class="card-icon">🎮</div>
       <h3 class="card-title">Nombre del Juego</h3>
       <p class="card-description">Descripción de tu juego</p>
       <button class="card-button" onclick="window.location.href='/juego1/'">Jugar</button>
   </div>
   ```

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #6366f1;      /* Color principal */
    --secondary-color: #ec4899;    /* Color secundario */
    --background: #0f172a;         /* Color de fondo */
}
```

### Agregar Más Secciones

Agrega nuevas secciones en `index.html` siguiendo la estructura existente.

## 📁 Estructura del Proyecto

```
koraGame/
├── index.html          # Página principal
├── styles.css          # Estilos
├── script.js           # JavaScript
├── README.md           # Este archivo
└── LICENSE             # Licencia
```

## 🌐 Despliegue

Para publicar tu sitio:

1. **GitHub Pages**: Ya está configurado, simplemente habilita GitHub Pages en la configuración del repositorio
2. **Netlify/Vercel**: Conecta tu repositorio para despliegue automático
3. **Servidor local**: Usa cualquier servidor HTTP (ej: `python -m http.server`)

## 📝 Licencia

Este proyecto está bajo la licencia GPL-3.0 - ver el archivo [LICENSE](LICENSE) para más detalles.
