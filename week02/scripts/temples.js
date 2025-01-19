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