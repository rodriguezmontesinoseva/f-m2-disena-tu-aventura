'use strict';

const tlfElement = document.querySelector('#phoneNumber');
const tlfCardImage = document.querySelector('#mobile-link');
const tflCardInitial = tlfCardImage.innerHTML;


function phonenumber(event){
    //Fill the userData object with this value when is selected
    const key = event.currentTarget.name;
    const value = tlfElement.value;
    fillUserDataObject(key,value);

  if (tlfElement.value){
       tlfCardImage.href = 'tel:' + tlfElement.value;
  }

else if (tlfElement = ''){
  tlfCardImage === tflCardInitial

}
}

tlfElement.addEventListener('keyup', phonenumber);




