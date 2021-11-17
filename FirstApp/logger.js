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