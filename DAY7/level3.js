function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray([...originalArray]);

console.log("Original Array:", originalArray);
console.log("Shuffled Array:", shuffledArray);

function factorial(n) {
    if (n < 0) {
        return "Factorial is undefined for negative numbers";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Example usage:
const number = 5;
const result = factorial(number);

console.log(`Factorial of ${number} is:`, result);

function isEmpty(arr){
    if(arr.length === 0){
        console.log("Array is Empty")
    }else{
        console.log("length of array is : ", arr.length )
    }
}

isEmpty([1.2,3,4,5,6]);
isEmpty([]);

function sumOfArrayItems(arr) {
    // Check if all array items are numbers
    if (!arr.every(item => typeof item === 'number')) {
        return "All array items must be numbers";
    }

    // Calculate the sum of array items
    const sum = arr.reduce((acc, current) => acc + current, 0);
    const avg = sum / arr.length
    return [sum, avg];
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5];
const mixedArray = [1, 'two', 3, 'four', 5];

console.log("Sum of numbersArray:", sumOfArrayItems(numbersArray));
console.log("Sum of mixedArray:", sumOfArrayItems(mixedArray));

function modifyArray(arr) {
    if (arr.length < 5) {
        return 'Item not found';
    }

    // Modify the fifth item (index 4) of the array
    arr[4] = 'Modified Value';

    return arr;
}


console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Google', 'Amazon','Microsoft',  'IBM']));