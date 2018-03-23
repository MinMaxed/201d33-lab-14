'use strict';

// console.log(Product.allProducts);

// TODO: Create a "Cart" constructor that holds quantity, item, and an array of items in the cart

var Cart = function (name, totalquantity) {
  this.name = name;
  this.quantity = totalquantity;
  this.items = [];
  this.array=[];
};

console.log(Cart);
// var emptyCart = new Cart ()


// pushing Cart to LS to be grabbed on other JS files.
function startingCart () {
  var saveCart = JSON.stringify(Cart);
  localStorage.setItem('actualCartman', saveCart);
  console.log('Hello, world~');
}
console.log(startingCart);


// Product Contructor
var Product = function (filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app
generateCatalog();
setItem();
// setUp();

// function setUp() {
//   if (useableCart && useableCart.length) {
//     var catalogAsString = localStorage.getItem('cartItems');
//     var useableCart = JSON.parse(catalogAsString);
//     console.log('loaded from local');
//     return;
//   }
//   console.log('not from local');
// }

function setItem() {
  var saveCatalog = JSON.stringify(Product.allProducts);
  localStorage.setItem('cartItems', saveCatalog);
}

