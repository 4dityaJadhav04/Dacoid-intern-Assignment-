"use strict";

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

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
};

const newMenu = [...restuarant.mainMenu, "lolipop"];
console.log(newMenu);

// copy array :

const mainMenuCopy = [...restuarant.mainMenu];
console.log(mainMenuCopy);

// join 2 array :
const menu = [...restuarant.mainMenu, ...restuarant.starterMenu];
console.log(menu);

// iterables : arrays , strings , maps , sets but not object .

const str = "jonas";
console.log(...str);
const letters = [...str, " ", " A "];
console.log(letters);

//Real-World Example :a

// const ingrediantes = [
//   prompt("let's make pasta ! Ingrediant 1 ? "),
//   prompt("Ingrediant 2 ? "),
//   prompt("Ingradiant 3 ? "),
// ];
// console.log(ingrediantes);
// restuarant.orderPasta(...ingrediantes);

// IN Case of Objects :

const newRestuarant = {
  ...restuarant,
  foundedIn: 2025,
  founder: "AdiiJ",
}; // order doesn't matter

console.log(newRestuarant);

// copy objects :
const copyRestuarant = { ...restuarant };
copyRestuarant.name = "royal italic ";
console.log(copyRestuarant.name);
console.log(restuarant.name);
