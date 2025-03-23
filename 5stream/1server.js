const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    const readable = fs.createReadStream('data.txt',{highWaterMark:100});
    // const writable = fs.createWriteStream('data.txt');
    let count = 0;
    readable.on('data',(chunks)=>{
        if (count == 20) {
            readable.pause();
            // setTimeout(() => {
            //     readable.resume();
            // }, 2000);
        }
        console.log(chunks.toString());
        count++;
    })

    // readable.pipe(writable);
    res.writeHead(200,{'content-type':'text/plain'});
    readable.pipe(res);
})

server.listen(5000,()=>{
    console.log('Server running... on http://localhost:5000');
})