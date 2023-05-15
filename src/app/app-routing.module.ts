import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTaskComponent } from './my-task/my-task.component';
import { PatientTaskComponent } from './patient-task/patient-task.component';
import { ErrorComponent } from './error/error.component';

const routes:Routes=[
  {
   path :"",
   redirectTo:"mytask",
    pathMatch:"full"
  },
 {
   path :"mytask",
   component : MyTaskComponent
 },
 {
   path :"patienttask",
   component : PatientTaskComponent
 }
 ,{
  path:"error",
  component:ErrorComponent
 }
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
