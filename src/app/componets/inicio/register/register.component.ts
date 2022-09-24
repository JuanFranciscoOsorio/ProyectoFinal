import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  registrarUsuario(): void {
    console.log(this.register)

  }

}
