import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { PostsRoutingModule } from './posts.routing.module';

//component
import { DetailComponent } from './detail/detail.component';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PostsRoutingModule
  ],
  providers: [],
  declarations: [PostsComponent, DetailComponent]
})
export class PostsModule { }
