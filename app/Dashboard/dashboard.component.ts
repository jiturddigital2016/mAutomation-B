import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataShare } from '../DataShare/datashare';


@Component({
  selector: 'dashboard-data',
    templateUrl: `./app/Dashboard/dashboard.component.html`,
  styleUrls: ['./app/Dashboard/dashboard.component.css'],
})
export class DashboardComponent {
username:string;
usertype:string;


    public constructor(private route: ActivatedRoute,private datashare:DataShare)
    {

console.log("venkatesh"+this.datashare.logindetails[0].username);

this.username=this.datashare.logindetails[0].username;
this.usertype=this.datashare.logindetails[0].user_type;

    }
        
   



}
