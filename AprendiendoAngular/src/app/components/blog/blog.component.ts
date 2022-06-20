import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article} from '../../models/article';
import { Global} from  '../../services/global';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {
  public articles: Article[];
  public url:string;

  constructor(
    private _articleService: ArticleService
  ) {
    this.url = Global.url;
   }
/*
  ngOnInit() {
    this._articleService.getArticles().subscribe({
      next: response => console.log(response),
      error: error => console.log("error",error),
      });
  }



}*/
ngOnInit() {
  this._articleService.getArticles().subscribe({
    next: response => this.articles = response.articles,
    error: error => console.log("error",error),
    });
}

}
