import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {NavigationExtras} from "@angular/router";

import { HttpModule } from '@angular/http';
import {Http} from '@angular/http';
import { Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

import {MdDialog, MdDialogRef} from '@angular/material';


import { URLSearchParams } from "@angular/http"
import { WebServiceComponent } from '../Webservice/app.service';
import { DataShare } from '../DataShare/datashare';


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

constructor(private http: Http,public dialog: MdDialog) {
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



    openDialog() {
    let dialogRef =this.dialog.open(DialogResultExampleDialog);




     dialogRef.afterClosed().subscribe(result => {
      console.log(result);

this.http.get('http://192.168.0.62/clara_phonetool/api/Client/clients')
      .subscribe(data => {
        console.log(data.json().Client); 
        this.Client = data.json().Client;
       console.log(this.Client); 
      });





    });

  }

 TechnicanDialog() {
    this.dialog.open(TechnicianComponent);
  }

SuiteDialog() {
    this.dialog.open(SuitesComponent);
  }

DeviceimageDialog() {
    this.dialog.open(DevicesImagesComponent);
  }







}


@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './app/Settings/setting-popup.component.html',
    styleUrls: ['./app/Settings/setting-popup.component.css']
})



export class DialogResultExampleDialog {

name: string;
phone:string;
address1:string;
address2:string;
city:string;
state:string;
postalcode:string;
country:string;
note:string;



device:number = 1;

  





private url:string='http://192.168.0.62/clara_phonetool/api/Client/register';

  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>, private webservice: WebServiceComponent) {}

cancelClients()
{
  

}




addClients()
{

let data1 = new URLSearchParams();
  data1.append('name',this.name);
  data1.append('phone',this.phone);
  data1.append('address',this.address1);
  data1.append('address_line_2',this.address2);
  data1.append('city',this.city);
  data1.append('state',this.state);
  data1.append('zipcode',this.postalcode);
  data1.append('note',this.note);
  data1.append('client_enabled',"1");
let body = data1.toString();

console.log(body);
  this.webservice.getuser(body, this.url).subscribe(data =>{


 
 console.log(data.json());


  err =>
  {
alert("error getting")

  }

});





}



}






@Component({
  selector: 'dialog-add-technician',
  templateUrl: './app/Settings/technicians/add-technician.component.html',
    styleUrls: ['./app/Settings/technicians/add-technician.component.css']
})



export class TechnicianComponent {


name:string;
username:string;
password:string;
confirmpassword:string;
role:string;

technicians :boolean = true;
suites:boolean = true;
fulldevicelogs:boolean = true;
deviceimages:boolean = true;
clients:boolean = true;
sites:boolean = true;
usb:boolean = true;
license:boolean = true;
fullreport:boolean = true;
poweroff:boolean = true;
loginenabled:boolean = true;



datatechnicians :string;
datasuites:string;
datafulldevicelogs:string;
datadeviceimages:string;
dataclients:string;
datasites:string;
datausb:string;
datalicense:string;
datafullreport:string;
datapoweroff:string;
dataloginenabled:string;



 
  constructor(public dialogRef: MdDialogRef<TechnicianComponent>) {}







addTechnicians()
{
  
 console.log(this.technicians); 

if(this.technicians)
{
this.datatechnicians="Manages technicias";

}

if(this.suites)
{
  this.datasuites="Manages test suites";
}
if (this.fulldevicelogs)
{
  this.datafulldevicelogs="Can view full device logs";

}

if(this.deviceimages)
{
  this.datadeviceimages="Manages device images";

}
if(this.clients)
{
  this.dataclients="Manages clients";

}

if(this.sites)
{
  
  this.datasites="Manages sites";
}
 if(this.usb)
 {
 this.datausb="Manages USB hubs"
 }

if(this.license)
 {
 this.datalicense="Manages USB hubs"
 }

if(this.fullreport)
 {
 this.datafullreport="Manages USB hubs"
 }

if(this.poweroff)
 {
 this.datapoweroff="Manages USB hubs"
 }




}



}


@Component({
  selector: 'dialog-add-suites',
  templateUrl: './app/Settings/suites/add-suites.component.html',
    styleUrls: ['./app/Settings/suites/add-suites.component.css']
})

export class SuitesComponent {
  constructor(public dialogRef: MdDialogRef<SuitesComponent>) {}
}





@Component({
  selector: 'dialog-add-deviceimages',
  templateUrl: './app/Settings/deviceimages/add-deviceimages.component.html',
    styleUrls: ['./app/Settings/deviceimages/add-deviceimages.component.css']
})


export class DevicesImagesComponent {
  constructor(public dialogRef: MdDialogRef<DevicesImagesComponent>) {}
}







