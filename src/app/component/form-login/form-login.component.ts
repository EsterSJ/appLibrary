import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  public loginForm: FormGroup;
  public user: User;

  constructor (private formBuilder: FormBuilder, public userService: UserService, public router: Router){
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
    let mail = email; 
    let password = this.loginForm.get('password').value;

    this.user = new User (null,null,null,mail,null,password);

    this.userService.loginUser(this.user).subscribe((data: User[])=>{
      if (data.length != 0){
        this.userService.logueado = true;
        this.userService.user = data[0];
        Swal.fire(
          'Bienvenid@ de nuevo ' + this.userService.user.name,
          'Disfruta de nuestros libros',
          'success'
        ).then(()=>{this.router.navigateByUrl('/books');})
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario no registrado',
        })
      }
      
    });
  }
}
