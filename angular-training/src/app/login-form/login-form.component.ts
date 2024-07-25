import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, ReactiveFormsModule,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  credentials : FormGroup ;

  constructor(
    private auth: AuthService, 
    private fb: FormBuilder,
    private rt: Router
  ){
    this.auth = auth;
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  login(){
    const a =this.auth.login(this.credentials.value).subscribe(data => {
       localStorage.setItem("token",data.id);
       console.log(data.id)
       if(data.id){
          this.rt.navigate(['/home']);
       }
    })
    
    return a;
  }
}
