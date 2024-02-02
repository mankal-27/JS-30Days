const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Manju',
  lastName:'Kal',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

var skillsToJson = JSON.stringify(skills);
console.log(skillsToJson)
var ageToJson = JSON.stringify(age)
console.log(ageToJson);
var isMarriedToJson = JSON.stringify(isMarried);
console.log(isMarriedToJson);
var studentToJson = JSON.stringify(student);
console.log(studentToJson);
var studentToJson_1 = JSON.stringify(student, ['firstName', 'lastName' , 'skills'])
console.log(studentToJson_1)

var txtToObject = JSON.parse(txt);
console.log(txtToObject);

let maxSkills = 0;
let maxSkillsUser = null;

for(const userName in txtToObject){
    const user = txtToObject[userName];
    if(user.skills.length > maxSkills){
        maxSkills = user.skills.length;
        maxSkillsUser = userName;
    }
}

console.log(`User with the most skills is ${maxSkillsUser} with ${maxSkills} skills.`);
