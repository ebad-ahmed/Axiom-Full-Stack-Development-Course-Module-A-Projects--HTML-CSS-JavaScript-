//API = Application programming interface basically a bridge between two applications.
// 1.Rest Api 2.GraphQl Api

/*function calculate() {
    //Promise that it will send data
    fetch('items.json')
    //then we catch that here and parse it with .json
    .then(res => res.json())
    //reply will display in console
    .then(data => document.body.innerHTML=data[0].text);
};
calculate();*/

//Get DOM Elements 
const currencyOne = document.getElementById('currency-one');
const amountCurrencyOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountCurrencyTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap =  document.getElementById('swap');

//Fetch Exchange rates and update the DOM
function calculate() {
    console.log('success');
};


//Event Listeners
//Recalculate exchnage rate when currency 1 changes
currencyOne.addEventListener('change', calculate);

//Recalculate exchange amount whe currency amount 1 changes
amountCurrencyOne.addEventListener('input', calculate);


//Recalculate exchnage rate when currency 2 changes
currencyTwo.addEventListener('change', calculate);

//Recalculate exchange amount whe currency amount 2 changes
amountCurrencyTwo.addEventListener('input', calculate);



//Execute calculate function on page load
calculate();