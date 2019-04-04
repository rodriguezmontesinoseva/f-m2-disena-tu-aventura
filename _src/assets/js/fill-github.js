'use strict';

const githubEl = document.querySelector('#github');
const githubLink = document.querySelector('.link-github');

function putLinkIcon() {
    const userGitHub = githubEl.nodeValue;
    console.log(userGitHub);
    
}

githubEl.addEventListener('keyup', putLinkIcon);
// console.log(githubLink);
