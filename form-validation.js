const form = document.querySelector("form");

const formFirstName = document.getElementById("first-name");
const formLastName = document.getElementById("last-name");
const formEmail = document.getElementById("email");


const formFirstNameError = document.querySelector("#first-name + span.validation-error-message");
const formLastNameError = document.querySelector("#last-name + span.validation-error-message");
const formEmailError = document.querySelector("#email + span.validation-error-message");



formFirstName.addEventListener("input", (event) => {
  
    if (text.validity.valid) {

      formFirstNameError.textContent = ""; // Reset the content of the message
      formFirstNameError.className = "error"; // Reset the visual state of the message
    
    } else {
      
      showFirstNameError();
    
    }

});


formLastName.addEventListener("input", (event) => {
  
    if (text.validity.valid) {
      
      formLastNameError.textContent = ""; // Reset the content of the message
      formLastNameError.className = "error"; // Reset the visual state of the message
    
    } else {
      
      showLastNameError();
    
    }

});


formEmail.addEventListener("input", (event) => {
  
  if (email.validity.valid) {
   
    formEmailError.textContent = ""; // Reset the content of the message
    formEmailError.className = "error"; // Reset the visual state of the message

  } else {
    
    showEmailError();

  }

});



form.addEventListener("submit", (event) => {
  
  if (!text.validity.valid && formFirstName === "#first-name") {
    
    showFirstNameError();
    
    event.preventDefault();

  }

});


form.addEventListener("submit", (event) => {
  
    if (!text.validity.valid && formLastName === "#last-name") {
      
      showLastNameError();
      
      event.preventDefault();
  
    }
  
  });


  form.addEventListener("submit", (event) => {
  
    if (!email.validity.valid) {
      
      showEmailError();
      
      event.preventDefault();
  
    }
  
  });


  function showFirstNameError() {

    if (text.validity.valueMissing) {
      
      formFirstNameError.textContent = "You need to enter your first name.";

    }
  
    formFirstNameError.className = "validation-error-message active";

  }


  function showLastNameError() {

    if (text.validity.valueMissing) {
      
      formLastNameError.textContent = "You need to enter your last name.";

    }
  
    formLastNameError.className = "validation-error-message active";

  }


function showEmailError() {

  if (email.validity.valueMissing) {
    
    formEmailError.textContent = "You need to enter an e-mail address.";

  } else if (email.validity.typeMismatch) {
    
    formEmailError.textContent = "Entered value needs to be an e-mail address.";

  }

  formEmailError.className = "validation-error-message active";

}


