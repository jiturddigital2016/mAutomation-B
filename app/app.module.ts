import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';

import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon';

@NgModule({
  imports:      [ BrowserModule, MdCardModule, MdButtonModule, MdIconModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ MdIconRegistry ]
})
export class AppModule { }
