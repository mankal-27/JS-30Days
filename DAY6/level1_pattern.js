function pattern(val){
    for(let i = 0 ; i <= val ; i++){
        console.log("#".repeat(i));
    }
}

function patternWithoutMethod(val){
    for(let i = 0 ; i<= val ; i++){
        let line = '';
        for(let j= 1; j<= i ; j++){
            line = line + "#";
        }
        console.log(line);
    }
}

function printTable(val){
    for(let i = 0 ; i <= val; i++){
        console.log(`${i} * ${i} = ${i * i}`)
    }
}

function printSquareCube(val){
    console.log(`i\ti^2\ti^3`)
    for(let i = 0 ; i <= val ; i++){
        console.log(`${i}\t${Math.pow(i,2)}\t${Math.pow(i, 3)}`)
    }
}

function printEvenOddNo(val){
    console.log("************")
    for(let i = 0 ; i <= val ; i++){
        if(i % 2 === 0){
            console.log("Even number : ", i)
        }else{
            console.log("Odd number : ", i)
        }
    }
    console.log("*****END********")
}

function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2 ; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false
    }
    return true;
}

function printPrimNumber(val){
    console.log("*******start********")
    for(let i = 2; i <= val ; i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
    console.log("**********End********")
}

function sumOfAllNum(num){
    console.log("*******start Sum********")
    let sumResult = 0
    for(let i = 0 ; i<= num ; i++){
        sumResult = sumResult + i
    }
    console.log(sumResult);
    console.log("*******END*******")
}

function sumOfAllEvenOdd(num){
    console.log("*****Even Odd Sum*******")
    let evenSum = 0;
    let oddSum = 0;
    let sumArray = [];
    for(let i = 0 ; i <= num ; i++){
        if(i % 2 === 0){
            evenSum = evenSum + i
        }else{
            oddSum = oddSum + i
        }
    }
    sumArray.push(evenSum, oddSum)
    console.log("Even Sum------: ", evenSum)
    console.log("Odd Sum -----: ", oddSum)
    console.log("Array Sum :", sumArray)
    console.log("*****END********")
}

function randGen(val){
    console.log("*******RandomNum*********")
    let randArray = [];
    for(let i = 0 ; i<= val; i++){
        let randomNum = Math.random();
        randArray.push(randomNum)
    }
    console.log(randArray)
    console.log("*******END**********")
}

function generateUniqueRandomArray(length) {
    const uniqueRandomArray = [];

    while (uniqueRandomArray.length < length) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        if (!uniqueRandomArray.includes(randomNumber)) {
            uniqueRandomArray.push(randomNumber);
        }
    }

    console.log(uniqueRandomArray);
}

function generateNCharacterRandomID(length){
    let uniqueId = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i = 0 ; i<= length ; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        uniqueId = uniqueId + characters.charAt(randomIndex)
    }
    console.log(uniqueId)
}

pattern(5);
patternWithoutMethod(6)
printTable(10);
printSquareCube(10);
printEvenOddNo(100)
printPrimNumber(100)
sumOfAllNum(100);
sumOfAllEvenOdd(100);
randGen(5);
generateUniqueRandomArray(5);
generateNCharacterRandomID(6);