import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Imoviedetails } from './home/interface/Imoviedetails';


@Injectable()
export class SearchService {

  urlid ='http://www.omdbapi.com/?t=Harry+potter&apikey=a8b2149e';

  constructor(private httpClient: HttpClient) { }

  getMovie(): Observable<any> {
    return this.httpClient.get(this.urlid);
  }
}