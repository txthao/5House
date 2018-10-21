import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

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
    {img: "/assets/images/fp-5.jpg"}
  ];
  slideConfig = {
    slidesToShow: 3, 
    slidesToScroll: 3,
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

  //categories
  selectedCategories;
  categories =[
   
    {
      "id": 2,
      "name": "b",
      "parent_id": 1,
    },
    {
      "id": 3,
      "name": "c",
      "parent_id": 1,
    },
    {
      "id": 4,
      "name": "d",
      "parent_id": null,
    },
    {
      "id": 1,
      "name": "a",
      "parent_id": null,
    },
  ];
  
  // groupByFn = (item) => item.parent_id;
  // groupValueFn = (_: string, children: any[]) => (

  //    this.categories.find(parent => parent.id==children[0].parent_id).name )
  //   ;
 
  //
  districts = [
    {
      "id": 1,
      "name": "Quận 1",
    },
    {
      "id": 2,
      "name": "Quận 2",
    },
  ];

  streets = [
    {
      "id": 1,
      "name": "Trường Chinh",
    },
    {
      "id": 2,
      "name": "Đồng Đen",
    },
  ]

  rooms = [1,2,3,4,5];
  directions=[{
    "id": 1,
    "name": "Đông",
  },
  {
    "id": 2,
    "name": "Tây",
  },
  ];

  //slider
  minValue: number = 20;
  maxValue: number = 80;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  constructor() { }

  ngOnInit() {
    console.log('home');
  }
 
  
  
}
