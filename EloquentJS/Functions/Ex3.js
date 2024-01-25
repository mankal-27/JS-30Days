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
console.log(countBs("BBS"))
console.log(countChar("kakkerlak", "k"));