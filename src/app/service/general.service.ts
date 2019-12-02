import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private baseURL = "http://localhost:9091/"

  constructor(public http:HttpClient) {}
   
  get(url){
    return this.http.get(this.baseURL+url);
  }
}
