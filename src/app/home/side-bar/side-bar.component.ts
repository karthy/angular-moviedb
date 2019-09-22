import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  movieDetail: []

  constructor(private _searchservice: SearchService) { }

  ngOnInit() {
   
      this._searchservice.getMovie()
      .subscribe(data => this.movieDetail = data);
    
  }

}