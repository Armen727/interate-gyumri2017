'use strict';

const http = require('http');
const {upper,toupper, PORT} = require('./ports');

const server = http.createServer((req,res)=>{
  if(req.url == '/'){
    res.setHeader('content-type',
  'text/html');
  res.end(
    `<!doctype html>
    <body>
    <h1>${upper(__dirname)}</h1>
    <h1>${toupper(__dirname)}</h1>
    <p>what a body =P</p>
    </body>
    `)
  }else{
      res.end('UNKNOWN')
  }
  server.on('connection', (socket) =>{
    console.log("Someone connected",socket);

  })

})

server.listen(PORT,()=>console.log('Started our server'));
