// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (products) {
    var sum = 0;
    for (var i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    return sum;
};
console.log(getTotal([
    { name: "shirt", price: 1 },
    { name: "pants", price: 2 },
]));
