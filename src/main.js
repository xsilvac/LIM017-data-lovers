// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// // import data from './data/rickandmorty/rickandmorty.js';

const btn = document.getElementById("showSecondPage")
btn.addEventListener("click", () => {
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("secondPage").style.display = "block";
    document.querySelector("footer").style.display = "block";
})