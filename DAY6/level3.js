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

var countriesToCopy = [...countries];
console.log("Original Countries : ", countries)
countriesToCopy.push("India");
console.log("Copy of countries : ", countriesToCopy)

function sortedArray(arr) {
    const arrCopy = arr.slice();

    // For string arrays, use localeCompare for correct string sorting
    arrCopy.sort((a, b) => a.localeCompare(b));

    return arrCopy;
}


let sortMe =  sortedArray(countriesToCopy)
console.log("Before Sort : ", countriesToCopy)
console.log("After Sort : ", sortMe)
console.log("Before Sort : ", webTechs);
console.log("After Sort : ", sortedArray(webTechs));
console.log("Before Sort : ", mernStack);
console.log("After Sort : ", sortedArray(mernStack));