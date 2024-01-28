/* Reverse Array */

//With method
function reverseArray(arr){
    const reversedArray = arr.slice().reverse()
    return reversedArray
}

//Reverse using a loop

function reverseArrayLoop(arr){
    let finalArray = [];
    
    for(let i = 0 ; i <arr.length; i++){
        finalArray.push(arr[i])
    }
    for(let i = 0 ; i < arr.length; i++){
        arr[i] = finalArray.pop();
    }
    return arr
}

function reverseArrayWithShift(arr, start=0, end=arr.length-1){
    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }
    return arr;
}

let array1 = [1,2,3,4,5,6,7];
console.log("----Before Reverse------11--", array1);
let result1 = reverseArray(array1);
console.log("-----After Reverse------11--", result1);
let array2 = [3,4,5,6,7,8,9];
console.log("-----Before Reverse-------222-", array2);
let result2 = reverseArrayLoop(array2);
console.log("----After REverse--------2222", result2);
let array3 = ["A", "B", "C"];
console.log("33333333",reverseArray(array3));
console.log("4444444", reverseArrayLoop(array3));
console.log("5555555555", reverseArrayWithShift(array1));