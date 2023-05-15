import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-dialoge',
  templateUrl: './alert-dialoge.component.html',
  styleUrls: ['./alert-dialoge.component.css']
})
export class AlertDialogeComponent {
  @Output() refreshData = new EventEmitter<any>();
  constructor(private api: ApiService, private dialogRef:MatDialogRef<AlertDialogeComponent>,private snackBar:MatSnackBar, private matDialog:MatDialog, private router:Router) { }

  showToaster=(message:any,value:any)=>{
    this.snackBar.open(message,value,{duration:68000,horizontalPosition:"center",verticalPosition:'top'})
  }
  deleteclick = () => {
   
    this.api.deletetask(this.api.getIds()).subscribe(
      (response: any) => {
        if (response.status = "success")
          this.refreshData.emit();
          this.showToaster("Task Deleted succcessfully","close");
          this.matDialog.closeAll();
      },error=>{
        this.handleError();
      }
    )

  }

  handleError(){

     this.router.navigateByUrl("/error")
    
     }

}