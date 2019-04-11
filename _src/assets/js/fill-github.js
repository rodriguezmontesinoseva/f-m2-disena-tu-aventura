const githubEl = document.querySelector('#github');  // elemento input
const githubLinkEl = document.querySelector('.link-github');  // elemento <a>


function putLinkIcon() {
    const githubDefinitiveLink =  githubEl.value; // valor final del link
    
    if (!githubDefinitiveLink){
        githubLinkEl.removeAttribute("href");
        }
        else {
            githubLinkEl.href = `https://github.com/${githubDefinitiveLink}`;
        }
}

githubEl.addEventListener('keyup', putLinkIcon);