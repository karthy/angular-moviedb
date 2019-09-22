import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  newsDetail: []

  constructor(private _searchservice: SearchService) { }

  ngOnInit() {
   
      this._searchservice.getNews()
      .subscribe(data => {console.log(data);
      this.newsDetail = data['articles'];
      });
  }

}