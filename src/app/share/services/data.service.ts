import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { INews } from '../interface/news.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  endPoint:string =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2c35bc09dcd64ebb8b8923e1d84dcf10`;
  endPointMyNews:string=`http://localhost:4000/news`

  constructor(private http: HttpClient) { }
  getNews(){
    return this.http.get(this.endPoint);
  }
  getMyNwes(){
    return this.http.get(this.endPointMyNews);
  }
  postData(data: any) {
    return this.http.post(this.endPointMyNews, data);
  }
  deleteNews(data: any) {
    return this.http.delete(`${this.endPointMyNews}/${data._id}`);
  }

}
