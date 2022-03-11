//Get DOM Elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

//+ is placed to covert strings to numeric value to calculate total
let ticketPrice = +movieSelect.value;

//console.log(ticketPrice); 

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(function(seat) {
        return [...seats].indexOf(seat)
    });
    console.log(seatsIndex); // 0.58
    const selectedSeatsCount = selectedSeats.length; 
    //console.log(selectedSeatsCount);
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount*ticketPrice;
}

//Event Listners
//1.Event Listners for container to check for click on seats
container.addEventListener('click', e => {
   if(e.target.classList.contains('seat') && 
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');
        updateSelectedCount();  
    }
});

//2.Event listener for movie select
movieSelect.addEventListener('change', e => {
     ticketPrice = +e.target.value;
     updateSelectedCount();
})


