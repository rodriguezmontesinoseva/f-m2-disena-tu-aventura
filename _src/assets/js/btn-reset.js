const btnResetEl = document.querySelector('.reset__button');
const inputsEl = document.querySelectorAll('.item__info');
const nameEl = document.querySelector('.full-name__card');

function emptyInputs() {
    // Vaciar el valor de todos los input del formulario
    for(const input of inputsEl) {
        input.value = '';        
    }
}

function handleButtonClick() {
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
}


// Al hacer click en el se tienen que borrar:
btnResetEl.addEventListener('click', handleButtonClick);
