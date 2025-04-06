//LEXICAL SCOPE
function outer() {
    let outerVar = 'I am from outer scope';

    function inner() {
        console.log(outerVar); // Accessing outerVar from the outer scope
    }

    inner();
}

// outer(); // Output: "I am from outer scope"

//ENCAPSULATION
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2
// console.log(counter()); // Output: 3


function delayedGreeting(name) {
    setTimeout(function() {
        console.log(`Hello, ${name}!`);
    }, 3000);
}

// delayedGreeting('Shibasish'); // Output after 1 second: "Hello, Alice!"



function a(){
    let name = "Shibasish";

    function b(param){
        console.log(h);
        console.log(name);
    }
    return b;
}
let x = a();
x();
var h = "Hello";
x();