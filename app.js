
function sayHello(name) {
    console.log('Hello ' +  name);
}

//sayHello('Diya');
console.log(window);

/*const logger = require('./logger');

logger = 1;

logger.log('message');*/
//basics

/*const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);*/
//path module

/*const os = require('os');

  var totalMemory = os.totalmem();
  var freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory);

// Template string
// ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);*/
//os module

/*const fs = require('fs');

//const files = fs.readdirSync('./');
//console.log(files);

fs.readdir('.$', function(err,files){ 
    if (err) console.log('Error', err);
    else console.log('Result', files);
})*/
//fs module

/*const EventEmitter = require('events');

const log = require('./logger');
const logger = new Logger();

//Register a listener
emitter.on('messageLogged', (arg) => {//e, eventArg
    console.log('Listener called', arg);
});

Logger.log('message');

// Making a noise, produce - singnalling

//Raise: logging (data: message)*/
//Event

/*const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('Hello World');
        res.end();
    }
});

if (req.url === '/api/courses'){
    res.write(JSON.stringify([1. 2. 3]));
    res.end();
}

//server.on('connection', (socket) => {
  //  console.log('New connection...')
//})

server.listen(3000);

console.log('Listening on port 3000...');*/
//HTTP