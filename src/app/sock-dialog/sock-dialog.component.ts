import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-sock-dialog',
  templateUrl: './sock-dialog.component.html',
  styleUrls: ['./sock-dialog.component.css']
})
export class SockDialogComponent {

  editMode:boolean;

  constructor(
    public dialogRef: MatDialogRef<SockDialogComponent>,
    public db: AngularFireDatabase,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log('edit mode:'+this.data.editMode);
     
      this.editMode = this.data.editMode;
    
     
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setSock(sockNumber) {
    this.data.wishlist.sock = sockNumber;
  }

  save() {
    const database = this.db.app.database();
    database.ref('wishlist').push({
      ...this.data.wishlist
    }).then((response) => {
      this.dialogRef.close();
    });
  }


}
