// EMAIL //

const emailLink = document.querySelector('#email');
const emailPreviewLink = document.querySelector('.email__card');

// recoger el icono de la tarjeta preview de Linkdin:
const previewIconEmail = document.querySelector('.email-icon');

const changeEmailOnCard = event => {
    const emailHref = emailLink.value;  
    //Fill the userData object with this value when is selected
    const key = event.currentTarget.name;
    const value = emailHref;
    fillUserDataObject(key,value);
    saveCache();    
    // Si no hay e-mail, el href no se genera //
    if (!emailHref){
    emailPreviewLink.removeAttribute("href");
    }
    // Si lo hay, se crea //
    else {
    emailPreviewLink.href = `mailto:${emailHref}`;
    addBoxshadowifFilled(emailLink,previewIconEmail);
    }
}
emailLink.addEventListener('keyup', changeEmailOnCard);
