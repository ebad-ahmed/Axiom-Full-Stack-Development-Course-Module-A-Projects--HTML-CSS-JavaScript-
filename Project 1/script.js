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
function checkEmail(input) { 
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim()) ) {
        showSuccess(input);
    } else {
        showError(input,`Please provide a valid email`);
    }
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

//Function to check length of input field
function checkLength(input, min, max){
    if (input.value.length < min ) {
        showError(input,`${getFeildId(input)} needs to be atleast ${min} characters `);
    } else if (input.value.length > max) {
        showError(input,`${getFeildId(input)} needs to be less than ${max} characters `);
    } else {
        showSuccess(input);
    }
}

//Function to check if password and confirm password match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2,"Passwords Don't Match ")
    } 
}


//function to get the id of the input field with proper case
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
    checkLength(username,3,10);
    checkLength(password,6,30);
    checkEmail(email);
    checkPasswordMatch(password,password2);
});