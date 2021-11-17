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
