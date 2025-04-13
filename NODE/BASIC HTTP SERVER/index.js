// For Testing Purpose

// const http = require("http"); // Import the http module

// const PORT = 3000;

// // Create a server function from the http module
// const startServer = http.createServer(function exec(request, response) {
//   // Sending a response for every request
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.end("Server is running successfully!\n");
// });

// // Listen on the specified port
// startServer.listen(PORT, function process() {
//   // Callback function executed when the server starts
//   console.log(`Server Started On Port ${PORT}`);
// });

// for Testing Purpose

const http = require("http"); // import --> http module

const PORT = 3000;

//createServer Function from --> http module
const startServer = http.createServer(function exec(request, response) {
    console.log(request.method);

    if(request.url === "/home"){
        response.end("/HOME");
    }else if(request.url === "/faq"){
        response.end("/FAQ");
    }

    // response.end("Hello World !");
});


startServer.listen(PORT, function process(){
    // Some Task Here

    console.log("Server Started On Port", PORT);
});

