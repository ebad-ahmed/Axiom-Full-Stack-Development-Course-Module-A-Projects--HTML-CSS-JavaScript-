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
         userDiv.innerHTML = `<strong>${user.name}</strong> ${user.balance}`

         //add the new element into the dom
         main.appendChild(userDiv);

     });
}

getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();










//Event Listeners
