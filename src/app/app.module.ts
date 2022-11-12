import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulos
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule } from '@angular/forms'; //esto lo importamos

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



//componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { BienvenidaComponent } from './componets/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './componets/inicio/login/login.component';
import { RegisterComponent } from './componets/inicio/register/register.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { CambiarPasswordComponent } from './componets/dashboard/cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './componets/dashboard/cuestionarios/cuestionarios.component';
import { NavbarComponent } from './componets/dashboard/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { NuevoCuestionarioComponent } from './componets/dashboard/cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoUnoComponent } from './componets/dashboard/cuestionarios/nuevo-Cuestionario/paso-uno/paso-uno.component';
import { PasoDosComponent } from './componets/dashboard/cuestionarios/nuevo-Cuestionario/paso-dos/paso-dos.component';
//import { NuevoCuestionarioComponent } from './componets/dashboard/nuevo-cuestionario/nuevo-cuestionario.component';

@NgModule({ /*video 22*/ 
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CambiarPasswordComponent,
    CuestionariosComponent,
    NavbarComponent,
    LoadingComponent,
    NuevoCuestionarioComponent,
    PasoUnoComponent,
    PasoDosComponent,
  //  NuevoCuestionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,//copiamos el modulo que importamos
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
