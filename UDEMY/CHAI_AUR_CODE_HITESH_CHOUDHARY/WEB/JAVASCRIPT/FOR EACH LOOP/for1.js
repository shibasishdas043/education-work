let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach((tea) => {    
    // console.log(tea);
});

let worlcities = ["berlin", "london","sydny", "tokyo", "japan"];
let travelledCyteis = [];

worlcities.forEach( function(city) {
    if(city === "sydny"){
        return;
    }
    travelledCyteis.push(city);

});
// console.log(travelledCyteis);

let numbers = [2,4,5,6,3,7];
let doubleNumbners = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        continue;
    }
    doubleNumbners.push(numbers[i] * 2);
}
// console.log(doubleNumbners);

let myTeas =["Chai", "GreenTea", "Lemon Tea", "Hello Black Tea"];
let shortTeas = [];

for (const element of myTeas) {
    if (element.length > 10) {
        break;
    }
    shortTeas.push(element);
}
// console.log(shortTeas);