import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post/post';
import { HomeService } from '../../shared/services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
//slides
  // slides = [
  //   {img: "/assets/images/fp-1.jpg"},
  //   {img: "/assets/images/fp-3.jpg"},
  //   {img: "/assets/images/fp-4.jpg"},
  //   {img: "/assets/images/fp-5.jpg"},
  //   {img: "/assets/images/fp-4.jpg"},
  // ];
  slideConfig = {
    slidesToShow: 4, 
    slidesToScroll: 4 ,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 769,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ]
  };

  
  posts: Post[] = [];
  
  constructor(private homeService: HomeService) { }
  
  ngOnInit() {
    this.getProminentPosts();
  }

  getProminentPosts(){
    this.homeService.getProminentPosts().subscribe(
      res => {
        if (res.success) {
          this.posts = res.data;
          this.posts.map(p=> p.image = "/assets/images/fp-1.jpg");
        }
      },
      err => {
        console.log(err);
      });
  }
  
}
