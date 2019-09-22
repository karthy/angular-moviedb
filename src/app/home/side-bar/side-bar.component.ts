import { Component, OnInit } from '@angular/core';
import { NewsHeadlinesService } from './newsheadlines.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  newsArticles: []

  constructor(private _newsheadlinesservice: NewsHeadlinesService) { }

  ngOnInit() {
   
      this._newsheadlinesservice.getNewsHeadlines()
      .subscribe(data => {console.log(data);
      this.newsArticles = data['articles'];
      });
  }

}