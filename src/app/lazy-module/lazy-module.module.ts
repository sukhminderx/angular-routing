import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleRoutingModule } from './lazy-module-routing.module';
import { ChildLAComponent } from './child-la/child-la.component';
import { ChildLBComponent } from './child-lb/child-lb.component';

@NgModule({
  declarations: [ChildLAComponent, ChildLBComponent],
  imports: [CommonModule, LazyModuleRoutingModule],
})
export class LazyModuleModule {}
