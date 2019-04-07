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
    liElementTlf.classList.add('border__ifpatterncorrect');
  }
  else {
    liElementTlf.classList.remove('border__ifpatterncorrect');;
  }
  }
 


//Handler:
function addPhoneNumber(){

tlfCardEl.href = 'tel:' + tlfInputEl.value || tflCardDefault;
addGreenBorderifFilled();
};

//Listener for the phone input element
tlfInputEl.addEventListener('keyup', addPhoneNumber);




