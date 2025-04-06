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
    #balance = 0`git `

    deposit(amount) {
        this.#balance += amount
        return this.#balance
    }

    getBalance() {
        return`$ ${this.#balance}`
    }
}

// STATIC METHOD

class Calculator {
    static add(a, b) {
        return a + b
    }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add(2,3))   

// console.log(Calculator.add(2, 3))


// GETTERS AND SETTERS

class Employee {
    #salary

    constructor(name, salary) {
        if (salary < 0) {
            throw new error`Salary Can't Be Negative`
        }
        this.name = name 
        this.#salary = salary
    }

    get salary() {
        return `You Are Not Allowed To See Salary`
    }

    set salary(value) {
        if (value < 0) {
            console.error("Invalid")
        } else {
            this.salary = value
        }
    }
}

let em = new Employee("Alice", 25000)
console.log(em.name)
console.log(em.salary) 