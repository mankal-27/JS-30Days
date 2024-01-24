const readline = require('readline');
//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = prompt("Enter Base: ")
let height = prompt("Enter Height: ")
let area = 0.5 * base * height;
console.log("Area of Triangle is: " + area);


//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)