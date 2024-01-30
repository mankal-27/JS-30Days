// Equation: y = 2x - 2

// Coefficients
const slope = 2; // m
const yIntercept = -2; // b

// Function to calculate x-intercept
function calculateXIntercept() {
  return -yIntercept / slope;
}

// Display results
console.log(`Equation: y = ${slope}x + ${yIntercept}`);
console.log(`Slope (m): ${slope}`);
console.log(`Y-Intercept (b): ${yIntercept}`);
console.log(`X-Intercept: (${calculateXIntercept()}, 0)`);

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

function calculateSlope(x1,x2,y1,y2){
    const yIntercept = y2-y1;
    const xIntercept = x2-x1;
    const slope = yIntercept / xIntercept;
    return slope;
}

console.log(calculateSlope(2,2,6,10))

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

function calculateEquation(x){
    var equ = Math.pow(x,2) + 6*x + 9
    return equ;
}

console.log(calculateEquation(-3))