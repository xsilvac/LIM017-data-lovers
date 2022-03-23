/* eslint-disable no-undef */
import {
  filterDataDirector, filterDataProducer, sortData, filterTitle, joinCharacter, joinVehicles, joinLocations,
  filterDataByGender, filterDataSpecie, dataOrderCharacter, filterName, filterNameLocations, computeStats, computeStatsTwo} from "./data.js";
  
import data from "./data/ghibli/ghibli.js";
const logoSecondPage = document.getElementById("logo");
logoSecondPage.addEventListener("click", () => {
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("secondPage").style.display = "block";
  document.getElementById("thirdPage").style.display = "none";
  document.getElementById("fourtPage").style.display = "none";
  document.getElementById("fifthPage").style.display = "none";
  hiddenFooter.classList.remove("hiden");
  hiddenNav.classList.remove("hiden");
});
const hiddenNav1 = document.getElementById("main-header");
hiddenNav1.classList.add("hiden");
const hiddenFooter = document.querySelector("footer");
hiddenFooter.classList.add("hiden");
const hiddenNav = document.getElementById("nav");
hiddenNav.classList.add("hiden");
const btn = document.getElementById("showSecondPage");
btn.addEventListener("click", () => {
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("secondPage").style.display = "block";
  hiddenFooter.classList.remove("hiden");
  hiddenNav.classList.remove("hiden");
  hiddenNav1.classList.remove("hiden")
})

//Mostrar página principal
let allMovies = data.films;
let printFilms = document.getElementById("listOfFilms");
let moviesToShow = (x) => {
  return `
    <section class = "containerMovies" id="${x.id}">
    <img src= "${x.poster}" class= "poster"/><br>
    <h1 id="title">${x.title}</h1>
</section>`;
};
const showInScreen = (y) => {
  printFilms.innerHTML = "";
  y.forEach((z) => {
    printFilms.innerHTML += moviesToShow(z);
  });
};
 showInScreen(allMovies);

 //Modales
let informationModal = (m) => {
  return `
  <section class = "containerModals">
    <p class="close">X</p>
    <img src= "${m.poster}" class= "poster"/>
    <div id= "informationOfMovies" class="modalsDiv">
      <h1 class="pModals" id="title"><b>Title:</b> ${m.title}</h1>
      <p class="pModals" id="description"><b>Description:</b> ${m.description}</p>
      <p class="pModals" id="release_date"><b>Release date:</b> ${m.release_date}</p>
      <p class="pModals" id="producer"><b>Producer:</b> ${m.producer}</p>
      <p class="pModals" id="director"><b>Director:</b> ${m.director}</p>
      <p class="pModals" id="rt_score"><b>Score:</b> ${m.rt_score}</p>
    </div>
</section>`;
}
const allModals = document.querySelector(".modals");
const addModal = () =>{
  document.querySelectorAll(".containerMovies").forEach((element, index) => {
    element.addEventListener ("click", () => {
      const modalHtml = informationModal(allMovies[index]);
      allModals.innerHTML ="";
      allModals.innerHTML += modalHtml;
      document.querySelector(".containerModals").style.display ="block";
      const close = document.getElementsByClassName("close")[0];
            close.addEventListener("click", () => {
                document.querySelector(".containerModals").style.display = 'none';
            })
    })}
  )
}
addModal();

//filtrar por director
let directors = [];
const filterDirector = document.getElementById("filterDirector");
filterDirector.addEventListener("change", (x) => {
  const selectedDirector = filterDataDirector(allMovies, x.target.value);
  directors.push(selectedDirector);
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
//Buscar titulo de la pelicula
const navigationBar = document.querySelector("#navigationBar");
navigationBar.addEventListener("keyup", () => {
  const searchText = filterTitle(allMovies, "title", navigationBar.value.toLowerCase());
  showInScreen(searchText);
});
//boton para la hoja de personajes
const peoples = document.getElementById("character");
peoples.addEventListener("click", () => {
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("secondPage").style.display = "none";
  document.getElementById("thirdPage").style.display = "block";
  hiddenFooter.classList.remove("hiden");
  hiddenNav.classList.remove("hiden");
});
//mostrar personajes
const showToCharacters = document.getElementById("showToCharacters");
showToCharacters.innerHTML = "";
let charactersToShow = (people) => {
  return `
    <section class = "containerCharacters" id="${people.id}">
    <img src= "${people.img}" class= "poster"/>
    <div id="veremos">
    <h1 class="pCharacters" id="name"><b>Name</b>: ${people.name}</h1>
    <p class="pCharacters" id="gender"><b>Gender</b>: ${people.gender}</p>
    <p class="pCharacters" id="age"><b>Age</b>: ${people.age}</p>
    <p class="pCharacters" id="eye_color"><b>Eyes Color</b>: ${people.eye_color}</p>
    <p class="pCharacters" id="hair_color"><b>Hair Color</b>: ${people.hair_color}</p>
    <p class="pCharacters" id="specie"><b>Specie</b>: ${people.specie}</p>
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
//Filtrar por especie
const filterSpecie = document.querySelector("#filterSpecie");
filterSpecie.addEventListener("change", (x) => {
  const selectedSpecie = filterDataSpecie(joinCharacter(allMovies), x.target.value);
  showInScreenTwo(selectedSpecie);
})
//Ordenar de a-z y z-a
const filterOrderByCharacter = document.querySelector("#filterOrderByCharacter");
filterOrderByCharacter.addEventListener("change", (x) => {
  const selectedOrderCharacter = dataOrderCharacter(joinCharacter(allMovies), x.target.value, x.target.value);
  showInScreenTwo(selectedOrderCharacter);
})
//Buscar nombre de personaje
const searchName = document.getElementById("searchName");
searchName.addEventListener("keyup", () => {
  const searchCharacter = filterName(joinCharacter(allMovies), "name", searchName.value.toLowerCase());
  showInScreenTwo(searchCharacter);
})
//boton para la hoja de vehiculos
const vehicles = document.getElementById("vehiclesNav");
vehicles.addEventListener("click", () => {
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("secondPage").style.display = "none";
  document.getElementById("thirdPage").style.display = "none";
  document.getElementById("fourtPage").style.display = "block";
  hiddenFooter.classList.remove("hiden");
  hiddenNav.classList.remove("hiden");
});
//mostrar vehiculos
const showToVehicles = document.getElementById("showToVehicles");
showToVehicles.innerHTML = "";
let vehiclesToShow = (vehicles) => {
  return `
  <section class = "containerCharacters" id="${vehicles.id}">
  <img src= "${vehicles.img}" class= "posterVehicles"/>
  <div id="veremos1">
  <h1 class="pCharacters" id="name"><b>Name</b>: ${vehicles.name}</h1>
  <p class="pCharacters" id="description"><b>Description</b>: ${vehicles.description}</p>
  <p class="pCharacters" id="vehicle_class"><b>Vehicle Class</b>: ${vehicles.vehicle_class}</p>
  <p class="pCharacters" id="length"><b>Length</b>: ${vehicles.length}</p>
  <p class="pCharacters" id="pilot"><b>Pilot</b>: ${vehicles.pilot.name}</p>
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
//boton para la hoja de locaciones
const locations = document.getElementById("locationsNav");
locations.addEventListener("click", () => {
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("secondPage").style.display = "none";
  document.getElementById("thirdPage").style.display = "none";
  document.getElementById("fourtPage").style.display = "none";
  document.getElementById("fifthPage").style.display = "block";
  hiddenFooter.classList.remove("hiden");
  hiddenNav.classList.remove("hiden");
});
//mostrar locaciones
const showToLocations = document.getElementById("showToLocations");
showToLocations.innerHTML = "";
let locationsToShow = (locations) => {
  return `
  <section class = "containerCharacters" id="${locations.id}">
  <img src= "${locations.img}" class= "posterLocations"/>
  <div id="veremos1">
  <h1 class="pCharacters" id="name">Name: ${locations.name}</h1>
  <p class="pCharacters" id="climate"><b>Climate</b>: ${locations.climate}</p>
  <p class="pCharacters" id="terrain"><b>Terrain</b>: ${locations.terrain}</p>
  <p class="pCharacters" id="surface_water"><b>Surface Water</b>: ${locations.surface_water}</p>
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
const searchLocations = document.getElementById("searchLocations");
searchLocations.addEventListener("keyup", () => {
  const searchNameLocations = filterNameLocations(joinLocations(allMovies), "name", searchLocations.value.toLowerCase());
  showInScreenFour(searchNameLocations);
})

const dataOrderScore = computeStats("rtScore",data.films);
const dataTitle = dataOrderScore.map(e=>e.title);
const dataFilmsRt = (dataOrderScore.map(e=>e.rt_score)).map(Number);
const myChart= document.getElementById("myChart").getContext("2d");
function totalCaseschart(graphic){
new Chart (graphic, {
        type:'bar',
        data: {
            labels: dataTitle,
            datasets: [{
              label:'Score of each movie',
              data: dataFilmsRt,
            backgroundColor: [
              'rgb(244, 190, 238, 0.7)',

                ],
            },
          ]}
    })}
totalCaseschart(myChart);

let director = allMovies.map((x) => x.director);
director = director.filter((item, i) =>{
  return director.indexOf(item) === i;
})

const mySecondChart= document.getElementById("mySecondChart").getContext("2d");
let porcentaje =[];
for (let element of director){
  porcentaje.push((computeStatsTwo(allMovies, element)));
 }
 
 function getPercent(a){
  new Chart (a, {
            type:'pie',
            data: {
                labels: director,
                datasets: [{
                  label:'Participantes por género: Mujeres: %',
                  data: porcentaje,
                  backgroundColor: [
                  'rgb(255, 171, 193, 0.9)',
                  'rgb(156, 170, 242, 0.9)',
                  'rgb(255, 202, 203, 0.9)',
                  'rgb(149, 203, 255, 0.9)', 
                  'rgb(255, 244, 209, 0.9)', 
                  'rgb(180, 229, 255, 0.9)'
                    ],
                },
              ]},
              options: {
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    position: 'bottom',
                    display: true,
                    text: `Isao Takahata: 25%
                    Hayao Miyazaki: 45%
                    Gorō Miyazaki:10%
                    Hiromasa Yonebayashi:10%
                    Hiroyuki Morita: 5%
                    Yoshifumi Kondō: 5%`
                  }
                }
              },
        })
      }
    getPercent(mySecondChart);

