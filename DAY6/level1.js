//Iterate 0 to 10 using for loop, do the same using while and do while loop

function iterateFnFor(val){
    console.log("********ForLoop*******")
    for(let i = 0 ; i <= val ; i++){
        console.log(i)
    }
    console.log("*****End********")
}

function iterateFnForRev(val){
    console.log("********ForLoop*******")
    for(let i = val ; i >= 0 ; i--){
        console.log(i)
    }
    console.log("*****End********")
}


function iterateFnWhile(val){
    console.log("********WhileLoop*******")
    let i = 0;
    while(i<=val){
        console.log(i)
        i++
    }
    console.log("******End*******8")
}


function iterateFnWhileRev(val){
    console.log("********WhileLoop*******")
    let i = val;
    while(i>=0){
        console.log(i)
        i--
    }
    console.log("******End*******8")
}

function iterateFnDoWhile(val){
    console.log("*******DOWhileLoop********")
    let i = val;
    do{
        console.log(i)
        i--;
    }while(i >= 0)
    console.log("*****END******")
}

function iterateToNFor(n){
    console.log("******Iterate Till N*******")
    for(let i = 0 ; i<=n ; i++){
        console.log(i)
    }
    console.log("********End********")
}
iterateFnFor(5);
iterateFnWhile(5);
iterateFnDoWhile(5);
iterateFnForRev(5)
iterateFnWhileRev(5)
iterateToNFor(100);