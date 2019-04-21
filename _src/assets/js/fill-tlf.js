'use strict';

// recojer Elemento listener
const tlfInputEl = document.querySelector('#phoneNumber');
const tlfElement = document.querySelector('#phoneNumber');
const tlfCardImage = document.querySelector('#mobile-link');
const tflCardInitial = tlfCardImage.innerHTML;

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
else {
  previewIcon.classList.remove('addBoxShadow__IfInputIsFIlled');
}
  
};

function phonenumber(event){
    //Fill the userData object with this value when is selected
    const key = event.currentTarget.name;
    const value = tlfElement.value;
    fillUserDataObject(key,value);

  if (tlfElement.value){
       tlfCardImage.href = 'tel:' + tlfElement.value;
  }

  else {
    tlfCardImage.removeAttribute("href");
  }
  addBoxshadowifFilled(tlfInputEl,previewIconTelf);
  saveCache()
}


//Listener for the phone input element
tlfInputEl.addEventListener('keyup', phonenumber);

