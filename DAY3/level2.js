const readline = require('readline');
//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

//let base = prompt("Enter Base: ")
//let height = prompt("Enter Height: ")
//let area = 0.5 * base * height;
//console.log("Area of Triangle is: " + area);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

function calculatePerimeter(a,b,c){
        return a + b + c;
}

rl.question('Enter the lenght of side a:', (a) => {
    rl.question('Enter the length of side b:', (b) => {
        rl.question('Enter the length of side c :', (c) => {
            const sideA = parseFloat(a);
            const sideB = parseFloat(b);
            const sideC = parseFloat(c);

            if(isNaN(sideA) || isNaN(sideB) || isNaN(sideC)){
                console.log("Please Provide Proper Valid Number for side length");
            }else{
                const perimeter = calculatePerimeter(sideA,sideB,sideC)
                console.log(`The Perimeter of the triangle is ${perimeter}`);
            }
            rl.close();
        })
    })
})

rl.question("Enter the Length", (l) =>{
    rl.question("Enter the width", (b) => {
        const length = parseFloat(l)
        const width = parseFloat(b);

        const area = length * width * perimeter;
    })
})