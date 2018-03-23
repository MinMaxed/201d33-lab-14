'use strict';

var arrayOfItemNames = [];

// PSEUDOCODE: 
Cart object taken from LS that was generated on app.js 

function setUp() {
  var catalogAsString = localStorage.getItem('cartItems');
  var useableCart = JSON.parse(catalogAsString);
  arrayOfItemNames = useableCart;
}
setUp();

var catalogSelect = document.getElementById('catalog');
var itemSelect = document.getElementById('items');
// var segmentElement = document.getElementsById('deck col-2');

function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  for (var i=0; i<arrayOfItemNames.length; i++){
    var optionSelect = document.createElement('option');
    optionSelect.textContent = arrayOfItemNames[i].name;
    itemSelect.appendChild(optionSelect);
  }
}

function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();
}

function addSelectedItemToCart() {
  // TODO: Add the selected item and quantity to the cart
  var thElement = document.createElement('td');
  itemSelect.appendChild(thElement);
  
// PSEUDOCODE:  
  add event.target.item.name to Cart Object,  
}

function saveCartToLocalStorage() {
  var selectedItems = JSON.stringify('cart');
  localStorage.setItem('cart',selectedItems);
  console.log('hi', saveCartToLocalStorage);
  // TODO: Save the cart to Local Storage
  // push array to LS
}

function updateCounter() {
//   // TODO: Update the cart count in the header
//   //update quantity value
   totalCarts++ on every purchase
// }

function updateCartPreview() {
//   // TODO: Show the selected item & quantity in the cart div

// PSEUDOCODE: 
add item.name & quantity.value to tr/td element to be displayed
// }

// TODO: Put an event listener on the #catalog so that you can run the "handleSubmit" method when user submits the form (adding an item to their cart)

// PSEUDOCODE: 
catalogSelect.addEventListener('submit',handleSubmit);

// Start it up ...
populateForm();