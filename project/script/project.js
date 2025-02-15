const temples = [
    {
        Name: "Templo de Bogotá, Colombia",
        Dedication: "24 de abril de 1999",
        Ubication: "Bogotá, Distrito Capital, Colombia",
        Area: "5.000 m²",
        Country: "Colombia",
        Accessibility: "Some accommodations are available, including headphones for hearing-impaired participants. Please contact the temple for more information or if you have special circumstances or needs",
        Lenguage: "The presentation of the endowment is available in many languages in every temple. Please select the desired language when scheduling an appointment online or ask at the recommend desk.",
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/89b209718a7ed41649a497893e240972b7cfd036/full/500%2C/0/default"
    },
    {
        Name: "Templo de Barranquilla, Colombia",
        Dedication: "9 de diciembre de 2018",
        Ubication: "Barranquilla, Colombia",
        Area: "2.141,4 m²",
        Country: "Colombia",
        Accessibility: "Some accommodations are available, including headphones for hearing-impaired participants. Please contact the temple for more information or if you have special circumstances or needs",
        Lenguage: "The presentation of the endowment is available in many languages in every temple. Please select the desired language when scheduling an appointment online or ask at the recommend desk.",
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/7e68e3b2ed30f817f91392968737f45a07e17e79/full/500%2C/0/default"
    },
    {
        Name: "Templo de Guayaquil, Ecuador",
        Dedication: "1 de agosto de 1999",
        Ubication: "Guayaquil, Guayas, Ecuador",
        Area: "6.585,3 m²",
        Country: "Ecuador",
        Accessibility: "Some accommodations are available, including headphones for hearing-impaired participants. Please contact the temple for more information or if you have special circumstances or needs",
        Lenguage: "The presentation of the endowment is available in many languages in every temple. Please select the desired language when scheduling an appointment online or ask at the recommend desk.",
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/b6e397f7a6c219442a9987bcd8c92ff78c5d50a6/full/500%2C/0/default"
    },
    {
        Name: "Templo de Quito, Ecuador",
        Dedication: "20 de noviembre de 2022",
        Ubication: "Quito, Ecuador",
        Area: "3.417 m²",
        Country: "Ecuador",
        Accessibility: "Some accommodations are available, including headphones for hearing-impaired participants. Please contact the temple for more information or if you have special circumstances or needs",
        Lenguage: "The presentation of the endowment is available in many languages in every temple. Please select the desired language when scheduling an appointment online or ask at the recommend desk.",
        imageUrl:
        "https://churchofjesuschrist.org/imgs/490df500d14611ec90efeeeeac1ee7e67e80c168/full/500%2C/0/default"
    },
    {
        Name: "Templo de Buenos Aires, Argentina",
        Dedication: "17 de enero de 1986",
        Ubication: "Ciudad Evita, Buenos Aires, Argentina",
        Area: "4.446 m²",
        Country: "Argentina",
        Accessibility: "Some accommodations are available, including headphones for hearing-impaired participants. Please contact the temple for more information or if you have special circumstances or needs",
        Lenguage: "The presentation of the endowment is available in many languages in every temple. Please select the desired language when scheduling an appointment online or ask at the recommend desk.",
        imageUrl:
        "https://churchofjesuschrist.org/imgs/a3454a8b72b4cc972b3898805ec69cc901a89170/full/500%2C/0/default"
    },
    {
        Name: "Templo de Córdoba, Argentina",
        Dedication: "17 de mayo de 2015",
        Ubication: "Córdoba, Argentina",
        Area: "3.193 m²",
        Country: "Argentina",
        Accessibility: "Some accommodations are available, including headphones for hearing-impaired participants. Please contact the temple for more information or if you have special circumstances or needs",
        Lenguage: "The presentation of the endowment is available in many languages in every temple. Please select the desired language when scheduling an appointment online or ask at the recommend desk.",
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/47f77971f2ad3eb7013b86d2f14e1e491333566c/full/500%2C/0/default"
    },
    {
        Name: "Templo de Mendoza, Argentina",
        Dedication: "22 de septiembre de 2024",
        Ubication: "Mendoza, Argentina",
        Area: "2.044 m²",
        Country: "Argentina",
        Accessibility: "Some accommodations are available, including headphones for hearing-impaired participants. Please contact the temple for more information or if you have special circumstances or needs",
        Lenguage: "The presentation of the endowment is available in many languages in every temple. Please select the desired language when scheduling an appointment online or ask at the recommend desk.",
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/af7pu96yy3qbqvv6nq1bz9p662c5coek29rsmtkp/full/500%2C/0/default"
    },
    {
        Name: "Templo de Salta, Argentina",
        Dedication: "16 de junio de 2024",
        Ubication: "Salta, Argentina",
        Area: "5.200 m²",
        Country: "Argentina",
        Accessibility: "Some accommodations are available, including headphones for hearing-impaired participants. Please contact the temple for more information or if you have special circumstances or needs",
        Lenguage: "The presentation of the endowment is available in many languages in every temple. Please select the desired language when scheduling an appointment online or ask at the recommend desk.",
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/8997d67ecc3011eebfd1eeeeac1e4e2f81a7e639/full/500%2C/0/default"
    }
];

/*--------------- Insert text to the page of Temples -------------------*/
function templesText(temples) {
    const colombiaSection = document.getElementById("templesOfColombia");
    const ecuadorSection = document.getElementById("templesOfEcuador");
    const argentinaSection = document.getElementById("templesOfArgentina");

    if (colombiaSection && ecuadorSection && argentinaSection) {
        const groupTemples = {
            Colombia: colombiaSection,
            Ecuador: ecuadorSection,
            Argentina: argentinaSection
        };

        temples.forEach(temple => {
            const section = groupTemples[temple.Country];
            if (section) {
                section.innerHTML += `
                    <h1>${temple.Name} </h1>
                    <strong>Dedication:</strong> ${temple.Dedication}.<br>
                    <strong>Ubication:</strong> ${temple.Ubication}.<br>
                    <strong>Area:</strong> ${temple.Area}m².<br><br>
                    <strong>Accessibility:</strong> ${temple.Accessibility}. <br>
                    <strong>Lenguages:</strong> ${temple.Lenguage} <br><br>
                    <img class="temple-images" src="${temple.imageUrl}" alt="Image ${temple.Name}" loading="lazy">
                `;
            }

        });

    };
};

templesText(temples);


/*--------------------- Internal Displacement --------------------*/ 
document.querySelectorAll(".scroll-link").forEach(link => {
    link.addEventListener("click", function() {
        const targetId = this.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({behavior:"smooth"});
        }
    });
});

/*---------------- number of times visted the page ---------------*/ 

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM completamente cargado.");

    const visitsDisplay = document.createElement("span");
    visitsDisplay.classList.add("visits");
    document.querySelector("footer").appendChild(visitsDisplay);
    console.log("🔍 visitsDisplay:", visitsDisplay); // Verifica que el elemento existe

    let numVisits = parseInt(localStorage.getItem("numVisits-ls")) || 0;
    console.log("📌 Valor inicial de numVisits:", numVisits);

    if (numVisits === 0) {
        visitsDisplay.textContent = "🥳 Welcome! Thank you for visit our page";
    } else {
        visitsDisplay.textContent = `Thank you for visit this page ${numVisits} times.`;
    }

    numVisits++;
    console.log("🆕 Nuevo valor de numVisits:", numVisits);

    localStorage.setItem("numVisits-ls", numVisits);
    console.log("✅ Número de visitas guardado en localStorage.");
});