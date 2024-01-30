var countries = require("./countries");
var webTechs = require("./web_techs");

function checkEle(arr, ele) {
    if(arr.includes(ele)){
        return console.log("Element is present in arary")
    }else{
        return console.log("Nope not present")
    }
}

checkEle(countries, "Ethi")

function checkElement(arr, ele) {
    if(arr.includes(ele)){
        return console.log(`${ele} is a CSS preprocess `)
    }else{
        arr.push(ele);
        return console.log(arr)
    }
}

checkElement(webTechs, "Sass");

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
var fullStack = frontEnd.concat(backEnd)
console.log(fullStack)