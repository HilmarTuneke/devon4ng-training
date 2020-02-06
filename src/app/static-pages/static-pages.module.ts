import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [PageNotFoundComponent, AboutComponent],
  imports: [
    CommonModule
  ]
})
export class StaticPagesModule { }
