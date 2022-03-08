import {filterDataDirector,filterDataProducer,sortData,filterTitle, joinCharacter} from "./data.js";

import data from "./data/ghibli/ghibli.js";

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
});

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

const filterDirector = document.getElementById("filterDirector");
filterDirector.addEventListener("change", (x) => {
  const selectedDirector = filterDataDirector(allMovies, x.target.value);
  showInScreen(selectedDirector);
});

const filterProducer = document.getElementById("filterProducer");
filterProducer.addEventListener("change", (x) => {
  const selectedProducer = filterDataProducer(allMovies, x.target.value);
  showInScreen(selectedProducer);
});
const filterByOrder = document.getElementById("sectionOrder");
filterByOrder.addEventListener("change", (x) => {
  const selectedOrder = sortData(allMovies, x.target.value, x.target.value);
  showInScreen(selectedOrder);
});

const navigationBar = document.querySelector("#navigationBar");
navigationBar.addEventListener("keyup", () => {
  const searchText = filterTitle(allMovies,"title",navigationBar.value.toLowerCase());
  showInScreen(searchText);
});

const peoples = document.getElementById("people");
peoples.addEventListener("click", () => {
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("secondPage").style.display = "none";
  document.getElementById("thirdPage").style.display = "block";
  hiddenFooter.classList.remove("oculto");
  hiddenNav.classList.remove("oculto");
});

const showToCharacters = document.getElementById("showToCharacters");
showToCharacters.innerHTML = "";
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

let charactersToShow = (people) =>{
    return`
    <section class = "containerCharacters" id="${people.id}">
    <img src= "${people.img}" class= "poster"/>
    <div id="veremos">
    <p class="pCharacters" id="name">${people.name}</p>
    <p class="pCharacters" id="gender">${people.gender}</p>
    <p class="pCharacters" id="age">${people.age}</p>
    <p class="pCharacters" id="eye_color">${people.eye_color}</p>
    <p class="pCharacters" id="hair_color">${people.hair_color}</p>
    <p class="pCharacters" id="specie">${people.specie}</p>
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

