'use strict';
//We want to fill the empty object with the values of the inputs filled by the user:

//Función poderosa!!
function fillUserDataObject(key, value) {
  userData[key] = value;
}
//Función para enviar el objeto
function sendRequest(userData) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function (resp) { return resp.json(); })
    .then(function (result) { showURL(result); })
    .catch(function (error) { console.log(error); });
}
// y recoger la URL generada
function showURL(result) {
  if (result.success) {
    const linkProvided = result.cardURL;
    createLinkTweet(linkProvided);
  } else {
    console.error(`Ha sucedido un error: ${error}`);
  }
  
}



function saveCache() {

  localStorage.setItem('card', JSON.stringify(userData));
}

function getCache() {
  const objectInfo = localStorage.getItem('card');
  const objectParse = JSON.parse(objectInfo);
  console.log(objectParse);
  return objectParse;
}

nameInputEl.addEventListener('keyup', getCache);

reloadPage();

//aqui tendria que llamar a todas las funcciones de cada input que hacen que lo que se rellena en el input se copie en la tarjeta-preview card, pero no puedo porque sale un error

function reloadPage() {
  const userCardFromCache = getCache();
  if (userCardFromCache) {
    userData = userCardFromCache;

    nameInputEl.value = userData.name 
    nameCardEl.innerHTML = userData.name

    rolEl.value = userData.job
    ocupationPreviewEl.innerHTML = userData.job 

    tlfInputEl.value = userData.phone
    tlfCardImage.href = 'tel:' + userData.phone;

    emailPreviewLink.href = `mailto:${userData.email}`;
    emailLink.value = userData.email;

    linkedinCardEl.href = `https://www.linkedin.com/in/${userData.l}`;
    linkedinInputEl.value = userData.linkedin

    githubEl.value = userData.github
    githubLinkEl.href = `https://github.com/${userData.github}`;
    themeUser();
    imgUser();
    
  }
}

function imgUser(){
  if(userData.photo){
    profileImage.style.backgroundImage = `url(${userData.photo})`;
    profilePreview.style.backgroundImage = `url(${userData.photo})`; }
    else {
      profileImage.style.backgroundImage = `url(${fr.result})`;
      profilePreview.style.backgroundImage = `url(${fr.result})`;
  }}
 

 function themeUser (){
  
  if(parseInt(option1ColourEl.value) === userData.palette){
      option1ColourEl.click();}
  else if(parseInt(option2ColourEl.value) === userData.palette){
    option2ColourEl.click();}
  else if(parseInt(option3ColourEl.value) === userData.palette){
    option3ColourEl.click();}
}