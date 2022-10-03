// let's validate the email field using the JS Constraint Validation API

const form = document.querySelector("form"); // call the entire form and save that to the "form"  variable to make for easier referencing 

const formEmail = document.getElementById("email"); // calling and saving the input into the email field in the "formEmail" variable

const formEmailError = document.querySelector("#email + span.validation-error-message"); // creating the "formEmailError" variable so that the text from the validation errors can be added to the span below the input fields



// let's be certain that we are not triggering an error uneccesarily
// also runs a check each time we edit the data in the email field which means errors will be seen in real time as the user writes

formEmail.addEventListener("input", (event) => {
  
  if (email.validity.valid) {
   
    formEmailError.textContent = ""; 
    formEmailError.className = "validation-error-message"; 

  } else {
    
    showEmailError();

  }

});


// let's validate the email field upon submission

form.addEventListener("submit", (event) => {
  
    if (!email.validity.valid) {
      
      showEmailError();
      
      event.preventDefault();
  
    }
  
});


// function that is called to show errors when the email validation fails

function showEmailError() {

  if (email.validity.valueMissing) {
    
    formEmailError.textContent = "You need to enter an e-mail address.";

  } else if (email.validity.typeMismatch) {
    
    formEmailError.textContent = "Keep typing. This field needs an email address.";

  }

  formEmailError.className = "validation-error-message active";

}


