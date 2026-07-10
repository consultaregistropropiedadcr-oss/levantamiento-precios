// ⚠️ IMPORTANTE: NO COMPARTIR ESTE ARCHIVO CON TUS CLAVES REALES
// Este es solo un ejemplo. Reemplaza con tus valores de Firebase

const firebaseConfig = {
    // Obtén estos valores de Firebase Console > Configuración del proyecto
    apiKey: "AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "tu-proyecto.firebaseapp.com",
    databaseURL: "https://tu-proyecto.firebaseio.com",
    projectId: "tu-proyecto",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "123456789123456789",
    appId: "1:123456789123:web:abcdef1234567890abcd"
};

// INSTRUCCIONES PARA OBTENER ESTOS VALORES:
// 1. Ve a https://console.firebase.google.com
// 2. Selecciona tu proyecto
// 3. Haz clic en el icono web (</>) en "Tus aplicaciones"
// 4. Copia la configuración del modal
// 5. Reemplaza los valores arriba

// PASOS PARA CONFIGURAR:
// 1. Copia esta configuración correcta
// 2. En app.html: busca "const firebaseConfig = {" y reemplaza
// 3. En admin.html: haz lo mismo
// 4. Asegúrate que AMBOS archivos tengan LA MISMA configuración
// 5. Prueba en un celular: abre app.html y crea un registro
// 6. Abre admin.html en la PC y verifica que aparezca el dato

// VERIFICAR QUE FUNCIONA:
// - Abre app.html en un celular
// - Ingresa: negocio="Test", producto="Test", precio900=1000
// - Presiona "Agregar Registro"
// - Abre admin.html en la PC
// - Deberías ver el registro en la tabla

export { firebaseConfig };
