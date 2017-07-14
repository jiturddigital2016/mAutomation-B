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
  selector: 'editprofile-page',
 
  templateUrl: './app/Editprofile/editprofile.component.html',
  styleUrls: ['./app/Editprofile/editprofile.component.css']
})
export class EditProfileComponent{

editusername:string;
password : string;
conformpassword:string;
userid : string;
usertype: string;

private url:string='http://192.168.0.62/clara_phonetool/api/Technician/changepassword';

 constructor(private http: Http,private webservice: WebServiceComponent,private datashare:DataShare) {

this.editusername=this.datashare.logindetails[0].username;
this.usertype=this.datashare.logindetails[0].user_type;

if(this.usertype == "admin")
{
  this.userid=this.datashare.logindetails[0].admin_id;

  
}
else
{
  this.userid=this.datashare.logindetails[0].technician_id;

  
}



 }

getEditprofileDetails()
{

if (this.password == this.conformpassword)
{
	let data1 = new URLSearchParams();
  data1.append('technician_id', this.userid);
  data1.append('password',this.password);
let body = data1.toString();
  this.webservice.getuser(body, this.url).subscribe(data =>{

if(data.json().status == true)
{
 
 console.log(data.json().message);

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
else
{
	alert("password and conform password not matched")

}


}




}