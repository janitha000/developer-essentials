//app-routing.module.ts
{ path: 'lazy-load', loadChildren: () => import('./custom/lazy-load/lazy-load.module').then(m => m.LazyLoadModule) }

//A new module should be created for the components needs for lazy loading.

//lazy-load.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadRoutingModule } from './lazy-load-routing.module';
import { LazyLoadComponent } from './lazy-load.component';


@NgModule({
  declarations: [LazyLoadComponent],
  imports: [
    CommonModule,
    LazyLoadRoutingModule
  ]
})
export class LazyLoadModule { }

//lazy-load-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadComponent } from './lazy-load.component';

const routes: Routes = [{ path: '', component: LazyLoadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadRoutingModule { }



