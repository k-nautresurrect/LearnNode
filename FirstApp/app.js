// to run node app -> node app.js
/*
    node is just a runtime environment as like 
    python provides when use as a scripting lang.
    Scripting language vs Programming language
*/
console.log("Hello World!");

// In nodejs window and document doesn't exist
/*
    console.log(window);
*/
// however there is a global object instead of window

global.console.log(global);
var message = 'Hello World';
console.log(global.message)
// It prints global object message which is undefined 
// because message scope is till this app.js file only

console.log(module);

// Loading module from other file
/*  
    import log from './logger';
       Warning: To load an ES module, set "type": "module" 
       in the package.json or use the .mjs extension.
*/  // ES6

const log = require('./logger')

log.message('Hello World!')

// Path module.

const path = require('path')

var pathObj = path.parse(__dirname);
var objPath = path.parse(__filename);

console.log(pathObj);
console.log(objPath);
console.log(path);

// OS module 

const Os = require('os');

var total = Os.totalmem();
var free = Os.freemem();

console.log(`Total memory ${total}`);
console.log(`free memory: ${free}`);
console.log(Os);

// fs module

const fs = require('fs');

var file = fs.readdirSync('./');
console.log(file);
var files = fs.readdir('./', function(err,files){
    if(err){ console.log(err) }
    else{ console.log(files) }
})

// the variable file will have the return type of fs.readdir
console.log("files " + files);

// Event Module
// EventEmitter class.
const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listner
emitter.on('Message Loaded.', function(){  // the event name should be same.
    console.log('Listner called.');
})

// Raise an event 
emitter.emit('Message Loaded.');
// emit  ->  signaling that the event is happened


// registering a listner
emitter.on('messagelogged',function(arg){

    // console.log('listner' + arg)   why gives [ object object ]

    console.log('listner ')
    console.log(arg)
})

// Event arguments 
// can be send by
emitter.emit('messagelogged', {id: 1, url: 'http://'})