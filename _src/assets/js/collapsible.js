'use strict';

console.log("collapsible runningggg");

// Consts for listeners
const panelsDropdownEl = document.querySelectorAll(".panel__dropdown");

//Función general
function collapsiblePanel(event) {    
    const currentEl = event.currentTarget;
    // Define const for the current arrow, usign chilNodes to catch the 4th child.
    const currentArrowEl = currentEl.childNodes[3];
    // console.log(currentArrowEl);

    // Add toogle up and down arrow
    currentArrowEl.classList.toggle("dropdown__arrow--up");
    currentArrowEl.classList.toggle("dropdown__arrow--down");
    
    // Define const to the next sibling
    const nextElSibling = currentEl.nextElementSibling;

    // Add toogle to show or hide the panel
    nextElSibling.classList.toggle("panel--close"); 

    //Que en cualquier caso, siempre cierre el panel de Twitter
    twtPanelEl.classList.add("panel--close"); 
}

// Add listeners (to the 'header' of each section):
for (const listener of panelsDropdownEl){
    listener.addEventListener("click", collapsiblePanel);
}

//Cuando hagamos click en el botón naranja de Crear Tarjeta, nos tiene que mostrar la sección de Twitter.

//Coger el elemento botón
const btnShareEl = document.querySelector(".btn_share");
//Coger el elemento panel twitter
const twtPanelEl = document.querySelector(".panel__twitter");

//Añadir handler que hace 2 cosas:
function handlerCreateCard(event) {
    event.preventDefault();

    //Mostrar/ocultar panel mediante toggle
    //Add toogle to show or hide the panel
    twtPanelEl.classList.toggle("panel--close"); 
    //Mostrar el botón como deshabilitado (grisecillo) 
    console.dir(btnShareEl);
    btnShareEl.disabled = true;
    btnShareEl.classList.toggle("btn_share--disabled");
}

//Listener al botón
btnShareEl.addEventListener("click", handlerCreateCard);