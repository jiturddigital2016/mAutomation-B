import { Component, OnInit } from '@angular/core';

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
  selector: 'previousreport-page',
 
 templateUrl: './app/PreviousReport/previousreport.component.html',
  styleUrls: ['./app/PreviousReport/previousreport.component.css']
})
export class PreviousreportComponent implements OnInit {

PreviousReport:Array<any>;

userid: string;

private url:string='http://192.168.0.62/clara_phonetool/api/Report/reports';

 constructor(private http: Http,private webservice: WebServiceComponent,private router: Router, public datashare:DataShare) {

this.userid=this.datashare.logindetails[0].admin_id;

 }
ngOnInit()
{
console.log("sample"+this.userid);
console.log("sample"+this.datashare.logindetails[0].admin_id);

let data1 = new URLSearchParams();
  data1.append('technician_id', this.datashare.logindetails[0].admin_id);
 
let body = data1.toString();
  this.webservice.getuser(body, this.url).subscribe(data =>{

this.PreviousReport=data.json().Reports;

console.log(this.PreviousReport);

  err =>
  {
alert("error getting")

  }

});






}



}

