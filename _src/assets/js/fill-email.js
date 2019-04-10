'use strict';

// EMAIL //

const emailLink = document.querySelector('#email');
const emailPreviewLink = document.querySelector('.email__card');

// recojer el icono de la tarjeta preview de Linkdin:
const previewIconEmail = document.querySelector('.email-icon');

function changeEmailOnCard (){
    const emailHref = emailLink.value;
    // Si no hay e-mail, el href no se genera //
    if (!emailHref){
    emailPreviewLink.removeAttribute("href");
    }
    // Si lo hay, se crea //
    else {
    emailPreviewLink.href = `mailto:${emailHref}`;

    //llamar funccion que le añade la clase addBoxShadow__IfInputIsFIlled 
    addBoxshadowifFilled(emailLink,previewIconEmail);
    }
}
emailLink.addEventListener('keyup', changeEmailOnCard);
