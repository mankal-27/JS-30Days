// Create a student object
const student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    skills: ['HTML', 'CSS', 'JavaScript'],
    country: 'USA',
    enrolled: true
};

// Convert the student object to a JSON string
const studentJSON = JSON.stringify(student);

// Store the JSON string in the localStorage with a key
localStorage.setItem('studentData', studentJSON);

// Retrieve the data from localStorage
const retrievedData = localStorage.getItem('studentData');

// Parse the JSON string back to an object
const retrievedStudent = JSON.parse(retrievedData);

// Log the retrieved student object
console.log(retrievedStudent);
