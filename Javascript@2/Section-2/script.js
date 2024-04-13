/*
let js = "amazing" ;

if(js === 'amazing'){
    // alert('JS is Fun !!!')
}

console.log(56+45-5+9);
*/

/*
let javaScriptIsFun = true ;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 38);
console.log(typeof 'adii');

javaScriptIsFun = 'YES!';
console.log(javaScriptIsFun);

let year ;
console.log(year); 
console.log(typeof year);

year = 1991 ;
console.log(typeof year);

console.log(null); // its a error in JS 

*/

/*
let age = 19 ;
age = 20 ;
console.log(age)

const birthYear = 2004 ;
// birthYear = 2005 ;          //ERROR 

var job = "codder" ;
job = 'programmer' ;
console.log(job);

*/

/*
const now = 2024 ;
const ageAdii = now - 2004 ;
const ageAbhay = now - 2009 ;
console.log(ageAdii , ageAbhay);

console.log(ageAdii*2 , ageAbhay + 10 , 2**3) ;

const firstName = "Adii" ;
const lastName = "Jadhav" ;
console.log(firstName + ' ' + lastName) 

// Assignment Operators 

let x = 10 + 5  ;
console.log(x);
x+=10 ;          // x = x + 10
x++;         
x*=10 ;
x-- ;           // x = x * 10
console.log(x);

// Comparison Operators 
// > , < , >= , <= 
console.log(ageAdii < ageAbhay) ;
console.log(ageAdii >= 18) ;

const isFullAge = ageAdii >= 18 ;   // stores the boolean value
console.log(isFullAge);

*/

/*
// strings 

const firstName = 'John' ;
const job = "Teacher" ;
const birthYear = 1991 ;
const currYear = 2024 ;

let johns = " i'm " + firstName + ', a '+(currYear - birthYear) + " " + "years Old " + job ;

console.log(johns) ;

// Template Literals 

let johnsNew = ` i'm ${firstName}, a ${currYear - birthYear} years old ${job}  ` ;

console.log(johnsNew) ;

// Multiple Lines

console.log(" string \n\ with \n\ multiple Lines ");

console.log(`string 
with 
multiple Lines`) ;

*/

/*
// If-else

const markAge = 14 ;

if(markAge >= 18){
    console.log("mark can drive the car ") ;
}
else{
    const years = 18 - markAge ;
    console.log(` Mark is Too young , he can drive after ${years} years `)
}

const birthYear = 1990 ;

let century ;
if( birthYear <= 2000){
    century = 20 ;
}
else{
    century = 21 ;
}
console.log(century);

*/

/*

// Type Conversion 

const birthYear = "1998" ;
console.log(birthYear + 18 ) ;
console.log(Number(birthYear) + 18 ) ;

console.log(Number("Adii")) ;

console.log(String(38) , 38 );

// Type coercion

console.log("i am " + 20 + " years Old ") ; 
// number  is conveted to string due to + operator 

console.log('10' - '5' - 2 );
console.log('25' * '2');
console.log('24' / '2');
// string  is conveted to number due to - * / operator 

// Guess the o/p

n = '1' + 1 ;
n = n - 1 ;
console.log(n);

let a = 1 + 2 + 3 + 4 + '5' ;
console.log(a) ;

let b = '10' - '4' - '3' - 2 + '5' ;
console.log(b);

*/

/*
// falsy Values 

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('johns'));
console.log(Boolean(''));
console.log(Boolean({ }));

const money = 0 ;
if(money){        // JS will automati. convert the money in boolean so it will become falsy 
    console.log("Spend It !!! ") ;
}
else{
    console.log("KAMA BHOSDIKE !!! ") ;
}

let height ;
if(height){
    console.log("Height is defined")
}else{
    console.log("Height Not Defined ")
}

*/

/*
// Equality operator 

const age = 18 ;
if(age === 18){
    console.log("You become an adult ");
}

//NOTE : 
// '18' == 18 -> TRUE 
// '18' === 18 -> FALSE 

// PROMPT : 

const favouriteNumber = prompt("Enter your favourite number :  ") ;
console.log(typeof favouriteNumber)
if(favouriteNumber == 23){ //'23' == 23 -> true 
    console.log("LOOSE EQUALITY !!! ");
}
else if(favouriteNumber === 23){ //'23' == 23 -> false 
    console.log("STRICT EQUALITY !!! ") ;
}
else if(favouriteNumber !== 23 ){
    console.log("Number is not 23" ) ;
}

*/

/*
// Logical operators

const hasDrivingLisence = true ;
const hasGoodVision = false ;

console.log(hasDrivingLisence && hasGoodVision) ;
console.log(hasDrivingLisence || hasGoodVision) ;
console.log(!hasGoodVision) ;

*/

/*
// Switch Statements : 

const day = "wednesday" ;

switch(day){
    case "monday" :
        console.log("Plan the Course Structure ");
        console.log("Go to coding meetup ");
        break ;
    case "tuesday" :
        console.log("Prepare Theory Vedios ");
        break ;
    case 'wednesday' :
    case 'thursday' :
        console.log("Write Code Examples ") ;
        break ;
    case 'friday' :
        console.group("Record Vedios ") ;
        break ;
    case "saturday" :
    case "sunday" :
        console.log("Enjoy The Weeked :D") ;
        break;
    default :
        console.log("Enter A VAlid Choice ") ;
}

*/

/*
// Conditional(Ternary Operator)

// condition ? true : false

const age = 23 ;

// age >= 18 ? console.log("I like to drink wine 🍷") : console.log("i like to Drink Water 💧") ;

const drink = age >= 18 ? "wine 🍷" : " water 💧" ;
console.log(drink) ;

console.log(` I Like to drink ${age >= 18 ? "wine 🍷" : " water 💧"}`)

*/

// CHALLENGE : 
/*

Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

*/

/*
const billValue = 275 ;

const tip = billValue>=50 && billValue<=300 ? 0.15*billValue : 0.2*billValue ;

console.log(tip) ;

const finalBill = tip + billValue ;

console.log(finalBill) ;

console.log(`The Bill was ${billValue} and the tip was ${tip} and the total value ${finalBill}`)

*/