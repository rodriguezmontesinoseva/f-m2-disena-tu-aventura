'use strict';

// Element listener
const tlfInputEl = document.querySelector('#phoneNumber');

// Element target
const tlfCardEl = document.querySelector('#mobile-link');

// Default value for telefone:
const tflCardDefault = tlfCardEl.href;

const tlfInputDefault = tlfInputEl.value

// List element - telephone

const liElementTlf = document.querySelector('.mobile-icon');

// Add color to preview 
function addGreenBorderifFilled(){

  if (tlfCardEl.href){
    liElementTlf.classList.add('boxShadow__tlfIcon-IfInputIsFIlled');
  }
  else {
    liElementTlf.classList.remove('boxShadow__tlfIcon-IfInputIsFIlled');;
  }
  }
 


//Handler:
function addPhoneNumber(){

tlfCardEl.href = 'tel:' + tlfInputEl.value || tflCardDefault;
addGreenBorderifFilled();
};

//Listener for the phone input element
tlfInputEl.addEventListener('keyup', addPhoneNumber);




