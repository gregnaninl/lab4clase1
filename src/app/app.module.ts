import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { Clase1Component } from './pages/clase1/clase1.component';
import { CabeceraComponent } from './pages/cabecera/cabecera.component';
import { HeaderComponent } from './pages/header/header.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule} from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import {  environment } from './../environments/environment';
import { RegistroComponent } from './pages/registro/registro.component';
import { EnviarCorreoComponent } from './pages/enviar-correo/enviar-correo.component';

//servicios
import { AuthService } from './servicios/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    Clase1Component,
    CabeceraComponent,
    HeaderComponent,
    RegistroComponent,
    EnviarCorreoComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }



