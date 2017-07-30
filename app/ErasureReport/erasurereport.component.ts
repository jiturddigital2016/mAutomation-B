import { Component, OnInit,OnDestroy} from '@angular/core';

import { Router } from '@angular/router';
import {Http} from '@angular/http';
import { WebServiceComponent } from '../Webservice/app.service';
import { DataShare } from '../DataShare/datashare';
import { SocketService } from './socketService';

import * as io from 'socket.io-client';

@Component({
  selector: 'erasurereport-page',
 
  templateUrl: './app/ErasureReport/erasurereport.component.html',
  styleUrls: ['./app/ErasureReport/erasurereport.component.css']
})
export class ErasurereportComponent implements OnInit, OnDestroy{
	
	private url:string='http://localhost:3000/devicesList';
	private installApkUrl:string='http://localhost:3000/installApk';
	devices : Array<any>;
	
	
	constructor(private http: Http,private webservice: WebServiceComponent,private router: Router, private datashare:DataShare, private socketService: SocketService) {
		this.webservice.devicesList(this.url)
		.subscribe(data => {  
			this.devices = data.json();
		});
		
	}

	ngOnInit() {
		this.devices = new Array();
	    
		this.socketService.on('addDevice', (device: any) => {
				
                this.devices.push(device);
        	});

        this.socketService.on('removeDevice', (device: any) => {
               
                let vendorId:number = device.vendorId;
                let updatedDevices: Array<any>;
                updatedDevices = this.devices.filter((el) => {
				    return el.vendorId !== vendorId;
				});
				this.devices = updatedDevices;
            });
	}

	  // Let's disconnect
	ngOnDestroy() {
	    
	}

	installApk(event) {
		this.webservice.installApk(this.installApkUrl)
		.subscribe(data => {  
			this.devices = data.json();
		});
	}


}