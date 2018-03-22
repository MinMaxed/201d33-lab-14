'use strict';

function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  var itemSelect = document.getElementById('cartItems');
  var option = document.createElement('option');
  // option.text = itemSelect.name;
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
  var selectedItems = JSON.stringify('Cart');
  localStorage.setItem('Cart',selectedItems);
}

function saveCartToLocalStorage() {
  // TODO: Save the cart to Local Storage
  // push array to LS
}

function updateCounter() {
  // TODO: Update the cart count in the header
  //update quantitiy value
}

function updateCartPreview() {
  // TODO: Show the selected item & quantity in the cart div
}

// TODO: Put an event listener on the #catalog so that you can run the "handleSubmit" method when user submits the form (adding an item to their cart) 

// sectionElement.addEventListener('submit',addSelectedItemToCart);


// Start it up ...
populateForm();
