import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {
cambiarPassword!: FormGroup;

  constructor(private fb: FormBuilder ) {

    this.cambiarPassword = this.fb.group({ 
      passwordAnterior: ['', Validators.required],
      nuevaPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']

    } ,{ validators: this.checkPassword } )
    //para confirmar que la nueva contrase;a y confirmar contrase;a sea la misma)

   }

  ngOnInit(): void {
     }

     checkPassword(group: FormGroup): any  {

      //creo una constante password
      const pass = group.controls['nuevaPassword'].value;
      const confirmPass = group.controls['confirmPassword'].value;
      return pass === confirmPass ? null : {notSame: true} 
  
    }

    guardarPassword(): void {
       console.log(this.cambiarPassword) 

    }

}
