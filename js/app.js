'use strict';


// As a user, I would like to display three unique products by chance so that the viewers can pick a favorite.

// Create a constructor function that creates an object associated with each product, and has the following properties:
// Name of the product
// File path of image
// Times the image has been shown
// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

// For each of the three images, increment its property of times it has been shown by one.

// Attach an event listener to the section of the HTML page where the images are going to be displayed.

// Once the users ‘clicks’ a product, generate three new products for the user to pick from.
// As a user, I would like to track the selections made by viewers so that I can determine which products to keep for the catalog.
// In the constructor function define a property to hold the number of times a product has been clicked.

// After every selection by the viewer, update the newly added property to reflect if it was clicked.

// As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.
// By default, the user should be presented with 25 rounds of voting before ending the session.
// Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.
// As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.
// Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

// After voting rounds have been completed, remove the event listeners on the product.


let imagProductElemint = document.getElementById('product');


let numberAtetmpet = 10;
let counterAttempt = 0;
let imageIndex;
let imageIndexLeft;
let imageIndexRight;
let imageIndexCenter;

function Busproudect(name, source) {
    this.name = name;
    this.source = source;
    this.shown = 0;
    this.votes = 0;
    Busproudect.allProuduct.push(this);
}
Busproudect.allProuduct = [];


new Busproudect('bag', 'img/bag.jpg');
new Busproudect('banana', 'img/banana.jpg');
new Busproudect('bathroom', 'img/bathroom.jpg');
new Busproudect('boots', 'img/boots.jpg');
new Busproudect('breakfast', 'img/breakfast.jpg');
new Busproudect('bubblegum', 'img/bubblegum.jpg');
new Busproudect('chair', 'img/chair.jpg');
new Busproudect('cthulhu', 'img/cthulhu.jpg');
new Busproudect('dog-duck', 'img/dog-duck.jpg');
new Busproudect('dragon', 'img/dragon.jpg');
new Busproudect('pen', 'img/pen.jpg');
new Busproudect('scissors', 'img/scissors.jpg');
new Busproudect('shark', 'img/shark.jpg');
new Busproudect('sweep', 'img/sweep.png');
new Busproudect('tauntaun', 'img/tauntaun.jpg');
new Busproudect('unicorn', 'img/unicorn.jpg');
new Busproudect('usb', 'img/usb.gif');
new Busproudect('water-can', 'img/water-can.jpg');
new Busproudect('wine-glass', 'img/wine-glass.jpg');

console.log(Busproudect.allProuduct);

function randomProduct() {
    return Math.floor(Math.random() * Busproudect.allProuduct.length);
}
// randomProduct();

//render funcion
function render() {
    imageIndexLeft = randomProduct();
    imageIndexRight = randomProduct();
    imageIndexCenter = randomProduct();

    document.getElementById('leftImag').src = Busproudect.allProuduct[imageIndexLeft].source;
    document.getElementById('centerImage').src = Busproudect.allProuduct[imageIndexCenter].source;
    document.getElementById('rightImage').src = Busproudect.allProuduct[imageIndexRight].source;

}
render();

//eventlistner
imageIndexLeft.addEventListener('click',userClick);
imageIndexCenter.addEventListener('click',userClick);
imageIndexRight.addEventListener('click',userClick);

function userClick(event){
    
}