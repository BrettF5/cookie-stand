

// Make Store Hours array
const eachHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Need to make a Seattle Object

const seattle = {
    name: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookieSale: 6.3,
    saleNumber: [],
    cookieEst: function() {
        this.saleNumber = estSalesHour(this);
    },
};

// Need to make a Tokyo Object

const tokyo = {
    name: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookieSale: 1.2,
    saleNumber: [],
    cookieEst: function() {
        this.saleNumber = estSalesHour(this);
    },
};

// Need to make a Dubai Object

const dubai = {
    name: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookieSale: 3.7,
    saleNumber: [],
    cookieEst: function() {
        this.saleNumber = estSalesHour(this);
    },
};

// Need to make a Paris Object

const paris = {
    name: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookieSale: 2.3,
    saleNumber: [],
    cookieEst: function() {
        this.saleNumber = estSalesHour(this);
    },
};

// Need to make a Lima Object

const lima = {
    name: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookieSale: 4.6,
    saleNumber: [],
    cookieEst: function() {
        this.saleNumber = estSalesHour(this);
    },
};

// initialize sales
seattle.cookieEst();
tokyo.cookieEst();
dubai.cookieEst();
paris.cookieEst();
lima.cookieEst()

// "standalone" random function calcuator for min max range, round down.
function randomSales(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function for calculating the store simulated cookies sold each hour
function estSalesHour(store) {
    const sale = [];
    for (let i = 0; i < eachHour.length; i++) {
        const numberCustomerHour = randomSales(store.minCustomers, store.maxCustomers);
        const eachHourSale = Math.ceil(numberCustomerHour * store.avgCookieSale);
        sale.push(eachHourSale);
    }
    return sale;
}

// DOM add objects to HTML
// Add container to <div>
const salmonContainerElement = document.getElementById('salmonCookies');

// Function rendoring DOM HTML

function renderStore(store) {
    //Create new element ariticle and attach it to div
    let newArticleElement = document.createElement('article');
    //Append to parent Element salmonContainerElement
    salmonContainerElement.appendChild(newArticleElement);

    //Add h2 element with store location name
    let newHeaderElement = document.createElement('h2');
    //Append to partent Element salmoncontainerElement
    newArticleElement.appendChild(newHeaderElement);
    //Add need text
    newHeaderElement.textContent = store.name;

    // Add unordered list for times
    const hoursTimeElement = document.createElement('ul');
    newArticleElement.appendChild(hoursTimeElement);
    // Add li elements and attach each store hour
    
    let hourSold = 0;

    for (let i = 0; i < eachHour.length; i++) {
        const liHour = document.createElement('li');
        hoursTimeElement.appendChild(liHour);
        const cookieSoldThisHour = store.saleNumber[i];
        hourSold += cookieSoldThisHour;
        const salesTextLi = `${eachHour[i]}: ${cookieSoldThisHour} cookies`;
        liHour.textContent = salesTextLi;
    }
}

renderStore(seattle);
renderStore(tokyo);
renderStore(dubai);
renderStore(paris);
renderStore(lima);