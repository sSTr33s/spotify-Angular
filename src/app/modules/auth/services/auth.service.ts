import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL=environment.api

  constructor(private HttpClient:HttpClient,private cookie:CookieService) { }

  sendCredentials(email: string, password: string):Observable<any> {
   // console.log("email: " + email + " password: " + password)
   const body={
    email,
    password
   }
   
    return this.HttpClient.post(`${this.URL}/auth/login`,body).pipe(
      tap((responseO:any)=>{
        this.cookie.set("token",responseO,4,'/');
        const {tokenSession,data}=responseO
        console.log("Sesión iniciada correctamente: ",tokenSession)
    }
        )
    )
}
}
