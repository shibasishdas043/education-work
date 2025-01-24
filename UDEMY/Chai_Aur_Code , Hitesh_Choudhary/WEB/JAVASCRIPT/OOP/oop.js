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

// class Animal{
//     constructor(name){
//         this.name = name;
//         console.log("Object Is Created .. ");
//     }

//     eat(){
//         console.log("Khachi .. ");
//     }

//     jump(){
//         console.log("lafgachi .. ");
//     }
// }

// class Lion extends Animal{
//     constructor(name){
//         super(name)
//         console.log("Object Is Created Its A Lion");
//     }

//     eat(){
//         super.eat();
//         console.log("Lafachi Road-e Te.. ");
//     }
// }

// let a = new Animal("Lion");
// console.log(a);

// let l = new Lion("Chudir_Vai");
// console.log(l);



class User{
    constructor(email, password){
        this.email = email;
        this.password = password;

    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value.toUpperCase();
        
    }

    get password(){
        return `${this._password}shiba`;
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const shibasish = new User("shibasishdas043@gmail.com", "abc");
console.log(shibasish.email);
// console.log(shibasish.password);



