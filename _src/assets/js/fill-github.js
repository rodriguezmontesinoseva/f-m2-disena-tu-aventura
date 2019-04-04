'use strict';

const githubEl = document.querySelector('#github');  // elemento input
const githubLinkEl = document.querySelector('.link-github');  // elemento <a>
const githubHrefIcon = githubLinkEl.href;  // "Foto" del contenido que trae por defecto el href


function putLinkIcon() {
    const githubDefinitiveLink =  githubHrefIcon + githubEl.value; // valor final del link
    
    githubLinkEl.href = githubDefinitiveLink || githubHrefIcon;
}

githubEl.addEventListener('keyup', putLinkIcon);