import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { TopicService } from 'src/app/shared/services/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
})
export class TopicsComponent implements OnInit {

  articleTitle!: string;
  arrArt: Array<IArticle> = []

  constructor(
    private articleService: ArticlesService,
    private topicService: TopicService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const nameTopic = this.activateRoute.snapshot.paramMap.get('topic');
        this.getArticle(nameTopic)
         console.log(nameTopic)
      }
    });
  }

  ngOnInit(): void {
    this.getArticle()
  }

  private getArticle(nameTopic?: any): void {
    nameTopic = nameTopic || this.activateRoute.snapshot.paramMap.get('topic')
    this.articleService.getArticles().subscribe((data) => {
      this.arrArt = data.filter(
        (article) => article.topic.topicName === nameTopic
      );
      console.log(this.arrArt)
      this.articleTitle = this.arrArt[0].topic.topicName;
    });
  }
}
