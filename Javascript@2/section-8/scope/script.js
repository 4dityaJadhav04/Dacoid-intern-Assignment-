"use strict";

function calAge(birthYear) {
  const age = 2080 - birthYear; // only accessible in the function
  //   console.log(firstName);

  function printAge() {
    let output = ` ${firstName}, you are ${age} years old , Born in ${birthYear}.`;

    console.log(output);

    if (birthYear >= 1999 && birthYear <= 2010) {
      // creating new variables with the same name as outer scope variable :
      const firstName = "Adii";

      // reassigning the new values to the outer scope variable
      output = "NEW OUTPUT!";

      var millinior = true;
      const str = `${firstName} you are a millinior .`;

      console.log(str);
    }
    console.log(millinior); // Var are function scoped

    // console.log(str); -----> NOT work

    console.log(output);
  }

  printAge();

  return age;
}

const firstName = "Jonas"; // global variable
calAge(2004);

//console.log(age) ----> Not Work
//printAge()  -----> Not Work
