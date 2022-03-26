import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { recipe } from './home/model/recipe';
@Injectable({
  providedIn: 'root'
})
export class DaaService {
  path : string = "./assets/json/data.json";
  constructor(private http: HttpClient) { }


  public getData():any {
    return this.http.get<recipe[]>(this.path);
}






}
