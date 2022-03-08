// Retrieving HTML elements form the DOM
const form =  document.getElementById('form');
const username =  document.getElementById('username');
const email = document.getElementById('email');
const password =  document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
     //yeha sai start 0.59mints
}

//Event Listners in last
// Create Event Listener for submit button
form.addEventListener('submit',function(e) {
   //stop page from reloading prevent default
    e.preventDefault();
    //console.log(username.value);

    //check if username input is empty?
    if(username.value === '' ) {
        alert('username is required');
    }
} );