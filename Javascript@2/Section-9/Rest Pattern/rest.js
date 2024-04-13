"use strict";

// spread (...)  , because on the RIGHT side of the =
const arr = [1, 2, ...[5, 6]];
console.log(arr);

// rest (...) , because on the LEFT side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

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

const [focaccia, , garlicBread, ...otherFood] = [
  ...restuarant.starterMenu,
  ...restuarant.mainMenu,
];
console.log(focaccia, garlicBread, otherFood);

// in case of Objects

const { sat, ...weekDays } = restuarant.openingHours;
console.log(weekDays);

// Functions :
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};

add(2, 4);
add(12, 40, 50);
add(2, 4, 8, 9, 10, 12);

const x = [20, 30, 40];
add(...x); //spread😂

restuarant.orderPizza("chicken", "mushrooms", "olives", "spinach");
