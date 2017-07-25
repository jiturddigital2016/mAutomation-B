import { Component} from '@angular/core';

import { Router } from '@angular/router';
import {Http} from '@angular/http';
import { WebServiceComponent } from '../Webservice/app.service';
import { DataShare } from '../DataShare/datashare';

import * as io from 'socket.io-client';

@Component({
  selector: 'erasurereport-page',
 
  templateUrl: './app/ErasureReport/erasurereport.component.html',
  styleUrls: ['./app/ErasureReport/erasurereport.component.css']
})
export class ErasurereportComponent{
	
	private url:string='http://localhost:3000/devicesList';
	devices : Array<any> = [];
	private socket;
	constructor(private http: Http,private webservice: WebServiceComponent,private router: Router, private datashare:DataShare) {
		this.webservice.devicesList(this.url)
		.subscribe(data => {  
			this.devices = data.json();
		});

		this.socket = io('http://localhost:3000');
		this.socket.on('addDevice', function (device) {
				
                console.log("Added device"+JSON.stringify(device));
            
                //this.devices.push(device);
        	});

        this.socket.on('removeDevice', function (device) {
                console.log("Removed device"+JSON.stringify(device));
            });
	}

}