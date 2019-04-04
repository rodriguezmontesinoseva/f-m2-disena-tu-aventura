'use strict';

const tlfElement = document.querySelector('#phoneNumber');
const tlfCardImage = document.querySelector('.mobile-icon');

function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if((tlfElement.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
}

tlfElement.addEventListener('keydown', phonenumber);




