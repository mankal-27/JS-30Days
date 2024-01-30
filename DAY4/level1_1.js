/*
If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.

*/

function ifelseStatement(a,b){
    if(a > b){
        return console.log('a is greater than b');
    }else{
        return console.log('a is less than b');
    }
}

function ternaryStatement(a,b){
   return a > b ? console.log('a is greater than b') : console.log('a is less than b')
}


ifelseStatement(5,6);
ternaryStatement(8,6);

/*
Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
*/

function isDivisibleByTwo(num){
    if(num % 2 === 0){
        return console.log(`${num} is an Even Number`)
    }else{
        return console.log(`${num} is an odd number`)
    }
}

isDivisibleByTwo(10)