var i = 0;

while(true){
    if(i <= 9){
        //console.log(i);
        i = i + 1;
    }else{
        break;
    }
}

for(i = 0 ; i<= 9; i++){
    //console.log(i);
}

function printAmount(amt){
    console.log(amt.toFixed(2));
}

function formatAmount(){
    return "$" + amount.toFixed(2);
}
var amount = 99.99;

printAmount(amount * 2);

amount = formatAmount();
console.log(amount);

const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt){
    amt = amt + (amt * TAX_RATE);
    return amt;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount(amount);
console.log(amount.toFixed(2));