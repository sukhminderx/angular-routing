import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildComponent } from './child/child-a.component';

const routes: Routes = [
  {
    path: '',
    component: ChildComponent,
    children: [
      { path: 'childA', component: ChildAComponent },
      { path: 'childB', component: ChildBComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildModuleRoutingModule {}
