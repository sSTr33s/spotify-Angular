import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  sessionError: boolean = false
  formLogin!: FormGroup

  constructor(private asServiceAuth:AuthService,private cookie:CookieService){
  }

  ngOnInit(): void {
      this.formLogin=new FormGroup({
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10)
        ])
      });
  }

  sendLogin(): void {
    //const body=this.formLogin.value
    //console.log(body)
    const {email,password}=this.formLogin.value
    this.asServiceAuth.sendCredentials(email,password).subscribe(
      responseOk=>{
        this.cookie.set("token",responseOk);
        const {tokenSession,data}=responseOk
        console.log("Sesión iniciada correctamente: ",responseOk)
      },err=>{
        this.sessionError=true
        console.log("Sesión no iniciada")
      }
      );
  }

  async sL():Promise<any>{
    try{
      const {email,password}=this.formLogin.value
      const responseOk= await firstValueFrom(this.asServiceAuth.sendCredentials(email,password))
      this.cookie.set("token-v2",responseOk)
      console.log("Sesión iniciada")  
    }catch(err){
      console.log("Sesión no iniciada bummm")
    }
    
  }
}
