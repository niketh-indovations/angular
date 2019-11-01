import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { BackendService } from "./services/backend.service";
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RowDataComponent } from './maincontainer/row-data/row-data.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MaincontainerComponent,
    RowDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents:[RowDataComponent],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
