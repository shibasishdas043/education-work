function fetchData(){
    let succes = prompt("Enter True Or False : ");
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(succes == true){
                console.log("Data Fetched :) ");
            }else if(succes == false){
                console.log("Did Not Worked :(");
            }
        },5000);
    })
}

fetchData()
    .then((data)=>{
        console.log(data);
    })
        .catch((error)=>{
            console.error(error);
        })
