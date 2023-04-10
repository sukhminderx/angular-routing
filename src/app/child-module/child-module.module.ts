import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildModuleRoutingModule } from './child-module-routing.module';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildComponent } from './child/child-a.component';

@NgModule({
  declarations: [ChildAComponent, ChildBComponent, ChildComponent],
  imports: [CommonModule, ChildModuleRoutingModule],
})
export class ChildModuleModule {}
