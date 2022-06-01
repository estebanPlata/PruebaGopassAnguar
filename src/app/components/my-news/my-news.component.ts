import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/share/services/data.service';
import { INews } from 'src/app/share/interface/news.interface';

@Component({
  selector: 'app-my-news',
  templateUrl: './my-news.component.html',
  styleUrls: ['./my-news.component.scss']
})
export class MyNewsComponent implements OnInit {

 /*  dataNews:INews[]=[]; */

  dataMyNews:any;
  userAuthor:any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getMyNews();
  }

  getMyNews(){
    this.dataService.getMyNwes().subscribe((res)=>{
      this.dataMyNews = res;
    })
  }
  deleteState(item:any){
    if(window.confirm("¿Seguro quiere eliminar esta noticia?")){
      this.dataService.deleteNews(item).subscribe(()=>{
        this.getMyNews();
      })
    }
  }
}
