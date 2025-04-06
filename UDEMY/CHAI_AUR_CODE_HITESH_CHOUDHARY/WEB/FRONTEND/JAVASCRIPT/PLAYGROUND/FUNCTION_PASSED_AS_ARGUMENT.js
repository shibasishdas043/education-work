function fun(){
	console.log("Fun Called");
}

function gun(fn){
	console.log("Inside Gun");
	fn();
	console.log("Leaving Gun");

}
gun(fun);