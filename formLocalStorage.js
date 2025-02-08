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