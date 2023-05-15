import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AlertDialogeComponent } from './alert-dialoge.component';
import{MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';
import { of } from 'rxjs/internal/observable/of';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AlertDialogeComponent', () => {
  let component: AlertDialogeComponent;
  let fixture: ComponentFixture<AlertDialogeComponent>;
  let apiService:ApiService;
  let snackBar:MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,MatDialogModule,MatSnackBarModule,BrowserAnimationsModule],
      declarations: [ AlertDialogeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers:[{provide:MatDialogRef , useValue:{} },
        

        { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertDialogeComponent);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
    apiService = TestBed.inject(ApiService);
    snackBar = TestBed.inject(MatDialog);
  });

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show a snackbar with the given message and value', () => {
    const message = 'Task Deleted succcessfully';
    const value = 'close';
    const spySnackBarOpen = spyOn(TestBed.inject(MatSnackBar), 'open');
    
    component.showToaster(message, value);
    
    expect(spySnackBarOpen).toHaveBeenCalledWith(message, value, {duration: 68000, horizontalPosition: 'center', verticalPosition: 'top'});
  });
  
  it('should delete a task and show a snackbar on successful deletion', (() => {

    const response = {status: 'success'};
    spyOn(apiService,'deletetask').and.returnValue(of(response));
    component.deleteclick();
    component.showToaster("Task Deleted succcessfully","close");
    spyOn(snackBar,'open');

  }));
  
});
