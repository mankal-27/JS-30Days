const readline = require("readline");

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

function calculateAgeForDriving(year){
    let date = new Date()
    let thisYear = date.getFullYear()
    const ageDiff = thisYear - year
    if(ageDiff > 18){
        return console.log(`You are ${ageDiff}. You are old enough to drive`)
    }else{
        const dueage = 18 - ageDiff
        return console.log(`You are ${ageDiff}. You will be allowed to drive after ${dueage} years.`)
    }
}

rl.question("Enter Your Birth year : ", (birthYear) => {
    const byear = parseFloat(birthYear)
    calculateAgeForDriving(byear);
    rl.close();
})