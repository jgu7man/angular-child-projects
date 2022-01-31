import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route } from '@angular/router';

import { Child1RoutingModule } from './child1-routing.module';
import { Child1Component } from './child1.component';
import { Nieto1Component } from './components/nieto1/nieto1.component';

@NgModule({
  declarations: [
    Child1Component,
    Nieto1Component
  ],
  imports: [
    BrowserModule,
    Child1RoutingModule
  ],
  providers: [],
  bootstrap: [Child1Component]
})
export class ChildModule { }

@NgModule( {
  imports: [
    Child1RoutingModule
  ]
})
export class ShareChildModule {
  static forRoot(): ModuleWithProviders<Route> {
    return {
      ngModule: ChildModule,
      providers: []
    }
  }
}