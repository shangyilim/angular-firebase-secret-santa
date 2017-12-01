import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, DialogPosition} from '@angular/material';
import { SockDialogComponent } from '../sock-dialog/sock-dialog.component';

@Component({
  selector: 'app-socks-button',
  templateUrl: './socks-button.component.html',
  styleUrls: ['./socks-button.component.css']
})
export class SocksButtonComponent implements OnInit {

  @Input() position: number;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(SockDialogComponent, {
      data: {
        wishlist: {
          sock: 1,
          position: this.position
        },
        editMode: true
    }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
