import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { ApiService } from '../api.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogeComponent } from '../alert-dialoge/alert-dialoge.component';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-task',
  templateUrl: './patient-task.component.html',
  styleUrls: ['./patient-task.component.css']
})
export class PatientTaskComponent {
  today = new Date();
 todaysDateTime = '';
  toolBarOpen = false
  id:any;
  selectedCount:number=0;
  constructor(private api: ApiService, private matDialog: MatDialog,private router:Router) {
    this.todaysDateTime = formatDate(this.today, 'dd MMMM yyyy | hh:mm', 'en-US', '+0530');
    this.getPatient();
  }

  getPatient = ()=>{
    this.api.viewtask(1).subscribe(

      (response) => {
        this.task = response;
        console.log(this.task);
        
      },error=>{
        this.handleError();
      }
    )
  }


  openDialog() {
    const dialogRef = this.matDialog.open(AlertDialogeComponent, {
      width: '350px',
    })
    dialogRef.componentInstance.refreshData.subscribe(()=>{
      this.getPatient();
      this.selectedCount = 0;
      this.api.setNonId();
      this.toolBarOpen = false;
    })
  }


  openToolBar = (event: any, id: any) => {

    this.api.setIds(id)
    this.selectedCount = this.api.getIds().length
    this.toolBarOpen = this.selectedCount>=1;
    if (this.toolBarOpen) {
      this.id = id
    }
    else {
      this.id = null
    }
  }

  handleError(){

     this.router.navigateByUrl("/error")
    
   }


  task: any = []

}
