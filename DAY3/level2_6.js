const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate the number of seconds in a given number of years
function calculateSecondsInYears(years) {
  const secondsInMinute = 60;
  const minutesInHour = 60;
  const hoursInDay = 24;
  const daysInYear = 365;

  const secondsInYear = secondsInMinute * minutesInHour * hoursInDay * daysInYear;

  return years * secondsInYear;
}

// Prompt user for the number of years
rl.question('Enter the number of years: ', (yearsInput) => {
  // Convert input to a number
  const years = parseFloat(yearsInput);

  if (isNaN(years)) {
    console.log('Please enter a valid number for the number of years.');
  } else {
    // Calculate and display the number of seconds
    const seconds = calculateSecondsInYears(years);
    console.log(`A person can live approximately ${seconds} seconds in ${years} years.`);
  }

  // Close the interface
  rl.close();
});
