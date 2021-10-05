import { Router, ActivatedRoute, ParamMap } from '@angular/router';

constructor(
    private route: ActivatedRoute,
  ) {}

ngOnInit() {
this.route.queryParams.subscribe(params => {
    this.name = params['name'];
});
}


//Advanced
heroes$: Observable;
selectedId: number;
heroes = HEROES;

ngOnInit() {
  this.heroes$ = this.route.paramMap.pipe(
    switchMap(params => {
      this.selectedId = Number(params.get('id'));
      return this.service.getHeroes();
    })
  );
}