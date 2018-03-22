'use strict';

var arrayOfItemNames = [];
console.log('hello' , arrayOfItemNames);

function setUp() {
  var catalogAsString = localStorage.getItem('cartItems');
  var useableCart = JSON.parse(catalogAsString);
  arrayOfItemNames = useableCart;
  console.log('hi' , useableCart);

}
setUp();
console.log(arrayOfItemNames);

var catalogSelect = document.getElementById('catalog');
var itemSelect = document.getElementById('items');
var sectionElement = document.getElementsByClassName('deck col-2');

function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  console.log(arrayOfItemNames);
  console.log(arrayOfItemNames[0].name);
  for (var i=0; i<arrayOfItemNames.length; i++){
    var optionSelect = document.createElement('option');
    console.log(arrayOfItemNames[i]);
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
  // item tag select,
  //push items into array
}

function saveCartToLocalStorage() {
  var selectedItems = JSON.stringify('Cart');
  localStorage.setItem('Cart',selectedItems);
  // TODO: Save the cart to Local Storage
  // push array to LS
}

function updateCounter() {
  // TODO: Update the cart count in the header
  //update quantity value
}

function updateCartPreview() {
  // TODO: Show the selected item & quantity in the cart div
}

// TODO: Put an event listener on the #catalog so that you can run the "handleSubmit" method when user submits the form (adding an item to their cart)

// sectionElement.addEventListener('submit',handleSubmit);

// Start it up ...
populateForm();