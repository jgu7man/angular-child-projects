import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1.component';
import { Nieto1Component } from './components/nieto1/nieto1.component';

const routes: Routes = [
  { path: '', component: Child1Component, children: [
    { path: 'nieto1', component: Nieto1Component },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Child1RoutingModule { }
