import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/share/services/data.service';

export interface News {
  description:String;
  img:String;
  title:String;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  myNews:News ={
    description:'',
    img:'',
    title:''
  }

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

  saveNews(item:any){
    let data = {
      title: item.title,
      img: item.urlToImage,
      description: item.description
    }
    if(window.confirm("¿Desea guardar esta noticia?")){
      this.dataService.postData(data).subscribe()
    }

  }

}
