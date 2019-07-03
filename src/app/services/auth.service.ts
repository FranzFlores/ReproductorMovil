import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from  'rxjs/operators';
import { Storage } from  '@ionic/storage';
import { EnvService } from './env.service';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  token:any;

  constructor(
    private  http:  HttpClient, 
    private  storage:  Storage,
    private env: EnvService
    ) { }

    login(email: String,password:String) {
      return this.http.post(`${this.env.API_URL}/login`, {email:email,password:password})
      .pipe(
        tap(token=>{
          this.storage.set("token", token)
          .then(
          ()=>{
            console.log("token guardado");
          },
          error => console.error("Error al guardar",error)
          );
          this.token= token;
          this.isLoggedIn = true;
          return token;
        })
      );
    }

    logout() {
      const headers = new HttpHeaders({
        'Authorization': this.token["token_type"]+" "+this.token["access_token"]
      });
      return this.http.get(this.env.API_URL + '/logout', { headers: headers })
      .pipe(
        tap(data => {
          this.storage.remove("token")
          .then(
            ()=>{
              console.log("token eliminado");
            },
            error => console.error("Error al guardar",error)
            );
          this.isLoggedIn = false;
          delete this.token;
          return data;
        })
      )
    }
}
