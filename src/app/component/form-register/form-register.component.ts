import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  public registerForm: FormGroup;
  public user: User;

  constructor (private formBuilder: FormBuilder, public userService: UserService, public router: Router){
    this.buildForm();
  }

  private buildForm (): void{
    
    const minLength: number = 8;

    this.registerForm = this.formBuilder.group({
      name: [,Validators.required],
      last_name: [,Validators.required],
      email: [,[Validators.required, Validators.email]],
      password: [,[Validators.required, Validators.minLength(minLength)]],
      repeatpassword: [,[Validators.required, Validators.minLength(minLength)]]
    });
  }

  public register():void{
    //datos del nuevo usuario
    let name = this.registerForm.get('name').value;
    let last_name = this.registerForm.get('last_name').value;
    let email = this.registerForm.get('email').value;
    let password = this.registerForm.get('password').value;
    let repeatpassword = this.registerForm.get('repeatpassword').value;

    //comprobamos que las contraseñas coinciden

    //si coinciden las contraseñas se registra un nuevo usuario
    if (password == repeatpassword){
      this.user = new User (null,name, last_name, email, null, password);
      this.userService.registerUser(this.user).subscribe(()=>{
        Swal.fire(
          'Usuario registrado',
          '¡Gracias por formar parte de nuestra libreria!',
          'success'
        )
      });
    }
    // si no coinciden las contraseñas se avisa al usuario por consola
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden',
      })
    }
  }
}
