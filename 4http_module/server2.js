const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Serve the index.html file for the root route
  if (req.url === '/') {
    fs.readFile(path.join(__dirname,'/static/index.html'), 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
  else if(req.url.endsWith('.css')){
      fs.readFile(path.join(__dirname,'/static',req.url),'utf-8',(err,data)=>{
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('file not found');
        }  
        res.writeHead(200,{'content-type':'text/css'});
        res.end(data);
    })
  }
  else if (req.url.endsWith('.js') && req.url !== '/server.js') {
    fs.readFile(path.join(__dirname,'/static',req.url),'utf-8',(err,data)=>{
        if (err) {
            res.writeHead(404,{'content-type':'text/plain'});
            res.end('Page not found')
            return;
        }
        res.writeHead(200,{'content-type':'application/js'});
        res.end(data);
    })
  }
  // Handle unknown routes
  else {
    fs.readFile(path.join(__dirname,'/static/404.html'),'utf-8',(err,data)=>{
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page not found');
            return;
        }
        res.writeHead(200,{'content-type':'text/html'});
        res.end(data);
    })
  }
});

server.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});