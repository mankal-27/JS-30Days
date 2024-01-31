const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log("Before Sort ", ages)
var sortedAges = ages.sort((a, b) => a - b);
console.log("After Sort ", sortedAges)
var minAge = sortedAges[0];
var maxAge = sortedAges[sortedAges.length - 1];
console.log("Minimum Value : ", minAge);
console.log("Maximum Value : ", maxAge)

var medianAge;
var middleIndex = Math.floor(sortedAges.length / 2);

if(sortedAges.length % 2 === 0){
    medianAge = (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2
}else{
    medianAge = sortedAges[middleIndex]
}

console.log("Meddian Age : ", medianAge);

function sum(arr){
    let sumValue = 0
    for(var i = 0 ; i<= arr.length-1 ; i++){
        sumValue = sumValue + arr[i]
    }
    return sumValue
}
var sumss = sum(sortedAges)
console.log("-------ss========", sumss)
var avgAge = sumss/ sortedAges.length
console.log("Average sum of All ages : ", avgAge)

var range = maxAge - minAge;
console.log("Range of age : ", range)