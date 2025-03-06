// function hello(value){
//     console.log("Hello");
//     value();
// }

// hello(function bolo(){
//     console.log("Bolo");
// })

function fetchData(url,fn){
    console.log("Starting Download");

    setTimeout(function download(){
        console.log("Download Finished");
        
        let data = "Dummy Data";
        fn(data);

    },3000);
}

let x = fetchData("www.google.com", function downloded(response){
    console.log("Downloaded : ",response);
});