import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NewsHeadlinesService } from './side-bar/newsheadlines.service';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule, MatCardModule
  ],
  declarations: [SideBarComponent],
  exports: [ SideBarComponent ],
  providers: [ NewsHeadlinesService ]
})
export class HomeModule { }