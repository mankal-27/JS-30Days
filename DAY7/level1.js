const pi = 3.14;

function fullName(firstName, lastName){
    return console.log(`Hi My Name is ${firstName} ${lastName}`)
}

function addNumbers(a,b){
    return a + b;
}

function areaOfRectangle(length, width){
    if(isNaN(length) || isNaN(width)) return 0
    else{
        let area = length * width
        return area;
    }
}

function perimeterOfRectangle(length, width){
    if(isNaN(length) || isNaN(width)) return 0
    else{
        let area = 2 * (length + width);
        return area;
    }
}

function volumeOfRectPrism(length, width, height){
    return (length * width * height)
}

function areaOfCircle(radius){
    return pi * (Math.pow(radius, 2))
}

function circumference(radius){
    return 2 * pi * radius
}

function density(mass, volume){
    return mass/volume;
}

function bmi(weight, height){
    let result = weight / (height * height)
    if(result < 18.5){
        console.log("underweight".toUpperCase())
    }else if(result > 18.5 && result < 24.9){
        console.log("Normal weight".toUpperCase())
    }else if( result > 25 && result < 29.9){
        console.log("Overweight".toUpperCase())
    }else{
        console.log("Obese")
    }

}

function findMax(a,b,c){
    return Math.max(a,b,c)
}
fullName("manjunath" , "kalkutagi")
console.log("area of rectangle",areaOfRectangle(5,10));
console.log("Perimeter of rectangle",perimeterOfRectangle(5,10));
console.log("Volume of rectangle",volumeOfRectPrism(5,10,45));
console.log("Area of circle : ", areaOfCircle(5))
console.log("Circumference of circle : ", circumference(5))
console.log("Density : " , density(2,22))
bmi(68,5)
console.log("Max number ", findMax(2,5,9))