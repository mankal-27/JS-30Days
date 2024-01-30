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

var emptyArray = Array();
var emptyArray1 = [];
var arrayWithFiveEle = Array(5).fill("x");
console.log(arrayWithFiveEle)
var array_1 = [1,2,3,4,5,6,7];
console.log("Length Of Countries", countries.length);
var firstElement = countries[0];
var lastElement = countries[countries.length-1];
var middle = Math.floor(countries.length / 2);
var middleElement = countries[middle]
console.log("First Element : ", firstElement);
console.log("last Element : ", lastElement);
console.log("Middle Element : ", middleElement)

var mixedDataTypes = [1, 2,3,"Manjunath", [1,2,3], "Kalkutagi"];

var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"]
console.log(itCompanies);
console.log("The Number of comapnies in ITcompanies array ", itCompanies.length);
var middleItCompany = itCompanies[Math.floor(itCompanies.length /2) ];
var firstEleItCompany = itCompanies[0];
var lastEleItCompany = itCompanies[itCompanies.length - 1]

console.log("First element for It company ", firstEleItCompany);
console.log("Last Element of the It company ", lastEleItCompany);
console.log("Middle Element of the It Company ", middleItCompany)

itCompanies.forEach(element => {
    console.log(element);
});

itCompanies.forEach(element => {
    console.log("Upper Case for Each Company ", element.toUpperCase());
})

var arrayToString = itCompanies.toString()
console.log(`${arrayToString} are big IT companies`);

function includesArray(arr, val) {
    return arr.includes(val)
}

console.log(includesArray(itCompanies, "Google"))

//Filter out companies which have more than one 'o' without the filter method

function filterCompany(comp, word){
    const filteredCompanies = [];
    for(let i = 0 ; i < comp.length ; i++){
        let count = 0 ;
        for(let j = 0 ; j < comp[i].length; j++){
            if(comp[i][j].toLowerCase() === word){
                count++;
            }
        }
        if(count > 1){
            filteredCompanies.push(comp[i])
        }
    }
    return filteredCompanies
}

console.log(filterCompany(itCompanies, "o"));

var sortedArray = itCompanies.sort();
console.log("Before Sort ", itCompanies);
console.log("After Sort ", sortedArray)
var reversedArray = itCompanies.reverse();
console.log("Before Reverse ", itCompanies);
console.log("After Reverse ", reversedArray);

var sliceFirstThree = itCompanies.slice(0,3);
console.log(sliceFirstThree)
var lastThreeSlice = itCompanies.slice(-3);
console.log(lastThreeSlice);

//Remove the first IT company from the array

var newItCompany = itCompanies.shift()
console.log("Remove First Element", itCompanies)
var lastItCompany = itCompanies.pop()
console.log("Last element removed ", itCompanies);

const middleIndex = Math.floor(itCompanies.length / 2);
const isOddLength = itCompanies.length % 2 !== 0;

// Remove the middle IT company or companies
if (isOddLength) {
    // If the array has odd length, remove one company
    itCompanies.splice(middleIndex, 1);
} else {
    // If the array has even length, remove two companies
    itCompanies.splice(middleIndex - 1, 2);
}

console.log("Middle Element ", itCompanies)

//Remove the last IT company from the array

function removeElement(arr){
    arr.splice(0, arr.length)
    return arr
}

console.log("All removed arr",removeElement(itCompanies))