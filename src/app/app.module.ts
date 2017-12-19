import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarsModule } from "./cars/cars.module";


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
