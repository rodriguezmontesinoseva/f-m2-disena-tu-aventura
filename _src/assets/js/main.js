'use strict';

const inputEl = document.querySelector(".item__info");
const nbreTarjeta = document.querySelector (".full-name__card");
console.log(nbreTarjeta);
const nbreTarjetaIni = nbreTarjeta.innerHTML;
console.log(nbreTarjetaIni);

function actualizaDatos(){
    // if (inputEl.value ===""){ //  !inputEl.value
    //   nbreTarjeta.innerHTML = nbreTarjetaIni;
    // }else{
    //     nbreTarjeta.innerHTML = inputEl.value;
    // }

    nbreTarjeta.innerHTML = inputEl.value  || nbreTarjetaIni; //inputEl.value al ponerlo en el primer termino del OR || ; mira si hay algo en inputEl, si no hay nada devuelve False y coge el segundo término.
}


inputEl.addEventListener('keyup',actualizaDatos);