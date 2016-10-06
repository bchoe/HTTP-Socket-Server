const net = require('net');
const fs = require('fs');
let web;

    fs.readFile('./public/index.html', (err, data) => {
      if(err){
        console.error(err);

      }

      web = data.toString();
      console.log(web);
    });

const server = net.createServer((request) => {

  request.on('data', (data) => {
    //status line

    request.write('HTTP/1.1 200 OK');
    request.write('\n');
    request.write('\n');
    request.write(web);


    request.end();
  });

  request.on('end', () => {

  });

});

//tell it what port to listen Opened
server.listen({port:8080, host:'0.0.0.0'}, () => {
  const address = server.address();
  console.log(`Opened server on ${address.port}`);

});