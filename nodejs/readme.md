## how nodejs works

nodejs is a run time built on top of V8, other than V8 nodejs uses libuv to hanlde non blocking IO operations using threads

when nodejs app starts the event loop will be created and started.

- when a request comes main thread accept the request (go to the event queue)
- if it is an blocking IO operation it will be gven to the libuv
- libuv will alloacate a thread to each with ot's own threadpool
- os will pick up these threads and run based on the os scheduler