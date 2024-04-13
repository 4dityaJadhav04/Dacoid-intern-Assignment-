"use strict";

const restuarant = {
  name: "classico italiano",
  location: "via angelo tavanti 23 , firenze , italy ",
  categories: ["italian", "maharashtrian", "vegetarian", "organic"],
  starterMenu: ["focaccia", "coldrink", "garlic Bread", "tandori"],
  mainMenu: ["pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved ! order of ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `your delicious pasta is ready with ingrediantes ${ing1}  , ${ing2} and ${ing3}  `
    );
  },

  orderPizza: function (mainIngrediant, ...otherIngrediants) {
    console.log(mainIngrediant);
    console.log(otherIngrediants);
  },
};

/*

const [focaccia, , garlicBread, ...otherFood] = [
  ...restuarant.starterMenu,
  ...restuarant.mainMenu,
];
console.log(focaccia, garlicBread, otherFood);

*/

// 1) OR OPERATOR

// Properties of Or Operator : use ANY data type , return any datatype , Short-circuiting .

// if the first operand is a truthy value then js doesn't even ecaluate the second operand . - short circuiting

/*

console.log("----------OR-------------");

console.log(3 || "jonas"); // as 3 is a truthy value .
console.log("" || "jonas");
console.log(true || 0);
console.log(undefined || null);

console.log("" || undefined || 0 || "hello" || 23 || null);

restuarant.numGuests = 23;

const guest1 = restuarant.numGuests ? restuarant.numGuests : 10; // if numGuest doesnot exist gives o/t 10 i.e default value
console.log(guest1);

const guest2 = restuarant.numGuests || 10; // if numGuest doesnot exist gives o/t 10 i.e default value
console.log(guest2);

// 2) AND OPERATOR :
// shotcircuits when first value is falsy and doesn't even check the second value .

console.log("----------AND-------------");
console.log(0 && "jonas");
console.log(23 && "jonas"); // if boyh are true then itwill return the second one

console.log(23 && "jonas " && null && undefined);

// practical example

if (restuarant.orderPizza) {
  restuarant.orderPizza("mushrooms", "chicken");
}

restuarant.orderPizza && restuarant.orderPizza("mushrooms", "chicken");



*/

/*

// 3) Nullish coalesching operator :

//Nullish : null and undefined values are responsible for shotcircuiting

// it doesn't include ( 0 or '' )

restuarant.numGuests = 0;
const guests = restuarant.numGuests || 10;
console.log(guests);

// we fixed the error by using the  Nullish operator

const guestsCorrect = restuarant.numGuests ?? 10;
console.log(guestsCorrect);

*/

// 4) Logical operators :

const rest1 = {
  name: "capri",
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "grilli ",
  owner: "Adii",
};

//rest2.numGuests = rest1.numGuests || 10;

// using  { OR Assingnment } Operator ...
// rest2.numGuests ||= 10;
// console.log(rest2);

// { nullish assignment Operator }
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

//// { AND assignment Operator }

// rest1.owner = rest1.owner && "<Abhay>";
// rest2.owner = rest2.owner && "<Abhay>";

rest1.owner &&= "<Abhay>";
rest2.owner &&= "<Abhay>";

console.log(rest1);
console.log(rest2);
