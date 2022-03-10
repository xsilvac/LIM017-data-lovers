import {filterDataDirector,filterDataProducer,sortData,filterTitle, joinCharacter, joinVehicles, joinLocations, filterDataByGender} from "./data.js";

import data from "./data/ghibli/ghibli.js";

const hiddenNav1 = document.getElementById("main-header");
hiddenNav1.classList.add("oculto");

const hiddenFooter = document.querySelector("footer");
hiddenFooter.classList.add("oculto");

const hiddenNav = document.getElementById("nav");
hiddenNav.classList.add("oculto");

const btn = document.getElementById("showSecondPage");
btn.addEventListener("click", () => {
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("secondPage").style.display = "block";
  hiddenFooter.classList.remove("oculto");
  hiddenNav.classList.remove("oculto");
  hiddenNav1.classList.remove("oculto");
});
//mostrar pagina principal
let allMovies = data.films;
let printFilms = document.getElementById("listOfFilms");
let moviesToShow = (x) => {
  return `
    <section class = "containerMovies" id="${x.id}">
    <img src= "${x.poster}" class= "poster"/>
    <p id="title">${x.title}</p>
</section>`;
};

const showInScreen = (y) => {
  printFilms.innerHTML = "";
  y.forEach((z) => {
    printFilms.innerHTML += moviesToShow(z);
  });
};
showInScreen(allMovies);
//filtrar por director
const filterDirector = document.getElementById("filterDirector");
filterDirector.addEventListener("change", (x) => {
  const selectedDirector = filterDataDirector(allMovies, x.target.value);
  showInScreen(selectedDirector);
});
//Filtrar por productor
const filterProducer = document.getElementById("filterProducer");
filterProducer.addEventListener("change", (x) => {
  const selectedProducer = filterDataProducer(allMovies, x.target.value);
  showInScreen(selectedProducer);
});
//Ordenar A-Z y de Z-A
const filterByOrder = document.getElementById("sectionOrder");
filterByOrder.addEventListener("change", (x) => {
  const selectedOrder = sortData(allMovies, x.target.value, x.target.value);
  showInScreen(selectedOrder);
});
//filtrar pelicula
const navigationBar = document.querySelector("#navigationBar");
navigationBar.addEventListener("keyup", () => {
  const searchText = filterTitle(allMovies,"title",navigationBar.value.toLowerCase());
  showInScreen(searchText);
});
//boton para la hoja de personajes
const peoples = document.getElementById("people");
peoples.addEventListener("click", () => {
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("secondPage").style.display = "none";
  document.getElementById("thirdPage").style.display = "block";
  hiddenFooter.classList.remove("oculto");
  hiddenNav.classList.remove("oculto");
});


// for (let people of joinCharacter(allMovies)) {
//   showToCharacters.innerHTML += `
//     <section class = "containerCharacters" id="[${people.id}]">
//     <img src= "${people.img}" class= "poster"/>
//     <p id="name">${people.name}</p>
//     <p id="gender">${people.gender}</p>
//     <p id="age">${people.age}</p>
//     <p id="eye_color">${people.eye_color}</p>
//     <p id="hair_color">${people.hair_color}</p>
//     <p id="specie">${people.specie}</p>
// </section>`;
// }
//mostrar personajes
const showToCharacters = document.getElementById("showToCharacters");
showToCharacters.innerHTML = "";
let charactersToShow = (people) =>{
    return`
    <section class = "containerCharacters" id="${people.id}">
    <img src= "${people.img}" class= "poster"/>
    <div id="veremos">
    <p class="pCharacters" id="name">Name: ${people.name}</p>
    <p class="pCharacters" id="gender">Gender: ${people.gender}</p>
    <p class="pCharacters" id="age">Age: ${people.age}</p>
    <p class="pCharacters" id="eye_color">Eyes Color: ${people.eye_color}</p>
    <p class="pCharacters" id="hair_color">Hair Color: ${people.hair_color}</p>
    <p class="pCharacters" id="specie">Specie: ${people.specie}</p>
    </div>
</section>`
}
const showInScreenTwo = (y) => {
    showToCharacters.innerHTML = "";
    y.forEach((z) => {
        showToCharacters.innerHTML += charactersToShow(z)
    })
}
showInScreenTwo(joinCharacter(allMovies));
//Filtrar por genero
const filterGender = document.getElementById("filterGender");
filterGender.addEventListener("change", (x) => {
  const selectedGender = filterDataByGender(joinCharacter(allMovies), x.target.value);
  showInScreenTwo(selectedGender);
});
//boton para la hoja de vehiculos
const vehicles = document.getElementById("vehicles");
vehicles.addEventListener("click", () => {
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("secondPage").style.display = "none";
  document.getElementById("thirdPage").style.display = "none";
  document.getElementById("fourtPage").style.display = "block";
  hiddenFooter.classList.remove("oculto");
  hiddenNav.classList.remove("oculto");
});
//mostrar vehiculos
const showToVehicles = document.getElementById("showToVehicles");
showToVehicles.innerHTML = "";
let vehiclesToShow = (vehicles) =>{
  return`
  <section class = "containerCharacters" id="${vehicles.id}">
  <img src= "${vehicles.img}" class= "posterVehicles"/>
  <div id="veremos1">
  <p class="pCharacters" id="name">Name: ${vehicles.name}</p>
  <p class="pCharacters" id="description">Description: ${vehicles.description}</p>
  <p class="pCharacters" id="vehicle_class">Vehicle Class: ${vehicles.vehicle_class}</p>
  <p class="pCharacters" id="length">length: ${vehicles.length}</p>
  <p class="pCharacters" id="pilot">Pilot: ${vehicles.pilot.name}</p>
  </div>
</section>`
}
const showInScreenThree = (y) => {
  showToVehicles.innerHTML = "";
  y.forEach((z) => {
    showToVehicles.innerHTML += vehiclesToShow(z)
  })
}
showInScreenThree(joinVehicles(allMovies));

joinLocations
//boton para la hoja de vehiculos
const locations = document.getElementById("locations");
locations.addEventListener("click", () => {
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("secondPage").style.display = "none";
  document.getElementById("thirdPage").style.display = "none";
  document.getElementById("fourtPage").style.display = "none";
  document.getElementById("fifthPage").style.display = "block";
  hiddenFooter.classList.remove("oculto");
  hiddenNav.classList.remove("oculto");
});
//mostrar vehiculos
const showToLocations = document.getElementById("showToLocations");
showToLocations.innerHTML = "";
let locationsToShow = (locations) =>{
  return`
  <section class = "containerCharacters" id="${locations.id}">
  <img src= "${locations.img}" class= "posterLocations"/>
  <div id="veremos1">
  <p class="pCharacters" id="name">Name: ${locations.name}</p>
  <p class="pCharacters" id="climate">Climate: ${locations.climate}</p>
  <p class="pCharacters" id="terrain">Terrain: ${locations.terrain}</p>
  <p class="pCharacters" id="surface_water">Surface Water: ${locations.surface_water}</p>
  </div>
</section>`
}
const showInScreenFour = (y) => {
  showToLocations.innerHTML = "";
  y.forEach((z) => {
    showToLocations.innerHTML += locationsToShow(z)
  })
}
showInScreenFour(joinLocations(allMovies));