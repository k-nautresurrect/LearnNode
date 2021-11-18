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