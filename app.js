const http = require('http');
const tamplate = require('./tamplate.js');

const server = http.createServer((req ,res)=>{
    res.end(tamplate.render())
})

server.listen(3000);
