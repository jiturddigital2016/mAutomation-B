import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';


import { WebServiceComponent } from './Webservice/app.service';
import { DataShare } from './DataShare/datashare';



import { LoginComponent } from './Login/login.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { EditProfileComponent } from './Editprofile/editprofile.component';
import { routes } from './app-routing.module';
import { PreviousreportComponent } from './PreviousReport/previousreport.component';
import { ErasurereportComponent } from './ErasureReport/erasurereport.component';
import { FunctionalityReportComponent } from './FunctionalityReport/functionalityreport.component';
import { SettingComponent } from './Settings/setting.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AppComponent,
    EditProfileComponent,
    SettingComponent,
    PreviousreportComponent,
    ErasurereportComponent,
    FunctionalityReportComponent,
    SettingComponent
    
    
  ],
  imports: [
    BrowserModule,
    MaterialModule, 
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,  FormsModule,
    HttpModule,
    RouterModule,
    routes
    


    
    
   
  ],
  providers: [WebServiceComponent,DataShare],
  bootstrap: [AppComponent]
})
export class AppModule { }
