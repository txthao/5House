import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ResultsComponent } from './results/results.component';
import { HomeService } from '../../shared/services/home.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HomeRoutingModule,
    SlickCarouselModule,
  ],
  providers: [HomeService],
  declarations: [HomeComponent, ResultsComponent]
})
export class HomeModule { }