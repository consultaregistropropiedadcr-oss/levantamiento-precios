# 📊 Sistema de Levantamiento de Precios - Supermercados

Aplicación PWA para levantamiento de precios de aceites en múltiples supermercados con sincronización en tiempo real mediante Firebase y panel de administrador centralizado.

## 🎯 Características Principales

✅ **App para 15 celulares**
- Cada vendedor con su propia identificación
- Captura de datos de precios en 3 presentaciones (900ml, 1.5L, 3L)
- Almacenamiento local + sincronización a la nube
- Funciona sin internet (guarda localmente y sincroniza cuando hay conexión)

✅ **Panel de Administrador**
- Consolidado de todos los registros
- Filtros por supermercado, producto y usuario
- Estadísticas en tiempo real
- Análisis de precios (promedios, mínimos, máximos)
- Exportación a Excel y CSV

✅ **Sincronización en Tiempo Real**
- Firebase Realtime Database
- Los datos se actualizan automáticamente en el panel
- Múltiples usuarios pueden trabajar simultáneamente

✅ **Offline First**
- Funciona sin internet
- Guarda en almacenamiento local
- Sincroniza cuando hay conexión

## 🚀 Instalación Rápida

### Paso 1: Crear Proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Haz clic en "Crear proyecto"
3. Ingresa el nombre: `levantamiento-precios`
4. Crea el proyecto

### Paso 2: Configurar Realtime Database

1. En Firebase Console, ve a **Realtime Database**
2. Haz clic en **Crear base de datos**
3. Selecciona región: **us-central1** (o la más cercana)
4. Elige modo de prueba (inseguro para desarrollo)
5. Copia la URL: `https://tu-proyecto.firebaseio.com`

### Paso 3: Obtener Credenciales de Firebase

1. Ve a **Configuración del proyecto** (engranaje)
2. En la pestaña **General**, desplázate hasta **Tus aplicaciones**
3. Haz clic en el icono web `</>`
4. Copia la configuración en el modal

Verás algo como esto:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyxxxxxx...",
  authDomain: "tu-proyecto.firebaseapp.com",
  databaseURL: "https://tu-proyecto.firebaseio.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

### Paso 4: Actualizar Configuración en los Archivos

En **app.html** y **admin.html**, reemplaza:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyDemoKeyAquiReemplazar",
    authDomain: "tu-proyecto.firebaseapp.com",
    databaseURL: "https://tu-proyecto.firebaseio.com",
    projectId: "tu-proyecto",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123def456"
};
```

Con TUS valores de Firebase.

### Paso 5: Configurar Reglas de Seguridad (Importante)

En Firebase Console → **Realtime Database** → **Reglas**, reemplaza con:

```json
{
  "rules": {
    "registros": {
      ".read": true,
      ".write": true,
      "$uid": {
        ".read": true,
        ".write": "auth.uid == $uid || root.child('admin').child(auth.uid).exists()"
      }
    }
  }
}
```

## 📱 Cómo Usar

### Para los Vendedores (App)

1. Abre `app.html` en el navegador del celular
2. Ingresa tu nombre la primera vez
3. Completa los datos:
   - Nombre del supermercado
   - Nombre del producto
   - Precios de 3 presentaciones
   - Stock (opcional)
4. Presiona "Agregar Registro"
5. Los datos se guardan localmente y se sincronizan automáticamente

**Instalar como App:**
- En Chrome (Android): Menú → Instalar app
- En Safari (iOS): Compartir → Agregar a pantalla de inicio

### Para el Administrador

1. Abre `admin.html` en la PC/Laptop
2. Se cargan automáticamente todos los datos de Firebase
3. Visualiza:
   - Consolidado de todos los registros
   - Estadísticas por usuario
   - Comparativa de precios
   - Actividad en tiempo real
4. Exporta a Excel o CSV
5. Aplica filtros por supermercado, producto o usuario

## 📁 Estructura de Archivos

```
levantamiento-precios/
├── app.html              # App para vendedores (15 celulares)
├── admin.html            # Panel de administrador
├── firebase-config.js    # (Opcional) Archivo de configuración
├── README.md             # Este archivo
├── .gitignore            # Archivos a ignorar en Git
└── LICENSE               # Licencia MIT
```

## 🔐 Seguridad

### Producción

Para usar en producción, modifica las reglas de Firebase:

```json
{
  "rules": {
    "registros": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```

### Crear Usuarios en Firebase Auth

1. Ve a **Authentication** en Firebase
2. Habilita **Email/Password**
3. Crea usuarios para cada vendedor

## 📊 Estructura de Datos en Firebase

```
registros/
  ├── usuarioId1/
  │   ├── 1687890123456/
  │   │   ├── usuario: "Juan Pérez"
  │   │   ├── negocio: "Supermercado XX"
  │   │   ├── producto: "Aceite Cocinero"
  │   │   ├── precio900: 3500
  │   │   ├── precio15L: 6800
  │   │   ├── precio3L: 12500
  │   │   ├── fecha: "14/06/2024 15:30"
  │   │   └── timestamp: 1687890123456
  │   └── 1687890234567/
  │       └── ...
  └── usuarioId2/
      └── ...
```

## 💾 Exportación de Datos

### Excel
- Exporta tabla completa con filtros
- Incluye: Supermercado, Producto, Precios, Stock, Usuario, Fecha

### CSV
- Formato compatible con hojas de cálculo
- Ideal para análisis en Python o R

## 🔧 Solución de Problemas

### "Error conectando a Firebase"
- Verifica que la configuración está correcta
- Comprueba que Firebase está habilitado
- Revisa la consola del navegador (F12 → Console)

### "Datos no se sincronizan"
- Comprueba la conexión a internet
- Espera 5 segundos y recarga
- Verifica las reglas de seguridad en Firebase

### "No puedo ver datos en Admin"
- Asegúrate de que app.html tiene la MISMA configuración de Firebase
- Espera a que se carguen los datos (puede tardar)
- Recarga la página (Ctrl+Shift+R)

## 📈 Análisis de Datos

Los datos pueden ser analizados con:

- **Excel/Google Sheets**: Importa el CSV
- **Python**: Lee el CSV con pandas
- **Power BI**: Conecta directamente a Firebase

### Ejemplo Python

```python
import pandas as pd
df = pd.read_csv('consolidado.csv')
df.groupby('Producto')['900ml'].mean()
```

## 🚀 Desplegar en GitHub Pages

1. Crea un repositorio en GitHub: `levantamiento-precios`
2. Sube los archivos:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/levantamiento-precios.git
   git push -u origin main
   ```
3. En GitHub → Settings → Pages
4. Elige "Deploy from a branch"
5. Selecciona `main` branch
6. Tu app estará en: `https://tu-usuario.github.io/levantamiento-precios/app.html`

## 📞 Contacto

Para soporte o cambios, contacta al administrador.

## 📄 Licencia

MIT License - Libre para usar y modificar

---

**Última actualización:** Junio 2024  
**Versión:** 1.0  
**Desarrollador:** Tu Nombre
