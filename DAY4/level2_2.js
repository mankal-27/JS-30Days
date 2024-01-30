/*
Check if a day is weekend day or a working day. Your script will take day as an input.
*/
const readline = require("readline")
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})
function checkDay(dayPassed){
    let workingDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    workingDay = workingDay.map(eachDay => eachDay.toLowerCase());
    let weekendDay = ['Saturday', 'Sunday'];
    weekendDay = weekendDay.map(eachDay => eachDay.toLowerCase());

    if(workingDay.includes(dayPassed)){
        return console.log(`${dayPassed} is a Working Day.`)
    }else if(weekendDay.includes(dayPassed)){
        return console.log(`${dayPassed} is a Weekend.`)
    } else{
        return console.log("Please Provide Proper Day to check")
    }
}

rl.question("Please Enter The Day to check : ", (dayToCheck) => {
    let checkTheDay = dayToCheck.toLowerCase();
    checkDay(checkTheDay);
    rl.close();
})