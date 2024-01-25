/*
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
*/

function countBs(word){
    var counter = 0
    for(let i = 0 ; i <= word.length-1; i++){
        let wordMatch = word[i]
        if(wordMatch === "B"){
            counter = counter + 1;
        }
    }   
    return counter
}

function countChar(word, wordchar){
    var counter = 0
    for(let i = 0 ; i <= word.length-1; i++){
        let wordMatch = word[i]
        if(wordMatch === wordchar){
            counter = counter + 1;
        }
    }   
    return counter
}

function countBsMap(word){
    const counter = {}
    for(let i = 0 ; i<word.length-1; i++){
        let char = word[i];
        if(char === "B"){
            counter[char] = (counter[char] || 0) + 1;
        }
    }
    return counter;
}

function frequencyCounter(word){
    let freqCnt = {}
    for(let i = 0 ; i < word.length-1; i++){
        let character = word[i];
        freqCnt[character] = (freqCnt[character] || 0) + 1;
    }
    return freqCnt;
}
console.log(countBs("BBS"))
console.log(countChar("kakkerlak", "k"));
console.log(countBsMap("BBS"));
console.log(frequencyCounter("Manjunath"));