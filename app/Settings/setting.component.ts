import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {NavigationExtras} from "@angular/router";

import { HttpModule } from '@angular/http';
import {Http} from '@angular/http';
import { Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'setting-page',
 
  templateUrl: './app/Settings/setting.component.html',
  styleUrls: ['./app/Settings/setting.component.css']
})
export class SettingComponent implements OnInit{
Testsuits:Array<any>;
Client:Array<any>;
Technician:Array<any>;
Site:Array<any>;

constructor(private http: Http) {
    this.Testsuits = [
    {  name: 'AllTests'},
    { name: 'All Manual Tests' },
    { name: 'All Automated Tests' }
    
    ];
  }

ngOnInit()
{
 this.http.get('http://192.168.0.62/clara_phonetool/api/Client/clients')
      .subscribe(data => {
        console.log(data.json().Client); 
        this.Client = data.json().Client;
       console.log(this.Client); 
      });
 


this.http.get('http://192.168.0.62/clara_phonetool/api/Technician/technicians')
      .subscribe(data => {
        console.log(data.json().Technician); 
        this.Technician = data.json().Technician;
       console.log(this.Technician); 
      });


this.http.get('http://192.168.0.62/clara_phonetool/api/Site/sites')
      .subscribe(data => {
        console.log(data.json().Site); 
        this.Site= data.json().Site;
       console.log(this.Technician); 
      });



}




}