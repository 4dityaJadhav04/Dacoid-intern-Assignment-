"use scrict";

// Hoisting with Variables :

console.log(me);
// console.log(job);
// console.log(year);

var me = "jonas";
let job = "teacher ";
const year = 1991;

// Hoisting with Functions :

console.log(addDecl(2, 3));

// console.log(addExpr(2, 3));

// console.log(addArrow); // since the arrow function is declared with var its value becomes ubdefined
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example :

console.log(numProducts); // since the value of numProducts will become undefined ... so it will call the func still the value assingned to it 10 . due to hoisting
if (!numProducts) deleteShoppingCart();

//In the provided code snippet, there is a conditional statement checking the value of the variable numProducts using the logical NOT operator (!). If numProducts evaluates to a falsy value (such as 0, null, undefined, false, or an empty string), the deleteShoppingCart function is called.

var numProducts = 10;

function deleteShoppingCart() {
  console.log("shopping cart deleted !");
}

// global wnidow ..... type window in console and explore it !

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
