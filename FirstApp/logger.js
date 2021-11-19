/*
    remote Login Service for logging our messages.
    it gives url by which we can send http request to 
    url.
*/

var url = 'https://logging.ai/messages'

function log(message){
    // https request - 
    console.log(message);
}

module.exports.message = log;
// an empty object of name message is exported with log functionality.

/*  export const message  = log;  */   // ES6  

// Module Wrapper Function
/*
    every peice of code in javascript first goes in the
    function wrapper and then it executes
    it is like 

    (function(exports, require, module, __filename, __dirname){...})
*/
console.log(require);
console.log(exports);
console.log(module)
console.log(__dirname);
console.log(__filename);

const EventEmitter = require('events');

const logemitter = new EventEmitter();
 
logemitter.on('logging',(data) => {
    console.log(data);
})

logemitter.emit('logging',{ message: 'Logger is logged via event emitter'})