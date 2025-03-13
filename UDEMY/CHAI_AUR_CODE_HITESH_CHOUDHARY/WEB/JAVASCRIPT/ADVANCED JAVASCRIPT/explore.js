function simulateAsyncTask() {
    setTimeout(function() {
        console.log("task finished");
    }, 5000);
    console.log("Task Started");
}
let l = simulateAsyncTask();
console.log(l);