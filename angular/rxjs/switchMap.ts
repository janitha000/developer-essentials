//Run an observable inside an observable

const firebase1$ = simulateFirebase("FB-1 ", 5000);
const firebase2$ = simulateFirebase("FB-2 ", 1000);

const firebaseResult$ = firebase1$.pipe(switchMap(sourceValue => {
  console.log("source value " + sourceValue);
  return simulateFirebase("inner observable ", 1000)
}));

firebaseResult$.subscribe(
  console.log,
  console.error,
  () => console.log('completed firebaseResult$')
);

//output
source value FB-1  0
    inner observable  0
    inner observable  1
    inner observable  2
    inner observable  3
source value FB-1  1
    inner observable  0
    inner observable  1
    inner observable  2
    inner observable  3
source value FB-1  2
    inner observable  0
    inner observable  1
    inner observable  2
...