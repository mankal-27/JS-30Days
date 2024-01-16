//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = '30 Days Of JavaScript';

//2. Print the string on the browser console using console.log()

console.log(challenge);
// 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);
//4. Change all the string characters to capital letters using toUpperCase() method
let challengeUpperCase = challenge.toUpperCase();
console.log(`challengeUpperCase is ${challengeUpperCase}`);
//5. Change all the string characters to lowercase letters using toLowerCase() method

let challengeLowerCase = challenge.toLowerCase();
console.log(`challengeLowerCase is ${challengeLowerCase}`);

//6. Cut (slice) out the first word of the string using substr() or substring() method
let cutSliceFirstWord = challenge.substr(0,2);
console.log(`cutSliceFirstWord is ${cutSliceFirstWord}`);

//7 Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let cutSliceLastWord = challenge.substring(3, challenge.length );
console.log(`cutSliceLastWord is ${cutSliceFirstWord} ${cutSliceLastWord}`);

//Check if the string contains a word Script using includes() method

let includesWord = challenge.includes('Script');
console.log(`includesWord is ${includesWord}`);

//Split the string into an array using split() method

let splitString = challenge.split('');
console.log(`splitString is ${splitString}`);
console.log(`splitString is ${typeof splitString}`)

//Split the string 30 Days Of JavaScript at the space using split() method

let splitStringSpace = challenge.split(' ');
console.log(`splitStringSpace is ${splitStringSpace}`);
console.log(`splitStringSpace is ${typeof splitStringSpace}`)

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let splitStringComma = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let splitStringCommaArray = splitStringComma.split(',');
console.log(`splitStringCommaArray is ${splitStringCommaArray}`);

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

let replaceString = challenge.replace('JavaScript', 'Python')
console.log(`replaceString is ${replaceString}`);

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

let charAtIndex15 = challenge.charAt(15);
console.log(`charAtIndex15 is ${charAtIndex15}`);

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

let charCodeAtIndex15 = challenge.charCodeAt(15);
console.log(`charCodeAtIndex15 is ${charCodeAtIndex15}`);

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

let indexOfA = challenge.indexOf('a', 1);
console.log(`indexOfA is ${indexOfA}`);

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

let lastIndexOfString = challenge.lastIndexOf('a');
console.log(`lastIndexOfString is ${lastIndexOfString}`);

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let indexOfWord = 'You cannot end a sentence with because because because is a conjunction'
let indeOfWordIndex = indexOfWord.indexOf('because', 1)
console.log(`indeOfWordIndex is ${indeOfWordIndex}`);

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let lastIndexOfWord = indexOfWord.lastIndexOf('because');
console.log(`lastIndexOfWord is ${lastIndexOfWord}`);

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let searchOfWord = indexOfWord.search('because', 1);
console.log(`searchOfWord is ${searchOfWord}`);

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

let trimWord = indexOfWord.trim();
console.log(`trimWord is ${trimWord}`);

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true

let startsWithWord = challenge.startsWith('30');
console.log(`startsWithWord is ${startsWithWord}`);

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
let lastWord = challenge.charAt(challenge.length - 1)
console.log(`lastWord is ${lastWord}`);
let endsWithWord = challenge.endsWith(lastWord);
console.log(`endsWithWord is ${endsWithWord}`);


//Use match() method to find all the a’s in 30 Days Of JavaScript

let matchA = challenge.match(/a/gi);
console.log(`matchA is ${matchA}`);

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let string1 = '30 Days of' 
let string2 = 'JavaScript'
let conCatString = string1.concat(string2);
console.log(`Concat string is ${conCatString}`);

//Use repeat() method to print 30 Days Of JavaScript 2 times

let repeatString = challenge.repeat(2);
console.log(`repeatString is ${repeatString}`);