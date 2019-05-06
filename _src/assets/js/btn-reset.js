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

const ereaseLocalStorage = () => localStorage.removeItem('card');

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
    ereaseUserDataObject();

    ereaseLocalStorage();

    addBoxshadowifFilled(emailLink,previewIconEmail);
    addBoxshadowifFilled(githubEl,previewIconGitHub);
    addBoxshadowifFilled(linkedinInputEl,previewIconLinkedin);
    addBoxshadowifFilled(tlfInputEl,previewIconTelf);

    nameCardEl.innerHTML = defaultName;
    ocupationPreviewEl.innerHTML = defaultJob;
    emailPreviewLink.href = '';
    tlfCardImage.href = '';
    githubLinkEl.href = '';
    linkedinCardEl.href = '';
    option1ColourEl.click();
}

btnResetEl.addEventListener('click', handleButtonClick);     