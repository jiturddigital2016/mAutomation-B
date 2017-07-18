import { Injectable } from '@angular/core';
 
@Injectable()
export class DataShare{
 
    public logindetails: any;
    public edit_client:string;
 public Edit_Client_Detials: any;

  public edit_site:string;
 public Edit_Site_Detials: any;

public login_API: string ='http://aryvartdev.com/clara_phonetool/index.php/api/Admin/login';

public Changepassword_API:string ='http://aryvartdev.com/clara_phonetool/api/Technician/changepassword';

public Previous_Report_API: string ='http://aryvartdev.com/clara_phonetool/api/Report/reports'


public Display_Clientdetails_API: string ='http://aryvartdev.com/clara_phonetool/api/Client/clients';

public Display_Techniciandetails_API: string ='http://aryvartdev.com/clara_phonetool/api/Technician/technicians';

public Display_Sitesdetails_API: string ='http://aryvartdev.com/clara_phonetool/api/Site/sites';


public Client_Register_API: string ='http://aryvartdev.com/clara_phonetool/api/Client/register';


public Technician_Register_API: string ='http://aryvartdev.com/clara_phonetool/api/Technician/register';

public Sites_Register_API: string ='http://aryvartdev.com/clara_phonetool/api/Site/register';

public Test_Suites_API: string ='http://aryvartdev.com/clara_phonetool/api/Test/testdevice';


public Client_Edit_API: string ='http://aryvartdev.com/clara_phonetool/api/Client/editclient';



public Site_Edit_API: string ='http://aryvartdev.com/clara_phonetool/api/Site/editsite';




    public constructor() { }
 
}