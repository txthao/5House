import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';
import { SearchService } from '../../services/search.service';
import { Type } from '../../models/search/type';
import { Constants } from '../../config/constants';
import { Category } from '../../models/search/category';
import { District } from '../../models/search/district';
import { Street } from '../../models/search/street';
import { Utils } from '../../config/utils';
import { Search } from '../../models/search/search';
import { Router } from '@angular/router';
import { Post } from '../../models/post/post';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() posts = new EventEmitter();
  rooms = [1, 2, 3, ">3"];

  //Total Area
  minTotalArea: number = 0;
  maxTotalArea: number = 1000;
  TotalAreaOptions: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number): string => {
      if (value == 1000)
         return Utils.formatComma(value) + '+';
      return value.toString();
    },
  };
  //Price
  minPrice: number = 0;
  maxPrice: number;
  priceOptions: Options = {
    floor: 0,
    translate: (value: number): string => {
      if (value == this.priceOptions.ceil)
        return Utils.formatComma(value) + '+';
      return Utils.formatComma(value);
    },
  };
  types: Type[];
  selectedType = Constants.SELL_ID;

  selectedCategories;
  categories: Category[];

  directions: Category[];
  selectedDirections;

  selectedProvince = 1;//HCM

  selectedDistrict;
  districts: District[];

  selectedStreet;
  streets: Street[];

  title:string;

  constructor(private searchService: SearchService,  private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.getTypes();
    this.getCategories();
    this.getDirections();
    this.getDistricts();
    this.priceSetting(this.selectedType);
  }

  changeType(typeId: number) {
    this.selectedType = typeId;
    this.getCategories();
    this.priceSetting(this.selectedType);
  }

  priceSetting(typeId){
    this.minPrice = 0;
    if (typeId == Constants.SELL_ID) {
      this.priceOptions.ceil = Constants.SELL_MAX_PRICE;
      this.maxPrice = Constants.SELL_MAX_PRICE;
    }
    else if (typeId == Constants.RENT_ID) {
      this.priceOptions.ceil = Constants.RENT_MAX_PRICE;
      this.maxPrice = Constants.RENT_MAX_PRICE;
    } else {
      this.priceOptions.ceil = Constants.TRANSFER_MAX_PRICE;
      this.maxPrice = Constants.TRANSFER_MAX_PRICE;
    }
    this.priceOptions = Object.assign({}, this.priceOptions);

  }

  getTypes() {
    this.searchService.getTypes().subscribe(
      res => {
        if (res.success) {
          this.types = res.data;
        }
      },
      err => {
        console.log(err);
      });
  }

  getCategories() {
    this.selectedCategories = [];
    this.searchService.getCategories(this.selectedType).subscribe(
      res => {
        if (res.success) {
          this.categories = res.data;
        }
      },
      err => {
        console.log(err);
      });
  }

  getDirections() {
    this.searchService.getDirections().subscribe(
      res => {
        if (res.success) {
          this.directions = res.data;
          this.directions = this.directions.concat(Constants.ADDTIONAL_DIRECTIONS);
        }
      },
      err => {
        console.log(err);
      });
  }

  getDistricts() {
    this.selectedDistrict = null;
    this.searchService.getDitricts(this.selectedProvince).subscribe(
      res => {
        if (res.success) {
          this.districts = res.data;
          this.getStreets();
        }
      },
      err => {
        console.log(err);
      });
  }

  getStreets() {
    this.selectedStreet = null;
    this.searchService.getStreets(this.selectedProvince, this.selectedDistrict).subscribe(
      res => {
        if (res.success) {
          this.streets = res.data;
        }
      },
      err => {
        console.log(err);
      });
  }

 
  searchPosts(){
    let searchModel:Search = new Search();
    searchModel.type_id = this.selectedType;
    searchModel.categories = this.selectedCategories;
    searchModel.directions = this.selectedDirections;
    searchModel.province_id = this.selectedProvince;
    searchModel.district_id = this.selectedDistrict;
    searchModel.street_id = this.selectedStreet;  
    searchModel.total_area_from = this.minTotalArea;
    searchModel.total_area_to = this.maxTotalArea;
    searchModel.price_from = this.minPrice;
    searchModel.price_to = this.maxPrice;
    searchModel.title = this.title;
    this.dataService.searchModel.next(searchModel);
    this.router.navigate(['/tindang']);
    //this.router.navigate(['/tindang'], {queryParams: { searchModel:searchModel}, skipLocationChange: true }
    
  }
}
