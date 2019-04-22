// EMAIL //

const emailLink = document.querySelector('#email');
const emailPreviewLink = document.querySelector('.email__card');

// recojer el icono de la tarjeta preview de Linkdin:
const previewIconEmail = document.querySelector('.email-icon');

function changeEmailOnCard (event){
    const emailHref = emailLink.value;
    
    //Fill the userData object with this value when is selected
    const key = event.currentTarget.name;
    const value = emailHref;
    fillUserDataObject(key,value);
        
    // Si no hay e-mail, el href no se genera //
    if (emailLink.value){
        emailPreviewLink.href = `mailto:${emailHref}`;
    }
    // Si lo hay, se crea //
    else {   
    emailPreviewLink.removeAttribute("href");
    //llamar funccion que le añade la clase addBoxShadow__IfInputIsFIlled 
    addBoxshadowifFilled(emailLink,previewIconEmail);
    }
    saveCache()
    
}
emailLink.addEventListener('keyup', changeEmailOnCard);
