let l = 10;
var h = 20;
var h = 20;
console.log("hello"+" "+ h);
console.log("hello : ", h);


function localScope() {
  let localVar = "I'm inside a function";
  console.log(localVar); // Accessible here
}
localScope();
// console.log(localVar); // ❌ Error: localVar is not defined



if (true) {
  let blockVar = "I'm inside a block";
  console.log(blockVar); // ✅ Accessible here
}
// console.log(blockVar); // ❌ Error: blockVar is not defined


if (true) {
  var blockVar = "I'm still accessible outside!";
}
console.log(blockVar); // ✅ Accessible here (because var is function-scoped)

import { name } from  "./export";
console.log(name);




