import { filterDataDirector, filterDataProducer, sortData, filterTitle} from './data.js';

import data from './data/ghibli/ghibli.js';

const hiddenFooter = document.querySelector("footer");
hiddenFooter.classList.add("oculto");

const hiddenNav = document.getElementById("nav");
hiddenNav.classList.add("oculto");

const btn = document.getElementById("showSecondPage")
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
</section>`
};

const showInScreen = (y) => {
    printFilms.innerHTML = "";
    y.forEach((z) => {
        printFilms.innerHTML += moviesToShow(z)
    })
};
showInScreen(allMovies);

const filterDirector = document.getElementById('filterDirector');
filterDirector.addEventListener('change', (x) => {
    const selectedDirector = filterDataDirector(allMovies, x.target.value);
    showInScreen(selectedDirector);
});

const filterProducer = document.getElementById('filterProducer');
filterProducer.addEventListener('change', (x) => {
    const selectedProducer = filterDataProducer(allMovies, x.target.value);
    showInScreen(selectedProducer);
});

// let ximena = document.getElementById("listOfFilms");

// const showInScreen2 = (y) =>{
//     printFilms.innerHTML ="";
//     y.forEach((z) => {
//         printFilms.innerHTML += moviesToShow(z)
//     })
// };
// let prueba1 = data.films["people"];
// console.log(prueba1);

// const filterCharacters = document.getElementById('filterCharacters');
// function peopleShow (contenedor, datatotal) {

//     datatotal.forEach((people)=> {
//         const detallesPersonajes = document.createElement("div");
//         detallesPersonajes.className = "container-card-characters";
//         detallesPersonajes.innerHTML =`
//         <section class = "containerCharacters" id="${people.id}">
//         <img src= "${people.img}" class= "poster"/>
//         <p id="nameCharacters">${people.name}</p>
//         <p id="ageCharacters">${people.age}</p>
//         <p id="eyesCharacters">${people.eye_color}</p>
//         <p id="hairCharacters">${people.hair_color}</p>
//         <p id="specieCharacters">${people.specie}</p>
//     </section>`
//     contenedor.appendChild(detallesPersonajes);
//     })
// }
// let ximena = document.getElementById('ximena');
// function mostrarPersonajes() {
//     ximena.style.display="block";
//     showInScreen();
//     document.querySelector("#secondPage").style.display = "none";
    
//    let totalPersonajes = filterDataCharacters(allMovies);

//     peopleShow(filterCharacters,totalPersonajes);
// }
// showInScreen(mostrarPersonajes);
// filterCharacters.addEventListener('change', (x) => {
// const selectedCharacters = filterDataCharacters(allMovies, x.target.value);
// showInScreen(selectedCharacters);

// let charactersToShow = (people) =>{
//     return`
//     <section class = "containerCharacters" id="${people.id}">
//     <img src= "${people.img}" class= "poster"/>
//     <p id="nameCharacters">${people.name}</p>
//     <p id="ageCharacters">${people.age}</p>
//     <p id="eyesCharacters">${people.eye_color}</p>
//     <p id="hairCharacters">${people.hair_color}</p>
//     <p id="specieCharacters">${people.specie}</p>
// </section>`
// }
// showInScreen(charactersToShow);



// const characters = document.getElementById('characters');
// characters.addEventListener('change', (x) => {
//     const showInScreen2 = (y) =>{
//         printFilms.innerHTML ="";
//         y.forEach((z) => {
//             printFilms.innerHTML += charactersToShow(z)
//         })
//     };
//     showInScreen2(charactersToShow);
//     const selectedCharacters = filterDataCharacters(allMovies, x.target.value);
//     showInScreen2(selectedCharacters);

// });
const filterByOrder = document.getElementById('sectionOrder');
filterByOrder.addEventListener('change', (x) => {
    const selectedOrder = sortData(allMovies, x.target.value, x.target.value);
    showInScreen(selectedOrder);
});

const navigationBar = document.querySelector('#navigationBar');
navigationBar.addEventListener('keyup', () => {
    const searchText = filterTitle(allMovies,'title', navigationBar.value.toLowerCase());
    showInScreen(searchText);
});
