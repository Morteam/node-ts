/*
    * CODE EXECUTION
    - https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick
    - https://www.builder.io/blog/visual-guide-to-nodejs-event-loop !important
    
    
    
    Node is composed by:
    - External dependencies 
    - C/C++ features
    - JS libraries than it connect with C++ from our code: ex: libuv, V8, zlib, Crypto...


    Libuv (it comes inside of Node) allows us to work with async/callbacks in "many" "threads". It works like a quee (First In First Out - but always if the time of task already was finished, sample timeouts)
    
    The code lines go to the Call Stack and if the task is an asynchronous it will be to Libuv (and the reutn to the Call Stack)
*/




// * Order of execution


// 1
console.log('Inicio de programa');

// 5
setTimeout( () => {
    console.log('Primer Timeout');
}, 3000 );


// 3
setTimeout( () => {
    console.log('Segundo Timeout');
}, 0 );

// 4
setTimeout( () => {
    console.log('Tercer Timeout');
}, 0 );

// 2
console.log('Fin de programa');

