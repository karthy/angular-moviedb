import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewsHeadlinesService {
  API_KEY = 'a34c349e20b0402283eab523cfd516a7';  
  constructor(private httpClient: HttpClient) { }

  getNewsHeadlines(): Observable<any> {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=a34c349e20b0402283eab523cfd516a7');
  }
}