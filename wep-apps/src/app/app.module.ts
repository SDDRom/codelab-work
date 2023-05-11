import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TaskComponent } from './task/task.component';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule  } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyDuyiRtvs_p_3Z0r1WyC4wjx-z_ckYu80E",
      authDomain: "kanbanfire-2a08c.firebaseapp.com",
      projectId: "kanbanfire-2a08c",
      storageBucket: "kanbanfire-2a08c.appspot.com",
      messagingSenderId: "142407071145",
      appId: "1:142407071145:web:aa86ec12482820137200b8",
      measurementId: "G-RQND3V304X"
    }),
    AngularFirestoreModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
