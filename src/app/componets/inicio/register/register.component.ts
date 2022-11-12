import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.register = this.fb.group({
      usuario: ['', Validators.required],
      password: ['',[Validators.required, Validators.minLength(4)]],
      confirmPassword:['']
    },{ validators: this.checkPassword } );
  }
  ngOnInit(): void {
  }

  registrarUsuario(): void {
    console.log(this.register)

  }

  checkPassword(group: FormGroup): any  {

    //creo una constante password
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['confirmPassword'].value;
    return pass === confirmPass ? null : {notSame: true}

  }

}
