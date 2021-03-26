import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { TopicService } from 'src/app/shared/services/topic.service';

import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ITopic } from 'src/app/shared/interfaces/topics.interface';
import { Article } from 'src/app/shared/models/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  

  topicsCategory: Array<ITopic> = [];
  arrArticles: Array<IArticle> = [];

  articleTopic!: ITopic;
  articleTitle!: string;
  articleDetails!: string;
  articleMoreDetails!: string;
  articleImage?: string;

  modalRef!: BsModalRef;

  constructor(
    private articlesServices: ArticlesService,
    private topicsServices: TopicService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getArticles();
    this.getTopics();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  private getArticles(): void {
    this.articlesServices.getArticles().subscribe((data) => {
      this.arrArticles = data;
      console.log('arrArticles:', this.arrArticles);
    });
  }

  private getTopics(): void {
    this.topicsServices.getTopic().subscribe((data) => {
      this.topicsCategory = data;
      console.log(this.topicsCategory);
    });
  }

  addArticle(): void {
    const article: IArticle = new Article(
      1,
      this.articleTopic,
      this.articleTitle,
      this.articleDetails,
      this.articleMoreDetails,
      this.articleImage
    );
    console.log(this.articleTopic);
    if (this.arrArticles.length > 0) {
      article.id = this.arrArticles.slice(-1)[0].id + 1;
    }
    this.articlesServices.addArticles(article).subscribe(() => {
      this.getArticles();
    });
    this.resetForm();
  }



  resetForm(): void {
    this.articleTopic;
    this.articleTitle = '';
    this.articleImage = '';
    this.articleDetails = '';
    this.articleMoreDetails = '';
  }

}
