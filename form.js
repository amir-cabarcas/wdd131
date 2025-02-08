const lastModified = document.querySelector("#lastModified"); 
const currentYear = document.getElementById("#currentyear");

const today = new Date();
const modifiedDate = new Date(document.lastModified);

if (currentYear) {
  currentYear.innerHTML = today.getFullYear(); 
}

if (lastModified) {
  lastModified.innerHTML = `Last Modified: ${modifiedDate.toLocaleDateString()} ${modifiedDate.toLocaleTimeString()}`;
}

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const productSelect = document.getElementById("selectProduct");
productSelect.innerHTML = '<option value="" disabled selected>Select a Product...</option>';

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;  // Se asigna el id como valor de la opción
    option.textContent = product.name; // Se muestra el nombre del producto
    productSelect.appendChild(option);
});


document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM completamente cargado.");

    const visitsDisplay = document.querySelector(".visits");
    console.log("🔍 visitsDisplay:", visitsDisplay); // Verifica que el elemento existe

    if (!visitsDisplay) {
        console.error("❌ No se encontró el elemento con clase .visits.");
        return;
    }

    let numVisits = parseInt(localStorage.getItem("numVisits-ls")) || 0;
    console.log("📌 Valor inicial de numVisits:", numVisits);

    if (numVisits === 0) {
        visitsDisplay.textContent = "This is your first visit. 🥳 Welcome!";
    } else {
        visitsDisplay.textContent = `You have visited this page ${numVisits} times.`;
    }

    numVisits++;
    console.log("🆕 Nuevo valor de numVisits:", numVisits);

    localStorage.setItem("numVisits-ls", numVisits);
    console.log("✅ Número de visitas guardado en localStorage.");
});


