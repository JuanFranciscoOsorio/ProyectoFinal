import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componets/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './componets/inicio/login/login.component';
import { RegisterComponent } from './componets/inicio/register/register.component';

const routes: Routes = [
{path: '', redirectTo: '/bienvenidos',pathMatch: 'full'}, /* para que cuando coloquemos la url incompleta nos
reidreccione a la pagina principal*/ 
{path: 'bienvenidos', component: BienvenidaComponent},
{path: 'login', component: LoginComponent },
{path: 'register', component: RegisterComponent},
/*para que cuando se coloque una direccion inexistente nos envie a la pagina principal 
   tiene que ir de ultimo esta linea*/ 
{path: '**', redirectTo: '/bienvenidos',pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
