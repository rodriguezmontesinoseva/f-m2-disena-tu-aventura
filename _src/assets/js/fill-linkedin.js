'use strict';

console.log('>> fill-linkedin running :)');

// Element listener
const linkedinInputEl = document.querySelector('#linkedin');

// Element target
const linkedinCardEl = document.querySelector('.linkedin-link');

// Default value for linkedin:
const linkedinDefault = linkedinCardEl.href;


//Handler:
function linkBottonLinkedin () {
    console.log(linkedinInputEl.value);

    linkedinCardEl.href = linkedinInputEl.value || linkedinDefault;
};

//Listener for the linkedin input element
linkedinInputEl.addEventListener('keyup',linkBottonLinkedin)
