const enterName = document.querySelector("#enterName");
const enterNameError = document.querySelector("#enterNameError");
const subjectName = document.querySelector("#subjectName");
const subjectNameError = document.querySelector("#subjectNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const messageName = document.querySelector("#messageHere");
const messageNameError = document.querySelector("#messageHereError");
const message = document.querySelector('#message');
const button = document.querySelector('button');

const form = document.querySelector(".contactForm");

function validateForm() {
    event.preventDefault();

    if (checkLength(enterName.value, 1) === true) {
        enterNameError.style.display = "none";
    } else {
        enterNameError.style.display = "block";
    }

    if (checkLength(subjectName.value, 1) === true) {
        subjectNameError.style.display = "none";
    } else {
        subjectNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(messageHere.value, 1) === true) {
        messageHereError.style.display = "none";
    } else {
        messageHereError.style.display = "block";
    }
    
    // if all inputs pass validation 
    if (checkLength(enterName.value, 1) && checkLength(subjectName.value, 1) && validateEmail(email.value) && checkLength(messageHere.value, 1)) {
        // display a message once the form has been submitted
        window.location.href="success.html"
    } else {
        message.innerHTML = "";
    }
    console.log('hello');
}
form.addEventListener("click", validateForm);

function submitForm(event) {
    event.preventDefault();
    
  
    // clear all input values
    form.reset();
}

form.addEventListener("submit", submitForm);





// function to check if the length of the input value is valid
function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}