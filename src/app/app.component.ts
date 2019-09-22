import { Component } from '@angular/core';
import { SideBarComponent } from './home/side-bar/side-bar.component';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
