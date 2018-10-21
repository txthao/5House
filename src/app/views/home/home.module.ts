import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HomeRoutingModule,
    SlickCarouselModule,
    NgSelectModule,
    Ng5SliderModule,
    
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }