import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,catchError,throwError } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://127.0.0.1:3000/api/Users/login'; // Post
  private registerUrl = 'http://127.0.0.1:3000/api/Users/'; //Post
  public response: string = "";

  token = "";

  constructor(private http: HttpClient) { }

  login(credentials:{email: string, password:string}): Observable<User>{
    console.log(credentials)
    return this.http.post<User>(this.loginUrl,credentials).pipe(
      catchError((error) => this.handleError(error, 'Error al iniciar sesion'))
    );
  }

  logout(){
    return this.http.post<User>(this.loginUrl,localStorage.getItem('token'));
  }

  register(credentials:{email: string, password:string}): Observable<User>{
    return this.http.post<User>(this.registerUrl,credentials).pipe(
      catchError((error) => this.handleError(error, 'Error al agregar un nuevo elemento'))
    );
  }

  private handleError(error: any, message: string): Observable<never> {
    console.error(error);
    return throwError(message);
  }




}
