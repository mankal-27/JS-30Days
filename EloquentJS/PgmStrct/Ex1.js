/*
Write a loop that makes seven calls to console.log to output the following triangle:
*/

function loopMe(printValue){
    for(var i = 0; i <= printValue ; i++){
        let printMe = ''
        for(var j = 1; j<= i ; j++){
            printMe += '#';
        }
        console.log(printMe);
    }
}

loopMe(2);