import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormGroup } from '@angular/forms';
import { Usuario} from '../../../models/usuario'; 
//nombre de la clase dentro de los parentesis
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading= false;
  login: FormGroup; 

  constructor(private fb: FormBuilder,private toastr: ToastrService, private router: Router ) {
    this.login = this.fb.group({
      usuario: ['',Validators.required],
      password: ['', Validators.required]

    });
}

  ngOnInit(): void {
  }

  log(): void{
    console.log(this.login)

    //creamos constante para que capture el usuario y password
const usuario: Usuario = {
  nombreUsuario: this.login.value.usuario,
  password:this.login.value.password

}

     this.loading = true;      
    setTimeout(() => {

      if (usuario.nombreUsuario === 'juan' && usuario.password === '1993') {
        this.login.reset();
        this.router.navigate(['/dashboard'])

      }
      else {
        this.toastr.error('Usuario o contraseña incorrecta', 'Error');
        this.login.reset();
      }
       this.loading = false;

    }, 300)


  console.log(usuario);
  }



}
