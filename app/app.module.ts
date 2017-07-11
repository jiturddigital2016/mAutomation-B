import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
//import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule, 
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,  FormsModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
