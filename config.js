// CONFIGURACIÓN DE PRODUCTOS
// Solo Aceite y Café

const PRODUCTOS = {
    aceites: {
        nombre: "Aceites",
        icono: "🍶",
        presentaciones: [
            { nombre: "900 ml", key: "900ml" },
            { nombre: "1.5 Litros", key: "15L" },
            { nombre: "3 Litros", key: "3L" }
        ]
    },
    cafe: {
        nombre: "Café",
        icono: "☕",
        presentaciones: [
            { nombre: "125 gramos", key: "125g" },
            { nombre: "250 gramos", key: "250g" },
            { nombre: "500 gramos", key: "500g" },
            { nombre: "750 gramos", key: "750g" },
            { nombre: "800 gramos", key: "800g" }
        ]
    }
};

// PARA AGREGAR MÁS PRODUCTOS DESPUÉS:
// Copia este formato y agrégalo aquí:
// nombreProducto: {
//     nombre: "Nombre Visible",
//     icono: "emoji",
//     presentaciones: [
//         { nombre: "Presentación 1", key: "key1" },
//         { nombre: "Presentación 2", key: "key2" }
//     ]
// },

