import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle } from '../interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  arrArticles: Array<IArticle> = []

  private url: string;

  constructor(private http: HttpClient) { 
    this.url  = 'http://localhost:3000/articles'
  }

  getArticles(): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>(this.url)
  }

  addArticles(article: IArticle): Observable<Array<IArticle>>{
    return this.http.post<Array<IArticle>>(this.url, article)
  }

  updateArticles(article: IArticle): Observable<Array<IArticle>> {
    return this.http.put<Array<IArticle>>(`${this.url}/${article.id}`, article)
  }

  getOneArticle(id: number): Observable<IArticle> {
    return this.http.get<IArticle>(`${this.url}/${id}`)
  }

}

