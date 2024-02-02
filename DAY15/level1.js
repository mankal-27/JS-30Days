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

const dog = new Animal("Robii", 12, "Brown", 4);
const cat = new Animal("Mishi", 3, "White", 4);
dog.getInfo();
cat.getInfo();