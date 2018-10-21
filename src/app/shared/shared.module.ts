import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ResultsLayoutComponent } from './layouts/results-layout/results-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    HomeLayoutComponent, 
    ResultsLayoutComponent, 
    HeaderComponent, 
    FooterComponent
  ],
  exports: [
    HomeLayoutComponent, 
    ResultsLayoutComponent,
    FooterComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
