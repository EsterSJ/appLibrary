import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @ViewChild('modificado') cambios: ElementRef;
  @ViewChild('no_modificado') no_cambios: ElementRef;

  public perfil: User;

  constructor(private renderer2: Renderer2){
    this.perfil = new User(1234,"Ester","Sánchez Jiménez","ester_s@hotmail.com","assets/img/avatar.png","1234");
  }

  public modificar_datos(name: string, last_name: string, email: string, photo: string){  
      
    let datos_modificados: boolean = false;

      if (name != ''){
        this.perfil.name = name;
        datos_modificados = true;
      }
      if (last_name != ''){
        this.perfil.last_name = last_name;
        datos_modificados = true;
      }
      if (email != ''){
        this.perfil.email = email;
        datos_modificados = true;
      }
      if (photo != ''){
        this.perfil.photo = photo;
        datos_modificados = true;
      }

      const change = this.cambios.nativeElement;
      const noChange = this.no_cambios.nativeElement;
      if (datos_modificados){
        this.renderer2.addClass(change, 'modificar_datos');
        this.renderer2.removeClass(change, 'ocultar'); 
      }
      else{
        this.renderer2.addClass(noChange, 'no_modificar_datos');
        this.renderer2.removeClass(noChange, 'ocultar'); 
      }
  }
}
