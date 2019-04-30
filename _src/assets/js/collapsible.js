'use strict';


// Consts for listeners and siblings
const panelsDropdownEl = document.querySelectorAll('.panel__dropdown');
const panelDesignRadiosEl = document.querySelector ('.panel__design-radios');
const panelFillFormEl = document.querySelector('.panel__fill-form');
const alignShareEl= document.querySelector('.align_share');

//General function: one open panel, the rest closed.
const collapsiblePanel = (event) =>{    
    
  //All collapsables are closed
  panelDesignRadiosEl.classList.add('panel--close');
  panelFillFormEl.classList.add('panel--close');
  alignShareEl.classList.add('panel--close');

  //Bring the elements of the arrows
  const arrowsUpEl=document.querySelector('.dropdown__arrow--up');
  // const arrowsDownEl=document.querySelector('.dropdown__arrow--down');
  // put the arrows with arrow--down
  arrowsUpEl.classList.remove('dropdown__arrow--up');
  arrowsUpEl.classList.add('dropdown__arrow--down');

  //constants for the .currentTarjet, its child (arrow) and its brother (drop-down panel)
  const currentEl = event.currentTarget;
  const currentArrowEl = currentEl.children[1];
  const nextElSibling = currentEl.nextElementSibling;

  //Open the currentTarjet dropdown and put arrow--up
  nextElSibling.classList.remove('panel--close');
  currentArrowEl.classList.remove('dropdown__arrow--down');
  currentArrowEl.classList.add('dropdown__arrow--up');

  //Que en cualquier caso, siempre cierre el panel de Twitter
  twtPanelEl.classList.add('panel--close'); 
}

// Add listeners (to the 'header' of each section):
for (const listener of panelsDropdownEl){
  listener.addEventListener('click', collapsiblePanel);
}

//Cuando hagamos click en el botón naranja de Crear Tarjeta, nos tiene que mostrar la sección de Twitter.

//Coger el elemento botón
const btnShareEl = document.querySelector('.btn_share');
//Coger el elemento panel twitter
const twtPanelEl = document.querySelector('.panel__twitter');

//Añadir handler que hace 2 cosas:
const handlerCreateCard = (event)=> {
  event.preventDefault();

  //Mostrar/ocultar panel mediante toggle
  //Add toogle to show or hide the panel
  twtPanelEl.classList.toggle('panel--close'); 
  //Mostrar el botón como deshabilitado (grisecillo) 
  // console.dir(btnShareEl);
  btnShareEl.disabled = true;
  btnShareEl.classList.toggle('btn_share--disabled');

  sendRequest(userData);
}

//Listener al botón
btnShareEl.addEventListener('click', handlerCreateCard);