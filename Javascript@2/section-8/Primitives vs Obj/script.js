"use strict";

// primitives

// let age = 19;
// let oldAge = age;
// age = 20;
// console.log(age);
// console.log(oldAge);

// objects

/*
const me = {
  name: "jonas",
  age: 19,
};

const friend = me;
friend.age = 23;

console.log(me); // jadduu happens
console.log(friend);

*/

// primitive types :

let lastName = "sharma";
let oldLastName = lastName;
lastName = "jadhav";
console.log(lastName, oldLastName);

// reference types :

const shreya = {
  firstName: " shreya",
  lastName: "sharma ",
  age: 24,
};

const marriedShreya = shreya;
marriedShreya.lastName = "jadhav"; // changes happens in both the object

console.log(" Before Marriage ", shreya);
console.log(" After Marriage ", marriedShreya);

// copiying the object :

