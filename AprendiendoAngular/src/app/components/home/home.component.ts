import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public title: string;
  public articles: Article[];

  constructor(
    private _articleService: ArticleService
  ) {
     this.title = "Ultimos articulos";
   }

  
    ngOnInit() {
      this._articleService.getArticles(true).subscribe({
        next: response => this.articles = response.articles,
        error: error => console.log("error",error),
        });
    }
  

}
