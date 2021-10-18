global.console.log("hello world!")
// some module differ from javascript
// what is module
// module is file
// dynamically typed language
// integer double string defined undefined array object null
var instrinct = 19;
// variable nature in javascript

// let 
// console.log(module);



const model = require("./model");
const path = require('path');


// import "model.js";   // ES6 -> ECMA script 6 -> 2015 version
instrinct = "string!!"
function hello(name){
    console.log("hello "+name);
}
// model.message("testcase");
//module exported.

// io intensive work  = 2*java,python.
// scope of javascript
// {

// }


// {

// }


    // req <-  thread ---->  cpu(execute)
    // req <-  thread(2nd time) ---> cpu (execute)
    // req <-  thread(3rd time) ---> cpu (execute)

    // input output kbhi bnd ni hora

    // 1st thread operation result -> | 1 , 2, 3,event queue |

var directory = path.parse('app.js')
console.log(directory)

const s = require('os');
console.log(s.freemem());
console.log(s.totalmem());

/*
    program -> state change -> output 
    program -> state same ->  return
*/



/*
    a = 23
    console.log ("var " + a);
                     ^
    string value
    print value using coerce -> 
*/


console.log(`line of code ${s.freemem()}`); // ES6

// every request is event
// http req -> https json -> data ->event
// event handler 
// event listner -> port


// module imported 

const EventEmitter = require('events');
// console.log(EventEmitter);
var handle = new EventEmitter();


// using object of evnt
//listner


handle.on('message',() => {
    console.log('listnening');
})

// signal producer.
handle.emit('message')
//listen
// model.evnt.mess();

// http
const http = require('http');
const server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.write("Hello world");
        res.end();
    }
})

server.listen(8080);


