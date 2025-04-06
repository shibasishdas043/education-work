let car = {
    makw : "Toyota",
    model : "Car",
    year : "2020",

    start : function(){
        return `${this.make} Car Got Started In ${this.year}`
    },
}
// console.log(car.start())

function Person(name, age){
    this.name = name;
    this.age = age;
}

let john = new Person("John", 20)
// console.log(john.name)
// console.log(john.age)

function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `${this.type} Makes A Sound`  
}

Array.prototype.hitesh = function(){
    return `Custom Method ${this}`
}
let myArray = [1,2,3,4]
console.log(myArray.hitesh())
let myNewArray = [1,2,3,4,5,6,7]
console.log(myNewArray.hitesh())