const btnResetEl = document.querySelector('.reset__button');
const inputsEl = document.querySelectorAll('.item__info');
const nameEl = document.querySelector('.full-name__card');

function emptyInputs() {
    // Vaciar el valor de todos los input del formulario
    for(const input of inputsEl) {
        input.value = '';        
    }
}

function emptyImg(){
    //vaciamos la url del background image y ponemos la foto por defecto
    profileImage.style.backgroundImage = '';
    profilePreview.style.backgroundImage = '';
}

function ereaseLocalStorage() {
    localStorage.removeItem('palette');
    localStorage.removeItem('name');
    localStorage.removeItem('job');
    localStorage.removeItem('phone');
    localStorage.removeItem('email');
    localStorage.removeItem('linkedin');
    localStorage.removeItem('gitHub');
    localStorage.removeItem('photo');
}

function ereaseUserDataObject() {
    // Como no quiero borrar la info del objeto lo que hago es vaciar sus datos y ponerlos por defecto
    userData.palette = 1;
    userData.name = '';
    userData.job = '';
    userData.phone = '';
    userData.linkedin = '';
    userData.gitHub = '';
    userData.photo = '';
}

function handleButtonClick() {
    emptyImg();
    emptyInputs();

    // LLamamos a las funciones que borran la info de la tarjeta y pone el valor por defecto (foto)
    printName2();
    changeRolOnCard();
    changeEmailOnCard();
    phonenumber();
    putLinkIcon();
    linkBottonLinkedin();

    // Poner el color seleccionado en el default (primer radio button)
    option1ColourEl.click();

    // Borrar toda la info del caché
    ereaseLocalStorage();
    // Vacía el objeto con los datos del usuario
    ereaseUserDataObject();
}

btnResetEl.addEventListener('click', handleButtonClick);