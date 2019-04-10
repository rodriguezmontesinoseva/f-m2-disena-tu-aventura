// Cojemos el botón de reset 
const btnResetEl = document.querySelector('.reset__button');
// Cojemos todos los input
const inputsEl = document.querySelectorAll('.item__info');
const radioButtonEl = document.querySelector('#option-color-1');
const nameEl = document.querySelector('.full-name__card');

function handleButtonClick() {
    // Vaciar el valor de todos los input del formulario
    for(const input of inputsEl) {
        input.value = '';        
    }
    printName2();
    changeRolOnCard();
    changeEmailOnCard();
    phonenumber();
    putLinkIcon();
    linkBottonLinkedin();

    // Poner el color seleccionado en el default (primer radio button)
    radioButtonEl.click();
    // Borrar toda la info del caché
    
}


// Al hacer click en el se tienen que borrar:
btnResetEl.addEventListener('click', handleButtonClick);
