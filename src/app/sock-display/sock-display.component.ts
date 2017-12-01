import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SockDialogComponent } from '../sock-dialog/sock-dialog.component';

@Component({
  selector: 'app-sock-display',
  templateUrl: './sock-display.component.html',
  styleUrls: ['./sock-display.component.css']
})
export class SockDisplayComponent implements OnInit {

  @Input() wish: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  get sock() {
    return `assets/sock${this.wish.sock}.png`;
  }

  showWish(){
    let dialogRef = this.dialog.open(SockDialogComponent, {
      data: {
        wishlist: this.wish,
        editMode: false,
    }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
