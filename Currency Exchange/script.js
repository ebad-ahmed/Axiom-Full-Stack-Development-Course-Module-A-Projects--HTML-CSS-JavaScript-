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
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;
    //console.log(currencyOneCode,currencyTwoCode);

    //Send Request to Excahnge Rate API for conversion rates for currency one
    fetch(`https://v6.exchangerate-api.com/v6/d73245b002d2d961fd52567e/pair/${currencyOneCode}/${currencyTwoCode}`)
        .then(res => res.json())
        .then(data => {
    //Get the conversion rate from Currency one to currency two
    const conversionRate = data.conversion_rate;
         
    //Update the DOM to display the conversion rate
    rate.innerText = `1 ${currencyOneCode} = ${conversionRate} ${currencyTwoCode}`;
    
    // Formatting Currency Two Amount
    const amount2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyTwoCode }).format((amountCurrencyOne.value * conversionRate).toFixed(2));
    // Updating DOM
    amountCurrencyTwo.value = amount2;
    
    });
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

swap.addEventListener('click', () => {
    //Save value of currency one code to temp variable 
    const temp = currencyOne.value;
    //coppy currency two code to currency one
    currencyOne.value = currencyTwo.value;
    //copy currency one code form temp variable to currency two
    currencyTwo.value = temp;
    //recalculate exchange rate after swap
    calculate();
})
//Execute calculate function on page load
calculate();