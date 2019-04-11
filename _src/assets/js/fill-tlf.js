const tlfElement = document.querySelector('#phoneNumber');
const tlfCardImage = document.querySelector('#mobile-link');
const tflCardInitial = tlfCardImage.innerHTML;


function phonenumber(){
  
  if (tlfElement.value){
       tlfCardImage.href = 'tel:' + tlfElement.value;
  }

  else {
    tlfCardImage.removeAttribute("href");
  }
}

tlfElement.addEventListener('keyup', phonenumber);




