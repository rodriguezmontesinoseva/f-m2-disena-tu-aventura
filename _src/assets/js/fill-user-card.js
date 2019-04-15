'use strict';
//We want to fill the empty object with the values of the inputs filled by the user:
console.log('fill-user-card running');

//Get elements
const btnCreateCardEl = document.querySelector('.btn_share');
const inputsFillEl = document.querySelectorAll('.item__info');
console.dir(inputsFillEl);

const infoValue = [];
//Fake palette temporary:


const objectKeys = [];

//form.elements

//handler
//Read the values>> fill the object
function handlerBtnClick(){
    infoValue[0] = 1;
    for(let i=0; i<inputsFillEl.length; i++){
        infoValue[i+1] = inputsFillEl[i].value;
    }
    //Array of values filled:
    console.log(infoValue);

    objectKeys[0] = 'palette';
    for(let i=0; i<infoValue.length; i++){

        //claves del objeto vacío (nombres)
        objectKeys[i+1] = inputsFillEl[i].getAttribute('name');

        console.log(objectKeys);

        //los valores que queremos meter en el objeto vacío
        // infoValue[i]

        userData.objectKeys[i] = infoValue[i];
        
    }


    // console.log(userData);s

}

userData.name = 'Pepita';

//Listener click btn
btnCreateCardEl.addEventListener('click',handlerBtnClick);