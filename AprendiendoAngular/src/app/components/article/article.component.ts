import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service'
import { Article} from '../../models/article'
import { Router, Params, ActivatedRoute} from '@angular/router';
import { Global } from 'src/app/services/global';
 
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public article:Article;
  public url : string;
  

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(    
        response => {
          if(response.article){
            this.article = response.article;
          }else{
            this._router.navigate(['/home']);
          }
        }

      );

    });
    
  }

}
