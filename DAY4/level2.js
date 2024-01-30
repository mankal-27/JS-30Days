/*
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

function gradeSystem(grade){
    if(grade >= 90 && grade <= 100){
        return console.log("Your Grade is : A");
    } else if(grade >= 70 && grade <= 89){
        return console.log("Your Grade is : B");
    } else if(grade >= 60 && grade <= 69){
        return console.log("Your Grade is : C");
    } else if(grade >= 50 && grade <= 59){
        return console.log("Your Grade is : D");
    } else{
        return console.log("Your Grade is : F");
    }
}

gradeSystem(-5)

