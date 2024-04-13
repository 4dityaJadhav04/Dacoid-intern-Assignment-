"use strict";

// destructing of array :

// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// console.log(x, y, z);

const restuarant = {
  name: "classico italiano",
  location: "via angelo tavanti 23 , firenze , italy ",
  categories: ["italian", "maharashtrian", "vegetarian", "organic"],
  starterMenu: ["focaccia", "coldrink", "garlic Bread", "tandori"],
  mainMenu: ["pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [first, second] = restuarant.categories;
console.log(first, second);

const [, , z] = restuarant.categories;
console.log(z);

let [x, , y] = restuarant.categories;
console.log(x, y);

// switching the values :

// const temp = x;
// x = y;
// y = temp;
// console.log(x, y);

[x, y] = [y, x];
console.log(x, y);

// receiving two values from the function  :

// console.log(restuarant.order(0, 1));

const [starter, mainCourse] = restuarant.order(1, 0);
console.log(starter, mainCourse);

// nested array  & nested destructuring :

const arr = [2, 5, [9, 7]];
const [a, , b] = arr;
console.log(a, b);

const [i, , [j, k]] = arr;
console.log(i, j, k);

// default values :
// const [p, q, r] = [8, 9];
// console.log(p, q, r);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
