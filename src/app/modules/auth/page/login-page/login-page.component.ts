import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private asServiceAuth:AuthService){

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
    this.asServiceAuth.sendCredentials(email,password)
  }
}
