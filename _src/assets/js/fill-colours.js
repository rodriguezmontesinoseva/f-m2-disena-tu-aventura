//A color theme is selected in the DESIGN section and the preview is updated with those colors in real time.

const optionsColors = document.querySelectorAll('.radios-buttons');
console.log(optionsColors);

const option1ColourEl = document.querySelector('#option-color-1');
const option2ColourEl = document.querySelector('#option-color-2');
const option3ColourEl = document.querySelector('#option-color-3');
const previewCardEl = document.querySelector('.preview__card');
const previewSectionEl =document.querySelector ('.preview__section');

for (const option of optionsColors){
     option.addEventListener('click', changeColourPreview);
}

//function asking which option-button is marked and loads that range of colors into the preview
function changeColourPreview(event){
    if (option1ColourEl.checked){
         //Fill the userData object with this value when is selected
         const key = event.currentTarget.name;
         const value = 1;
          fillUserDataObject(key,value);

         previewCardEl.classList.remove('theme-red','theme-blue');
         previewCardEl.classList.add('theme-green');

         previewSectionEl.classList.remove('bgc-color-blue','bgc-color-red');
         previewSectionEl.classList.add('bgc-color-green');


    }else if(option2ColourEl.checked){
          const key = event.currentTarget.name;
          const value = 2;
          fillUserDataObject(key,value);

         previewCardEl.classList.remove('theme-green','theme-blue');
         previewCardEl.classList.add('theme-red');

         previewSectionEl.classList.remove('bgc-color-blue', 'bgc-color-green');
         previewSectionEl.classList.add('bgc-color-red');

         
    }else if(option3ColourEl.checked){
          const key = event.currentTarget.name;
          const value = 3;
          fillUserDataObject(key,value);

         previewCardEl.classList.remove('theme-red','theme-green');
         previewCardEl.classList.add('theme-blue');

         previewSectionEl.classList.remove('bgc-color-red','bgc-color-green');
         previewSectionEl.classList.add('bgc-color-blue');
    }
    saveCache();
}

// option1ColourEl.addEventListener ('click', changeColourPreview);
// option2ColourEl.addEventListener ('click', changeColourPreview);
// option3ColourEl.addEventListener ('click', changeColourPreview);