console.log("Hello Your Future Is Black");  

let element = document.getElementById("1st_h2");
element.style.color = 'red';

let div1 = document.getElementsByClassName("1st_div");
div1[0].style.backgroundColor = "blue";

const singleElement = document.querySelector(".2nd_div"); // First matching element
singleElement.innerText = "Hello!";

const allElements = document.querySelectorAll(".2nd_div");
allElements.forEach((el) => (el.style.fontSize = "200px"));

let newDiv = document.createElement("div");
newDiv.innerText = "I am New";

document.body.appendChild(newDiv);
let element = document.querySelectorAll("div");
element.forEach((el) => (el.style.fontSIze = "20px"));

let change = document.getElementById("button");
change.innerText = "Hello Gandu Choda";

let rem = document.getElementsById("3rd_div");
rem.style.color = "red";
rem.remove();

const b = document.getElementById("button");
b.addEventListener("click", () => {
    alert("Button CVlicked");
});
