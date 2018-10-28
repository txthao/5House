import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgSelectModule } from '@ng-select/ng-select';
import { Ng5SliderModule } from 'ng5-slider';

import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgSelectModule,
    Ng5SliderModule,
  ],
  declarations: [
    HomeLayoutComponent, 
    HeaderComponent, 
    FooterComponent, 
    SearchComponent
  ],
  exports: [
    HomeLayoutComponent, 
    FooterComponent,
    HeaderComponent,
    SearchComponent
  ]
})
export class SharedModule { }
