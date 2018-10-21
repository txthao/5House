import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './views/home/home.module';
import { PostsModule } from './views/posts/posts.module';

import { HomeLayoutComponent } from './shared/layouts/home-layout/home-layout.component';
import { ResultsLayoutComponent } from './shared/layouts/results-layout/results-layout.component';

const routes: Routes = [
  
  {
    path: '',
    component: HomeLayoutComponent,

    children: [
      { path: '', loadChildren: './views/home/home.module#HomeModule' },
    ],
    //pathMatch: 'full',

  },
  // {
  //   path: 'posts',
  //   component: ResultsLayoutComponent,
  //   children: [
  //     { path: '', loadChildren: './posts/posts.module#PostsModule' },
  //   ],
  // }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
