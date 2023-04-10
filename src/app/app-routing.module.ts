import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-module/child-a/child-a.component';
import { Child1AComponent } from './child1-a/child1-a.component';
import { Child1BComponent } from './child1-b/child1-b.component';
import { Child1Component } from './child1/child1.component';
import { Child10Component } from './child10/child10.component';
import { Child2Component } from './child2/child2.component';
import { NothingComponent } from './nothing/nothing.component';
import { authGuard } from './utils/guards/auth.guard';

const routes: Routes = [
  {
    path: 'child1',
    component: Child1Component,
    children: [
      { path: 'child1A', component: Child1AComponent },
      { path: 'child1B', component: Child1BComponent },
    ],
  },
  { path: 'child1/:id', component: Child10Component },
  { path: 'child2', component: Child2Component, canActivate: [authGuard] },
  {
    path: 'items',
    loadChildren: () =>
      import('./child-module/child-module.module').then(
        (m) => m.ChildModuleModule
      ),
  },
  { path: '**', component: NothingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
