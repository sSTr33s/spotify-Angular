import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL=environment.api

  constructor(private HttpClient:HttpClient) { }

  sendCredentials(email: string, password: string){
    console.log("email: " + email + " password: " + password)
  }
}
