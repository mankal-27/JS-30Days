//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

var readline = require("readline")

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

function ratePerHour(hour, rate){
    return rate * hour
}

rl.question("Enter Hours : ", (Hours) => {
    rl.question("Enter Rate pe hour : ", (Rate) => {
        const hour = parseFloat(Hours);
        const rate = parseFloat(Rate);

        if(isNaN(hour) || isNaN(rate)){
            console.log("Please enter Proper value")
            rl.close()
        }else{
            const rateInRupee = ratePerHour(hour, rate)
            console.log(`Rate Per hour ${rateInRupee}`)
            rl.close()
        }
    })
})