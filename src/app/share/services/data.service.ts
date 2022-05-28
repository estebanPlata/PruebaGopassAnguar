import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  endPoint:string =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2c35bc09dcd64ebb8b8923e1d84dcf10`;

  constructor(private http: HttpClient) { }
  getNews(){
    return this.http.get(this.endPoint);
  }
}
