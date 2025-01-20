class Vehicle {
    constructor(make, model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} Is A By This Company Named ${this.make}`
    }

}

class Car extends Vehicle {
    drive(){
        return `${this.make} : This Is An In heritamce Example`
    }
}
let myCar = new Car("Audi", "R8")
// console.log(myCar.start())
// console.log(myCar.drive())

let vehOne = new Vehicle("Audi", "R8")
// console.log(vehOne.make)
// console.log(vehOne.model)









// ENCUPSULATION

class BAnkAccount {
    #balance = 0

    deposit(amount){
        this.#balance += amount
        return this.#balance
    }
}





