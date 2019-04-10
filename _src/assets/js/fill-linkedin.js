'use strict';

// console.log('>> fill-linkedin running :)');

// Element listener
const linkedinInputEl = document.querySelector('#linkedin');

// Element target
const linkedinCardEl = document.querySelector('.linkedin-link');

// Default value for linkedin:
const linkedinDefault = linkedinCardEl.href;

// recojer el icono de la tarjeta preview de Linkdin:
const previewIconLinkedin = document.querySelector('.linkedin-icon');


//Handler:
function linkBottonLinkedin () {
    // console.log(linkedinInputEl.value);

    linkedinCardEl.href = linkedinInputEl.value || linkedinDefault;

    //llamar funccion que le añade la clase addBoxShadow__IfInputIsFIlled 
    addBoxshadowifFilled(linkedinInputEl,previewIconLinkedin);
};

//Listener for the linkedin input element
linkedinInputEl.addEventListener('keyup',linkBottonLinkedin)
