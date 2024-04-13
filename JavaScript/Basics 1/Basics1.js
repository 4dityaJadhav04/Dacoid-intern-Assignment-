//Line Below is used to print on console 
console.log('Maain hu Giyan ')

let a = 38 ;
console.log(a);

let n = 'Adii'
console.log(n);

let b = true ;
console.log(b);

// const constant = 39 ;
// constant = 55 ;
// console.log(constant)     can not assing a different value 

// Dynamic Typing 

let lastname = 'babbar' ;
console.log(lastname) ;

lastname = 7 ;
console.log(lastname)

let age = 17 ;
let status = (age >= 18) ? 'i can vote ' : 'i can not vote ' ;
console.log(status) ;

let marks = 94 ;

if (marks >= 90){
    console.log('A');
}
else if (marks >= 80){
    console.log('B');
}
else if (marks >= 70){
    console.log('C');
}
else if (marks >= 60){
    console.log('D');
}
else{
    console.log('E')
}

let num = 2 ;

switch(num){
    case 1 : console.log('A');
    break;
    case 2 : console.log('B');
    break ;
    default : console.log('C') ;    

}

for (let i = 0 ; i<5 ; i++){
    console.log("Batman " + i) ;
}