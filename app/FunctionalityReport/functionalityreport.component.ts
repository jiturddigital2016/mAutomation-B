import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NavigationExtras} from "@angular/router";

import { HttpModule } from '@angular/http';
import {Http} from '@angular/http';
import { Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

import { URLSearchParams } from "@angular/http"
import { WebServiceComponent } from '../Webservice/app.service';
import { DataShare } from '../DataShare/datashare';

@Component({
  selector: 'functionality-page',
 
  templateUrl: './app/FunctionalityReport/functionalityreport.component.html',
  styleUrls: ['./app/FunctionalityReport/functionalityreport.component.css']
})
export class FunctionalityReportComponent {



Functionalityreport_data:Array<any>;

client_list=[{name :'ACME Labs,LLC.'},{name:'Jenny&Co'},{name:'Internal(No Client'},{name :'ACME Labs,LLC.'},{name:'Jenny&Co'},{name:'Internal(No Client'}];



clientname: string =this.client_list[0].name;



constructor(private http: Http,private webservice: WebServiceComponent,private datashare:DataShare) {



 


}
/*
displayclientdetails($event, clients)
{
	
console.log(clients);



let data1 = new URLSearchParams();
  data1.append('clientid', "1");
  data1.append('adminid',"1");
data1.append('type',"0");

let body = data1.toString();
  this.webservice.getuser(body, this.datashare.Erasurereport_API).subscribe(data =>{

if(data.json().status == true)
{
 
 console.log(data.json().Reports);
this.Functionalityreport_data=data.json().Reports;

}
else
{
  alert(data.json().message)
}
  err =>
  {
alert("error getting")

  }

});



}
*/





}