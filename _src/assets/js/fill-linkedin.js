// Element listener
const linkedinInputEl = document.querySelector('#linkedin');

// Element target
const linkedinCardEl = document.querySelector('.linkedin-link');

// Default value for linkedin:
const linkedinDefault = linkedinCardEl.href;


//Handler:
function linkBottonLinkedin () {
    // console.log(linkedinInputEl.value);

    const linkedinDefinitiveLink =  linkedinInputEl.value; // valor final del link

    if (!linkedinDefinitiveLink){
        linkedinCardEl.removeAttribute("href");
        }
        else {
            linkedinCardEl.href = `https://www.linkedin.com/in/${linkedinDefinitiveLink}`;
        }
};

//Listener for the linkedin input element
linkedinInputEl.addEventListener('keyup',linkBottonLinkedin)
