// Element listener
const nameInputEl = document.querySelector("#fullName");
// Element target
const nameCardEl = document.querySelector(".full-name__card ");

// Photo of default value:
const defaultName = nameCardEl.innerHTML;

//Handler function 2
function printName2 (event) {
    //Fill the userData object with this value when is selected
    const key = event.currentTarget.name;
    const value = nameInputEl.value;
    fillUserDataObject(key,value);

    nameCardEl.innerHTML = nameInputEl.value || defaultName;
    saveCache()
}

//Listener
nameInputEl.addEventListener("keyup", printName2);