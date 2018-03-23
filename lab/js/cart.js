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


function showCart() {
  // TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
  var body = parent.getElementsByTagName('tbody');
  // TODO: Find the table
  var findTable = document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  
  // PSEUDOCODE: 
  for (var i = 0; i < Cart.length; i++) {
     iterate over cart length to display each item and quantity on td/tr's 
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
  
//   PSEUDOCODE: reverse of catalog, take selected items and remove from cart, push new cart to local storage,

// }

// TODO: Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
sectionElement.addEventListener('click', removeItemFromCart);

// PSEUDOCODE: event listener connected to the table id cart. 

loadCart();

showCart();