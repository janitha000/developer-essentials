Displaying a 404 page
 -  { path: '**', component: PageNotFoundComponent }

Setting up redirects
    - { path: '',   redirectTo: '/first-component', pathMatch: 'full' },

navigate router
    - this.router.navigate(['/heroes', { id: heroId }]);

route with parameters
    - { path: 'hero/:id', component: HeroDetailComponent }
    - <a [routerLink]="['/hero', hero.id]">
    - ngOnInit() {
        this.hero$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
            this.service.getHero(params.get('id')!))
        );
    }
