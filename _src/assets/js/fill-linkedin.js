'use strict';

console.log('>> fill-linkedin running :)');

// Element listener
const linkedinInputEl = document.querySelector("#linkedin");

// Element target
const linkedinCardEl = document.querySelector(".linkedin-link");

// Default value for linkedin:
const linkedinDefault = linkedinCardEl.href;


//Handler:
function linkBottonLinkedin1 () {
    linkedinCardEl.href = linkedinInputEl.value || linkedinDefault;
};

//Listener. I have choosen a "change" event so it just interacts when the full url is filled.
linkedinInputEl.addEventListener("change",linkBottonLinkedin1)
