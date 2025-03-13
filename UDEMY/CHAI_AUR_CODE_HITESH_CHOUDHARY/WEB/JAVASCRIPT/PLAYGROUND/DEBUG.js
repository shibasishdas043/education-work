function timer(){
    setTimeout(function (){
        console.log("Hello");
    }, 5000)
}

let m = "Shibasish Das";
function call(){
    console.log(m);
    debugger;
    timer();
}
call();