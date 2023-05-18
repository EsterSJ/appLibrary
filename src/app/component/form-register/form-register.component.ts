import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  public registerForm: FormGroup;

  constructor (private formBuilder: FormBuilder){
    this.buildForm();
  }

  private buildForm (): void{
    
    const minLength: number = 8;

    this.registerForm = this.formBuilder.group({
      name: [,Validators.required],
      last_name: [,Validators.required],
      email: [,[Validators.required, Validators.email]],
      password: [,[Validators.required, Validators.minLength(minLength)]]
    });
  }

  public register():void{
    Swal.fire(
      'Usuario registrado',
      '¡Gracias por formar parte de nuestra libreria!',
      'success'
    )
  }
}
