function fun(){
	console.log("fun called");
}

function gun(fn){
	console.log("Inside Gun");
	fn();
	console.log("Leaving Gun");

}
gun(function () {
	console.log("New Function Passed");
});