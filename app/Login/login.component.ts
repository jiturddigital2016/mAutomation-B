import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {NavigationExtras} from "@angular/router";

import { HttpModule } from '@angular/http';
import {Http} from '@angular/http';
import { Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map'


@Component({
  selector: 'login-page',
 
  templateUrl: './app/login/login.component.html',
  styleUrls: ['./app/login/login.component.css']
})
export class LoginComponent {}