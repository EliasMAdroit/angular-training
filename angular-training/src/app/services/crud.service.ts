import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MealProd } from '../interfaces/meal-prod';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = "http://127.0.0.1:3000/api/meal-prods";
  private token = "?access_token=" +localStorage.getItem('token');

  constructor(private http: HttpClient) { 
    this.http = http;
  }

  get(filter:string):Observable<MealProd[]>{
    if(filter){
      const token2 = "&access_token=" +localStorage.getItem('token');
      return this.http.get<MealProd[]>(this.apiUrl + "?filter={"+filter+"}" + token2);
    }
    return this.http.get<MealProd[]>(this.apiUrl + this.token);
   
  }

  getCountProducts(){
    return this.http.get<any>(this.apiUrl+"/count"+ this.token);
  }

  getForId(id:string):Observable<MealProd>{
    return this.http.get<MealProd>(this.apiUrl+"/"+id + this.token);
  }

  insert(props:{name:string,description:string,price:number}): Observable<MealProd>{
    return this.http.post<MealProd>(this.apiUrl + this.token,props);
  }

  update(props:{name:string,description:string,price:number}): Observable<MealProd>{
    return this.http.put<MealProd>(this.apiUrl + this.token,props);
  }
  
  delete(id:string): Observable<any>{
    return this.http.delete<string>(this.apiUrl + "/" + id + this.token);
  }

}
