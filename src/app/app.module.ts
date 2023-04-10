import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { NothingComponent } from './nothing/nothing.component';
import { Child10Component } from './child10/child10.component';
import { Child1AComponent } from './child1-a/child1-a.component';
import { Child1BComponent } from './child1-b/child1-b.component';
@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    NothingComponent,
    Child10Component,
    Child1AComponent,
    Child1BComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
