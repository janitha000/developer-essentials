//catchError - provide an alternative value when there is an error occured
const http$ = this.http.get<Course[]>('/api/courses');

http$
    .pipe(
        catchError(err => of([]))
    )
    .subscribe(
        res => console.log('HTTP response', res),
        err => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
    );

//catchError - rethrow the error
const http$ = this.http.get<Course[]>('/api/courses');

http$
    .pipe(
        catchError(err => {
            console.log('Handling error locally and rethrowing it...', err);
            return throwError(err);
        })
    )
    .subscribe(
        res => console.log('HTTP response', res),
        err => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
    );