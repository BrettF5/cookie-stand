'use strict';

function StoreDetails(location, hours, contact, address) {
    this.location = location;
    this.hoursOpen = hours;
    this.contactInfo = contact;
    this.storeAddress = address;
}


StoreDetails.prototype.addStoreInfo = function() {
    // Creating the container
    const storeContainerElement = document.getElementById('indexHome');

    // Add Ariticle Element
    const articleElement = document.createElement('article');
    storeContainerElement.appendChild(articleElement);

    // Add H2 and store name
    const storeHeaderElement = document.createElement('h2');
    articleElement.appendChild(storeHeaderElement);
    storeHeaderElement.textContent = `${this.location}`;

    // Add unordered list for times
    const storeDetailsInfo = document.createElement('ul');
    storeHeaderElement.appendChild(storeDetailsInfo);

    // Add li hours open
    const storeHours = document.createElement('li');
    storeHours.className = 'custom-li';
    storeDetailsInfo.appendChild(storeHours);
    storeHours.textContent = `${this.hoursOpen}`;

    // Add li contact Info
    const storeContactInfo = document.createElement('li');
    storeContactInfo.className = 'custom-li';
    storeDetailsInfo.appendChild(storeContactInfo);
    storeContactInfo.textContent = `${this.contactInfo}`;

    // Add li Address info
    const storeAddressInfo = document.createElement('li');
    storeAddressInfo.className = 'custom-li';
    storeDetailsInfo.appendChild(storeAddressInfo);
    storeAddressInfo.textContent = `${this.storeAddress}`;
}


const seattle = new StoreDetails("Seattle", "Hours Open: 6am - 7pm", "Contact Info: 123-456-7890", "Location: 2901 3rd Ave #300, Seattle, WA 98121");
const tokyo = new StoreDetails("Tokyo", "Hours Open: 6am - 7pm", "Contact Info: 222-222-2222", "Location: 1 Chrome-1-2 Oshiage, Sumida City, Tokyo 131-8634");
const dubai = new StoreDetails("Dubai", "Hours Open: 6am - 7pm", "Contact Info: 333-333-3333", "Location: 1 Sheikh Mohammed bin Rashid Blvd - Dubai");
const paris = new StoreDetails("Paris", "Hours Open: 6am - 7pm", "Contact Info: 444-444-4444", "Location: Champ de Mars, 5 Avenue Anataole France, 75007 Paris");
const lima = new StoreDetails("Lima", "Hours Open: 6am - 7pm", "Contact Info: 555-555-5555", "Location: Ca, Gral, Borgono caudra 8, Miraflores 15074");

seattle.addStoreInfo();
tokyo.addStoreInfo();
dubai.addStoreInfo();
paris.addStoreInfo();
lima.addStoreInfo();


