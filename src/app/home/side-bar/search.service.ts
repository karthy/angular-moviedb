import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inewsdetails } from './Inewsdetails';


@Injectable()
export class SearchService {
  API_KEY = 'a34c349e20b0402283eab523cfd516a7';
  urlid ='https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY)';
  
  constructor(private httpClient: HttpClient) { }

  getNews(): Observable<any> {
    return this.httpClient.get(this.urlid);
  }
}