import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { SearchService } from '../../services/search.service';
import { Type } from '../../models/search/type';
import { Constants } from '../../config/constants';
import { Category } from '../../models/search/category';
import { District } from '../../models/search/district';
import { Street } from '../../models/search/street';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  rooms = [1, 2, 3, ">3"];

  //slider
  minView: number = 0;
  maxView: number = 1000;
  viewOptions: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number): string => {
      if (value == 1000)
        return value + '+';
      return value + '';
    },
  };
  //slider
  minPrice: number = 0;
  maxPrice: number;
  priceOptions: Options = {
    floor: 0,
    translate: (value: number): string => {
      if (value == this.priceOptions.ceil)
        return value + '+';
      return value.toString();
    },
  };
  types: Type[];
  selectedType = Constants.SELL_ID;

  selectedCategories;
  categories: Category[];

  directions: Category[];

  selectedProvince = 1;//HCM

  selectedDistrict;
  districts: District[];

  selectedStreet;
  streets: Street[];

  constructor(private searchService: SearchService) { }

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
}
