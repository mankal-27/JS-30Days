var dog = {
    name:"Mufti",
    legs : 4,
    color : "Brown",
    age : 8,
    barkValue : function (){
        return (`Woof Woof`)
    },
    breed:"German Shepard"
};
console.log(dog)
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.barkValue());
dog.getDogInfo = function(){
    return `${this.name} is ${this.breed} which is ${this.color} color and is ${this.age} year's old`
}
console.log(dog.getDogInfo());