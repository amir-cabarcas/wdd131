const lastModified = document.querySelector("#lastModified"); 
const currentYear = document.getElementById("currentyear");

const today = new Date();
const modifiedDate = new Date(document.lastModified);

if (currentYear) {
  currentYear.innerHTML = today.getFullYear(); 
}

if (lastModified) {
  lastModified.innerHTML = `Last Modified: ${modifiedDate.toLocaleDateString()} ${modifiedDate.toLocaleTimeString()}`;
}

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bogotá Colombia Temple",
    location: "Bogotá Distrito Capital Colombia",
    dedicated: "1999, April, 24",
    area: 53819,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/800x500/bogota-colombia-temple-lds-1029726-wallpaper.jpg"
  },
  {
    templeName: "Barranquilla Colombia Temple",
    location: "Barranquilla Atlantico, Colombia",
    dedicated: "2018, December, 09",
    area: 24756,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/800x500/2-Barranquilla-Columblia-Temple-2135201.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay France",
    dedicated: "2017, May, 27",
    area: 44175,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/800x500/Paris-Temple02.jpg"
  }
];

const home = document.getElementById("Home");
const oldTemples = document.getElementById("old-temples");
const newTemples = document.getElementById("new-temples");
const largeTemples = document.getElementById("large-temples");
const smallTemples = document.getElementById("small-temples");

// Función para renderizar templos
function CardTemples(temples) {
  const images = document.querySelector(".figures");
  images.innerHTML = temples.map(temple => 
    `<figure class="temple-card">
      <figcaption class="temple-caption">
        <span class="Heading-caption">${temple.templeName}</span><br>
        <div class="text-caption">
          Location: ${temple.location} <br>
          Dedicated: ${temple.dedicated} <br>
          Size: ${temple.area} sq ft <br>
        </div>
      </figcaption>
      <img class="temple-img" src="${temple.imageUrl}" alt="${temple.templeName}" width="200" loading="lazy">
    </figure>`
  ).join('');
}

CardTemples(temples);



// Filtrar templos cuando se haga clic en el botón
if (home) {
  home.addEventListener("click", () => {
    CardTemples(temples);
  })
} 

if (oldTemples) {
  oldTemples.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]); // Extraer año
      return year <= 1900; // Filtrar por año
    });

    CardTemples(oldTemples);
  });
}  

if (newTemples) {
  newTemples.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year >= 2000;
    });

    CardTemples(newTemples);
  });
}

if (largeTemples) {
  largeTemples.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);

    CardTemples(largeTemples);
  });
}

if (smallTemples) {
  smallTemples.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);

    CardTemples(smallTemples);
  })
}




