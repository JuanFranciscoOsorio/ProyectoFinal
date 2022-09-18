import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulos
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule } from '@angular/forms'; //esto lo importamos

//componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { BienvenidaComponent } from './componets/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './componets/inicio/login/login.component';
import { RegisterComponent } from './componets/inicio/register/register.component';

@NgModule({ /*video 22*/ 
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule //copiamos el modulo que importamos

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
