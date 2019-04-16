'use strict';

const githubEl = document.querySelector('#github');  // elemento input
const githubLinkEl = document.querySelector('.link-github');  // elemento <a>
const githubHrefIcon = githubLinkEl.href;  // "Foto" del contenido que trae por defecto el href


function putLinkIcon(event) {
    const githubDefinitiveLink =  githubHrefIcon + githubEl.value; // valor final del link
    
    githubLinkEl.href = githubDefinitiveLink || githubHrefIcon;
    
    //Fill the userData object with this value when is selected
    const key = event.currentTarget.name;
    const value = githubDefinitiveLink;
    fillUserDataObject(key,value);
}

githubEl.addEventListener('keyup', putLinkIcon);