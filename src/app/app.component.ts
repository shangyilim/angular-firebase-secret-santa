import { Component, AfterContentInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, DialogPosition} from '@angular/material';
import { GreetingsComponent } from './greetings/greetings.component';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'app works!';

  sockPositionArea= [
    11,12,13,14,15,16,17,18,
    21,22,23,24,25,26,27,28,
    31,32,33,34,35,36,37,38,
    41,42,            47,48,
    51,52,            57,58,
    61,62,            67,68,
    71,72,            77,78];
    
  wishlist = [];

  constructor(public dialog: MatDialog, public db: AngularFireDatabase) {
    this.wishlist = [];

    const database = db.app.database();
    const fireWishlist = database.ref('/wishlist');

    fireWishlist.once('value').then((snapshot)=>{
      const keys = Object.keys(snapshot.val());
      this.wishlist = keys.map(k => {
        
        return {
          key: k, 
          ...(snapshot.val()[k])
        }
      });
    });

    fireWishlist.on('child_added', (data) => {
      if(this.wishlist && this.wishlist.find(w=> w.key !== data.key )){
        this.wishlist.push(data.val());
      }
    });
    this.openDialog();
  }

  ngAfterContentInit(){
      
  }
  
  openDialog(): void {
    let dialogRef = this.dialog.open(GreetingsComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  findWishByPosition(position:number){
    if(!this.wishlist){
      return undefined;
    }
    return this.wishlist.find(w => w.position === position)
  }

  wishAtPosition(position: number){
    const wish = this.findWishByPosition(position);
    return wish;
  }


}
