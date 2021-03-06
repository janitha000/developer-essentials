//create without additional div
//add inside of an ng-container
<ng-container *ngIf="userLoggedIn"> 
       visible only to authenticated users 
</ng-container>

//If else
<div class="container" *ngIf="courses.length; else noCourses">
  <h1>All Courses</h1>
  ....
</div>  

<ng-template #noCourses>
  <h1>No courses available.</h1>
</ng-template>

//If else then
<ng-container *ngIf="courses.length; then coursesList; else noCourses">
 </ng-container>

<ng-template #coursesList>
  <h1>All courses available</h1>
  ....
</ng-template>

<ng-template #noCourses>
  <h1>No courses available.</h1>
</ng-template>

//use with observables
<ng-container *ngIf="(courses$ | async) as courses">
    <div class="courses">
        {{courses.length}}
    </div> 
</ng-container>
//will load only after course are loadedconst http$ = this.http.get<Course[]>('/api/courses');

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
);const http$ = this.http.get<Course[]>('/api/courses');

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
    );const http$ = this.http.get<Course[]>('/api/courses');

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
        );const http$ = this.http.get<Course[]>('/api/courses');

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