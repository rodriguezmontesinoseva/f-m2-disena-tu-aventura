'use strict';

console.log("collapsible runningggg");

//Get the element arrow (class dropdown__down-arrow)
// const arrowEl = document.querySelector(".dropdown__down-arrow");
// Let's get it by id instead
const arrowElDesign = document.getElementById("dropdown__down-arrow--design");
const arrowElFill = document.getElementById("dropdown__down-arrow--fill");
const arrowElShare = document.getElementById("dropdown__down-arrow--share");

// TO BE REMOVED -- Apparently these 3 could be removed. Need approval to do so.
const panelDesignEl = document.querySelector(".panel__design-radios");
const panelFillEl = document.querySelector(".panel-fill__form");
const panelShareEl = document.querySelector(".align_share");

// Consts for listeners
const designDropdownEl = document.querySelector(".panel__dropdown--design");
const fillDropdownEl = document.querySelector(".panel__dropdown--fill");
const shareDropdownEl = document.querySelector(".panel__dropdown--share");


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
designDropdownEl.addEventListener("click", collapsiblePanel);
fillDropdownEl.addEventListener("click", collapsiblePanel);
shareDropdownEl.addEventListener("click", collapsiblePanel);

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