const { parse } = require('path')
const readline = require('readline')

const rl = readline.Interface({
    input : process.stdin,
    output: process.stdout
})

function calculateLength(word){
    if(word.length > 7){
        return console.log("Your name is long")
    }else{
        return console.log("Your name is short")
    }
}

function compareLength(fs,ls){
    if(fs.length > ls.length){
        return console.log(`Your First Name, ${fs} is longer than your family name ${ls}`)
    }else{
        return console.log(`Your First Name, ${fs} is Shorter than your family name ${ls}`)
    }
}

rl.question("Enter Your First name : ", (firstName) =>{
    rl.question("Enter Your last name : ", (lastname) => {
        let result = compareLength(firstName, lastname)
        rl.close();
    })
})