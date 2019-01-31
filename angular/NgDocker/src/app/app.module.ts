import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { FetchPersonComponent } from './fetch-person/fetch-person.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast'; 
import { StatusService } from './status.service';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    FetchPersonComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, MatCardModule, HttpClientModule, ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
    
  }

}
