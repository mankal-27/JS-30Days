/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/


function fizzBuzz(numValue){
    for(var i = 0 ; i<= numValue; i ++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz', i);
        }
        else if(i % 3 === 0){
            console.log('Fizz', i);
        }else if(i % 5 === 0){
            console.log('Buzz', i);
        }else{
            console.log(i);
        }
    }
}

fizzBuzz(100);