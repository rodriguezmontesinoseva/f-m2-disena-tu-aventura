// Element listener
const linkedinInputEl = document.querySelector('#linkedin');

// Element target
const linkedinCardEl = document.querySelector('.linkedin-link');

// Default value for linkedin:
const linkedinDefault = linkedinCardEl.href;

// recojer el icono de la tarjeta preview de Linkdin:
const previewIconLinkedin = document.querySelector('.linkedin-icon');

//Handler:
const linkBottonLinkedin = event => {
    //Fill the userData object with this value when is selected

    const linkedinDefinitiveLink =  linkedinInputEl.value; // valor final del link

    if (!linkedinDefinitiveLink){
        linkedinCardEl.removeAttribute("href");
        }
        else {
            linkedinCardEl.href = `https://www.linkedin.com/in/${linkedinDefinitiveLink}`;
        }
        addBoxshadowifFilled(linkedinInputEl,previewIconLinkedin);
        
        const key = event.currentTarget.name;
        const value = linkedinCardEl.href;
        fillUserDataObject(key,value);
        saveCache();
};

//Listener for the linkedin input element
linkedinInputEl.addEventListener('keyup',linkBottonLinkedin)
