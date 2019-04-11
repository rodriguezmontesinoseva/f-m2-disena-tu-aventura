'use strict';

// recojer Elemento listener
const tlfInputEl = document.querySelector('#phoneNumber');

// recojer Elemento target
const tlfCardEl = document.querySelector('#mobile-link');

// recojer Elemento value for telefone:
const tflCardDefault = tlfCardEl.href;

// recojer el icono de la tarjeta preview del telefono:
const previewIconTelf = document.querySelector('.mobile-icon');

// funcction cuando se cambia el value de inputEL cambia, se añade clase addBoxShadow__IfInputIsFIlled al previewIcon

function addBoxshadowifFilled(inputEL,previewIcon){

  if (inputEL.value){
    previewIcon.classList.add('addBoxShadow__IfInputIsFIlled');
  }
}

//Handler:
function addPhoneNumber(){

tlfCardEl.href = 'tel:' + tlfInputEl.value || tflCardDefault;

addBoxshadowifFilled(tlfInputEl,previewIconTelf);
};

//Listener for the phone input element
tlfInputEl.addEventListener('keyup', addPhoneNumber);

