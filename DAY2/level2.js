/* 
Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
*/

let phrase = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`

console.log(phrase);

/*
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
*/

let phrase2 = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`

console.log(phrase2);

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let num1 = '10'
let num2 = 10;
if(typeof num1 === typeof num2){
    console.log('We are in IF Statement')
    console.log(`typeof num1 is ${typeof num1} and typeof num2 is ${typeof num2}`)
}else{
    console.log('We are in ELSE Statement')
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    console.log(`typeof num1 is ${typeof num1} and typeof num2 is ${typeof num2}`)
    if(num1 === num2) console.log(`num1 is ${num1} and num2 is ${num2}`)   
}

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let floatValue = '9.8';
if(num2 === floatValue){
    console.log('We are in IF Statement')
    console.log(`typeof floatValue is ${typeof floatValue}`)
    console.log('Both Values are Equal')
}else{
    console.log("we are in else statement")
    floatValue = parseInt(floatValue)
    floatValue = Math.ceil(floatValue)
    console.log(`floatValue is ${floatValue} and num2 is ${num2}`)
}

//Check if 'on' is found in both python and jargon

let word1 = 'python';
let word2 = 'jargon';
if(word1.includes('on') && word2.includes('on')){
    console.log("Yes On is Present For Both Python and Jargon")
}

//I hope this course is not full of jargon. Check if jargon is in the sentence.

let sent1 = 'I hope this course is not full of jargon.'
if(sent1.includes('jargon')){
    console.log("Yes Jargon is Present For Sentence")
}else{
    console.log("No Jargon is Present For Sentence")
}

//Generate a random number between 0 and 100 inclusively.

let randomNum = Math.floor(Math.random() * 100)
console.log(`randomNum is ${randomNum}`);

//Generate a random number between 50 and 100 inclusively.

let randomNum2 = Math.floor(Math.random() * 50) + 51
console.log(`randomNum2 is ${randomNum2}`);

//Generate a random number between 0 and 255 inclusively.

let randomNum3 = Math.floor(Math.random() * 255)
console.log(`randomNum3 is ${randomNum3}`);

//Access the 'JavaScript' string characters using a random number.

let js = 'JavaScript'
let randomNum4 = Math.floor(Math.random() * js.length -1);
console.log(`randomNum4 is ${randomNum4}`);

/* 
Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125

*/

let pattern = function(){
    for (let i = 1; i <= 5; i++) {
        let row = `${i} `;
        //row = `${1};`
        for (let j = 1; j <= 3; j++) {
            row += `${Math.pow(i, j)} `;
        }
        console.log(row);
    }
    
}
pattern();

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

let phrase3 = 'You cannot end a sentence with because because because is a conjunction'
let phrase4 = phrase3.substr(phrase3.indexOf('because',1), phrase3.length)
console.log(`phrase4 is ${phrase4}`);