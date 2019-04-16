const githubEl = document.querySelector('#github');  // elemento input
const githubLinkEl = document.querySelector('.link-github');  // elemento <a>

// recojer el icono de la tarjeta preview de Github:
const previewIconGitHub = document.querySelector('.github-icon');

function putLinkIcon() {
    const githubDefinitiveLink =  githubEl.value; // valor final del link
    
    if (!githubDefinitiveLink){
        githubLinkEl.removeAttribute("href");
        }
        else {
            githubLinkEl.href = `https://github.com/${githubDefinitiveLink}`;
        }
        addBoxshadowifFilled(githubEl,previewIconGitHub);
}

githubEl.addEventListener('keyup', putLinkIcon);