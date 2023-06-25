import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:3000';
  public logueado: boolean;
  public user: User;


  constructor(private http: HttpClient) {
    this.logueado = false;
   }

   //registro de nuevo usuario
   public registerUser (user: User){
      return this.http.post(this.url + "/register",user);
   }

   //login usuario registrado
   public loginUser (user:User){
    return this.http.post(this.url + "/login",user);
   }
}
