import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  endPoint:string ='';

  constructor(private http: HttpClient) { }
}
