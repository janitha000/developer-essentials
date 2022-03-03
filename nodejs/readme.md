## how nodejs works

nodejs is a run time built on top of V8, other than V8 nodejs uses libuv to hanlde non blocking IO operations using threads
 V8 ---> machine code

when nodejs app starts the event loop will be created and started.

- when a request comes main thread accept the request (go to the event queue)
- if it is an blocking IO operation it will be gven to the libuv
- libuv will alloacate a thread to each with ot's own threadpool
- os will pick up these threads and run based on the os scheduler

thread pool size can be changed using `process.env.UV_THREADPOOL_SIZE` 


### event loop (created by libuv)

- start
- expired timer callbacks (setTimeOut etc...)
- callbacks from I/O polling (http requests)
- set immediate callbacks (if we want to run something immediatly after I/O, setImmediate())
- close closebacks (closing web servers, database connections etc...)

two special queues: these will be checked everytime when event loop goes to the next queue
- process.nexttick queue
- microtasks queue(resolved promises)

any more callbacks? if no back to the start

