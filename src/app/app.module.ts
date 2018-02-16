import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CielorrasosComponent } from './cielorrasos/cielorrasos.component';
import { RevestimientosComponent } from './revestimientos/revestimientos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { ColocacionplacasComponent } from './colocacionplacas/colocacionplacas.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'revestimientos/:nombre',
    component: RevestimientosComponent,
  },
  {
    path: 'cielorrasos/:nombre',
    component: CielorrasosComponent,
  },
  {
    path: 'instalaciones/:slug',
    component: ColocacionplacasComponent,
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
    HomeComponent,
    CarouselBasicComponent,
    ColocacionplacasComponent,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],

  ],
  exports: [
    [RouterModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
