// let obj = {
//     a : 1,
//     b : "Shibasish Das",
// };

// // console.log(obj)

// let animal = {
//     eats : true,
// };

// let rabbit = {
//     jumps : true,
// };

// rabbit.__proto__ = animal;


// class Animal {
//     constructor(name, jumps, eats){
//         this.name = name
//         this.jumps = function(){
//             return `${this.jumps} Jump Korloom`;
//         }
//         this.eats = function(){
//             return `${this.eats} Khachi...`;
//         }
//     }

    // eats(){
    //     console.log("Khachi...");
    // }

//}

// let a = new Animal("Bunny", "Gate Theke", "Porota");

// console.log(a.eats());
// console.log(a.eats());
// console.log(a.jumps())
// console.log(a.Animal());

class Animal{
    constructor(name){
        this.name = name;
        console.log("Object Is Created .. ");
    }

    eat(){
        return `Lafachi .. `;
    }

    jump(){
        return `Khachi .. `;
    }
}

class Lion extends Animal{

}

let a = new Animal("Lion");
console.log(a);

let l = new Lion("Chudir_Vai");
console.log(l);








