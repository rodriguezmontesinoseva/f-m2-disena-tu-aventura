'use strict';

console.log("collapsible runningggg");

//Get the element arrow (class dropdown__down-arrow)
// const arrowEl = document.querySelector(".dropdown__down-arrow");
// Let's get it by id instead
const arrowElDesign = document.getElementById("dropdown__down-arrow--design");
const arrowElFill = document.getElementById("dropdown__down-arrow--fill");
const arrowElShare = document.getElementById("dropdown__down-arrow--share");

const panelDesignEl = document.querySelector(".panel-design__radios");
const panelFillEl = document.querySelector(".panel-fill__form");
const panelShareEl = document.querySelector(".align_share");


//Función general
function collapsiblePanel(event) {    
    const currentArrow = event.currentTarget;
    //Buscamos en su árbol familiar, para llegar desde la flecha al elemento panel:
    // console.dir(currentArrow);

    // Add toogle up and down arrow
    currentArrow.classList.toggle("dropdown__arrow--up");
    currentArrow.classList.toggle("dropdown__arrow--down");

    // Vamos desde la flecha a la madre contenedora
    const parentElArrow = currentArrow.parentElement;

    // Buscamos la tía de la flecha jajaja:
    const nextElSibling = parentElArrow.nextElementSibling;

    //Add toogle to show or hide the panel
    nextElSibling.classList.toggle("panel--close"); 

    //Que en cualquier caso, siempre cierre el panel de Twitter
    twtPanelEl.classList.add("panel--close"); 
}

// Add listeners:
arrowElDesign.addEventListener("click", collapsiblePanel);
arrowElFill.addEventListener("click", collapsiblePanel);
arrowElShare.addEventListener("click", collapsiblePanel);

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