import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './componets/dashboard/cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './componets/dashboard/cuestionarios/cuestionarios.component';
import { NuevoCuestionarioComponent } from './componets/dashboard/cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoDosComponent } from './componets/dashboard/cuestionarios/nuevo-Cuestionario/paso-dos/paso-dos.component';
import { PasoUnoComponent } from './componets/dashboard/cuestionarios/nuevo-Cuestionario/paso-uno/paso-uno.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { BienvenidaComponent } from './componets/inicio/bienvenida/bienvenida.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { LoginComponent } from './componets/inicio/login/login.component';
import { RegisterComponent } from './componets/inicio/register/register.component';

const routes: Routes = [
{path: '', redirectTo: '/inicio',pathMatch: 'full'}, /* para que cuando coloquemos la url incompleta nos
reidreccione a la pagina principal*/ 
{path: 'inicio', component: InicioComponent, children: [
  {path: '', component: BienvenidaComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent}, 

]},

 {path: 'dashboard', component: DashboardComponent, children: [
  {path: '',component: CuestionariosComponent},
  {path: 'cambiarPassword', component: CambiarPasswordComponent},
  {path: 'nuevoCuestionario',component: NuevoCuestionarioComponent, children:[
    {path: 'pasoUno', component: PasoUnoComponent},
    {path: 'pasoDos', component: PasoDosComponent} ]}
 
 ]},
/*para que cuando se coloque una direccion inexistente nos envie a la pagina principal 
   tiene que ir de ultimo esta linea*/ 
{path: '**', redirectTo: '/inicio', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
