'use strict';

const githubEl = document.querySelector('#github');  // elemento input
const githubLinkEl = document.querySelector('.link-github');  // elemento <a>
const githubHrefIcon = githubLinkEl.href;  // "Foto" del contenido que trae por defecto el href

// recojer el icono de la tarjeta preview de Github:
const previewIconGitHub = document.querySelector('.github-icon');

function putLinkIcon() {
    const githubDefinitiveLink =  githubHrefIcon + githubEl.value; // valor final del link
    
    githubLinkEl.href = githubDefinitiveLink || githubHrefIcon;

    //llamar funccion que le añade la clase addBoxShadow__IfInputIsFIlled 
    addBoxshadowifFilled(githubEl,previewIconGitHub);

}

githubEl.addEventListener('keyup', putLinkIcon);