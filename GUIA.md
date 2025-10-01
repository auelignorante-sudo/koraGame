# 📚 Guía Rápida de Kora Game

## 🎨 Cómo Integrar tu App de Dibujo

### Opción 1: App en el mismo proyecto
1. Crea una carpeta `dibujo/` en el directorio raíz
2. Coloca todos los archivos de tu app allí (index.html, etc.)
3. Edita `script.js` línea 15-16:
   ```javascript
   function openDrawingApp() {
       window.location.href = './dibujo/';
   }
   ```

### Opción 2: App en otro servidor/URL
Edita `script.js` línea 15-16:
```javascript
function openDrawingApp() {
    window.open('https://tu-url-de-dibujo.com', '_blank');
}
```

## 🎮 Cómo Agregar un Nuevo Juego

### Paso 1: Preparar el juego
Crea una carpeta para tu juego, por ejemplo: `juegos/snake/`

### Paso 2: Editar index.html
Encuentra esta sección en `index.html` (alrededor de línea 55):
```html
<div class="card card-placeholder">
    <div class="card-icon">🎮</div>
    <h3 class="card-title">Próximamente</h3>
    <p class="card-description">Emocionantes juegos llegarán pronto</p>
</div>
```

Reemplázala con:
```html
<div class="card">
    <div class="card-icon">🐍</div>
    <h3 class="card-title">Snake Game</h3>
    <p class="card-description">El clásico juego de la serpiente</p>
    <button class="card-button" onclick="window.location.href='./juegos/snake/'">Jugar Ahora</button>
</div>
```

### Ejemplo completo de card de juego:
```html
<div class="card">
    <div class="card-icon">🎯</div>
    <h3 class="card-title">Nombre del Juego</h3>
    <p class="card-description">Descripción breve del juego</p>
    <button class="card-button" onclick="abrirJuego('ruta-del-juego')">Jugar Ahora</button>
</div>
```

### Iconos sugeridos para juegos:
- 🎮 Juego general
- 🐍 Snake
- 🎯 Juego de puntería
- 🧩 Puzzle
- 🏆 Juego competitivo
- 🎲 Juego de azar
- 🚀 Juego espacial
- ⚔️ Juego de acción
- 🧠 Juego mental

## 🎨 Personalizar Colores

Edita `styles.css` líneas 8-12:
```css
:root {
    --primary-color: #6366f1;      /* Púrpura: cambiar a tu gusto */
    --secondary-color: #ec4899;    /* Rosa: cambiar a tu gusto */
    --background: #0f172a;         /* Azul oscuro */
    --surface: #1e293b;            /* Gris oscuro */
}
```

### Esquemas de colores sugeridos:

**Tema Verde:**
```css
--primary-color: #10b981;
--secondary-color: #34d399;
```

**Tema Naranja:**
```css
--primary-color: #f59e0b;
--secondary-color: #fb923c;
```

**Tema Azul:**
```css
--primary-color: #3b82f6;
--secondary-color: #60a5fa;
```

## 📱 Ver tu Sitio Localmente

```bash
# Con Python
python3 -m http.server 8000

# Con Node.js
npx http-server

# Luego abre: http://localhost:8000
```

## 🚀 Publicar en GitHub Pages

1. Ve a Configuración del repositorio en GitHub
2. Sección "Pages"
3. Source: selecciona la rama `main` y carpeta `/root`
4. Guarda y espera unos minutos
5. Tu sitio estará en: `https://tuusuario.github.io/koraGame/`

## 💡 Consejos

- **Mantén las cards ordenadas**: Primero apps, luego juegos
- **Usa iconos emoji**: Son simples y funcionan en todos los navegadores
- **Prueba en móvil**: El diseño es responsivo, verifica que se vea bien
- **Backup antes de cambiar**: Guarda copias si vas a hacer cambios grandes

## ❓ Problemas Comunes

### La app de dibujo no abre
- Verifica que la ruta en `script.js` sea correcta
- Verifica que la carpeta `dibujo/` tenga un `index.html`

### Los juegos no cargan
- Asegúrate que las rutas sean relativas (`./juegos/...`)
- Verifica que cada juego tenga su propio `index.html`

### Los colores no cambian
- Limpia la caché del navegador (Ctrl+Shift+R)
- Verifica que hayas guardado `styles.css`
