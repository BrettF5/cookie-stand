'use strict';

// Make Store Hours array
const eachHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//contructor function start with a Capital!!!

function StoreLocation(name, minCustomers, maxCustomers, avgCookieSale) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookieSale = avgCookieSale;
    this.sales = this.generateSales();
}


// "standalone" random function calcuator for min max range, round down.
function randomSales(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

StoreLocation.prototype.generateSales = function() {
  const sales = [];
  for (let i = 0; i < eachHour.length; i++) {
    const numberCustomers = randomSales(this.minCustomers, this.maxCustomers);
    const hourSales = Math.ceil(numberCustomers * this.avgCookieSale);
    sales.push(hourSales);
  }
  return sales;
}

// Reference to the container in html referenced by DOM
const localContainerElement = document.getElementById('salmonCookies');

const articleElem = document.createElement('article');
localContainerElement.appendChild(articleElem);

// creating the table
const tableElem = document.createElement('table');
articleElem.appendChild(tableElem);

// add table head
const tableHeadElem = document.createElement('thead');
tableElem.appendChild(tableHeadElem);

// add header Row
const headerRow = document.createElement('tr');
tableHeadElem.appendChild(headerRow);

const locationHeadingCell = document.createElement('th');
headerRow.appendChild(locationHeadingCell);
locationHeadingCell.textContent = 'Location';

// create a store hours table heading
for (let i = 0; i < eachHour.length; i++) {
  const storeHoursCell = document.createElement('th');
  headerRow.appendChild(storeHoursCell);
  storeHoursCell.textContent = eachHour[i];
}

const storeTotalCell = document.createElement('th');
headerRow.appendChild(storeTotalCell);
storeTotalCell.textContent = 'Location Totals';

// create a function to added each store data rows.
StoreLocation.prototype.addCellsData = function() {

  const locationSaleDataRow = document.createElement('tr');
  tableHeadElem.appendChild(locationSaleDataRow);

  const locationStore = document.createElement('td');
  locationSaleDataRow.appendChild(locationStore);
  locationStore.textContent = `${this.name}`;

  let hourSold = 0;

  for (let i = 0; i < eachHour.length; i++) {
    const hourlySaleData = document.createElement('td');
    locationSaleDataRow.appendChild(hourlySaleData);
    const hourlySaleDataCell = parseInt(`${this.sales[i]}`);
    hourSold = hourSold + hourlySaleDataCell;
    hourlySaleData.textContent = hourlySaleDataCell;
  }

    // add total line
    const salesTotal = document.createElement('th');
    locationSaleDataRow.appendChild(salesTotal);
    const totalInfo = hourSold;
    salesTotal.textContent = totalInfo;

}


const seattleWithConstructor = new StoreLocation('Seattle', 23, 65, 6.3);
seattleWithConstructor.addCellsData();
const tokyoWithConstructor = new StoreLocation('Tokyo', 3, 24, 1.2);
tokyoWithConstructor.addCellsData();
const dubaiWithConstructor = new StoreLocation('Dubai', 11, 38, 3.7);
dubaiWithConstructor.addCellsData();
const parisWithConstructor = new StoreLocation('Paris', 20, 38, 2.3);
parisWithConstructor.addCellsData();
const limaWithConstructor = new StoreLocation('Lima', 2, 16, 4.6);
limaWithConstructor.addCellsData();

// Array to store store locations
const locations = [seattleWithConstructor, tokyoWithConstructor, dubaiWithConstructor, parisWithConstructor, limaWithConstructor];

// Function to calculate totals for each hour
function calculateHourlyTotals() {
    const hourlyTotals = new Array(eachHour.length).fill(0);
  
    for (let i = 0; i < eachHour.length; i++) {
      for (let j = 0; j < locations.length; j++) {
        hourlyTotals[i] += locations[j].sales[i];
      }
    }
  
    return hourlyTotals;
  }

// Function to add the footer row with hourly totals
function addFooterRow() {
  const footerRow = document.createElement('tr');
  tableElem.appendChild(footerRow);

  const footerLabel = document.createElement('th');
  footerRow.appendChild(footerLabel);
  footerLabel.textContent = 'Hourly Totals for All Locations';

  const hourlyTotals = calculateHourlyTotals();

  let totalAllLocations = 0;

  for (let i = 0; i < eachHour.length; i++) {
    const hourlyTotalCell = document.createElement('td');
    footerRow.appendChild(hourlyTotalCell);
    hourlyTotalCell.textContent = hourlyTotals[i];
    totalAllLocations += hourlyTotals[i];
  }

  const totalAllLocationsCell = document.createElement('th');
  footerRow.appendChild(totalAllLocationsCell);
  totalAllLocationsCell.textContent = totalAllLocations;


}

// Function to calculate totals for each hour
function calculateHourlyTotals() {
  const hourlyTotals = new Array(eachHour.length).fill(0);

  for (let i = 0; i < eachHour.length; i++) {
    for (let j = 0; j < locations.length; j++) {
      hourlyTotals[i] += locations[j].sales[i];
    }
  }

  return hourlyTotals;
}


// Call the function to calculate totals and add the footer row
calculateHourlyTotals();
addFooterRow();
