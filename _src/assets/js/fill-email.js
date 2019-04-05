'use strict';

// EMAIL //

const emailLink = document.querySelector('#email');
const emailPreviewLink = document.querySelector('.email__card');


function changeEmailOnCard (){
    const emailHref = emailLink.value;
    // Si no hay e-mail, el href no se genera //
    if (!emailHref){
    emailPreviewLink.removeAttribute("href");
    }
    // Si lo hay, se crea //
    else {
    emailPreviewLink.href = `mailto:${emailHref}`;
    }
}
emailLink.addEventListener('keyup', changeEmailOnCard);
