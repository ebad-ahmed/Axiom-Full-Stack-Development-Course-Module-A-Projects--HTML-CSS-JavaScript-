//Getting DOM elements
const menuToggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');


//Event Listeners
//1.Listen to click on toggle
menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

//2.Listen for click on open button refer to sign up button
open.addEventListener('click', () =>  modal.classList.add('show-modal'));

//3.Listen on click on close button
close.addEventListener('click', () => modal.classList.remove('show-modal'));

//4.Listen on click outside the modal
window.addEventListener('click', e =>
    e.target === modal ? modal.classList.remove('show-modal') : false 
    )