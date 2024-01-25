/*
Write a function min that takes two arguments and returns their minimum.
*/

function min(a,b){
    if(a < b){
        return a;
    }else{
        return b;
    }
}

console.log(min(2,5))
console.log(min(0,-10))