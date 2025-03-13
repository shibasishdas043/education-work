let num = 10;
localStorage.setItem("num", JSON.stringify(num));
const value = JSON.parseInt(localStorage.getItem("num"));

console.log(value);