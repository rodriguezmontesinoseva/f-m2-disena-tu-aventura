'use strict';

const tlfElement = document.querySelector('#phoneNumber');
const tlfCardImage = document.querySelector('#mobile-link');
const tflCardInitial = tlfCardImage.innerHTML;


function phonenumber(){
  if (tlfCardImage.href = tlfElement.value){
    'tel:' + tlfCardImage.href === tlfElement.value;
  }

else if (tlfElement = ''){
  tlfCardImage === tflCardInitial

}
}

tlfElement.addEventListener('keydown', phonenumber);




