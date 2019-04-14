// Element listener
const nameInputEl = document.querySelector("#fullName");
// Element target
const nameCardEl = document.querySelector(".full-name__card ");


// Photo of default value:
const defaultName = nameCardEl.innerHTML;


//Handler function 1
// function printName() {
//     console.log("handler is working");

//     // if (nameInputEl.value === "") {
//     if (!nameInputEl.value) {
//         nameCardEl.innerHTML = defaultName;

//     } else {
//         nameCardEl.innerHTML = nameInputEl.value;
//     }
// }

//Handler function 2
function printName2 () {
    nameCardEl.innerHTML = nameInputEl.value || defaultName;
}

//Listener
nameInputEl.addEventListener("keyup", printName2);