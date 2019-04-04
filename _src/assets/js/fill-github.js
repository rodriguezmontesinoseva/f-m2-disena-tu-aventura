'use strict';

const githubEl = document.querySelector('#github');
const githubLinkEl = document.querySelector('.link-github');
let githubHrefIcon = githubLinkEl.href; // "Foto" del contenido que trae por defecto el href


function putLinkIcon() {
    const githubUser = githubEl.value; // valor introducido en el input
    const githubDefinitiveLink =  githubHrefIcon + githubUser; // valor final del link
    const githubValueDefault = 'https://github.com/';

    githubHrefIcon = githubDefinitiveLink || githubValueDefault;


    console.log(githubHrefIcon);
    
}

githubEl.addEventListener('keyup', putLinkIcon);