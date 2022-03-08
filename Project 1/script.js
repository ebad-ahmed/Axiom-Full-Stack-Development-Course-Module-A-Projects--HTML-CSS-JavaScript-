// Retrieving HTML elements form the DOM
const form =  document.getElementById('form');
const username =  document.getElementById('username');
const email = document.getElementById('email');
const password =  document.getElementById('password');
const password2 = document.getElementById('password2');


//function to update class and message for errors 
function showError(input, message) {
    //get the parent element of the input feild (.form-control)
    const formControl = input.parentElement;
    //replace the class - add error
    formControl.className = 'form-control error';
    //get the small element for the error message
    const small = formControl.querySelector('small');
    //overide the text for small element using the input element
    small.innerText = message ;
}

//function to update class for success
function showSuccess(input) {
   //get the parent element of the input feild (.form-control)
   const formControl = input.parentElement;
   //replace the class - add success
   formControl.className = 'form-control success';
}

//function to check if email is valid ?
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// function to check if required feilds have data
function checkRequired(inputArray) {
    inputArray.forEach(function(input){
       //console.log(input.value);
       if (input.value === '') {
           console.log(input.id);
           showError(input,`${getFeildId(input)} is required`);
       } else {
           showSuccess(input);
       }
    });
}

//function to get the id of the input feild with proper case
function getFeildId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listners in last
// Create Event Listener for submit button
form.addEventListener('submit',function(e) {
   //stop page from reloading prevent default
    e.preventDefault();
    //console.log(username.value);

    checkRequired([username,email,password,password2]);
});