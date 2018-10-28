import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
//slides
  slides = [
    {img: "/assets/images/fp-1.jpg"},
    {img: "/assets/images/fp-3.jpg"},
    {img: "/assets/images/fp-4.jpg"},
    {img: "/assets/images/fp-5.jpg"},
    {img: "/assets/images/fp-4.jpg"},
  ];
  slideConfig = {
    slidesToShow: 4, 
    slidesToScroll: 4 ,
    autoplay: true,
    dots: true,
    responsive: [
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

  

  constructor() { }

  ngOnInit() {
    console.log('home');
  }
 
  
  
}
