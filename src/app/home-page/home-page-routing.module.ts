import { HomePageComponent } from './home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const router:Routes =[
{
  path:'',
  component:HomePageComponent
}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class HomePageRoutingModule { }
