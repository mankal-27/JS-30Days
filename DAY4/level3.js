/* 
Write a program which tells the number of days in a month.
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(month, year) {
    const jsMonth = month - 1;
    
    if (month === 2 && isLeapYear(year)) {
        return 29; // February in a leap year
    }

    const lastDay = new Date(year, jsMonth + 1, 0).getDate();

    return lastDay;
}

rl.question("Enter the month (1-12): ", (monthInput) => {
    rl.question("Enter the year: ", (yearInput) => {
        const month = parseInt(monthInput);
        const year = parseInt(yearInput);

        if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
            console.log("Please enter valid month and year values.");
        } else {
            const daysInMonth = getDaysInMonth(month, year);
            console.log(`The number of days in ${month}/${year} is: ${daysInMonth}`);
        }

        rl.close();
    });
});
