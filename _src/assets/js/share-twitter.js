'use strict';

//urlBack es el response del fetch que se hace hacia back. Cuando esté terminada la parte de enviar a back, cambiar el parámetro contenido en la llamada a la funcion "http://prueba-direccion-backend.html"

function createLinkTweet(urlBack){
  const cardLinkEl = document.querySelector('.card-link');
  cardLinkEl.href = urlBack;
  cardLinkEl.innerHTML = urlBack;

  const cardLinkTweetEl = document.querySelector('.twitter-share-button');
  cardLinkTweetEl.href = cardLinkTweetEl.href + urlBack;

}




