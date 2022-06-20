import { Component, OnInit } from '@angular/core';
import { Article} from '../../models/article'
import { Router, Params, ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../services/article.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {
  public articles: Article[];

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) { }

  ngOnInit(){
    this._route.params.subscribe(params=>{
      var search = params['search'];
      
      this._articleService.search(search).subscribe({
        next: (response) =>{
          this.articles = response.articles;
          console.log(response);
        },
        error: (error) => {
          console.log(error);
          this._router.navigate(['/home']);
        },
        complete: () => console.info('complete') 
        
      });
    
    
    });
  }
  
}
