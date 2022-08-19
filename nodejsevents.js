const EventEmitter=require('events');

class MyEmitter extends EventEmitter{}

const myEmitter=new MyEmitter();
myEmitter.on('WaterFull',()=>{
    console.log('Please turn off the motor!');
    setTimeout(() => {
        console.log('Please turn off the motor! Its a gentle remainder');
    }, 3000);
})

console.log("The script is running!");
console.log("The script is still running!");
myEmitter.emit('WaterFull');