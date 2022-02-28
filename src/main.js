// import { example } from './data.js';

import data from './data/ghibli/ghibli.js';


const btn = document.getElementById("showSecondPage")
btn.addEventListener("click", () => {
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("secondPage").style.display = "block";
    document.querySelector("footer").style.display = "block";
});

let allMovies = data.films;
const printFilms = document.getElementById("listOfFilms");

const showFilms = (x) => {
    return` <section class = "containerMovies" id="${x.id}">
    <img src= "${x.poster}" class= "poster" >
    <section class = "title">
    <p>${x.title}</p>
</section>`

};

const interaction = (movies) => {
    movies.forEach((newFilms) => {
        printFilms.innerHTML += showFilms(newFilms);
    })
};
interaction(allMovies);


