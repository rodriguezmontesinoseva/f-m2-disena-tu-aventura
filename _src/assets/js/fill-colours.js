'use strict';

const option1ColourEl = document.querySelector('#option-color-1');
const option2ColourEl = document.querySelector('#option-color-2');
const option3ColourEl = document.querySelector('#option-color-3');
//me traigo el objeto con clase .preview__card que contiene la previsualización
const previewCardEl = document.querySelector('.preview__card');


console.log(option1ColourEl);
console.log(option2ColourEl);
console.log(option3ColourEl);
console.log(previewCardEl);

function changeColourPreview(){
// probar con un switch-select
    if (option1ColourEl.checked){
        //meto la clase theme-green al div class: preview__card
        //cuando funcione ver si le puedo poner toggle
        //intentar hacerlo con un metodo
        previewCardEl.setAttribute('class', 'preview__card theme-green');
        // previewCardEl.classList.remove('theme-red');
        // previewCardEl.classList.remove('theme-blue');

        // previewCardEl.classList.add('theme-green');
        console.log('option1 marcada');
        console.log(previewCardEl);

    }else if(option2ColourEl.checked){
        previewCardEl.setAttribute('class', 'preview__card theme-red');

        // previewCardEl.classList.remove('theme-green');
        // previewCardEl.classList.remove('theme-blue');

        // previewCardEl.classList.add('theme-red');
        console.log(previewCardEl);


        console.log('option2 marcada');

    }else if(option3ColourEl.checked){
        previewCardEl.setAttribute('class', 'preview__card theme-blue');
        // meter preview__card theme- en una variable;

        // previewCardEl.classList.remove('theme-red');
        // previewCardEl.classList.remove('theme-green');

        // previewCardEl.classList.add('theme-blue');
        console.log('option3 marcada');
        console.log(previewCardEl);


    }
}

option1ColourEl.addEventListener ('click', changeColourPreview);
option2ColourEl.addEventListener ('click', changeColourPreview);
option3ColourEl.addEventListener ('click', changeColourPreview);

console.log('>> Ready main.js :)');
