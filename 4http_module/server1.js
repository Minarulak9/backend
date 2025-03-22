const { json } = require('body-parser');
const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.end("hello js");
// })

// server.listen(5000,()=>{
//     console.log('Server Started on port 5000');
// })


const server = http.createServer((req, res) => {
    
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "Welcome to My API" }));
    } 

    else if(req.url === '/data' && req.method == 'POST'){
        let body = '';
        req.on('data',(chunk)=>{
            body+=chunk.toString();
        })
        req.on('end',()=>{
            let data = JSON.parse(body);
            res.writeHead(200,{'content-type':'application/json'});
            res.end(JSON.stringify({ message: `Hello, ${data.name}!` }));
        })
    }

    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "This is an About Page" }));
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Page Not Found" }));
    }





});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
