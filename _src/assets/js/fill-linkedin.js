'use strict';

console.log('>> fill-linkedin running :)');

// Element listener
const linkedinInputEl = document.querySelector("#linkedin");

// Element target
const linkedinCardEl = document.querySelector(".linkedin-link");

// Default value for linkedin:
const linkedinDefault = "#";

//Handler:
function linkBottonLinkedin1 () {
    linkedinCardEl.href = linkedinInputEl.value;
};

// function linkBottonLinkedin2 () {
//     linkedinCardEl.innerHTML = `
//     <a href="${linkedinInputEl.value}" target="_blank"> 
//         <img class="wrap-icon" src="assets/images/linkedin.svg" alt="linkedin">
//     </a>
//     ` || `
//     <a href="${linkedinDefault}" target="_blank"> 
//         <img class="wrap-icon" src="assets/images/linkedin.svg" alt="linkedin">
//     </a>
//     `
// }

//Listener. I have choosen a "change" event so it just interacts when the full url is filled.
linkedinInputEl.addEventListener("change",linkBottonLinkedin1)
