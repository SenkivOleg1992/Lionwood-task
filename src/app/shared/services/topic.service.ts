import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ITopic } from '../interfaces/topics.interface';


@Injectable({
  providedIn: 'root'
})

export class TopicService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/topics'
  }

  getTopic(): Observable<Array<ITopic>> {
    return this.http.get<Array<ITopic>>(this.url)
  }
  
}
