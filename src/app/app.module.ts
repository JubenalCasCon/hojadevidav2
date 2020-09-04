import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PortadaComponent } from './portada/portada.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuiensoyComponent } from './quiensoy/quiensoy.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { from } from 'rxjs';


const routes:Routes=[{path:'',component:PaginaprincipalComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaComponent,
    InicioComponent,
    QuiensoyComponent,
    ProyectosComponent,
    ReferenciasComponent,
    EstudiosComponent,
    ContactoComponent,
    DocumentosComponent,
    PaginaprincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
