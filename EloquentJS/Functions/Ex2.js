/* Recursive function */

function isEven(val){
    if(val < 0){
        val = -val;
    }
    if(val === 0){
        return true
    }else if(val === 1){
        return false
    }
    else {
        return isEven(val - 2);
    }
}

// function isEven(number) {
//     // Ensure the input is a non-negative integer
//     if (number < 0) {
//       number = -number;
//     }
  
//     // Base case: if the number is 0, it's even
//     if (number === 0) {
//       return true;
//     }
//     // Base case: if the number is 1, it's odd
//     else if (number === 1) {
//       return false;
//     }
//     // Recursive case: check if the number modulo 2 is 0
//     else {
//       return isEven(number % 2 === 0 ? number : number - 1);
//     }
//   }
  
  // Example usage:
console.log(isEven(8));  // Output: true
console.log(isEven(7));  // Output: false
  
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(0));
console.log(isEven(1));
