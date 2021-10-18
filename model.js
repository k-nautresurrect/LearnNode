const EventEmitter = require('events');


function message(message){
    console.log(message);
    // console.log(module);
    handle.on('message',() => {
        console.log('listnening');
    })
    console.log(handle.emit('message'));

    console.log('executed');
}

class eventmod extends EventEmitter{
    mess(){
        this.on('message',() => {
            console.log('listnening');
        })
        console.log(this.emit('message'));
    }
}

// module.exports.message = message;
module.exports.evnt = eventmod;

// module . export . variable name = (attribute, func, const,..)