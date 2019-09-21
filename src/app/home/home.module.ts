import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SearchService } from './side-bar/search.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SideBarComponent],
  exports: [ SideBarComponent ],
  providers: [ SearchService ]
})
export class HomeModule { }