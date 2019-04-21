'use strict';

const inputs = document.querySelectorAll('input');

for(let i = 0; i < inputs.length; i++){
  
    let result = inputs[i]
    result.addEventListener('keyup', function() {
      localStorage.setItem(result.name, result.value);
   
    });
  
       const locals = localStorage.getItem(result.name)
       result.value = locals
  }
  
  