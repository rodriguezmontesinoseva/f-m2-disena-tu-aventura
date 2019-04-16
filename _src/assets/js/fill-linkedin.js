'use strict';

// console.log('>> fill-linkedin running :)');

// Element listener
const linkedinInputEl = document.querySelector('#linkedin');

// Element target
const linkedinCardEl = document.querySelector('.linkedin-link');

// Default value for linkedin:
const linkedinDefault = linkedinCardEl.href;


//Handler:
function linkBottonLinkedin (event) {
    //Fill the userData object with this value when is selected
    const key = event.currentTarget.name;
    const value = linkedinInputEl.value;
    fillUserDataObject(key,value);

    linkedinCardEl.href = linkedinInputEl.value || linkedinDefault;
};

//Listener for the linkedin input element
linkedinInputEl.addEventListener('keyup',linkBottonLinkedin)
