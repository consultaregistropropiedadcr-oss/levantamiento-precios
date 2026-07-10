# 🚀 Configuración en GitHub

## Paso 1: Crear Repositorio

1. Ve a [GitHub.com](https://github.com/new)
2. Nombre: `levantamiento-precios` (o el nombre que prefieras)
3. Descripción: "Sistema de levantamiento de precios de aceites con sincronización Firebase"
4. Selecciona: **Public** (para que sea accesible)
5. Haz clic en **Create repository**

## Paso 2: Subir Archivos

### Opción A: Desde Git CLI (Línea de comandos)

```bash
# 1. Clonar el repositorio (reemplaza con tu usuario)
git clone https://github.com/tu-usuario/levantamiento-precios.git
cd levantamiento-precios

# 2. Copiar tus archivos aquí:
# - app.html
# - admin.html
# - README.md
# - .gitignore
# - firebase-config.example.js

# 3. Agregar archivos
git add .

# 4. Hacer commit
git commit -m "Inicial: Sistema de levantamiento de precios"

# 5. Subir a GitHub
git push -u origin main
```

### Opción B: Desde GitHub Web (Sin Git)

1. En tu repositorio en GitHub, haz clic en **Add file → Upload files**
2. Arrastra y suelta los archivos (o busca en tu PC)
3. En el mensaje de commit escribe: "Inicial: Sistema de levantamiento de precios"
4. Haz clic en **Commit changes**

## Paso 3: Activar GitHub Pages

1. En tu repositorio, ve a **Settings** (Configuración)
2. En el menú izquierdo, haz clic en **Pages**
3. En "Source", selecciona **Deploy from a branch**
4. Selecciona rama: **main**
5. Selecciona carpeta: **/ (root)**
6. Haz clic en **Save**

Espera 1-2 minutos...

Tu sitio estará disponible en:
```
https://tu-usuario.github.io/levantamiento-precios/
```

## Paso 4: URLs para Compartir

### App para vendedores (15 celulares):
```
https://tu-usuario.github.io/levantamiento-precios/app.html
```

### Panel de administrador (PC/Laptop):
```
https://tu-usuario.github.io/levantamiento-precios/admin.html
```

**💡 Tip:** Crea un código QR apuntando a la URL de `app.html` para que los vendedores escaneen fácilmente.

## Paso 5: Compartir con el Equipo

1. Copia las URLs arriba
2. Envía por WhatsApp, Email, o crea un documento con las instrucciones
3. Cada vendedor abre en su celular y guarda como app

## ⚙️ Configuración de Firebase

**IMPORTANTE:** Asegúrate de que `app.html` y `admin.html` tienen la MISMA configuración de Firebase.

En ambos archivos, busca:
```javascript
const firebaseConfig = {
```

Y reemplaza con TUS valores.

## 🔒 Seguridad

**NO SUBAS:**
- Archivos con configuración real de Firebase
- Claves API privadas
- Credenciales personales

Los archivos `.gitignore` se encargan de esto automáticamente.

## 📲 QR Code Generator

Para generar un código QR rápidamente:

1. Ve a [qr-code-generator.com](https://www.qr-code-generator.com/)
2. Ingresa: `https://tu-usuario.github.io/levantamiento-precios/app.html`
3. Descarga el QR
4. Imprime y distribuye

## 🔄 Actualizar Código

Si haces cambios:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

Los cambios aparecerán en tu sitio en 1-2 minutos.

## 📊 Analytics (Opcional)

Para saber cuántos vendedores usan la app:

1. Ve a [Google Analytics](https://analytics.google.com)
2. Crea una nueva propiedad
3. Agregar este código en `app.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Reemplaza `GA_ID` con tu ID de Google Analytics.

---

## 🆘 Troubleshooting

### "GitHub Pages no se activa"
- Espera 3-5 minutos
- Recarga la página
- Comprueba que el repositorio es **Public**

### "Las URLs no funcionan"
- Verifica que el nombre del repositorio es correcto
- Comprueba que los archivos están en la raíz
- Prueba desactivar/reactivar Pages

### "Los datos no se sincronizan"
- Verifica la configuración de Firebase
- Asegúrate que es la MISMA en app.html y admin.html
- Comprueba que Firebase Realtime Database está habilitada

---

**¡Listo!** Tu sistema está en línea y listo para usar. 🎉
