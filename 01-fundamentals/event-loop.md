# EVENT LOOP & CODE EXECUTION

### Ref
* [Event Loop Node JS](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)
* [Complete Visual Guido of Event Loop](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop)


JS por defecto es Blocking and Single-Threaded (Este comportamiento se puede cambiar usando código asíncrono), Node JS tuvo que cambiar eso.

Node tiene 3 componentes principales:
* Dependencias de Node (externas): V8, Libuv, Zlib, Crypto, ...
* Características de C/C++
* Librería que se conecta a C/C++ desde nuestro código

La librería Libuv se encarga de manejar las tareas/operaciones asíncronas de Node



El event loop se compone de:
* Call stack
* Libuv



1. Se crea la función global Main (Simil de Window en Web) que ejecutará todo el código que tengamos en nuestro programa Node
2. Se ejecuta Main en Call Stack
3. El código que se irá enviando al Call Stack (de forma descendente por defecto), allí se registra y se ejecutará Last-In, First-Out (LIFO), luego se elimina
4. Si hay código asíncrono/callbacks lo envía al Libuv First-In, First-Out(FIFO) hasta que se complete, cuando esto suceda enviará el código al Call Stack


La Microtask Queue se divide en:
* NextTick Queue (Callbacks, tiene prioridad)
* Promise Queue (Promesas)

Los Callbacks se ejecutarán SOLO cuando el Call Stack se encuentre vacio

En Libuv la prioridad será primero:
* Callbacks síncronos en Microtask Queue
* Callbacks de timers queue (settimeouts/setintervals callbacks)
* Callbacks en Microtask Queue
* Callbacks de I/O Queue (Input/Output)
* Callbacks en Microtask Queue
* Callbacks de Check Queue (Setinmediate callback)
* Callbacks en Microtask Queue
* Callbacks de Close Queue (Close handlers callback)
* Callbacks en Microtask Queue
