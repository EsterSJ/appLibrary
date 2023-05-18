import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  public loginForm: FormGroup;

  constructor (private formBuilder: FormBuilder){
    this.buildForm();
  }

  private buildForm (): void{
    
    const minLength: number = 8;

    this.loginForm = this.formBuilder.group({
      email: [,[Validators.required, Validators.email]],
      password: [,[Validators.required, Validators.minLength(minLength)]]
    });
  }

  public login(email: string):void{
    Swal.fire(
      'Hola ' + email,
      'Disfruta de nuestros libros',
      'success'
    )
  }
}
