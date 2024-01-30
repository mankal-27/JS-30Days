/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/

const readline = require("readline");

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

function seasonPredict(season){
    if(['September', 'October', 'November'].includes(season) ){
        return console.log("The Season is Autumn")
    } else if(['December', 'January', 'February'].includes(season)){
        return console.log("The Season is Winter")
    } else if(['March', 'April', 'May'].includes(season)){
        return console.log("The Season is Spring")
    } else if(['June', 'July', 'August'].includes(season)){
        return console.log("The Season is Summer")
    } else {
        return console.log("Please Provide Proper Month Name")
    }
}

function seasonPred(season){
    const autumnMonth = ['September', 'October', 'November'].map(month => month.toLowerCase());
    const winterMonth = ['December', 'January', 'February'].map(month => month.toLowerCase());
    const springMonth = ['March', 'April', 'May'].map(month => month.toLowerCase());
    const summerMonth = ['June', 'July', 'August'].map(month => month.toLowerCase());
    if(autumnMonth.includes(season) ){
        return console.log("The Season is Autumn")
    } else if(winterMonth.includes(season)){
        return console.log("The Season is Winter")
    } else if(springMonth.includes(season)){
        return console.log("The Season is Spring")
    } else if(summerMonth.includes(season)){
        return console.log("The Season is Summer")
    } else {
        return console.log("Please Provide Proper Month Name")
    }

}

rl.question("Please Enter the Month To Check For Season : ", (month) => {
    let monthToCheck = month.toLowerCase();
    seasonPred(monthToCheck)
    rl.close();
})
