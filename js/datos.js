// Datos de la aplicación: lista reactiva de inspiraciones
const inspiraciones = Vue.reactive([
    { id: 1, titulo: "Playa al atardecer", fecha: "2025-01-01", categoria: "Naturaleza", imagen: "images/215-1400x800.jpg", alt: "Playa con palmeras y casas al fondo", resumen: "Una playa amplia y tranquila para desconectar del ruido." },
    { id: 2, titulo: "Sendero en el bosque", fecha: "2025-01-02", categoria: "Naturaleza", imagen: "images/216-1400x800.jpg", alt: "Sendero entre musgo y vegetación en un bosque", resumen: "Un camino entre musgo y hojas que invita a caminar sin prisa." },
    { id: 3, titulo: "Vías entre muros", fecha: "2025-01-03", categoria: "Ciudad", imagen: "images/233-1400x800.jpg", alt: "Vías de tren entre muros de hormigón", resumen: "Líneas que se pierden en el horizonte: perspectiva y ritmo." },
    { id: 4, titulo: "Colinas en blanco y negro", fecha: "2025-01-04", categoria: "Naturaleza", imagen: "images/241-1400x800.jpg", alt: "Colinas en blanco y negro con una valla", resumen: "El contraste y la textura del paisaje sin color." },
    { id: 5, titulo: "Vista de montes", fecha: "2025-01-05", categoria: "Naturaleza", imagen: "images/482-1400x800.jpg", alt: "Vista de montes junto a un lago", resumen: "Montañas y agua: un recordatorio de la escala de las cosas." },
    { id: 6, titulo: "Skyline de Nueva York", fecha: "2025-01-06", categoria: "Ciudad", imagen: "images/411-1400x800.jpg", alt: "Vista aérea de los rascacielos de Nueva York", resumen: "Una ciudad vertical vista desde arriba, con luz cálida." },
    { id: 7, titulo: "Puente rojo", fecha: "2025-01-07", categoria: "Ciudad", imagen: "images/392-1400x800.jpg", alt: "Puente colgante rojo al atardecer", resumen: "Estructura y color contra un cielo rosado." },
    { id: 8, titulo: "Avenida con árboles", fecha: "2025-01-08", categoria: "Ciudad", imagen: "images/522-1400x800.jpg", alt: "Avenida entre edificios y árboles", resumen: "Naturaleza y ciudad conviviendo en la misma calle." },
    { id: 9, titulo: "Objetos sobre madera", fecha: "2025-01-09", categoria: "Diseño", imagen: "images/526-1400x800.jpg", alt: "Objetos de diseño sobre una mesa de madera", resumen: "Tipografía, sellos y texturas: material para un moodboard." },
]);

// Imagen que recibe una inspiración nueva según su categoría
const imagenPorCategoria = {
    Naturaleza: "images/216-1400x800.jpg",
    Ciudad: "images/411-1400x800.jpg",
    Diseño: "images/526-1400x800.jpg",
    Otra: "images/392-1400x800.jpg",
};

// Secciones del menú que aún no tienen contenido
const secciones = {
    tareas: { titulo: "Tareas", texto: "Organiza tus tareas diarias con facilidad." },
    notas: { titulo: "Notas", texto: "Toma notas rápidas y accede a ellas en cualquier momento." },
    configuracion: { titulo: "Configuración", texto: "Personaliza la aplicación según tus preferencias." },
};

// Convierte "2025-01-31" en "31/01/2025"
function formatearFecha(iso) {
    const [anio, mes, dia] = iso.split("-");
    return `${dia}/${mes}/${anio}`;
}
