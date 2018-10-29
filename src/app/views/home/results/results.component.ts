import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../shared/services/search.service';
import { Search } from '../../../shared/models/search/search';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { Post } from '../../../shared/models/post/post';
import { Constants } from '../../../shared/config/constants';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private searchService: SearchService, private activedRoute: ActivatedRoute, private dataService:DataService) { }
  searchModel : Search;
  posts: Post[];
  ngOnInit() {
    this.dataService.searchModel.subscribe(value => {
      console.log(value);
      if(value){
        this.searchModel = value;
      }else{
        this.searchModel = new Search()
        this.searchModel.type_id = Constants.SELL_ID;
      }
     
      this.getPosts();
    });
   
  }

  getPosts(){
    console.log(this.searchModel);
    this.searchService.searchPosts(this.searchModel).subscribe(
      res => {
        if (res.success) {
          this.posts = res.data;
          console.log(res.data);
        }
      },
      err => {
        console.log(err);
      });
  }
}
