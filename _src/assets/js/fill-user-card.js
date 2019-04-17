'use strict';
//We want to fill the empty object with the values of the inputs filled by the user:
console.log('fill-user-card running');

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
    console.log(linkProvided);
  } else {
    console.error(`Ha sucedido un error: ${error}`);
  }
  
}
