import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { AppComponent } from './app.component';
import { Clase1Component } from './pages/clase1/clase1.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { EnviarCorreoComponent } from './pages/enviar-correo/enviar-correo.component';


const routes: Routes = [
  {path: '', component :  BienvenidoComponent} ,
  {path: 'bienvenido', component : BienvenidoComponent  },
  {path: 'login', component : LoginComponent},
  {path: 'registro', component : RegistroComponent},
  {path: 'contra', component : EnviarCorreoComponent} , 
  {path: 'error', component : ErrorComponent} ,
  {path: 'clase1', component : Clase1Component} 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
