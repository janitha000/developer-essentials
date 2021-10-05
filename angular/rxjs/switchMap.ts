//Run an observable inside an observable

//scenario 1 - return output from the inner observable

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

//scenario 2 return result from both observables
const course$ = simulateHttp({id:1, description: 'Angular For Beginners'}, 1000);

const httpResult$ = course$.pipe(
    switchMap(courses => simulateHttp([], 2000)
                  .pipe(
                     map(lessons => [courses,lessons])
                  ),
    )
);

httpResult$.subscribe(
    console.log,
    console.error,
    () => console.log('completed httpResult$')
);