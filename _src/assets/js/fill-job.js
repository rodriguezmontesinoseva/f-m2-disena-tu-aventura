// JOB //

const rolEl = document.querySelector('#rol');
const ocupationPreviewEl = document.querySelector('.ocupation__card');
// Foto del valor por defecto: 
const defectOcupationPreview = document.querySelector('.ocupation__card').innerHTML;

function changeRolOnCard (event){
    const inputRol = rolEl.value;

    //Fill the userData object with this value when is selected
    const key = event.currentTarget.name;
    const value = inputRol;
    fillUserDataObject(key,value);


    // Si el input está vacío, pone el testo por defecto, si hay algo, lo sustituye.
    ocupationPreviewEl.innerHTML = inputRol || defectOcupationPreview;
    }
rolEl.addEventListener('keyup', changeRolOnCard);

