function generateRandomHexadecimal() {
    const randomHexadecimal = Math.floor(Math.random() * 0xFFFFFF).toString(16);
    return randomHexadecimal;
}

function gerenrateRandomRGB(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const randomRGB = `rgb(${red} ${green} ${blue})`;
    console.log(randomRGB);
}

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
const stacks = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
const fruits = ['banana', 'orange', 'mango', 'lemon'];
function createNewArray(arr){
    let newArray = []
    for(let i = 0 ; i<= arr.length-1; i++){
        let upperCase = arr[i].toUpperCase();
        newArray.push(upperCase)
    }
    console.log(newArray)
}

function toUpperCaseArray(arr){
    let newArray = arr.map(ele => ele.toUpperCase());
    console.log(newArray);
}

function findArrayElementLength(arr){
    let arraylength = [];
    for(let i = 0 ; i< arr.length ; i++){
        let eachElementlength = arr[i].length;
        arraylength.push(eachElementlength)
    }
    console.log(arraylength);
}

function sliceString(word, startVal, endVal) {
    let newWord = word.slice(startVal, endVal);
    return newWord.toUpperCase();
}

function copyNewarray(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let firstIndex = arr[i];
        let secondIndex = sliceString(arr[i], 0, 3);
        let thirdIndex = arr[i].length;
        let insideArray = [firstIndex, secondIndex, thirdIndex];
        newArray.push(insideArray);
    }
    console.log("New Array : ", newArray);
}

function findSubString(arr, wordToFind){
    let subStringWithWord = [];
    let subStringWithoutWord = [];

    for(let i = 0 ; i <arr.length - 1 ; i++){
        if(arr[i].includes(wordToFind)){
            subStringWithWord.push(arr[i])
        }else{
            subStringWithoutWord.push(arr[i])
        }
    }
    console.log("With SubString Array : ", subStringWithWord);
    console.log("Without Sub string Array : ", subStringWithoutWord)
}

function findBiggestLength(arr){
    if(arr.length === 0){
        console.log("Array is empty");
        return;
    }
    let resultArray = [arr[0]]
    for(let i = 1 ; i <= arr.length-1; i++){
        let wordLength = arr[i].length;
        if(wordLength > resultArray[0].length){
            resultArray = [arr[i]];
        }else if(wordLength === resultArray[0].length){
            resultArray.push(arr[i]);
        }
    }
    console.log(resultArray);
}

function findNoOfCharacter(arr, val){
    let arrayResult = [];
    for(let i = 0 ; i<= arr.length - 1 ; i++){
        if(arr[i].length <= val){
            arrayResult.push(arr[i])
        }
    }
    console.log("Array with least value length",arrayResult)
}


function copyNewarray_1(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let firstIndex = arr[i].toUpperCase();
        let secondIndex = arr[i].length;
        let insideArray = [firstIndex, secondIndex];
        newArray.push(insideArray);
    }
    console.log("New Array : ", newArray);
}

function acronmy(arr){
    let acronymArray = []
    for(let i = 0 ; i <= arr.length - 1 ; i++){
        let firstElement = arr[i][0]
        acronymArray.push(firstElement)
    }
    console.log(acronymArray.join(''))
}

function printArray(arr){
    for(let i = 0 ; i <= arr.length - 1; i++){
        console.log(arr[i]);
    }
}

function reverseArray(arr){
    console.log("*******88reverse********")
    const reversedFruits = [];

    while (arr.length > 0) {
        reversedFruits.push(arr.pop());
    }
    console.log(reversedFruits);
}
const randomHexNumber = generateRandomHexadecimal();
console.log(randomHexNumber);
gerenrateRandomRGB();
createNewArray(countries);
toUpperCaseArray(countries);
findArrayElementLength(countries);
copyNewarray(countries);
findSubString(countries, 'land')
findSubString(countries, 'ia');
findBiggestLength(countries);
findNoOfCharacter(countries, 5);
findBiggestLength(webTechs);
copyNewarray_1(webTechs);
acronmy(mernStack);
printArray(stacks);
reverseArray(fruits)