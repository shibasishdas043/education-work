const http = require("http");

const PORT = 3000;

//using the createServer fumction we can actually create a basic http server

//this function returns a server object, and takes a callback as an argument

//this function created a server object but didn't start the server
const server = http.createServer(async function listener(request, response) {
  //request ---> using request we will be see the details of incoming http request --> Object

  //response--->we will be able to configure what response we nees to send for an incoming http request --> Object

  //this call back is a kind of listener function

  //that is going to collect every http request that we will make to our server

  if (request.url=='/google') {
    //if we make a request on /home this block will be executed
    const response = await fetch("https://www.google.com");

    const html = await response.text();

    console.log(html);

  }

  console.log("Request Recieved");
});

server.listen(PORT, function exec() {
  //once we succesfully boot the server on the given PORT, this callback is executed

  console.log("Server Is Up And Running On PORT : ", PORT);
});
