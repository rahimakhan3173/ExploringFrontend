import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { FloorComponent } from './floor/floor.component';

const routes: Routes = [
  {path: 'floor', component: FloorComponent},
  {path: '', component:HomeComponent},
  {path:'department', component:DepartmentComponent}
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FloorComponent,DepartmentComponent, HomeComponent]
