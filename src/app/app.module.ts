import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CielorrasosComponent } from './cielorrasos/cielorrasos.component';
import { RevestimientosComponent } from './revestimientos/revestimientos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent,
  },
  {
    path: '',   redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'revestimientos',
    component: RevestimientosComponent,
},
{
  path: 'cielorrasos',
  component: CielorrasosComponent,
},
{
  path: 'contacto',
  component: ContactoComponent,
},
];

@NgModule({
  declarations: [
    AppComponent,
    CielorrasosComponent,
    RevestimientosComponent,
    ContactoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
