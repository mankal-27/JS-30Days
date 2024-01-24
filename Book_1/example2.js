/* 
Write a program to calculate the total price of your phone pur‐
chase.
*/

const TAX_RATE = 0.08;
const PHONE_PRICE = 10000;
const ACCESSORY_PRICE = 2500;
var bankAccountBalance = 50000;
var spendingThreshold = 40000;
var amount = 0;
console.log('1------', amount)
function calculateTax (){
    return amount * TAX_RATE;
}

function formatAmount(amount){
    console.log( `Phone Bought at this Price: $${amount}`)
}

while(amount < bankAccountBalance){
    amount = amount + PHONE_PRICE;
    if(amount < spendingThreshold){
        amount = amount + ACCESSORY_PRICE;
    }
}

amount = amount + calculateTax( amount );
console.log('22222------', amount)
formatAmount(amount);

if(amount > bankAccountBalance){
    console.log(`You can't afford this purchase`);
}