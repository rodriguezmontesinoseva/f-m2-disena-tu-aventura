'use strict';

console.log("collapsible runningggg");

//Get the element arrow (class dropdown__down-arrow)
const arrowEl = document.querySelector(".dropdown__down-arrow");

//Handler function
function collapsible() {
    console.log("click!");
    
    // arrow botton (rotate 180º)
    arrowEl.classList.toggle("dropdown__down-arrow--rotated");
}

//Function tipo toogle / or / if else
//si estás oculto
//muéstra panel (añadir clase show)
//arrow top (default)
//si estás visible 
// ocúlta panel (añadir clase hidden)
// arrow botton (rotate 180º)

//Lintener in arrows ("click")
arrowEl.addEventListener("click", collapsible);


