import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { FetchPersonComponent } from './fetch-person/fetch-person.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    FetchPersonComponent
  ],
  imports: [
    BrowserModule, FormsModule, MatCardModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
    
  }

}
