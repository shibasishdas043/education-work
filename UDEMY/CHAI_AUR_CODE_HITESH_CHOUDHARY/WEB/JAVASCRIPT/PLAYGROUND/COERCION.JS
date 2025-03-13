let x = {
    "a": 10,
    valueOf(){
        return "custom";
    },
    toString(){
        return 2;
    }
}
// console.log(x-10);
console.log("hello"+x);