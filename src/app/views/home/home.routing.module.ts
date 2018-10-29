import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ResultsComponent } from './results/results.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tindang', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
