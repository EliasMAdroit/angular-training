import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, ReactiveFormsModule,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  credentials : FormGroup ;

  constructor(private auth: AuthService, private fb: FormBuilder){
    this.auth = auth;
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  register(){
    const a =this.auth.register(this.credentials.value).subscribe(data => {
      console.log(data.id)
      if(data.id){
         alert("User has been register correctly")
      }
   })
  }
}
