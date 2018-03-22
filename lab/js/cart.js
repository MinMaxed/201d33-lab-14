'use strict';

var Cart = [];

function loadCart() {
  // TODO: Pull the cart (if it exists) from Local Storage and make available to this app
  var cartAsString = localStorage.getItem('cartItems');
  var useableCart = JSON.parse(cartAsString);
  if (useableCart && useableCart.length) {
    Cart = useableCart;
    console.log('loaded from local');
    return;
  }
  console.log('not from local');
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
var body = parent.getElementsByTagName('tbody');

function showCart() {

  // TODO: Find the table
  var findTable = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  for (var i = 0; i < Cart.length; i++) {

  }
  // TODO: Create a TR
  var trElement = document.createElement('tr');
  // TODO: Create a TD for the quantity and the item
  var tdElement = document.createElement('td');
  // TODO: Add the TR to the TBODY and both TD's to the TR
  trElement.appendChild(tdElement);
  body.appendChild(trElement);

}

function removeItemFromCart() {
  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}

// TODO: Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
// sectionElement.addEventListener('click', removeItemFromCart);
loadCart();

showCart();