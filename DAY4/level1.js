/*
Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
*/

const readline = require("readline");

const rl = readline.Interface({
    input: process.stdin,
    output:process.stdout
})

function compareAge(myAge, yourAge){
    let diff = Math.abs( myAge - yourAge )
    if(diff > 0){
        return console.log(`You are ${diff} year's younger to me`)
    }else if(diff < 0){
        return console.log(`You are ${diff} year's elder to me`)
    }else{
        return console.log("we are same age")
    }
}

rl.question("Enter Your Age : ", (yourAge) => {
    rl.question("Enter My age : ", (myAge) => {
        const yAge = parseFloat(yourAge);
        const mAge = parseFloat(myAge)

        if(isNaN(yAge) || isNaN(mAge)){
            console.log("Please Enter Proper Age Value");
            rl.close();
        }else{
            compareAge(mAge, yAge)
            rl.close();
        }
    })
})