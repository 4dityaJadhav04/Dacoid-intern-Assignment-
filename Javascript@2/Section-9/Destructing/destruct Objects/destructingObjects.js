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
};

restuarant.orderDelivery({
  time: "22.30",
  address: " sole de vale",
  starterIndex: 1,
  mainIndex: 2,
});

const { name, openingHours, categories } = restuarant;
console.log(name, openingHours, categories);

const {
  name: restuarantName,
  openingHours: hours,
  categories: tags,
} = restuarant;
console.log(restuarantName, hours, tags);

// .default value here [] empty array :
// if the object does not Exist it will return the default vallue .

const { menu = [], starterMenu: starters = [] } = restuarant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;

const mutate = {
  a: 19,
  b: 7,
  c: 25,
};
({ a, b } = mutate);
console.log(a, b);

// nested Objects :

const { fri } = openingHours;
console.log(fri);

const {
  thu: { open: o, close: c },
} = openingHours;
console.log(o, c);
