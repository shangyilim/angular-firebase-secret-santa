import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<GreetingsComponent>) { 
  
    }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
