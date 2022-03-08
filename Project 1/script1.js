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


//Event Listners in last
// Create Event Listener for submit button
form.addEventListener('submit',function(e) {
   //stop page from reloading prevent default
    e.preventDefault();
    //console.log(username.value);

    //check if username input is empty?
    if(username.value === '' ) {
        showError(username, 'Username is required');
    }
    else{
        showSuccess(username);
    }

//check if email input is empty?
if(email.value === '' ) {
    showError(email, 'Email is required');
}
else{
    showSuccess(email);
}

//check if password input is empty?
if(password.value === '' ) {
    showError(password, 'Password is required');
}
else{
    showSuccess(password);
}

//check if Confirm Password input is empty?
if(password2.value === '' ) {
    showError(password2, 'Confirm Passsword is required');
}
else{
    showSuccess(password2);
}

});