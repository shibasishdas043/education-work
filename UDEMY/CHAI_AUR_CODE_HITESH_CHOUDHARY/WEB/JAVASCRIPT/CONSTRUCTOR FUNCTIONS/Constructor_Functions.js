function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){
    return `${this.species} Makes A Sound`;
}
let dog = new Animal("Dog")
// console.log(dog.sound())

function mapper(arr, fn){

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let res = fn(arr[i], i);
        result.push(res);
    }
    return result;
}

let arr = [1,2,3,4,5,6];
let x = mapper(arr, function multiply(value, index){
    console.log(value, value*value, index);
    return value*value;
});

console.log(arr, x);