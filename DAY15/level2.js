class Animal {
    constructor(name,age,color,legs){
        this.name = name,
        this.age = age,
        this.color = color,
        this.legs = legs
    }
    getInfo(){
        console.log(`${this.name} is ${this.age} year's old and is ${this.color} color with ${this.legs} legs.`)
    }
}

class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs);
        this.breed = breed;
    }

    // Override the getInfo method in the subclass
    getInfo() {
        console.log(`${this.name} is a ${this.breed} dog, ${this.age} years old, with ${this.color} fur and ${this.legs} legs.`);
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs);
        this.breed = breed;
    }

    // Override the getInfo method in the subclass
    getInfo() {
        console.log(`${this.name} is a ${this.breed} cat, ${this.age} years old, with ${this.color} fur and ${this.legs} legs.`);
    }
}


const dog = new Dog("Robii", 12, "Brown", 4, "GermanShepard");
const cat = new Cat("Mishi", 3, "White", 4, "Nt");
dog.getInfo();
cat.getInfo();