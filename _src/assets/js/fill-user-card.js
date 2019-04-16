'use strict';
//We want to fill the empty object with the values of the inputs filled by the user:
console.log('fill-user-card running');

//Get elements
// const btnCreateCardEl = document.querySelector('.btn_share');
// const inputsFillEl = document.querySelectorAll('.item__info');
// console.dir(inputsFillEl);

// const infoValue = [];
// const objectKeys = [];

//Función poderosa!!
function fillUserDataObject(key,value) {
    userData[key] = value;
}

//form.elements

//handler
//Read the values>> fill the object
// function handlerBtnClick(){
//     //Fake palette temporary:
//     infoValue[0] = 1;
//     for(let i=0; i<inputsFillEl.length; i++){
//         infoValue[i+1] = inputsFillEl[i].value;
//     }
//     //Array of values filled:
//     console.log(infoValue);

//     //Bucle para rellenar
//     for(let i=0; i<(infoValue.length-1); i++){
//         //claves del objeto vacío (nombres)
//         objectKeys[i] = inputsFillEl[i].getAttribute('name'); 
//     };
//     objectKeys.push('palette');
//     console.log(objectKeys);

//     for(let i=0; i<objectKeys.length; i++){
//         const objectKeysItem = objectKeys[i];

//         fillUserDataObject(objectKeysItem,infoValue[i]);
//     };
//     console.log(userData);
// }

// //Listener click btn
// btnCreateCardEl.addEventListener('click',handlerBtnClick);