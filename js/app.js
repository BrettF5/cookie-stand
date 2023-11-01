'use strict';

const hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let totalSold = 0;

let seattle = {
    location: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiesCusomers: 6.3,
    sales: [],
    estimate: function() {
        this.sales = estimateSales(this);
    },
}

let tokyo = {
    location: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiesCusomers: 1.2,
    sales: [],
    estimate: function() {
        this.sales = estimateSales(this);
    },
}

let dubai = {
    location: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiesCusomers: 3.7,
    sales: [],
    estimate: function() {
        this.sales = estimateSales(this);
    },
}

let paris = {
    location: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiesCusomers: 2.3,
    sales: [],
    estimate: function() {
        this.sales = estimateSales(this);
    },
}

let lima = {
    location: 'lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiesCusomers: 4.6,
    sales: [],
    estimate: function() {
        this.sales = estimateSales(this);
    },
}

//initialize Sales
seattle.estimate();
tokyo.estimate();
dubai.estimate();
paris.estimate();
lima.estimate();

function estimateSales(store) {
  const sales = [];
  for (let i = 0; i < hoursOpen.length; i++) {
    const numCustomers = randomInRange(store.minCustomers, store.maxCustomers);
    const hourSales = Math.ceil(numCustomers * store.avgCookiesCusomers);
    sales.push(hourSales);
  }
  return sales;
}


function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let container = document.getElementById('root');

function render(store) {
    // need an ariticel per cooki stand
    let cookieStandArticle = document.createElement('article');
    container.appendChild(cookieStandArticle);

    let heading = document.createElement('h2');
    cookieStandArticle.appendChild(heading);
    heading.textContent = store.location;

    let hoursList = document.createElement('li');
    cookieStandArticle.appendChild(hoursList);

    for(let i=0; i<seattle.sales.length; i++) {
        let salesItem = document.createElement('li');
        hoursList.appendChild(salesItem);
        let cookieSoldThisHour = store.sales[i];
        totalSold += cookieSoldThisHour;
        let salesInfo = `${hoursOpen[i]} ${cookieSoldThisHour} cookies`;
        salesItem.textContent = salesInfo;
    }


    // add total line
    const totalItem = document.createElement('li');
    hoursList.appendChild(totalItem);
    const totalInfo = `Total: ${totalSold} cookie sold`;
    totalItem.textContent = totalInfo;

}


render(seattle);
render(tokyo);
render(dubai);
render(paris);
render(lima);
