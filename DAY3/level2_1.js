const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pi = 3.14;

function calculateCircleArea(radius){
    return pi * (Math.pow(radius,2))
}

function calculateCircumference(radius){
    return 2 * pi * radius;
}

function getChoice(){rl.question("Enter Choice : ", (choice) => {
    if(choice.toLowerCase() === 'circle'){
        rl.question("Enter the Radius: " ,(radiusInput) => {
            const radius = parseFloat(radiusInput)

            if(isNaN(radius)){
                console.log("Please Enter proper Radius vakue");
            }else{
                const circleArea = calculateCircleArea(radius)
                console.log(`The area of circle is ${circleArea}`)
            }
            rl.close()
        })
    }else if (choice.toLowerCase() === 'circumference'){
        rl.question("Enter the Radius: " ,(radiusInput) => {
            const radius = parseFloat(radiusInput)

            if(isNaN(radius)){
                console.log("Please Enter proper Radius vakue");
            }else{
                const circleArea = calculateCircleArea(radius)
                console.log(`The area of circle is ${circleArea}`)
            }
            rl.close()
        })
    }else{
        console.log("Please Enter proper choice");
        getChoice();
    }
})}

getChoice();