import { Component} from '@angular/core';

import { Router } from '@angular/router';
import {Http} from '@angular/http';
import { WebServiceComponent } from '../Webservice/app.service';
import { DataShare } from '../DataShare/datashare';

@Component({
  selector: 'erasurereport-page',
 
  templateUrl: './app/ErasureReport/erasurereport.component.html',
  styleUrls: ['./app/ErasureReport/erasurereport.component.css']
})
export class ErasurereportComponent{
	
	private url:string='http://localhost:3000/devicesList';
	
	constructor(private http: Http,private webservice: WebServiceComponent,private router: Router, private datashare:DataShare) {

		this.webservice.devicesList(this.url).subscribe(data =>{
			console.log(data);
		});
	}

}