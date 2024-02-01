const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}  

let loggedInusersCount = 0
let usersWithGreaterPoints = 0
for(const user of Object.values(users)){
    if(user.isLoggedIn){
        loggedInusersCount++
    }
}
console.log(loggedInusersCount);

for(const user of Object.values(users)){
    if(user.points >= 50){
        usersWithGreaterPoints++
    }
}
console.log(usersWithGreaterPoints);

let maxSkills = 0;
let skillPerson = '';

for(const [name, user] of Object.entries(users)){
    if(user.skills.length > maxSkills){
        maxSkills = user.skills.length;
        skillPerson = name
    }
} 

console.log('Person with the most skills:', skillPerson, 'with', maxSkills, 'skills.');

const mernStackSkill = ['MongoDB', 'Express', 'React', 'Node'];
const mernStackDevelopers = [];

for(const [name, user] of Object.entries(users)){
    const hasMernSkills = mernStackSkill.every(skill => user.skills.includes(skill));

    if(hasMernSkills){
        mernStackDevelopers.push(name);
    }
}

console.log('MERN Stack Developers:', mernStackDevelopers);

//Set your name in the users object without modifying the original users object

const mineUser = Object.assign({}, users)
const yourInfo = { email: 'manju@email.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 25, isLoggedIn: true, points: 100 };
mineUser.manjunath = yourInfo;


console.log('Original users object:', users);
console.log('Updated users object with your information:', mineUser);

//Get all keys or properties of users object

for(const user of Object.keys(users)){
    console.log(user)
}

//Get all the values of users object

for(const user of Object.values(users)){
    console.log(user)
}