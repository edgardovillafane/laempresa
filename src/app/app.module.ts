import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CielorrasosComponent } from './cielorrasos/cielorrasos.component';
import { RevestimientosComponent } from './revestimientos/revestimientos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CielorrasosComponent,
    RevestimientosComponent,
    ContactoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
