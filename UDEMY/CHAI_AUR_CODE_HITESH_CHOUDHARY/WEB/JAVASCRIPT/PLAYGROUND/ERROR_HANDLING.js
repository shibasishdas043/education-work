function add(a , b){
    if(a===0 && b===0){
        throw new Error("Cant Add !");
    }
    return a+b;
}

try{
    let plus = add(0, 0);
    console.log(plus);
}catch(error){
    console.error(error);
}