function hello(value){
    console.log("Hello");
    value();
}

hello(function bolo(){
    console.log("Bolo");
})