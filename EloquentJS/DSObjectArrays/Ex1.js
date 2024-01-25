/* Range Function */

function range(start, end){
    var numFromStartTillEnd = []
    for(let i = start; i <= end; i++){
        numFromStartTillEnd.push(i)
    }
    return numFromStartTillEnd
}

function sum(arrayValues){
    let finalResult = 0
    for(let i = 0 ; i <= arrayValues.length-1 ; i++){
        finalResult = finalResult + arrayValues[i]
    }
    return finalResult;
}

function middleOrderSum(arrayValues){
    let finalResult = 0;
    for(let eachValue of arrayValues){
        finalResult = finalResult + eachValue
    }
    return finalResult;
}
function higherOrderSum(arrayValues){
    let finalResult = 0
    arrayValues.forEach(element => {
        finalResult = finalResult + element
    });
    return finalResult;
}

let numList = range(1,10);
let normalSum = sum(numList);
let middleSum = middleOrderSum(numList)
let higherSum = higherOrderSum(numList)
console.log("NormalSum Funtion", normalSum);
console.log("Middle Oder Sum", middleSum);
console.log("Higher Order Sum", higherSum);