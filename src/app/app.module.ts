import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import{MatButtonModule} from '@angular/material/button';

import{MatInputModule} from '@angular/material/input';
import{MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PatientTaskComponent } from './patient-task/patient-task.component';
import { AlertDialogeComponent } from './alert-dialoge/alert-dialoge.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MyTaskComponent } from './my-task/my-task.component';
import { MatDialogRef } from '@angular/material/dialog';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    PatientTaskComponent,
    AlertDialogeComponent,
    MyTaskComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule
   
   
    
    

  ],
  providers: [{ 
    provide: MatDialogRef,
    useValue: []
     },MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
