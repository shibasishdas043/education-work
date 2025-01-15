function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){
    return `${this.species} Makes A Sound`;
}
let dog = new Animal("Dog")
console.log(dog.sound())