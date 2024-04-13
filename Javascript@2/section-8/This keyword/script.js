"use strict";

// const jonas = {
//   year: 1999,
//   calcAge: function () {
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// in arrow and regular functions

// const jonas = {
//   firstName: "jonas",
//   year: 1999,
//   calcAge: function () {
//     console.log(2037 - this.year);
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet(); // gives undefined

// const jonas = {
//   firstName: "jonas",
//   year: 1999,
//   calcAge: function () {
//     console.log(2037 - this.year);
//   },

//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();

// ------------------------------------------------

const jonas = {
  firstName: "jonas",
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    // Solution 1 :
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);

    //   // console.log(this.year >= 1981 && this.year <= 1996);               // this becomes undefined

    // solution 2 :
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();
