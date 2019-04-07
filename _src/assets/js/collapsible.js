'use strict';

console.log("collapsible runningggg");

//Get the element arrow (class dropdown__down-arrow)
// const arrowEl = document.querySelector(".dropdown__down-arrow");
// Let's get it by id instead
const arrowElDesign = document.getElementById("dropdown__down-arrow--design");
const arrowElFill = document.getElementById("dropdown__down-arrow--fill");


//Handler function
function collapsibleDesign() {
    console.log("click!");
    
    // arrow botton (rotate 180º)
    arrowElDesign.classList.toggle("dropdown__down-arrow--rotated");
}

function collapsibleFill() {
    console.log("click!");
    
    // arrow botton (rotate 180º)
    arrowElFill.classList.toggle("dropdown__down-arrow--rotated");
}

//Function tipo toogle / or / if else
//si estás oculto
//muéstra panel (añadir clase show)
//arrow top (default)
//si estás visible 
// ocúlta panel (añadir clase hidden)
// arrow botton (rotate 180º)

//Lintener in arrows ("click")
arrowElDesign.addEventListener("click", collapsibleDesign);
arrowElFill.addEventListener("click", collapsibleFill);


