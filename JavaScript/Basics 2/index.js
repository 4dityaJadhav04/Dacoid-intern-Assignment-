console.log("chaliye shuru krte hai ");

// Create a object : 

// let rectangle = {
//     length: 10 ,
//     breadth: 7 ,

//     draw: function(){
//         console.log('Drawing a rectangle');
//     }
// };

// Factory Function : 

// function createFunction( l , b){
//     return rectangle = {
//         length: l  ,
//         breadth: b ,
    
//         draw: function(){
//             console.log('Drawing a rectangle');
//         }
//     };
// }
// let rectangleobj1 = createFunction(5,4) ;
// let rectangleobj2 = createFunction(15,12) ;
// let rectangleobj3 = createFunction(8,9) ;

// constructor Function :

// its role is to prop/methods -> initialize 

// function Rectangle(len , bre ) {
//     this.length = len ;
//     this.breadth = bre ;
//     this.draw = function(){
//         console.log("Drawing a rectangle");
//     }
// }

// let rectangleobj1 = new Rectangle(50,40) ;

// dynamic Namture of objects : we can add and remove the properties
// rectangleobj1.color = 'yellow ' ;  // adding a prop
// console.log(rectangleobj1) ;

// delete rectangleobj1.color ;    // removing a prop 
// console.log(rectangleobj1) ;

// Console Code : 
// rectangleobj1.constructor 
     // -> 
//  Rectangle(len , bre ) {
//     this.length = len ;
//     this.breadth = bre ;
//     this.draw = function(){
//         console.log("Drawing a rectangle");
//     }
// }

// in case of primitives : 
// let a = 10 ;
// let b = a ;

// a++ ;
// console.log(a);
// console.log(b);

// in case of reference : yaha b mai a ka address jayega so dono ek hii block ko point krenge .

// let a = {
//     value : 10 ,
// }
// let b = a ;
// a.value++ ;
// console.log(a.value);
// console.log(b.value);


// call by value : 

// let a = 10 ;
// function inc(a){
//     a++ ;
// }                                     // a ke copy mai value increment hogi 
// inc(a) ;
// console.log(a) ;

// call by reference 

// let a = {
//     value : 10 ,
// };
// function inc(a){
//     a.value++ ;
// }
// inc(a) ;
// console.log(a);


// let rectangle = {
//     length : 10 ,
//     breadth : 12 ,
// };
// For in LOOP : 

// for(let key in rectangle ){
//     console.log(key , rectangle[key]);   // key-value pair
//     console.log(key );                     // key 
//     console.log(rectangle[key]);           // value 
// }

// For Of LOOP : 
// for(let key of Object.entries(rectangle)){                // To print keys we can use key in place of entries .
//     console.log(key) ;
// }

// koi property exists krti hai ya nhi : 
// if('color' in rectangle){
//     console.log('Present') ;

// }
// else{
//     console.log("Absent") ;
// }

// CLONING in OBJECTS : 

// 1. iteration : 

// let src = { value: 10 } ;
// let dest = {} ;

// for(let key in src ){
//     dest[key] = src[key] ;
// }

// 2. Assign : 

// let src={ value : 12 };
// let dest = Object.assign({} , src) ;

// 3.Spread : 

let src= { 
    value1 : 15,
    value2 : 16,
    value3 : 17,
        } ;
let dest = {...src};