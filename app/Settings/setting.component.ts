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
compare:String;


constructor(private http: Http,public dialog: MdDialog,private datashare:DataShare) {
    this.Testsuits = [
    {  name: 'AllTests'},
    { name: 'All Manual Tests' },
    { name: 'All Automated Tests' }
    
    ];
  }

ngOnInit()
{
 this.http.get(this.datashare.Display_Clientdetails_API)
      .subscribe(data => {
        console.log(data.json().Client); 
        this.Client = data.json().Client;
       console.log(this.Client); 
      });
 


this.http.get(this.datashare.Display_Techniciandetails_API)
      .subscribe(data => {
        console.log(data.json().Technician); 
        this.Technician = data.json().Technician;
       console.log(this.Technician); 
      });


this.http.get(this.datashare.Display_Sitesdetails_API)
      .subscribe(data => {
        console.log(data.json().Site); 
        this.Site= data.json().Site;
       console.log(this.Technician); 
      });



}


Edit_Client_Details($event, client)
{
  
console.log(client);
this.datashare.edit_client="Edit";
this.datashare.Edit_Client_Detials=client;

    let dialogRef =this.dialog.open(DialogResultExampleDialog);




     dialogRef.afterClosed().subscribe(result => {
      console.log(result);



this.http.get(this.datashare.Display_Clientdetails_API)
      .subscribe(data => {
        console.log(data.json().Client); 
        this.Client = data.json().Client;
       console.log(this.Client); 
      });





    });





}



    openDialog() {

this.datashare.edit_client="Add";

console.log("sample"+this.datashare.edit_client)

    let dialogRef =this.dialog.open(DialogResultExampleDialog);




     dialogRef.afterClosed().subscribe(result => {
      console.log(result);



this.http.get(this.datashare.Display_Clientdetails_API)
      .subscribe(data => {
        console.log(data.json().Client); 
        this.Client = data.json().Client;
       console.log(this.Client); 
      });





    });

  }




 TechnicanDialog() {
  let dialogRef =this.dialog.open(TechnicianComponent);

 dialogRef.afterClosed().subscribe(result => {
      console.log(result);


this.http.get(this.datashare.Display_Techniciandetails_API)
      .subscribe(data => {
        console.log(data.json().Technician); 
        this.Technician = data.json().Technician;
       console.log(this.Technician); 
      });



    });



  }

SuiteDialog() {
    this.dialog.open(SuitesComponent);
  }

DeviceimageDialog() {
    this.dialog.open(DevicesImagesComponent);
  }



Edit_Site_Details($event, site)
{

  console.log(site);

this.datashare.edit_site="Edit";
this.datashare.Edit_Site_Detials=site;

let dialogRef =this.dialog.open(SitesComponent);




     dialogRef.afterClosed().subscribe(result => {
      console.log(result);


this.http.get(this.datashare.Display_Sitesdetails_API)
      .subscribe(data => {
        console.log(data.json().Site); 
        this.Site= data.json().Site;
      
      });






    });





}












 sitesDialog() {

 this.datashare.edit_site="Add";
    let dialogRef =this.dialog.open(SitesComponent);




     dialogRef.afterClosed().subscribe(result => {
      console.log(result);


this.http.get(this.datashare.Display_Sitesdetails_API)
      .subscribe(data => {
        console.log(data.json().Site); 
        this.Site= data.json().Site;
      
      });






    });

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
client_enabled:string;
client_id:string;
open_popup:string;
device:boolean = true;

url:string;

 






  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>, private webservice: WebServiceComponent,private datashare:DataShare) {



if(this.datashare.edit_client=="Edit")
{
  console.log("venkatesh"+this.datashare.edit_client);

this.name=this.datashare.Edit_Client_Detials.name;
this.phone=this.datashare.Edit_Client_Detials.phone;
this.address1=this.datashare.Edit_Client_Detials.address;
this.address2=this.datashare.Edit_Client_Detials.address_line_2;
this.city=this.datashare.Edit_Client_Detials.city;
this.state=this.datashare.Edit_Client_Detials.state;
this.postalcode=this.datashare.Edit_Client_Detials.zipcode;
this.country=this.datashare.Edit_Client_Detials.country;
this.note=this.datashare.Edit_Client_Detials.notes;
if(this.datashare.Edit_Client_Detials.client_enabled == 1)
{
this.client_enabled="1"
this.device = true;
}
else
{
  this.client_enabled="0"
  this.device= false;

}
this.client_id=this.datashare.Edit_Client_Detials.client_id;
this.open_popup=this.datashare.edit_client;

}
else
{
  this.name="";
this.phone="";
this.address1="";
this.address2="";
this.city="";
this.state="";
this.postalcode="";
this.country="";
this.note="";

console.log("testing"+this.datashare.edit_client);

}




  }







cancelClients()
{
  


}

  




addClients()
{




if(this.device)
{
  this.client_enabled ="1"

}
else
{
  this.client_enabled ="0"
}

if(this.open_popup =="Edit")
{
  
  this.url=this.datashare.Client_Edit_API;
}
else
{
  this.url=this.datashare.Client_Register_API;
}



console.log("testing"+this.client_enabled);

let data1 = new URLSearchParams();
  data1.append('name',this.name);
  data1.append('phone',this.phone);
  data1.append('address',this.address1);
  data1.append('address_line_2',this.address2);
  data1.append('city',this.city);
  data1.append('state',this.state);
  data1.append('zipcode',this.postalcode);
  data1.append('notes',this.note);
  data1.append('client_enabled',this.client_enabled);

if(this.open_popup == "Edit")
{
  data1.append('clientid',this.client_id);
}


let body = data1.toString();

console.log(body);
  this.webservice.getuser(body, this.url).subscribe(data =>{

if(data.json().status == false)
{
  alert(data.json().message)

}
 
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
role:string="";
loginenabledstatus:string;


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
arraydata:Array<any>;


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


 
  constructor(public dialogRef: MdDialogRef<TechnicianComponent>,private webservice: WebServiceComponent,private datashare:DataShare) {}







addTechnicians()
{
  
 console.log(this.technicians); 


if(this.password == this.confirmpassword)
{
  

if(this.technicians)
{
this.datatechnicians="Manages technicias,";
this.role=this.role+this.datatechnicians;
}

if(this.suites)
{
  this.datasuites="Manages test suites,";

this.role=this.role+this.datasuites;


}
if (this.fulldevicelogs)
{
  this.datafulldevicelogs="Canview full devicelogs,";
this.role=this.role+this.datafulldevicelogs;

}

if(this.deviceimages)
{
  this.datadeviceimages="Manages deviceimages,";
  this.role=this.role+this.datadeviceimages;

}
if(this.clients)
{
  this.dataclients="Manages clients,";
  this.role=this.role+this.dataclients;

}

if(this.sites)
{
  
  this.datasites="Manages sites,";

 this.role=this.role+this.datasites;

}
 if(this.usb)
 {
 this.datausb="Manages USBhubs,";
 this.role=this.role+this.datausb;

 }






if(this.license)
 {
 this.datalicense="Manages license importing,";
 this.role=this.role+this.datalicense;
 }

if(this.fullreport)
 {
 this.datafullreport="Can viewfull report history,";
 this.role=this.role+this.datafullreport;
 }

if(this.poweroff)
 {
 this.datapoweroff="Can poweroff the system,";
this.role=this.role+this.datapoweroff;

 }

if(this.loginenabled)
{
  
this.loginenabledstatus="1";

}
else
{
 this.loginenabledstatus="0"; 

}

this.arraydata = this.role.split(",");
alert(this.arraydata[0]);

console.log("venaktesh"+this.role);


let data1 = new URLSearchParams();
data1.append('username',this.username);
  data1.append('password',this.password);
  data1.append('fullname',this.name);
  data1.append('roles',this.role);

 data1.append('login_access',this.loginenabledstatus);

 
let body = data1.toString();

console.log(body);
  this.webservice.getuser(body, this.datashare.Technician_Register_API).subscribe(data =>{
 

 
 console.log(data.json());

if(data.json().status == false)
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
  
  alert("your password and confirm password not matched")
}





}



}


@Component({
  selector: 'dialog-add-suites',
  templateUrl: './app/Settings/suites/add-suites.component.html',
    styleUrls: ['./app/Settings/suites/add-suites.component.css']
})

export class SuitesComponent {


alltests:boolean;
userid:string;
testcases:string="";

all_automated_tests:boolean;
all_manual_tests:boolean;


suite_title:string;
run_manualtest:boolean;
suite_enabled:boolean;

data_run_manualtest:string;
data_alltests:string;
data_all_automated_tests:string;
data_all_manual_tests:string;
data_suite_enabled:string;






  AT_wifi:boolean;
AT_Cellular:boolean;
AT_Blutooth:boolean;
AT_Gps:boolean;
AT_device_not_jailbroken:boolean;
AT_Battery_charge:boolean;
AT_Vibration_Accelerometer:boolean;
AT_Camera_Back_Flashlight:boolean;
AT_Camera_Front_Flashlight:boolean;
AT_Camera_Back_ReadQR:boolean;
AT_Microphone_Speaker:boolean;
AT_Usb_Data:boolean;
AT_Usb_Power:boolean;
AT_IMEI_Blacklist:boolean;
AT_Simcard:boolean;
AT_Activation_Lock:boolean;
AT_Carrier_Lock:boolean;
AT_Warranty:boolean;




MT_Touchscreen_singletouch:boolean;
MT_Touchscreen_multitouch:boolean;
MT_Screen_Brightness:boolean;
MT_Dead_Pixels:boolean;
MT_Fingerprint:boolean;
MT_Home_Button:boolean;
MT_Volume_Buttons:boolean;
MT_Silent_Mode:boolean;
MT_Vibration:boolean;
MT_Accelerometer:boolean;
MT_Compass:boolean;
MT_Flashlight:boolean;
MT_Camera_front:boolean;
MT_camera_back:boolean;
MT_MicroPhone:boolean;
MT_Speaker:boolean;
MT_Headphone:boolean;
MT_USB_Port:boolean;
MT_USB_Power:boolean;
MT_Proximity_Sensor:boolean;
MT_Phone_Call:boolean;
MT_Cosemetic_Damage:boolean;
MT_Heavy_Damage:boolean;
MT_Water_Damage:boolean;
MT_Simcard:boolean;
MT_Cellular:boolean;
MT_Buletooth:boolean;
MT_wifi:boolean;
MT_Gps:boolean;
MT_Activation_lock:boolean;
MT_Carrier_Lock:boolean;








  constructor(public dialogRef: MdDialogRef<SuitesComponent>,private webservice: WebServiceComponent,private datashare:DataShare) {}




Alltests()
{
  console.log(this.alltests);

if(this.alltests)
{
  this.showAllAutomationTests();
  this.ShowAllManualTests();

  this.all_automated_tests=true;
this.all_manual_tests=true;

}
else
{
 this.HideAllAutomationTests(); 
 this.HideAllManualTests();

 this.all_automated_tests=false;
this.all_manual_tests=false;


}


}

All_automated_tests()
{
  
if(this.all_automated_tests)
{


  this.showAllAutomationTests();


}

else
{
  this.HideAllAutomationTests();
}

if(this.all_automated_tests && this.all_manual_tests)
{
  this.alltests=true;

}
else
{
  this.alltests=false;

}




}


All_manual_tests()
{

  if(this.all_manual_tests)
{
  this.ShowAllManualTests();


}
else
{
  this.HideAllManualTests();
}


if(this.all_automated_tests && this.all_manual_tests)
{
  this.alltests=true;

}
else
{
  this.alltests=false;

}



}


All_automated_testscases()
{
  if(this.AT_wifi &&
this.AT_Cellular &&
this.AT_Blutooth &&
this.AT_Gps &&
this.AT_device_not_jailbroken &&
this.AT_Battery_charge &&
this.AT_Vibration_Accelerometer &&
this.AT_Camera_Back_Flashlight &&
this.AT_Camera_Front_Flashlight &&
this.AT_Camera_Back_ReadQR &&
this.AT_Microphone_Speaker &&
this.AT_Usb_Data &&
this.AT_Usb_Power &&
this.AT_IMEI_Blacklist &&
this.AT_Simcard &&
this.AT_Activation_Lock &&
this.AT_Carrier_Lock &&
this.AT_Warranty)
{
  this.all_automated_tests=true;


}
else
{
   this.all_automated_tests=false;
   this.alltests=false;

}

if(this.all_automated_tests && this.all_manual_tests)
{
  this.alltests=true;

}
else
{
  this.alltests=false;

}


}




All_manual_testscases()
{
  
if(this.MT_Touchscreen_singletouch &&
this.MT_Touchscreen_multitouch &&
this.MT_Screen_Brightness &&
this.MT_Dead_Pixels &&
this.MT_Fingerprint &&
this.MT_Home_Button &&
this.MT_Volume_Buttons &&
this.MT_Silent_Mode &&
this.MT_Vibration &&
this.MT_Accelerometer &&
this.MT_Compass &&
this.MT_Flashlight &&
this.MT_Camera_front &&
this.MT_camera_back &&
this.MT_MicroPhone &&
this.MT_Speaker &&
this.MT_Headphone &&
this.MT_USB_Port &&
this.MT_USB_Power &&
this.MT_Proximity_Sensor &&
this.MT_Phone_Call &&
this.MT_Cosemetic_Damage &&
this.MT_Heavy_Damage &&
this.MT_Water_Damage &&
this.MT_Simcard &&
this.MT_Cellular &&
this.MT_Buletooth &&
this.MT_wifi &&
this.MT_Gps &&
this.MT_Activation_lock &&
this.MT_Carrier_Lock)
{
  this.all_manual_tests=true;
}
else
{
  
 this.all_manual_tests=false;
 this.alltests=false;

}

if(this.all_automated_tests && this.all_manual_tests)
{
  this.alltests=true;

}
else
{
  this.alltests=false;

}


}







showAllAutomationTests()
{
  this.AT_wifi=true;
this.AT_Cellular=true;
this.AT_Blutooth=true;
this.AT_Gps=true;
this.AT_device_not_jailbroken=true;
this.AT_Battery_charge=true;
this.AT_Vibration_Accelerometer=true;
this.AT_Camera_Back_Flashlight=true;
this.AT_Camera_Front_Flashlight=true;
this.AT_Camera_Back_ReadQR=true;
this.AT_Microphone_Speaker=true;
this.AT_Usb_Data=true;
this.AT_Usb_Power=true;
this.AT_IMEI_Blacklist=true;
this.AT_Simcard=true;
this.AT_Activation_Lock=true;
this.AT_Carrier_Lock=true;
this.AT_Warranty=true;
  console.log("venkatesh");
}


HideAllAutomationTests()
{
 this.AT_wifi=false;
this.AT_Cellular=false;
this.AT_Blutooth=false;
this.AT_Gps=false;
this.AT_device_not_jailbroken=false;
this.AT_Battery_charge=false;
this.AT_Vibration_Accelerometer=false;
this.AT_Camera_Back_Flashlight=false;
this.AT_Camera_Front_Flashlight=false;
this.AT_Camera_Back_ReadQR=false;
this.AT_Microphone_Speaker=false;
this.AT_Usb_Data=false;
this.AT_Usb_Power=false;
this.AT_IMEI_Blacklist=false;
this.AT_Simcard=false;
this.AT_Activation_Lock=false;
this.AT_Carrier_Lock=false;
this.AT_Warranty=false;
  console.log("venkatesh");
}



ShowAllManualTests()
{
  
this.MT_Touchscreen_singletouch=true;
this.MT_Touchscreen_multitouch=true;
this.MT_Screen_Brightness=true;
this.MT_Dead_Pixels=true;
this.MT_Fingerprint=true;
this.MT_Home_Button=true;
this.MT_Volume_Buttons=true;
this.MT_Silent_Mode=true;
this.MT_Vibration=true;
this.MT_Accelerometer=true;
this.MT_Compass=true;
this.MT_Flashlight=true;
this.MT_Camera_front=true;
this.MT_camera_back=true;
this.MT_MicroPhone=true;
this.MT_Speaker=true;
this.MT_Headphone=true;
this.MT_USB_Port=true;
this.MT_USB_Power=true;
this.MT_Proximity_Sensor=true;
this.MT_Phone_Call=true;
this.MT_Cosemetic_Damage=true;
this.MT_Heavy_Damage=true;
this.MT_Water_Damage=true;
this.MT_Simcard=true;
this.MT_Cellular=true;
this.MT_Buletooth=true;
this.MT_wifi=true;
this.MT_Gps=true;
this.MT_Activation_lock=true;
this.MT_Carrier_Lock=true;

}






HideAllManualTests()
{
  

this.MT_Touchscreen_singletouch=false;
this.MT_Touchscreen_multitouch=false;
this.MT_Screen_Brightness=false;
this.MT_Dead_Pixels=false;
this.MT_Fingerprint=false;
this.MT_Home_Button=false;
this.MT_Volume_Buttons=false;
this.MT_Silent_Mode=false;
this.MT_Vibration=false;
this.MT_Accelerometer=false;
this.MT_Compass=false;
this.MT_Flashlight=false;
this.MT_Camera_front=false;
this.MT_camera_back=false;
this.MT_MicroPhone=false;
this.MT_Speaker=false;
this.MT_Headphone=false;
this.MT_USB_Port=false;
this.MT_USB_Power=false;
this.MT_Proximity_Sensor=false;
this.MT_Phone_Call=false;
this.MT_Cosemetic_Damage=false;
this.MT_Heavy_Damage=false;
this.MT_Water_Damage=false;
this.MT_Simcard=false;
this.MT_Cellular=false;
this.MT_Buletooth=false;
this.MT_wifi=false;
this.MT_Gps=false;
this.MT_Activation_lock=false;
this.MT_Carrier_Lock=false;


}



addSuites()
{
  



if(this.run_manualtest)
{
  this.data_run_manualtest="1";
}else
{
  this.data_run_manualtest="0";

}


if(this.alltests)
{
 this.data_alltests="1"; 
}
else
{
  this.data_alltests="0"; 
}

if(this.all_automated_tests)
{
 this.data_all_automated_tests="1"; 
}
else
{
  this.data_all_automated_tests="0"; 
}


if(this.all_manual_tests)
{
 this.data_all_manual_tests="1"; 
}
else
{
  this.data_all_manual_tests="0"; 
}

if(this.suite_enabled)
{
  this.data_suite_enabled="1";
}
else
{
  this.data_suite_enabled="0";
}



if(this.datashare.logindetails[0].user_type == "admin")
{
  this.userid=this.datashare.logindetails[0].admin_id;

  
}
else
{
  this.userid=this.datashare.logindetails[0].technician_id;

  
}

if(this.AT_wifi)
{
  this.testcases=this.testcases+"WiFi,";
}

if(this.AT_Cellular)
{
 this.testcases=this.testcases+"Cellular,";

}

if(this.AT_Blutooth)
{
  this.testcases=this.testcases+"Blutooth,"; 
}

if(this.AT_Gps)
{
  this.testcases=this.testcases+"GPS,"; 
}

if(this.AT_device_not_jailbroken)
{
  this.testcases=this.testcases+"Device is not jailbroken,"; 
}

if(this.AT_Battery_charge)
{
  this.testcases=this.testcases+"Battery Charge,"; 
}

if(this.AT_Vibration_Accelerometer)
{
  this.testcases=this.testcases+"Vibration+Accelerometer,"; 
}

if(this.AT_Camera_Back_Flashlight)
{
  this.testcases=this.testcases+"Camera(back)+Flashlight,"; 
}

if(this.AT_Camera_Front_Flashlight)
{
  this.testcases=this.testcases+"Camera(front)-Read QR,"; 
}


if(this.AT_Camera_Back_ReadQR)
{
  this.testcases=this.testcases+"Camera(back)-Read QR,"; 
}

if(this.AT_Microphone_Speaker)
{
  this.testcases=this.testcases+"Microphone+Speaker,"; 
}

if(this.AT_Usb_Data)
{
  this.testcases=this.testcases+"USB Data,"; 
}

if(this.AT_Usb_Power)
{
  this.testcases=this.testcases+"USB Power,"; 
}

if(this.AT_IMEI_Blacklist)
{
  this.testcases=this.testcases+"IMEI Blacklist,"; 
}

if(this.AT_Simcard)
{
  this.testcases=this.testcases+"SIM Card,"; 
}


if(this.AT_Activation_Lock)
{
  this.testcases=this.testcases+"Activation Lock,"; 
}

if(this.AT_Carrier_Lock)
{
  this.testcases=this.testcases+"Carrier Lock,"; 
}

if(this.AT_Warranty)
{
  this.testcases=this.testcases+"Warranty," ;
}

if(this.MT_Touchscreen_singletouch)
{
  this.testcases=this.testcases+"Touchscreen(single touch)," ;
}

if(this.MT_Touchscreen_multitouch)
{
  this.testcases=this.testcases+"Touchscreen(multi-touch)," ;
}
if(this.MT_Screen_Brightness)
{
  this.testcases=this.testcases+"Screen Brightness," ;
}

if(this.MT_Dead_Pixels)
{
  this.testcases=this.testcases+"Dead pixels," ;
}

if(this.MT_Fingerprint)
{
  this.testcases=this.testcases+"Fingerprint Reader," ;
}

if(this.MT_Home_Button)
{
  this.testcases=this.testcases+"Home Button," ;
}

if(this.MT_Volume_Buttons)
{
  this.testcases=this.testcases+"Volume Buttons," ;
}


if(this.MT_Silent_Mode)
{
  this.testcases=this.testcases+"Silent Mode Switch," ;
}

if(this.MT_Vibration)
{
  this.testcases=this.testcases+"Vibration," ;
}

if(this.MT_Accelerometer)
{
  this.testcases=this.testcases+"Accelerometer," ;
}

if(this.MT_Compass)
{
  this.testcases=this.testcases+"Compass," ;
}

if(this.MT_Flashlight)
{
  this.testcases=this.testcases+"Flashlight," ;
}

if(this.MT_Camera_front)
{
  this.testcases=this.testcases+"Camera(front)," ;
}

if(this.MT_camera_back)
{
  this.testcases=this.testcases+"Camera(back)," ;
}


if(this.MT_MicroPhone)
{
  this.testcases=this.testcases+"MicroPhone," ;
}


if(this.MT_Speaker)
{
  this.testcases=this.testcases+"Speaker," ;
}

if(this.MT_Headphone)
{
  this.testcases=this.testcases+"Headphone Jack," ;
}

if(this.MT_USB_Port)
{
  this.testcases=this.testcases+"USB Port," ;
}

if(this.MT_USB_Port)
{
  this.testcases=this.testcases+"USB Power," ;
}


if(this.MT_Proximity_Sensor)
{
  this.testcases=this.testcases+"Proximity Sensor," ;
}

if(this.MT_Phone_Call)
{
  this.testcases=this.testcases+"Phone Call," ;
}


if(this.MT_Cosemetic_Damage)
{
  this.testcases=this.testcases+"Cosemetic Damage," ;
}


if(this.MT_Heavy_Damage)
{
  this.testcases=this.testcases+"Heavy Damage," ;
}




if(this.MT_Water_Damage)
{
  this.testcases=this.testcases+"Water Damage," ;
}


if(this.MT_Simcard)
{
  this.testcases=this.testcases+"SIM Card," ;
}


if(this.MT_Cellular)
{
  this.testcases=this.testcases+"Cellular," ;
}

if(this.MT_Buletooth)
{
  this.testcases=this.testcases+"Buletooth," ;
}


if(this.MT_wifi)
{
  this.testcases=this.testcases+"WiFi," ;
}


if(this.MT_Gps)
{
  this.testcases=this.testcases+"GPS," ;
}

if(this.MT_Activation_lock)
{
  this.testcases=this.testcases+"Activation Lock," ;
}

if(this.MT_Carrier_Lock)
{
  this.testcases=this.testcases+"Carrier Lock" ;
}










let data1 = new URLSearchParams();


data1.append('suitetitle',this.suite_title);
data1.append('onlymanual',this.data_run_manualtest);
data1.append('automatedtest',this.data_all_automated_tests);
data1.append('technicianid',this.userid);
  data1.append('alltests',this.data_alltests);
  data1.append('manualtests',this.data_all_manual_tests);
  data1.append('testnames',this.testcases);
data1.append('suiteenabled',this.data_suite_enabled);


 
let body = data1.toString();

console.log(body);
  this.webservice.getuser(body, this.datashare.Test_Suites_API).subscribe(data =>{
 

 
 console.log(data.json());

if(data.json().status == false)
{
  alert(data.json().message)

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












}





@Component({
  selector: 'dialog-add-deviceimages',
  templateUrl: './app/Settings/deviceimages/add-deviceimages.component.html',
    styleUrls: ['./app/Settings/deviceimages/add-deviceimages.component.css']
})


export class DevicesImagesComponent {
  constructor(public dialogRef: MdDialogRef<DevicesImagesComponent>) {}
}



@Component({
  selector: 'sites-example-dialog',
  templateUrl: './app/Settings/sites/add-site.component.html',
    styleUrls: ['./app/Settings/sites/add-site.component.css']
})



export class SitesComponent {

name: string;
phone:string;
address1:string;
address2:string;
city:string;
state:string;
postalcode:string;
country:string;
note:string;
site_enabled:string;
site_id:string;
open_popup:string;
url:string;


device:boolean = true;

  







  constructor(public dialogRef: MdDialogRef<SitesComponent>, private webservice: WebServiceComponent,private datashare:DataShare) {



if(this.datashare.edit_site=="Edit")
{
  console.log("venkatesh"+this.datashare.edit_client);

this.name=this.datashare.Edit_Site_Detials.name;
this.phone=this.datashare.Edit_Site_Detials.phone;
this.address1=this.datashare.Edit_Site_Detials.address;
this.address2=this.datashare.Edit_Site_Detials.address_line_2;
this.city=this.datashare.Edit_Site_Detials.city;
this.state=this.datashare.Edit_Site_Detials.state;
this.postalcode=this.datashare.Edit_Site_Detials.zipcode;
this.country=this.datashare.Edit_Site_Detials.country;
this.note=this.datashare.Edit_Site_Detials.notes;
if(this.datashare.Edit_Site_Detials.site_enabled == 1)
{
this.site_enabled="1"
this.device = true;
}
else
{
  this.site_enabled="0"
  this.device= false;

}
this.site_id=this.datashare.Edit_Site_Detials.site_id;
this.open_popup=this.datashare.edit_site;

}
else
{
  this.name="";
this.phone="";
this.address1="";
this.address2="";
this.city="";
this.state="";
this.postalcode="";
this.country="";
this.note="";

console.log("testing"+this.datashare.edit_site);

}





  
  }

cancelClients()
{
  

}




addSites()
{


if(this.device)
{
  this.site_enabled ="1"

}
else
{
  this.site_enabled ="0"
}



let data1 = new URLSearchParams();
  data1.append('name',this.name);
  data1.append('phone',this.phone);
  data1.append('address',this.address1);
  data1.append('address_line_2',this.address2);
  data1.append('city',this.city);
  data1.append('state',this.state);
  data1.append('zipcode',this.postalcode);
  data1.append('notes',this.note);
  data1.append('site_enabled',this.site_enabled);

if(this.open_popup=="Edit")
{
  this.url=this.datashare.Site_Edit_API
  data1.append('siteid',this.site_id);
}else
{
  this.url=this.datashare.Sites_Register_API

}



let body = data1.toString();

console.log(body);
  this.webservice.getuser(body, this.url).subscribe(data =>{

if(data.json().status == false)
{
  alert(data.json().message)

}
 
 console.log(data.json());


  err =>
  {
alert("error getting")

  }

});





}



}









