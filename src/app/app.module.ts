import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MatButtonModule, MatDialogModule, MatFormFieldModule,
  MatInputModule, } from '@angular/material';
  import { AngularFireModule } from 'angularfire2';
  import { AngularFireDatabaseModule } from 'angularfire2/database';
  import { environment } from '../environments/environment';
  

import { AppComponent } from './app.component';
import { SocksButtonComponent } from './socks-button/socks-button.component';
import { SockDialogComponent } from './sock-dialog/sock-dialog.component';
import { SockDisplayComponent } from './sock-display/sock-display.component';
import { GreetingsComponent } from './greetings/greetings.component';

@NgModule({
  declarations: [
    AppComponent,
    SocksButtonComponent,
    SockDialogComponent,
    SockDisplayComponent,
    GreetingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SockDialogComponent,
    GreetingsComponent
  ]
})
export class AppModule { }
