/*
// T0 Activate Strict Mode : 
'use strict' ;

let hasDriversLicense = false ;
const passTest = true ;

if(passTest) hasDriversLicense = true ;
if(hasDriversLicense) console.log("You Can Drive ") ;

*/

/*
// Functions 

function logger(){
    console.log("My name is Adii ") ;
}

logger() ;
logger() ;
logger() ;

function juiceMaker( apples , oranges ){
    const juice = ` The juice of ${apples} apples and
    ${oranges} oranges is ready  ` ;
    return juice ;
}
const orangeJuice = juiceMaker( 0 , 5 ) ;
console.log(orangeJuice) ;

const appleOrangeJuice = juiceMaker( 7 , 0 );
console.log(appleOrangeJuice) ;

*/

/*
//function Declaration : (funtions can be called before they are defined)

const age1 = calAge1(2004);
function calAge1(birthYear) {
  return 2024 - birthYear;
}
console.log(age1);

// Functions EXPRESSION : ( can't )

const calAge2 = function (birthYear){
    return 2024 - birthYear ;
}
const age2 = calAge1(2009) ;
console.log(age2) ;

*/

/*
// Arrow Functions : 

const calAge3 = birthYear => 2024 - birthYear ;
const age = calAge3(2004) ;
console.log(age) ;

const yearUntillRetirement = (birthyear , firstName ) =>{
    const age = 2024 - birthyear ;
    const retirement = 60 - age ;
    // return retirement 
    return (`I am ${firstName} and I will Retire in ${retirement} years`) ;
}
console.log(yearUntillRetirement(2004 , "adii") );
console.log(yearUntillRetirement(2009 , "abhay") );

*/

/*
// Calling Functions with other Functons 

function cutFruitPieces(Fruit){
    return Fruit * 4 ;
}

function juiceMaker( apples , oranges ){

    const applePieces = cutFruitPieces(apples) ;
    const orangePieces = cutFruitPieces(oranges) ;

    const juice = ` The juice of ${applePieces} pieces of apple and
    ${orangePieces} pieces of orange is ready  ` ;

    return juice ;
}
console.log(juiceMaker( 2 , 5 ) ) ;

*/

/*
const calcAverage = (score1 , score2 , score3 ) =>{        //Arrow funx
    return (score1 + score2 + score3) ;
}
const checkWinner = function(avgDolphins , avgKoalas ){   // function Expx
    if( avgDolphins > (2 * avgKoalas)){
        console.log("Team Dolphins Are The Winners !!! ");
    }
    else if( avgKoalas > (2 * avgDolphins)){
        console.log("Team koalas Are The Winners !!! ");
        
    }
    else{
        console.log("No Team Wins !!! ") ;
    }
}                                   

const avgDolphins = calcAverage(85,54,41) 
const avgKoalas = calcAverage(23,34,27) ;

checkWinner(avgDolphins , avgKoalas ) ;

*/

/*

// ARRAYS : 

const friends = ["john" , "max" , "BoB" ] ;

console.log(friends) ;
console.log(friends[1]);
console.log(friends.length);

friends[1] = 'Rey' ;
console.log(friends)

const years = new Array(2000 ,2004 , 2017 , 2022) ;
console.log(years) ;

const firstName = "Adii" ;
const arr = [firstName , 'jadhav' ,234 - 12 , 'Good' ,friends] ;
console.log(arr) ;
console.log(arr.length) ;

// Exercise :

const calAge2 = function (birthYear){
    return 2024 - birthYear ;
}

const arrYears = [1978 , 1983 , 2009 , 2004 ] ;

const age1 = calAge2(arrYears[0]);
const age2 = calAge2(arrYears[1]);
const age3 = calAge2(arrYears[2]);
const age4 = calAge2(arrYears[arrYears.length - 1]);

console.log(age1 ,age2 , age3 , age4) ;

const ages = [calAge2(arrYears[0]) , calAge2(arrYears[1]) , calAge2(arrYears[2]) , calAge2(arrYears[3])]

console.log(ages) ;

*/

/*
// Operations in Arrays : (methods in array )

const friends = ["john" , "max" , "BoB" ] 

//add elements 
friends.push('addy') ;  // at end 
console.log(friends) ;

friends.unshift('mark'); // at start
console.log(friends) ;

// remove elements 
friends.pop() ;   // from end
friends.pop() ;
console.log(friends) ;

friends.shift();
console.log(friends) ;

// index 
console.log(friends.indexOf('max'));
console.log(friends.indexOf('addy'));

// includes a element or not 
console.log(friends.includes('bob'));
console.log(friends.includes('john'));

*/

/////////////////////////////////////////////////////////////////////////

/*

// Objects 

const jonas = {
    firstName : 'joe' ,
    lastName : 'biden' ,
    age : 2024 - 1968 ,
    job : 'teacher' ,
    friends : ['putin' , 'modiji ' , 11 ] ,
} ;
console.log(jonas) ;

// Dot VS Bracket Notations

console.log(jonas.lastName);    // dot notation
console.log(jonas['age']);      //bracket Notation 

const namekey = 'Name' ;
console.log(jonas['first' + namekey ] ) ;
console.log(jonas['last' + namekey ] ) ;

// console.log(jonas.'last' + namekey ) ;        // ERROR 

// const interestedIn = prompt(' What do you want to know about john ? choose between firstName , lastName , job , age , friends ') ;

// console.log(jonas.interestedIn) ; // Gives undefines 

// console.log(jonas[interestedIn]) ;    // Gives The correct output 

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]) ;
// }else{
//     console.log('Wrong Request ! choose between firstName , lastName , job , age , friends ')
// }

// adding  key-value pairs to the object :

jonas.location = 'america' ;
jonas['home'] = 'White house' ;
jonas['homeNo'] = 28 ;

console.log(jonas) ;


// challenge :
// print : "jonas has 3 friends and his best friend is putin "

console.log(` ${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);
 
*/

/*

// OBjects Methods : 

const Joe = {
    firstName : 'Joe' ,
    lastName : 'biden' ,
    birthYear : 1968 ,
    job : 'teacher' ,
    friends : ['putin' , 'modiji ' , 11 ] ,
    hasDrivingLicense : true ,

    // calAge : function(birthYear){
    //     return 2024 - birthYear ;
    // }


    // calAge : function(){
    //     // console.log(this) ;       // this points to the Joe 
    //     return 2024 - this.birthYear ;
    // }


    calAge : function(){
        this.age = 2024 - this.birthYear ;
        return this.age ;
    } ,

    Summary : function(){
        const summaryInfo =  console.log(` ${Joe.firstName} is a ${Joe.calAge()} year old ${Joe.job} , and he has ${ this.hasDrivingLicense ? 'a' : 'no'} driver's license `) ;

        console.log(summaryInfo) ;
    }

} ;

// console.log(Joe.calAge(1968)) ;
// console.log(Joe['calAge'](1968)) ;


// console.log(Joe.calAge()) ;


console.log(Joe.calAge());
console.log(Joe.age) ;

// challenge 
// " Joe is a 56 year old teacher , and he has a/no driver's License "

Joe.Summary() ;

*/

/*
// challenge : 3

const mark = {
    fullName : 'mark miller',
    mass : 78  ,
    height : 1.69 ,
    
    calcBMI : function(){
       this.markBMI = this.mass / (this.height * this.height) ;
        return this.markBMI ;
    } ,
};
const john = {
    fullName : 'john smith',
    mass : 92  ,
    height : 1.95  ,
    
    calcBMI : function(){
     this.johnBMI = this.mass / (this.height * this.height) ;
        return this.johnBMI ;
    },
    
};

console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is ${this.johnBMI > this.markBMI ? 'higher' : 'lower'} than ${mark.fullName}'s (${mark.calcBMI()})`) ;

*/

//////////////////////////////////////////////////////////////////////////

// lOOps

/*
for(let rep = 1 ; rep <= 10 ; rep++){
    console.log(`lifting weights repetition ${rep} 🏋️`);
}

*/

/*
const Joe = [
    'joe' ,
     'biden' ,
   2024 - 1968 ,
    'teacher' ,
     ['putin' , 'modiji ' , 'macron' ] 
] ;

const types = [] ;

for(let i = 0 ; i< Joe.length ; i++){
    console.log(Joe[i] , typeof Joe[i]) ;

    types.push(typeof Joe[i]) ;

    // types[i] = typeof Joe[i] ;
}
console.log(types) ;


const years = [1999 , 2001 , 2004 , 2014 ] ;
const ages = [] ;

for(let i = 0 ; i<years.length ; i++){
    ages.push( 2024 - years[i] ) ;
}
console.log(ages) ;


// Continue And Break : 


for(let i = 0 ; i<Joe.length ; i++){
    if(typeof Joe[i] !== 'string') continue ;

    console.log(Joe[i] , typeof Joe[i]) ;
}

for(let i = 0 ; i<Joe.length ; i++){
    if(typeof Joe[i] === 'number') break ;

    console.log(Joe[i] , typeof Joe[i]) ;
}

*/

/*

const Joe = [
    'joe' ,
     'biden' ,
   2024 - 1968 ,
    'teacher' ,
     ['putin' , 'modiji ' , 'macron' ] 
] ;

for(let j = Joe.length - 1 ; j>=0 ; j--){         // printing reverse array
    console.log( j ,Joe[j]);                            
}   


for (let exercise = 1 ; exercise < 4 ; exercise++){
    console.log(`------Starting exercise ${exercise}------`)

    for(let rep = 1 ; rep < 5 ; rep++){
        console.log(`Lifting repetition ${rep}`);
    }
}
*/

/*
let euu = 1;
while (euu <= 10) {
  console.log(`euu Number  ${euu}`);
  euu++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(dice);

  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log("------LOOP ENDED------");
  }
}

*/
