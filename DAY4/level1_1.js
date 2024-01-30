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