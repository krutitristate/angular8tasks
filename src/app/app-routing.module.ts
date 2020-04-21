import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Task1n2Component } from './task1n2/task1n2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { Task6Component } from './task6/task6.component';
import { Task5Component } from './task5/task5.component';


const routes: Routes = [
  { path: 'task1n2', component: Task1n2Component },
  { path: 'task3', component: Task3Component },
  { path: 'task4', component: Task4Component },
  { path: 'task5', component: Task5Component },
  { path: 'task6', component: Task6Component },
  { path: '', redirectTo: '/task1n2', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
