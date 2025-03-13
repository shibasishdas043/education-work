// function greet(name) {
//     console.log(`Hello ${name}`);
// }
// greet("Shibasish");
// function makeTea(typeOfTea){
//     return `Making ${typeOfTea}`;
// }
// console.log(makeTea("Black Tea"));

function oredrTea(teaType) {

    function orderConfirmation(){
        return `Order Confirmed For Chai`;
    }
    return orderConfirmation();
}
let orderSucces = oredrTea();
// console.log(orderSucces);

const calculateTotal = (price,quantity) => price* quantity;
 
let totaCost = calculateTotal(499,18000);
// console.log(totaCost);
function makeTea(typeOfTea){
    return  `Make Tea ${typeOfTea}`
}

function processTeaOrder(teaFunction){
    return teaFunction('earl grey');
}
order = processTeaOrder(makeTea);

console.log(order);