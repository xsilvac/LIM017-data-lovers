// import { example } from './data.js';

// import data from './data/ghibli/ghibli.js';

async function obtenerDatos() {
    const response = await fetch(`http://127.0.0.1:5500/src/data/ghibli/ghibli.json`);
    const data = await response.json();
    console.log(data.films);

    // const director = data.filter(data =>data.name ===)



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
 const printFilms = document.getElementById("listOfFilms");
 for(let x of allMovies) {
     printFilms.innerHTML +=
     `<section class = "containerMovies" id="${x.id}">
     <img src= "${x.poster}" class= "poster" >
     <p id="title">${x.title}</p>
 </section>`
 }
 



    // json.films.foreach((films) => {
    //  console.log(films.poster);
    //     })
}

obtenerDatos();








