//A color theme is selected in the DESIGN section and the preview is updated with those colors in real time.

const option1ColourEl = document.querySelector('#option-color-1');
const option2ColourEl = document.querySelector('#option-color-2');
const option3ColourEl = document.querySelector('#option-color-3');
const previewCardEl = document.querySelector('.preview__card');

//function asking which option-button is marked and loads that range of colors into the preview
function changeColourPreview(){
    if (option1ColourEl.checked){
         previewCardEl.classList.remove('theme-red');
         previewCardEl.classList.remove('theme-blue');
         previewCardEl.classList.add('theme-green');

    }else if(option2ColourEl.checked){
         previewCardEl.classList.remove('theme-green');
         previewCardEl.classList.remove('theme-blue');
         previewCardEl.classList.add('theme-red');

    }else if(option3ColourEl.checked){
         previewCardEl.classList.remove('theme-red');
         previewCardEl.classList.remove('theme-green');
         previewCardEl.classList.add('theme-blue');
    }
}

option1ColourEl.addEventListener ('click', changeColourPreview);
option2ColourEl.addEventListener ('click', changeColourPreview);
option3ColourEl.addEventListener ('click', changeColourPreview);
