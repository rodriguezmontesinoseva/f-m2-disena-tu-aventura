'use strict';

const option1ColourEl = document.querySelector('#option-color-1');
const option2ColourEl = document.querySelector('#option-color-2');
const option3ColourEl = document.querySelector('#option-color-3');


console.log(option1ColourEl);
console.log(option2ColourEl);
console.log(option3ColourEl);

function changeColourPreview(){

    if (option1ColourEl.checked){
        console.log('option1 marcada');
    }else if(option2ColourEl.checked){
        console.log('option2 marcada');

    }else if(option3ColourEl.checked){
        console.log('option3 marcada');

    }
}

option1ColourEl.addEventListener ('click', changeColourPreview);
option2ColourEl.addEventListener ('click', changeColourPreview);
option3ColourEl.addEventListener ('click', changeColourPreview);

console.log('>> Ready main.js :)');
