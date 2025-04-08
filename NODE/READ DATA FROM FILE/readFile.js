let fs = require("fs");

let stream = require("stream");

let inputStream = fs.createReadStream(__dirname + "/text.txt");
let outputStream = process.stdout;


let delay = new stream.Transform({
    transform(chunk, encoding, callback){
        setTimeout(() => {
            let data = chunk.toString().toUpperCase();
            this.push(data);
            callback();
        },10000);
    }

})


inputStream.pipe(delay);
delay.pipe(outputStream);
