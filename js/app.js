'use strict';

/* Object for each shop location
    location
    minimum hourly customers
    maximum hourly customers
    average cookie per customers
*/

/*Generate a random number of customers that can bu used to simulate hourly sales.*/

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
    location: 'Seattle',
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    aveSalePerCusomers: 6.3,
};


// inject the seattle articles
let storeContainerElement = document.getElementById('seattle');

let newArticleElement = document.createElement('article');
storeContainerElement.appendChild(newArticleElement);

let nameHeaderElement = document.createElement('h2');
newArticleElement.appendChild(nameHeaderElement);
nameHeaderElement.textContent = 'Seattle';


