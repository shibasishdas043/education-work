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

function writeFile(data, filename){    
    console.log("Start Writing");

    setTimeout(function writer(){
        console.log("Writing Completed");

        let write = data;
        filename(writer);
    },6000);
}

function uploadFile(data, file){
    console.log("Starting Upload");

    setTimeout(function uploader(){
        console.log("Upload Complete");

        let fileName = data;
        file(fileName);
    }, 9000);
}

fetchData("www.google.com", function downloded(response){
    console.log("Downloaded : ",response);
    writeFile(response, function writeCallback(writeValue){
        uploadFile(response, function uploadCallback(uploadValue){
            console.log("The Data :",response,"Is written By Value : ",writeValue,"Uploaded By :",uploadValue);
        })
    });
});