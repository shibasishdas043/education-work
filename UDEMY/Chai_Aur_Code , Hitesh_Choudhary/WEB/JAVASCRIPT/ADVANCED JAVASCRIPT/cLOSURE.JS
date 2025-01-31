function outer(){
    let count = 4;
    return function(){
        count++;
        return count;
    }
}

let i = outer();
console.log(i());