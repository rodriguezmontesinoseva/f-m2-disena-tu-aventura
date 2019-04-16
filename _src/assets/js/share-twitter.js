"use strict";

//al hacer clic en el botón compartir. muestra la url y boton compartir en twitter (ok)
// mostrar la url: 
// La URL base del servicio es
// https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/
// GET: una petición 'GET' a la URL /card/:id:/ devuelve una página web en HTML donde se muestran los datos de la tarjeta con el identificador 'id'
//https://awesome-profile-card.com?id=A456DF0001

//mostrar la url que devuelve la API, con la tarjeta de visita con la info rellena
//COMPARTIR TWITTER - enlaza a twitter de la persona (usar campo usuario twitter) donde hay tweet con texto predefinido que incluye la url de la tarjeta

// al pulsar compartir en twitter. se genera twit

// {/* <a class="twitter-share-button"
//   href="https://twitter.com/intent/tweet?text=Hello%20world">
// Tweet</a> */}

//fetch para pedir la url
//meter esa url en el href

const linkCardM = document.querySelector('.twitter-share-button');
const linkCardMContent = linkCardM.href
const cardLinkEl = document.querySelector('.card-link');


cardLinkEl.href = 'url back';

linkCardM.href = linkCardMContent + cardLinkEl.href





// fetch('url de back')
//   .then(response => response.json())
//   .then(data => {
//       //meter href:"url" dentro del html
//       //meter el texto entre corchetes.
     

//    cardLinkEl.href = 'url back';
//     const newContent = document.createTextNode(cardLinkEl.href);
//     cardLinkEl.appendChild(newContent);

  
//   });