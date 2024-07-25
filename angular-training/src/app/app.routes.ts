import { Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterProductFormComponent } from './home/register-product-form/register-product-form.component';
import { loggedInGuard } from './guards/logged-in.guard';
import { loggedOutGuard } from './guards/logged-out.guard';

export const routes: Routes = [
  {path:'',component:LoginFormComponent,canActivate:[loggedInGuard]},
  {path: 'login', component:LoginFormComponent,canActivate:[loggedInGuard]},
  {path: 'register',component: RegisterFormComponent,canActivate:[loggedInGuard]},
  {path: 'home',component:HomeComponent,canActivate:[loggedOutGuard]}
];

// {path: 'home',component:HomeComponent,canActivate:[loggedOutGuard]}
