import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ApiResult } from '../api-results/api-result';
//import { SpinService } from "./spin.service";

@Injectable()
export class HomeService extends APIService {
  private readonly homeApiPath = '/api/list_shop';

//   constructor(private http: HttpClient, private spintService: SpinService) {
//     super(http, spintService);
//   }

  constructor(private http: HttpClient) {
    super(http);
  }
//   public getHomeData() {
//     return super.apiGet<ApiResult>(this.homeApiPath);
//   }

//   public getShops(){
//     return super.apiGet<ApiResult>('/shop/all');
//   }
}
