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


/* Wind Chill Formula

Twc= 13.12 + 0.6215 ⋅ T − 11.37 ⋅ v^0.16 + 0.3965 ⋅ T ⋅ v^0.16
 
Donde:
Twc = Temperatura con viento (windchill) en °C
T = Temperatura en °C
v = Velocidad del viento en km/h

*/

let windchillElement = document.getElementById("wind-chill");

const T = 18
const v = 17

function formula() {
    return 13.12 + 0.6215 * T - 11.37 * Math.pow(v, 0.16) + 0.3965 * T * Math.pow(v, 0.16);
}

let windchill = formula();

windchill = windchill.toFixed(1); 

console.log(windchill);
windchillElement.textContent = windchill;
