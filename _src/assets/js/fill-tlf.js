'use strict';

const tlfElement = document.querySelector('#phoneNumber');
const tlfCardImage = document.querySelector('#mobile-link');
const tflCardInitial = tlfCardImage.innerHTML;


function phonenumber(){
  if (tlfElement.value){
       tlfCardImage.href = 'tel:' + tlfElement.value;
  }

else if (tlfElement = ''){
  tlfCardImage === tflCardInitial

}
}

tlfElement.addEventListener('keydown', phonenumber);




