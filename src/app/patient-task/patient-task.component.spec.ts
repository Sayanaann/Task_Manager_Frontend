import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { PatientTaskComponent } from './patient-task.component';
import{MatDialogModule} from '@angular/material/dialog';

describe('PatientTaskComponent', () => {
  let component: PatientTaskComponent;
  let fixture: ComponentFixture<PatientTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,MatDialogModule],
      declarations: [ PatientTaskComponent ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  
});
