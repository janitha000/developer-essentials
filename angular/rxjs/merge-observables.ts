const user$ = this.store.pipe(select(selectUser));
      
const courses$ = this.coursesService.loadCourses(...)
                    .pipe(
                        startWith([])
                    );

const lessons$ = this.coursesService.loadLessons(...)
                    .pipe(
                        startWith([])
                    );
                                                        
this.data$ = combineLatest([user$, courses$, lessons$])
                .pipe(
                    map(([user, courses, lessons]) => {
                        return {
                            user,
                            courses,
                            lessons
                        };
                    }) 
                );

data$: Observable<ExampleData>;
interface ExampleData {
    user:User;
    courses: Course[];
    lessons: Lesson[];
}


//combineLatest will not emit its first tuple until its composing Observables all emit their first value