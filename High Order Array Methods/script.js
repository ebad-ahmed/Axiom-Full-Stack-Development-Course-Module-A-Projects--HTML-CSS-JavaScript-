//Get DOM Elements
const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const filterBtn = document.getElementById('filter');
const sortBtn = document.getElementById('sort');
const sumBtn = document.getElementById('sum');

//Initailize user data array
let data = [];


//Fetch Random User from randomuser.me API
async function getRandomUser () {
    //Wait for the results from API
    const res = await fetch('https://randomuser.me/api/') 
    //Wait for response to convert into JSON
    const data = await res.json();
    //console.log(data);


    //Get the user data
    const user = data.results[0];
    //console.log(user);

    //Create the new user
    const newUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        balance: Math.floor(Math.random() * 1000000)
    }
    //console.log(newUser);

    //Add newUser into Data Array
    addData(newUser);
};


//Function to addUser data to data array
function addData(newUser) {
    //Add the new user data into data array
    data.push(newUser);
    //console.log('Data Array',data);
    
    //Update the DOM to display users in data array
    updateDOM();
}


//Function to double money of all user
function doubleMoney() {
    //Loop through all user in user data array
    //for ecah user,return the user data
    //ovewrite the data array with the new data array created by map
    data = data.map(user => {
        return { ...user, balance : user.balance * 2 }
    });


    //Update the DOM using new user data array
    updateDOM();
}

//Function to filter only millionaires
function filterUsers() {
    // Filter out all user whose balance is less than million
    data = data.filter(user => user.balance > 1000000);
    //Update the DOM with new user data
    updateDOM();
}


//Function to sort user by balance
function sortByBalance() {
    //Sort users by balance using a compare function inside sort
   data = data.sort((a,b) => a.balance - b.balance )
   //Update the DOM with new user data
   updateDOM();
}

//Function to sum all users balance into total balance
function totalBalance() {
    //Update the DOM with new user data
    updateDOM();
    //Add up all balance from all users
    //accumalator start at 0 and adds the current users balance for each iteration
    const balance = data.reduce((acc,user) => (acc += user.balance), 0);
    //Create a Div for the balance
    const balanceElement = document.createElement('div');
    //Set the inner HTML for new div
    balanceElement.innerHTML = `<h3>Total Balance :  ${formatNumberToDollar(balance)}</h3>`;
    //Append Balance in main element 
    main.appendChild(balanceElement) ;
}

//Function to format random number as money
function formatNumberToDollar(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}



//Function to update the UI with data from the user data array
function updateDOM(userData = data) {
     // Clear previous UI
     main.innerHTML =  '<h2><strong>User</strong> Wealth</h2>' 
     // Loop through userData and render in the UI
     userData.forEach(user => {
         //console.log(user);

         //create the new element for the user
         const userDiv = document.createElement('div');

         //apply the user class to the new dive
         userDiv.classList.add('user');

         //Add inner html to the user div
         userDiv.innerHTML = `<strong>${user.name}</strong>
                            ${formatNumberToDollar(user.balance)}`

         //add the new element into the dom
         main.appendChild(userDiv);

     });
}

 
//Event Listener
//1. Listen for click on Add User Button
addUserBtn.addEventListener('click', getRandomUser);

//2.Listen for click on the double button
doubleBtn.addEventListener('click',doubleMoney);

//3.Listen for click on filter millionaires button
filterBtn.addEventListener('click',filterUsers);

//4.Listen for click on sort button
sortBtn.addEventListener('click',sortByBalance);

//5.Listen for click on add all wealth button
sumBtn.addEventListener('click', totalBalance);



getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();