"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataShare = (function () {
    function DataShare() {
        this.login_API = 'http://localhost:3000/api/authenticate';
        this.Changepassword_API = 'http://localhost:3000/api/editpassword';
        this.Previous_Report_API = 'http://aryvartdev.com/clara_phonetool/api/Report/reports';
        this.Display_Clientdetails_API = 'http://localhost:3000/api/client_details';
        this.Display_Techniciandetails_API = 'http://localhost:3000/api/technician_details';
        this.Display_Sitesdetails_API = 'http://localhost:3000/api/site_details';
        this.Client_Register_API = 'http://localhost:3000/api/client_register';
        this.Technician_Register_API = 'http://localhost:3000/api/technician_register';
        this.Sites_Register_API = 'http://localhost:3000/api/site_register';
        this.Test_Suites_API = 'http://localhost:3000/api/testsuites_register';
        this.Client_Edit_API = 'http://localhost:3000/api/edit_client';
        this.Site_Edit_API = 'http://localhost:3000/api/edit_site';
        this.Technician_Edit_API = 'http://localhost:3000/api/edit_technician';
        this.Display_Testsuites_API = 'http://localhost:3000/api/testsuites_details';
        this.Display_Deviceimages_API = 'http://localhost:3000/api/device_images_details';
    }
    return DataShare;
}());
DataShare = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DataShare);
exports.DataShare = DataShare;
//# sourceMappingURL=datashare.js.map