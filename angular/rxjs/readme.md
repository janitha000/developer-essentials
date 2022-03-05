### why rxjs
- to handle asynchronouse data streams

### observables and observers
- aysnc -> observerble
- listener -> observer
- oberverble -> observer

### operator
- created on the observable, which will create a new observebale which we will be subscribed

### observeble vs promise
- observeble return a stream of data | promise only single value
- can unsubscribe from observeble | cannot cancel a promise

`https://reactivex.io/documentation/subject.html`

### Subject
- observer and also can be observable (manually can emit)
- 

### Behavoiur Subject
- will hold the latest value/current value (last value)
- needs to be created using a initial value
- after providing last/current value it will continue to emit values
```
const subject = new Rx.BehaviorSubject(0);
subject.next(1);
subject.subscribe(x => console.log(x));

output - 1
```

### Async Subject
- will hold the last value
- but will only emit if the observerble trigger complete() 

### Publish Subject
- only emit after subscribe()


## Replay Subject
- will emit fromthe begining even though subscribed in the middle

