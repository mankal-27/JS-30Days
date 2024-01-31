function linearEquation(a, b, x, y, c) {
    let xValue = -((b * y) / a) - (c / a);
    let yValue = -((a * x) / b) - (c / b);
    console.log("X value:", xValue);
    console.log("Y value:", yValue);
}

// Example usage:
linearEquation(2, 3, 4, 5, 6);


function solveQuadEquation(a,b,c){
    const discriminant = b*b - 4 * a * c;

    if(discriminant > 0 ){
        const root1 = (-b + Math.sqrt(discriminant))/(2 * a)
        const root2 = (-b - Math.sqrt(discriminant))/(2 * a)
        return [root1, root2]
    } else if( discriminant === 0){
        const root = -b / (2 * a);
        return [root];
    } else {
        const realPart = -b / (2 * a);
        const imgPart = Math.sqrt(Math.abs(discriminant))/ (2 / a);
        return [`${realPart} + ${imgPart}i`, `${realPart} - ${imgPart}i`]; 
    }
}

const roots = solveQuadEquation(1,3,-2);
console.log("Roots of the quadratic equation : ", roots)
console.log("Roots of the quadratic equation : ",solveQuadEquation()) // {0}
console.log("Roots of the quadratic equation : ",solveQuadEquation(1, 4, 4)) // {-2}
console.log("Roots of the quadratic equation : ",solveQuadEquation(1, -1, -2)) // {2, -1}
console.log("Roots of the quadratic equation : ",solveQuadEquation(1, 7, 12)) // {-3, -4}
console.log("Roots of the quadratic equation : ",solveQuadEquation(1, 0, -4)) //{2, -2}
console.log("Roots of the quadratic equation : ",solveQuadEquation(1, -1, 0)) //{1, 0}

function swapMe(x,y){
    let temp = x;
    x = y;
    y = temp;
    return [x,y]
}

function swapMeWithoutTemp(x,y){
    //x = 3 y = 4
    x = x + y // x = 3 + 4 = 7
    y = x - y // y = 7 - 4 = 3
    x = x - y // x = 3 + 1 = 4
    return [x,y];
}

console.log(swapMe(3,4));
console.log(swapMeWithoutTemp(3,4));

function reverseArray(arr){
    let newArray = []
    while(arr.length > 0){
        newArray.push(arr.pop())
    }
    console.log(newArray)
}

reverseArray([1, 2, 3, 4, 5])
reverseArray(['A', 'B', 'C'])