// Selecciona los elementos del DOM
const lastModified = document.querySelector("#lastModified"); // Elemento para la última fecha de modificación
const currentYear = document.querySelector(".currentyear");  // Elemento para el año actual

// Obtiene la fecha actual y la última fecha de modificación
const today = new Date();
const modifiedDate = new Date(document.lastModified);

// Muestra el año actual
if (currentYear) {
  currentYear.innerHTML = today.getFullYear(); // Muestra el año actual
}

// Muestra la última fecha de modificación
if (lastModified) {
  lastModified.innerHTML = `Last Modified: ${modifiedDate.toLocaleDateString()} ${modifiedDate.toLocaleTimeString()}`; // Fecha y hora en formato legible
}
