import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/share/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  dataNews:any;
  userAuthor:any;
  page =1;
  totalNews:any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.dataService.getNews().subscribe((res)=>{
      Object.entries(res).forEach(([key, value])=>{
      this.dataNews = value;
      this.totalNews = this.dataNews.length;
      /* console.log(this.dataNews.length, typeof(this.dataNews.length)) */
    });
  })}
}
