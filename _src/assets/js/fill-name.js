// Element listener inputs
const nameInputEl = document.querySelector("#fullName");
const rolInputEl = document.querySelector('#rol');
// Element targets
const nameCardEl = document.querySelector(".full-name__card ");
const jobCardEl = document.querySelector('.ocupation__card');
//jobCardEl
// default values: Name and job
const defaultName = nameCardEl.innerHTML;
const defaultJob = jobCardEl.innerHTML;


function printNameJob (event) {
    //Fill the userData object with this value when is selected

    const key = event.currentTarget.name;
    const inputEl = event.currentTarget;
    const destinyId= inputEl.getAttribute('data-id');
    const destinyCardEl = document.getElementById(destinyId);
    const value = inputEl.value;
    destinyCardEl.innerHTML = value||defaultContent(key);
    fillUserDataObject(key,value);
    saveCache();
}

//Listener
nameInputEl.addEventListener("keyup", printNameJob);
rolInputEl.addEventListener('keyup', printNameJob);
///////////////////////////////////////////////7


//When inputs name or job are empty we use a default content 'Nombre Apellido' 'Front-end developer'
function defaultContent(key) {
    let defaultCardContent = '';

    if (key === 'name') {
        defaultCardContent = defaultName;

    }
    else if (key === 'job') {
        defaultCardContent = defaultJob;
    }
    return defaultCardContent;
}