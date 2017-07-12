import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
//import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';




import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard.component';

import { WebServiceComponent } from './Webservice/app.service';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialModule, 
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,  FormsModule,
    HttpModule,
    
    
   
  ],
  providers: [WebServiceComponent],
  bootstrap: [LoginComponent]
})
export class AppModule { }
