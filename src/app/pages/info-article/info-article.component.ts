import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'app-info-article',
  templateUrl: './info-article.component.html',
  styleUrls: ['./info-article.component.scss'],
})
export class InfoArticleComponent implements OnInit {
  view!: IArticle;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.articlesService.getOneArticle(parseInt(id)).subscribe( data => {
      this.view = data;
      console.log(this.view)
      console.log(this.view.image)
    })
  }

  goBack(): void {
    this.location.back()
  }

}
